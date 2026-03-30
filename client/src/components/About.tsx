import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 25, suffix: '%', label: 'API Response Time Reduced' },
  { value: 40, suffix: '%', label: 'Manual QA Time Saved' },
  { value: 6, suffix: 'mo', label: 'Professional Experience' },
  { value: 8.4, suffix: '', label: 'MCA CGPA', decimal: true },
]

function Counter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          setCount(parseFloat((ease * target).toFixed(decimal ? 1 : 0)))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, decimal])

  return <span ref={ref}>{decimal ? count.toFixed(1) : Math.round(count)}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="section-label">About Me</div>
        <h2 className="section-title">Crafting Backend Excellence</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginTop: '2rem' }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.2rem' }}>
            I'm a <strong style={{ color: 'var(--text)' }}>Backend Developer</strong> with a passion for building scalable APIs and microservices. I specialize in creating robust backend systems using <strong style={{ color: 'var(--text)' }}>Node.js</strong>, <strong style={{ color: 'var(--text)' }}>Ruby on Rails</strong>, and <strong style={{ color: 'var(--text)' }}>FastAPI</strong>.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.2rem' }}>
            With experience in both startup and enterprise environments, I've developed a keen eye for <strong style={{ color: 'var(--text)' }}>performance optimization</strong> and <strong style={{ color: 'var(--text)' }}>clean architecture</strong>. I love solving complex problems and turning ideas into production-ready systems.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85 }}>
            Currently pursuing <strong style={{ color: 'var(--text)' }}>MCA at JIMS, New Delhi</strong> while working as a Backend Developer at Learnyst in Bengaluru.
          </p>
        </motion.div>

        {/* Right: Stats grid */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map((s) => (
              <div key={s.label} className="card" style={{ textAlign: 'center', padding: '1.6rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--indigo)', fontFamily: 'JetBrains Mono, monospace' }}>
                  <Counter target={s.value} suffix={s.suffix} decimal={s.decimal} />
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--muted)', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
