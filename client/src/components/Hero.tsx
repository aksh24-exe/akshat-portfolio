import { useEffect, useRef, useState } from 'react'

const roles = ['Backend Developer', 'API Architect', 'Rails & Node.js Engineer', 'GraphQL Enthusiast', 'Problem Solver']

// Tags with individual colors matching screenshot
const techTags = [
  { name: 'Rails',   bg: '#fff1f2', color: '#e11d48',  border: '#fecdd3' },
  { name: 'FastAPI', bg: '#eff6ff', color: '#2563eb',  border: '#bfdbfe' },
  { name: 'Node.js', bg: '#eef2ff', color: '#4f46e5',  border: '#c7d2fe' },
  { name: 'GraphQL', bg: '#fffbeb', color: '#d97706',  border: '#fde68a' },
]

const stats = [
  { value: '25%', label: 'API\nfaster' },
  { value: '8.4', label: 'CGPA' },
  { value: '6mo', label: 'Experience' },
]

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
    const rotY = (x / (rect.width / 2)) * 7
    const rotX = -(y / (rect.height / 2)) * 7
    card.style.transform = `perspective(800px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)'
  }

  return (
    <section style={{ position: 'relative', padding: '7.5rem 2.5rem 5rem', overflow: 'hidden' }}>
      {/* Subtle background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.35,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1080, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem', alignItems: 'center',
      }}>
        {/* ── Left ── */}
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#f0fdf4', border: '1px solid #bbf7d0',
            borderRadius: 100, padding: '0.38rem 1rem',
            fontSize: '0.83rem', fontWeight: 500, color: '#15803d',
            marginBottom: '1.8rem',
            animation: 'pulse-badge 2s infinite',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#22c55e', display: 'inline-block',
              boxShadow: '0 0 0 3px rgba(34,197,94,0.25)',
            }} />
            Available for opportunities
          </div>

          {/* Hi, I'm */}
          <div style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 800, color: 'var(--text)',
            letterSpacing: '-0.02em', lineHeight: 1.1,
            marginBottom: '0.3rem',
          }}>Hi, I'm</div>

          {/* Name */}
          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.0,
            background: 'linear-gradient(135deg, var(--indigo) 0%, var(--rose) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.1rem',
          }}>Akshat Sharma</h1>

          {/* Typewriter */}
          <div style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: 'var(--text)', fontWeight: 500,
            marginBottom: '1.6rem', minHeight: '2.1rem',
          }}>
            {typed}
            <span style={{ animation: 'blink 0.7s step-end infinite', color: 'var(--indigo)', marginLeft: 1 }}>|</span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '1rem', color: 'var(--text2)',
            maxWidth: 510, lineHeight: 1.8, marginBottom: '2.2rem',
          }}>
            Backend-focused Software Developer with experience building{' '}
            <strong style={{ color: 'var(--text)' }}>scalable APIs</strong>,
            healthcare-compliant systems, and full-stack applications using{' '}
            <strong style={{ color: 'var(--text)' }}>Rails, Node.js</strong>, and{' '}
            <strong style={{ color: 'var(--text)' }}>MySQL</strong>.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>
              Get in Touch
            </a>
          </div>
        </div>

        {/* ── Right Card ── */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Gradient top bar */}
          <div style={{ height: 4, background: 'linear-gradient(90deg, var(--indigo) 0%, #f97316 100%)' }} />

          <div style={{ padding: '1.8rem' }}>
            {/* Avatar — rounded square */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                width: 68, height: 68,
                borderRadius: 18,
                background: 'linear-gradient(135deg, var(--indigo) 0%, var(--rose) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem', fontWeight: 900, color: 'white',
                letterSpacing: '-1px',
              }}>A</div>
            </div>

            {/* Name & role */}
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.25rem' }}>
              Akshat Sharma
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.1rem' }}>
              Backend Developer · Bengaluru
            </div>

            {/* Tech tags with individual colors */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.3rem' }}>
              {techTags.map((t) => (
                <span key={t.name} style={{
                  fontSize: '0.78rem', fontWeight: 600,
                  fontFamily: 'JetBrains Mono, monospace',
                  background: t.bg, color: t.color,
                  border: `1px solid ${t.border}`,
                  padding: '0.22rem 0.65rem', borderRadius: 100,
                  display: 'inline-block',
                }}>{t.name}</span>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.1rem' }} />

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.25rem', textAlign: 'center' }}>
              {stats.map((s) => (
                <div key={s.label} style={{ padding: '0.3rem 0' }}>
                  <div style={{ fontWeight: 900, fontSize: '1.25rem', color: 'var(--indigo)', lineHeight: 1.1 }}>{s.value}</div>
                  <div style={{
                    fontSize: '0.7rem', color: 'var(--muted)',
                    fontFamily: 'JetBrains Mono, monospace',
                    marginTop: '0.2rem', whiteSpace: 'pre-line', lineHeight: 1.3,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
