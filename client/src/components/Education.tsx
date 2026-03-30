import { motion } from 'framer-motion'

const education = [
  {
    institution: 'Jagan Institute of Management Studies',
    degree: 'Master of Computer Application',
    location: 'New Delhi',
    period: 'Aug 2024 – Present',
    grade: 'CGPA 8.4',
    gradeBg: '#dcfce7',
    gradeColor: '#15803d',
  },
  {
    institution: 'University Commerce College',
    degree: 'Bachelor of Computer Application',
    location: 'Jaipur',
    period: 'July 2020 – Aug 2023',
    grade: '68%',
    gradeBg: '#dbeafe',
    gradeColor: '#1d4ed8',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '5rem 2.5rem' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, var(--indigo), var(--rose))' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--indigo)', textTransform: 'uppercase' as const }}>Academic Background</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>Education</h2>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 11, top: 12, bottom: 12, width: 2, background: 'linear-gradient(180deg, var(--indigo), #c7d2fe)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ position: 'relative', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}
              >
                {/* Circle dot */}
                <div style={{
                  position: 'absolute', left: -32, top: 18,
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'white', border: '2px solid var(--indigo)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--indigo)' }} />
                </div>

                <div className="card" style={{ background: 'white', flex: 1 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.3rem' }}>{edu.institution}</h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--indigo)', fontWeight: 500, marginBottom: '0.7rem' }}>{edu.degree}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>📍 {edu.location}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>{edu.period}</span>
                    <span style={{ background: edu.gradeBg, color: edu.gradeColor, fontSize: '0.82rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 100 }}>{edu.grade}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
