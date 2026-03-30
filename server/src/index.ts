import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import apiRouter from './routes/index';
import { errorHandler, AppError } from './middleware/errorHandler';

const app = express();

// ---------------------------------------------------------------------------
// Security & utility middleware
// ---------------------------------------------------------------------------
app.use(helmet());

const allowedOrigins = [
  process.env['CLIENT_URL'] ?? 'http://localhost:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. curl, Postman, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS policy: origin '${origin}' not allowed`));
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(morgan(process.env['NODE_ENV'] === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------------------------------
// Health check
// ---------------------------------------------------------------------------
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// ---------------------------------------------------------------------------
// API routes
// ---------------------------------------------------------------------------
app.use('/api', apiRouter);

// ---------------------------------------------------------------------------
// 404 handler – catches any unmatched route
// ---------------------------------------------------------------------------
app.use((_req: Request, _res: Response, next: NextFunction) => {
  const err: AppError = new Error('Route not found');
  err.statusCode = 404;
  err.status = 'fail';
  next(err);
});

// ---------------------------------------------------------------------------
// Global error handler
// ---------------------------------------------------------------------------
app.use(errorHandler);

// ---------------------------------------------------------------------------
// MongoDB connection + server bootstrap
// ---------------------------------------------------------------------------
const PORT = parseInt(process.env['PORT'] ?? '5000', 10);
const MONGODB_URI = process.env['MONGODB_URI'] ?? 'mongodb://localhost:27017/akshat-portfolio';

const startServer = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running in ${process.env['NODE_ENV'] ?? 'development'} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

// Graceful shutdown
const shutdown = async (signal: string): Promise<void> => {
  console.log(`\nReceived ${signal}. Shutting down gracefully…`);
  await mongoose.connection.close();
  console.log('MongoDB connection closed.');
  process.exit(0);
};

process.on('SIGINT', () => void shutdown('SIGINT'));
process.on('SIGTERM', () => void shutdown('SIGTERM'));

void startServer();

export default app;
