import { Router, Request, Response, NextFunction } from 'express';
import Contact from '../models/Contact';
import { createError } from '../middleware/errorHandler';

const router = Router();

// POST /api/contact - Submit a contact message
router.post('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, message } = req.body as {
      name?: unknown;
      email?: unknown;
      message?: unknown;
    };

    // Manual validation
    const missingFields: string[] = [];
    if (!name || typeof name !== 'string' || name.trim() === '') missingFields.push('name');
    if (!email || typeof email !== 'string' || email.trim() === '') missingFields.push('email');
    if (!message || typeof message !== 'string' || message.trim() === '') missingFields.push('message');

    if (missingFields.length > 0) {
      return next(createError(`Missing required fields: ${missingFields.join(', ')}`, 400));
    }

    // Basic email format check
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test((email as string).trim())) {
      return next(createError('Please provide a valid email address', 400));
    }

    const contact = new Contact({
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      message: (message as string).trim(),
    });

    const savedContact = await contact.save();

    res.status(201).json({
      status: 'success',
      data: savedContact,
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/contact - Retrieve all contact submissions (admin use)
router.get('/', async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      status: 'success',
      results: contacts.length,
      data: contacts,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
