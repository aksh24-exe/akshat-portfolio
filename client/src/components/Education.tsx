import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Jagan Institute of Management Studies',
    location: 'New Delhi, India',
    period: 'Aug 2024 – Present',
    grade: '8.4 CGPA',
    gradeColor: '#ecfdf5',
    gradeText: '#065f46',
    color: 'var(--indigo)',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University Commerce College',
    location: 'Jaipur, India',
    period: 'Jul 2020 – Aug 2023',
    grade: '68%',
    gradeColor: '#eff6ff',
    gradeText: '#1d4ed8',
    color: 'var(--sky)',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="section-label">Academic</div>
        <h2 className="section-title">Education</h2>
        <p className="section-desc">My academic background and qualifications.</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: 27, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, var(--indigo), var(--sky))', opacity: 0.2 }} />

        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
          >
            {/* Dot */}
            <div style={{
              width: 56, height: 56, borderRadius: '50%', background: 'white',
              border: `2px solid ${edu.color === 'var(--indigo)' ? '#c7d2fe' : '#bae6fd'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, fontSize: '1.4rem', zIndex: 1,
            }}>🎓</div>

            <div className="card" style={{ flex: 1, background: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.3rem' }}>{edu.institution}</h3>
                  <div style={{ fontSize: '0.88rem', color: edu.color === 'var(--indigo)' ? 'var(--indigo)' : 'var(--sky)', fontWeight: 500 }}>{edu.degree}</div>
                </div>
                <span style={{ background: edu.gradeColor, color: edu.gradeText, fontSize: '0.82rem', fontWeight: 700, padding: '0.3rem 0.8rem', borderRadius: 100 }}>
                  {edu.grade}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>{edu.period}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>📍 {edu.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
