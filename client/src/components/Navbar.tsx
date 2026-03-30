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
          {links.map((l) => {
            const isActive = active === l.toLowerCase()
            return (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  fontSize: '0.9rem', fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--indigo)' : 'var(--text2)',
                  textDecoration: 'none',
                  padding: '0.45rem 1rem',
                  borderRadius: 0,
                  background: 'transparent',
                  borderBottom: isActive ? '2px solid var(--indigo)' : '2px solid transparent',
                  transition: 'all 0.18s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--indigo)'
                  if (!isActive) el.style.borderBottom = '2px solid #c7d2fe'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = isActive ? 'var(--indigo)' : 'var(--text2)'
                  el.style.borderBottom = isActive ? '2px solid var(--indigo)' : '2px solid transparent'
                }}
              >{l}</a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
