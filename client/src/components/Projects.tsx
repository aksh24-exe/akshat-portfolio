import { motion } from 'framer-motion'

const projects = [
  {
    icon: '🏠',
    iconBg: 'linear-gradient(135deg, var(--indigo), var(--sky))',
    title: 'RoomBuddy',
    subtitle: 'Student Housing & Roommate Matching',
    desc: 'A platform connecting students with compatible roommates and affordable housing near universities. Features smart matching algorithms, real-time chat, and listing management.',
    tech: ['Node.js', 'MongoDB', 'React', 'Socket.io', 'Express'],
    github: '#',
    live: '#',
  },
  {
    icon: '📊',
    iconBg: 'linear-gradient(135deg, var(--rose), var(--amber))',
    title: 'API Gateway Service',
    subtitle: 'Microservices API Management',
    desc: 'A centralized API gateway handling authentication, rate limiting, and request routing for microservices. Supports dynamic route configuration and real-time monitoring.',
    tech: ['Node.js', 'Redis', 'Docker', 'PostgreSQL', 'JWT'],
    github: '#',
    live: '#',
  },
  {
    icon: '🔐',
    iconBg: 'linear-gradient(135deg, var(--emerald), var(--sky))',
    title: 'Auth Service',
    subtitle: 'Multi-tenant Authentication',
    desc: 'A comprehensive authentication service supporting OAuth2, JWT, and multi-factor authentication. Built with Node.js and designed for high availability.',
    tech: ['Node.js', 'PostgreSQL', 'OAuth2', 'Redis', 'TypeScript'],
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">Things I've built and problems I've solved.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div style={{ width: 50, height: 50, borderRadius: 14, background: p.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
              {p.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>{p.title}</h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{p.subtitle}</div>
            </div>
            <p style={{ fontSize: '0.93rem', color: 'var(--text2)', lineHeight: 1.6, flexGrow: 1 }}>{p.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
              <a href={p.github} style={{ fontSize: '0.85rem', color: 'var(--indigo)', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                ↗ GitHub
              </a>
              <a href={p.live} style={{ fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                🔗 Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
