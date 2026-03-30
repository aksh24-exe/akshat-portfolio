import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: 'var(--bg2)', border: '1px solid var(--border)',
          borderRadius: 28, padding: '5rem 2rem', textAlign: 'center',
        }}
      >
        <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Contact</div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text)' }}>
          Let's Work Together
        </h2>
        <p style={{ fontSize: '0.97rem', color: 'var(--text2)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
          I'm open to new opportunities, collaborations, or just a good tech conversation. Feel free to reach out!
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          {[
            { icon: '📧', label: 'itsakshat07sharma@gmail.com', href: 'mailto:itsakshat07sharma@gmail.com' },
            { icon: '📱', label: '+91-7301504346', href: 'tel:+917301504346' },
            { icon: '⬡', label: 'GitHub', href: 'https://github.com' },
            { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.88rem', fontWeight: 500, color: 'var(--text2)',
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 12, padding: '0.65rem 1.1rem',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--indigo)'
                el.style.color = 'var(--indigo)'
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = 'var(--shadow)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--text2)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <span>{c.icon}</span> {c.label}
            </a>
          ))}
        </div>

        <a href="mailto:itsakshat07sharma@gmail.com" className="btn-primary">
          Send Email ✉️
        </a>
      </motion.div>
    </section>
  )
}
