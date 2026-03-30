import { useEffect, useState } from 'react'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.3 }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase())
      if (el) obs.observe(el)
    })
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow)' : 'none',
      transition: 'all 0.2s',
    }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '0 2.5rem',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo: <Akshat /> */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0' }}>
          <span style={{ color: 'var(--indigo)', fontWeight: 700, fontSize: '1.15rem', fontFamily: 'JetBrains Mono, monospace' }}>&lt;</span>
          <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace', margin: '0 1px' }}>Akshat</span>
          <span style={{ color: 'var(--indigo)', fontWeight: 700, fontSize: '1.15rem', fontFamily: 'JetBrains Mono, monospace' }}>&nbsp;/&gt;</span>
        </a>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: '0.15rem' }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: '0.9rem', fontWeight: 500,
                color: active === l.toLowerCase() ? 'var(--indigo)' : 'var(--text2)',
                textDecoration: 'none',
                padding: '0.45rem 1rem',
                borderRadius: 8,
                background: active === l.toLowerCase() ? '#eef2ff' : 'transparent',
                transition: 'all 0.18s',
              }}
              onMouseEnter={(e) => {
                if (active !== l.toLowerCase()) {
                  (e.currentTarget as HTMLElement).style.color = 'var(--indigo)'
                  ;(e.currentTarget as HTMLElement).style.background = '#f5f3ff'
                }
              }}
              onMouseLeave={(e) => {
                if (active !== l.toLowerCase()) {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text2)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }
              }}
            >{l}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
