import { useEffect, useRef, useState } from 'react'

const roles = ['Backend Developer', 'API Architect', 'Rails & Node.js Engineer', 'GraphQL Enthusiast', 'Problem Solver']
const techTags = ['Rails', 'FastAPI', 'Node.js', 'GraphQL', 'MongoDB', 'PostgreSQL']
const stats = [{ value: '25%', label: 'API faster' }, { value: '8.4', label: 'MCA CGPA' }, { value: '6mo', label: 'Experience' }]

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 90)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), 50)
      } else {
        setWordIdx((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [display, typing, wordIdx, words])

  return display
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)
  const typed = useTypewriter(roles)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotY = (x / (rect.width / 2)) * 8
    const rotX = -(y / (rect.height / 2)) * 8
    card.style.transform = `perspective(800px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)'
  }

  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 2rem 5rem' }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center',
      }}>
        {/* Left */}
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#ecfdf5', border: '1px solid #a7f3d0',
            borderRadius: 100, padding: '0.35rem 0.9rem',
            fontSize: '0.82rem', fontWeight: 500, color: '#065f46',
            marginBottom: '1.5rem',
            animation: 'pulse-badge 2s infinite',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--emerald)', display: 'inline-block' }} />
            Available for opportunities
          </div>

          {/* Headline */}
          <div style={{ fontSize: '0.95rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '0.5rem' }}>Hi, I'm</div>
          <h1 style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
            fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05,
            background: 'linear-gradient(135deg, var(--indigo) 0%, var(--rose) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: '1.2rem',
          }}>Akshat Sharma</h1>

          {/* Typewriter */}
          <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--muted)', marginBottom: '1.8rem', minHeight: '2.2rem', fontWeight: 400 }}>
            {typed}
            <span style={{ animation: 'blink 0.7s infinite', color: 'var(--indigo)', fontWeight: 300 }}>|</span>
          </div>

          {/* Description */}
          <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 520, lineHeight: 1.75, marginBottom: '2.2rem' }}>
            Backend Developer specializing in <strong>Node.js</strong>, <strong>Ruby on Rails</strong>, and <strong>FastAPI</strong>.
            I build scalable APIs, microservices, and backend systems that power great products.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View My Work <span>→</span></a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>

        {/* Right Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            width: 280, background: 'var(--bg2)',
            border: '1px solid var(--border)', borderRadius: 24, padding: '2rem',
            transition: 'transform 0.15s ease-out',
            boxShadow: 'var(--shadow)',
          }}
        >
          {/* Avatar */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--indigo) 0%, var(--rose) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem', fontWeight: 900, color: 'white',
            }}>AS</div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>Akshat Sharma</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.2rem' }}>Backend Developer</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
              <span>📍</span> Bengaluru, India
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.2rem' }}>
            {techTags.map((t) => (
              <span key={t} className="tag" style={{ fontSize: '0.7rem' }}>{t}</span>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'var(--border)', margin: '1rem 0' }} />

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--indigo)' }}>{s.value}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
