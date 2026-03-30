import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    icon: '🏠',
    iconBg: '#eef2ff',
    title: 'RoomBuddy',
    subtitle: 'Student Housing & Roommate Matching Platform',
    desc: (<>Full-stack web application enabling students to discover housing and connect with compatible roommates. Built RESTful APIs with Node.js and Express.js for user authentication, profile management, and property listings. Designed MongoDB schema with Mongoose ODM, optimizing queries for scalability. Implemented <strong>JWT-based authentication</strong> and secure password recovery.</>) as React.ReactNode,
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'HTML/CSS', 'JavaScript'],
    github: '#',
    live: null as string | null,
  },
  {
    icon: '🌐',
    iconBg: '#f0fdf4',
    title: 'akshat24.info',
    subtitle: 'Personal Portfolio Website',
    desc: (<>Personal developer portfolio built with <strong>React</strong> and <strong>TypeScript</strong>, featuring smooth animations, typewriter effect, 3D card tilt, and full responsive design. Deployed on <strong>AWS EC2</strong> with Docker, served via nginx with Node.js backend and MongoDB for contact form storage.</>) as React.ReactNode,
    tech: ['React', 'TypeScript', 'Node.js', 'Docker', 'MongoDB', 'nginx', 'AWS EC2'],
    github: '#',
    live: 'https://akshat24.info' as string | null,
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 2.5rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, var(--indigo), var(--rose))' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--indigo)', textTransform: 'uppercase' as const }}>What I've Built</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '2.5rem' }}>Featured Projects</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: 680 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ background: 'white', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: p.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>{p.icon}</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>{p.title}</h3>
                <div style={{ fontSize: '0.88rem', color: 'var(--indigo)', fontWeight: 500 }}>{p.subtitle}</div>
              </div>
              <p style={{ fontSize: '0.93rem', color: 'var(--text2)', lineHeight: 1.7 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ fontSize: '0.8rem', color: 'var(--text2)', background: 'white', border: '1px solid var(--border)', borderRadius: 100, padding: '0.2rem 0.75rem' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                {p.github && (
                  <a href={p.github} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.87rem', color: 'var(--indigo)', textDecoration: 'none', fontWeight: 500 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    View on GitHub
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.87rem', color: 'var(--muted)', textDecoration: 'none', fontWeight: 500 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
