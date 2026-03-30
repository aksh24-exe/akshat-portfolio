import { motion } from 'framer-motion'

const achievements = [
  {
    icon: '🏆',
    iconBg: '#fef9c3',
    title: 'VERSION25 Hackathon — NIT Trichy',
    desc: 'Participated in the prestigious NIT Trichy Hackathon, competing against top engineering students nationwide.',
  },
  {
    icon: '⭐',
    iconBg: '#fff7ed',
    title: 'HackerRank Certified',
    desc: 'JavaScript (Basic) certification on HackerRank, demonstrating strong programming fundamentals.',
  },
  {
    icon: '🔐',
    iconBg: '#eff6ff',
    title: 'Cisco Cybersecurity',
    desc: "Introduction to Cybersecurity Certification from Cisco — foundational knowledge in network security.",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '5rem 2.5rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, var(--indigo), var(--rose))' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--indigo)', textTransform: 'uppercase' as const }}>Highlights</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>Achievements & Certifications</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ background: 'white', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 10, background: a.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{a.icon}</div>
              <div>
                <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
