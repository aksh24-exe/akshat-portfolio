import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Languages',
    color: 'var(--indigo)',
    skills: [
      { name: 'JavaScript', bg: '#eef2ff', color: '#4f46e5' },
      { name: 'TypeScript', bg: '#eff6ff', color: '#2563eb' },
      { name: 'Python', bg: '#f0fdf4', color: '#16a34a' },
      { name: 'Ruby', bg: '#fff1f2', color: '#e11d48' },
      { name: 'SQL', bg: '#fff7ed', color: '#ea580c' },
      { name: 'Java', bg: '#fef9c3', color: '#ca8a04' },
    ],
  },
  {
    title: 'Frameworks',
    color: 'var(--rose)',
    skills: [
      { name: 'Node.js', bg: '#f0fdf4', color: '#16a34a' },
      { name: 'Express.js', bg: '#f1f5f9', color: '#475569' },
      { name: 'Ruby on Rails', bg: '#fff1f2', color: '#e11d48' },
      { name: 'FastAPI', bg: '#ecfdf5', color: '#059669' },
      { name: 'GraphQL', bg: '#fdf4ff', color: '#9333ea' },
    ],
  },
  {
    title: 'Databases',
    color: 'var(--sky)',
    skills: [
      { name: 'MongoDB', bg: '#f0fdf4', color: '#16a34a' },
      { name: 'PostgreSQL', bg: '#eff6ff', color: '#2563eb' },
      { name: 'MySQL', bg: '#fff7ed', color: '#ea580c' },
      { name: 'Redis', bg: '#fff1f2', color: '#e11d48' },
      { name: 'Prisma', bg: '#f1f5f9', color: '#475569' },
    ],
  },
  {
    title: 'Tools & APIs',
    color: 'var(--amber)',
    skills: [
      { name: 'Docker', bg: '#eff6ff', color: '#2563eb' },
      { name: 'AWS', bg: '#fff7ed', color: '#ea580c' },
      { name: 'Git', bg: '#fff1f2', color: '#e11d48' },
      { name: 'GitHub', bg: '#f1f5f9', color: '#475569' },
      { name: 'Postman', bg: '#fff7ed', color: '#ea580c' },
      { name: 'Sidekiq', bg: '#fdf4ff', color: '#9333ea' },
      { name: 'Cypress', bg: '#ecfdf5', color: '#059669' },
      { name: 'JWT', bg: '#fef9c3', color: '#ca8a04' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg2)', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc">Tools and technologies I use to build backend systems.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card"
              style={{ background: 'white' }}
            >
              <div style={{
                fontSize: '1rem', fontWeight: 700, marginBottom: '1rem',
                background: `linear-gradient(135deg, ${cat.color}, var(--indigo-d))`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{cat.title}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    style={{
                      fontSize: '0.8rem', fontWeight: 500, fontFamily: 'JetBrains Mono, monospace',
                      background: s.bg, color: s.color,
                      padding: '0.28rem 0.75rem', borderRadius: 8,
                      transition: 'transform 0.15s',
                      cursor: 'default',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >{s.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
