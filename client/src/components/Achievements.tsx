import { motion } from 'framer-motion'

const achievements = [
  {
    icon: '🏆',
    iconBg: '#fef9c3',
    title: 'VERSION25 Hackathon',
    desc: 'Participated in VERSION25, building an innovative tech solution in 24 hours.',
    tag: 'Hackathon',
    tagBg: '#fef9c3', tagColor: '#ca8a04',
  },
  {
    icon: '⭐',
    iconBg: '#fff7ed',
    title: 'HackerRank JavaScript Certified',
    desc: 'Earned HackerRank JavaScript (Basic) certification, demonstrating proficiency in JS.',
    tag: 'Certification',
    tagBg: '#eff6ff', tagColor: '#2563eb',
  },
  {
    icon: '🔐',
    iconBg: '#eff6ff',
    title: 'Cisco Cybersecurity Essentials',
    desc: "Completed Cisco's Cybersecurity Essentials course covering network security fundamentals.",
    tag: 'Certification',
    tagBg: '#eff6ff', tagColor: '#2563eb',
  },
  {
    icon: '🚀',
    iconBg: '#f0fdf4',
    title: 'Smart India Hackathon 2022',
    desc: "Participated in SIH 2022, one of India's largest student hackathons.",
    tag: 'Hackathon',
    tagBg: '#fef9c3', tagColor: '#ca8a04',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: 'var(--bg2)', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="section-label">Recognition</div>
          <h2 className="section-title">Achievements</h2>
          <p className="section-desc">Certifications and hackathons that shaped my growth.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', background: 'white' }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 12, background: a.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                {a.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem' }}>{a.title}</h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--muted)', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
              <span style={{ background: a.tagBg, color: a.tagColor, fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.7rem', borderRadius: 100, alignSelf: 'flex-start' }}>
                {a.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
