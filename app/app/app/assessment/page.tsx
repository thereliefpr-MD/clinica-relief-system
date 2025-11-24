export default function AssessmentPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Assessment de Salud</h1>
      <p>Formulario de evaluación médica</p>
      
      <form style={{ maxWidth: '500px', marginTop: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Nombre completo:
          </label>
          <input 
            type="text" 
            style={{ 
              width: '100%', 
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            placeholder="Tu nombre"
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input 
            type="email" 
            style={{ 
              width: '100%', 
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            placeholder="tu@email.com"
          />
        </div>
        
        <button 
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Enviar Evaluación
        </button>
      </form>
      
      <div style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
          ← Volver al Inicio
        </a>
      </div>
    </div>
  )
}
