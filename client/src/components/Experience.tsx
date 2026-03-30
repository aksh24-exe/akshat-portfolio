import React from 'react'
import { motion } from 'framer-motion'

const jobs = [
  {
    company: 'Learnyst',
    role: 'Backend Developer',
    period: 'NOV 2025 – Present',
    location: 'Bengaluru',
    borderColor: 'var(--indigo)',
    bullets: [
      <span>Optimized complex <strong>ActiveRecord queries</strong>, reducing API response time by <strong>25%</strong>.</span>,
      <span>Designed <strong>GraphQL APIs</strong> and implemented <strong>Sidekiq</strong> for asynchronous job processing.</span>,
      <span>Built efficient GraphQL resolvers using <strong>batching techniques</strong>, eliminating N+1 query issues.</span>,
    ] as React.ReactNode[],
  },
  {
    company: 'Ilumina Health',
    role: 'Backend Developer Intern',
    period: 'JUL – OCT 2025',
    location: 'Hyderabad',
    borderColor: 'var(--rose)',
    bullets: [
      <span>Built healthcare APIs using <strong>FastAPI</strong> and <strong>PostgreSQL</strong>, compliant with <strong>HL7 FHIR</strong> standards.</span>,
      <span>Contributed to testing infrastructure by writing <strong>pytest</strong> cases for CI/CD automation.</span>,
      <span>Automated regression testing with <strong>Cypress</strong>, reducing manual QA time by <strong>40%</strong>.</span>,
    ] as React.ReactNode[],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 2.5rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, var(--indigo), var(--rose))' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--indigo)', textTransform: 'uppercase' as const }}>Career</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>Work Experience</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{
                background: 'white', padding: 0, overflow: 'hidden',
                borderLeft: `3px solid ${job.borderColor}`,
              }}
            >
              <div style={{ padding: '2rem 2.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.7rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text)' }}>{job.company}</h3>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', background: '#f8fafc', border: '1px solid var(--border)', borderRadius: 100, padding: '0.3rem 0.85rem', color: 'var(--text2)', whiteSpace: 'nowrap' as const }}>{job.period}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
                  <span style={{ background: '#eef2ff', color: 'var(--indigo)', border: '1px solid #c7d2fe', borderRadius: 100, padding: '0.25rem 0.85rem', fontSize: '0.82rem', fontWeight: 500 }}>{job.role}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>📍 {job.location}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: 'flex', gap: '0.7rem', fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--indigo)', fontSize: '0.7rem', flexShrink: 0, marginTop: '0.35rem' }}>▶</span>
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
