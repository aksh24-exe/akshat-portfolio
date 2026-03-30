export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '1.8rem 2rem',
      fontSize: '0.85rem', color: 'var(--muted)',
      borderTop: '1px solid var(--border)',
    }}>
      Designed & built by{' '}
      <a href="#" style={{ color: 'var(--indigo)', textDecoration: 'none', fontWeight: 500 }}>Akshat Sharma</a>
      {' '}· 2026
    </footer>
  )
}
