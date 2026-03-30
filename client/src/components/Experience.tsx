import { motion } from 'framer-motion'

const jobs = [
  {
    company: 'Learnyst',
    role: 'Backend Developer',
    period: 'Nov 2025 – Present',
    location: 'Bengaluru, India',
    color: 'linear-gradient(90deg, var(--indigo), var(--sky))',
    bullets: [
      'Built and maintained RESTful APIs using Node.js and Express.js serving 50k+ users',
      'Optimized MongoDB queries and indexing, reducing API response times by 25%',
      'Implemented JWT authentication and OAuth2 for secure user sessions',
      'Developed microservices architecture using Docker and AWS',
      'Integrated Sidekiq for background job processing and email workflows',
    ],
  },
  {
    company: 'Ilumina Health',
    role: 'Backend Developer Intern',
    period: 'Jul 2025 – Oct 2025',
    location: 'Hyderabad, India (Remote)',
    color: 'linear-gradient(90deg, var(--rose), var(--amber))',
    bullets: [
      'Built FastAPI endpoints for health data collection and processing',
      'Integrated third-party health monitoring APIs and wearable device SDKs',
      'Wrote comprehensive test suites with Pytest achieving 85% coverage',
      'Reduced manual QA effort by 40% through automated testing pipelines',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg2)', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="section-label">Career</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">Building production systems and learning from real-world challenges.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ background: 'white', padding: 0, overflow: 'hidden' }}
            >
              {/* Top gradient bar */}
              <div style={{ height: 3, background: job.color }} />
              <div style={{ padding: '2.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem' }}>{job.company}</h3>
                    <span className="tag">{job.role}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace', marginBottom: '0.2rem' }}>{job.period}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>📍 {job.location}</div>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {job.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.93rem', color: 'var(--text2)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--indigo)', flexShrink: 0, marginTop: '0.1rem' }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
