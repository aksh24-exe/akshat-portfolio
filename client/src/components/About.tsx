import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 25, suffix: '%', label: 'API Response\nTime Reduced' },
  { value: 40, suffix: '%', label: 'Manual QA\nTime Saved' },
  { value: 6, suffix: 'mo', label: 'Professional\nExperience' },
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
    <section id="about" style={{ padding: '5rem 2.5rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, var(--indigo), var(--rose))' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--indigo)', textTransform: 'uppercase' as const }}>About Me</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>Who I Am</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.2rem' }}>
              I'm a <strong style={{ color: 'var(--text)' }}>Backend Developer</strong> with a passion for building scalable APIs and microservices. I specialize in creating robust backend systems using <strong style={{ color: 'var(--text)' }}>Node.js</strong>, <strong style={{ color: 'var(--text)' }}>Ruby on Rails</strong>, and <strong style={{ color: 'var(--text)' }}>FastAPI</strong>.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85, marginBottom: '1.2rem' }}>
              With experience in both startup and enterprise environments, I've developed a keen eye for <strong style={{ color: 'var(--text)' }}>performance optimization</strong> and <strong style={{ color: 'var(--text)' }}>clean architecture</strong>.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.85 }}>
              Currently pursuing <strong style={{ color: 'var(--text)' }}>MCA at JIMS, New Delhi</strong> while working as a Backend Developer at Learnyst in Bengaluru.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {stats.map((s) => (
                <div key={s.label} className="card" style={{ textAlign: 'center', padding: '1.6rem', background: 'white' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--indigo)', fontFamily: 'JetBrains Mono, monospace', lineHeight: 1 }}>
                    <Counter target={s.value} suffix={s.suffix} decimal={s.decimal} />
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--muted)', marginTop: '0.4rem', whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
