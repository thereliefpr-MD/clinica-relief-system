export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>¡The Relief System está funcionando! 🎉</h1>
      <p>Tu aplicación está correctamente desplegada en Vercel</p>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/landing" 
          style={{ 
            marginRight: '1rem', 
            color: 'blue', 
            textDecoration: 'underline' 
          }}
        >
          Ir a Landing Page
        </a>
        <a 
          href="/assessment" 
          style={{ 
            color: 'blue', 
            textDecoration: 'underline' 
          }}
        >
          Ir a Assessment
        </a>
      </div>
    </div>
  )
}
