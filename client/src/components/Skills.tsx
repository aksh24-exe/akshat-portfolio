import { motion } from 'framer-motion'

const categories = [
  {
    icon: '🖥️',
    title: 'Languages',
    skills: [
      { name: 'JavaScript', dot: '#f59e0b' },
      { name: 'Python', dot: '#3b82f6' },
      { name: 'Ruby', dot: '#ef4444' },
      { name: 'Java', dot: '#f97316' },
      { name: 'C++', dot: '#6366f1' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Frameworks',
    skills: [
      { name: 'Express.js', dot: '#6b7280' },
      { name: 'Ruby on Rails', dot: '#ef4444' },
      { name: 'FastAPI', dot: '#14b8a6' },
    ],
  },
  {
    icon: '💾',
    title: 'Databases',
    skills: [
      { name: 'MongoDB', dot: '#22c55e' },
      { name: 'PostgreSQL', dot: '#3b82f6' },
      { name: 'MySQL', dot: '#2563eb' },
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools & APIs',
    skills: [
      { name: 'GraphQL', dot: '#ec4899' },
      { name: 'Git', dot: '#f97316' },
      { name: 'GitHub', dot: '#374151' },
      { name: 'Postman', dot: '#f97316' },
      { name: 'Prisma', dot: '#6366f1' },
      { name: 'Sidekiq', dot: '#ef4444' },
    ],
  },
]

const allSkills = [
  { name: 'JavaScript', dot: '#f59e0b' }, { name: 'Ruby', dot: '#ef4444' },
  { name: 'Python', dot: '#3b82f6' }, { name: 'GraphQL', dot: '#ec4899' },
  { name: 'MongoDB', dot: '#22c55e' }, { name: 'PostgreSQL', dot: '#3b82f6' },
  { name: 'MySQL', dot: '#2563eb' }, { name: 'FastAPI', dot: '#14b8a6' },
  { name: 'Rails', dot: '#ef4444' }, { name: 'Node.js', dot: '#16a34a' },
  { name: 'Git', dot: '#f97316' }, { name: 'Sidekiq', dot: '#ef4444' },
  { name: 'Cypress', dot: '#22c55e' }, { name: 'Prisma', dot: '#6366f1' },
  { name: 'Postman', dot: '#f97316' }, { name: 'JWT', dot: '#f59e0b' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 2.5rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, var(--indigo), var(--rose))' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--indigo)', textTransform: 'uppercase' as const }}>Tech Stack</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>Skills & Technologies</h2>
        </motion.div>

        {/* Category grid: 3 top columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem', marginBottom: '1.2rem' }}>
          {categories.slice(0, 3).map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="card" style={{ background: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>{cat.icon}</div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text)', textTransform: 'uppercase' as const }}>{cat.title}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {cat.skills.map((s) => (
                  <div key={s.name} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: '0.4rem 0.8rem', fontSize: '0.88rem', color: 'var(--text2)', width: 'fit-content' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />
                    {s.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} viewport={{ once: true }} className="card" style={{ background: 'white', marginBottom: '1.2rem', maxWidth: 420 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🛠️</div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text)', textTransform: 'uppercase' as const }}>Tools & APIs</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories[3].skills.map((s) => (
              <div key={s.name} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: '0.4rem 0.8rem', fontSize: '0.88rem', color: 'var(--text2)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />
                {s.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* All-skills cloud card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="card" style={{ background: 'white' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {allSkills.map((s) => (
              <span key={s.name} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'white', border: '1px solid var(--border)', borderRadius: 100, padding: '0.3rem 0.9rem', fontSize: '0.85rem', color: 'var(--text2)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
