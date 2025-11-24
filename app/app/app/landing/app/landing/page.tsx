'use client'

export default function LandingPage() {
  const handleWhatsAppClick = () => {
    const phone = "17879944629"
    const message = "Hola, me interesa hacer la evaluación de salud online de The Relief System"
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">The Relief System</h1>
            <p className="text-green-600 font-medium">Clínica Holística</p>
          </div>
        </div>
      </header>

      <section className="pt-16 pb-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Salud Integral 
            <span className="text-green-600 block">Personalizada</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Medicina funcional y bienestar holístico desde la comodidad de tu casa
          </p>

          <div className="space-y-4">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-12 py-5 rounded-2xl hover:bg-green-700 font-semibold text-xl flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-xl transition-all"
            >
              <span className="text-2xl">💬</span>
              Consultar por WhatsApp
            </button>
            
            <p className="text-gray-500 text-sm">
              Te enviaremos el enlace directo para la evaluación online
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Evaluación Completa</h3>
              <p className="text-gray-600">
                Análisis detallado de síntomas, hábitos y objetivos de salud
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Plan Personalizado</h3>
              <p className="text-gray-600">
                Protocolos únicos con suplementación, nutrición y estilo de vida
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Online</h3>
              <p className="text-gray-600">
                Desde tu casa, sin desplazamientos ni esperas
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados Rápidos</h3>
              <p className="text-gray-600">
                Plan de tratamiento entregado en 24-48 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para transformar tu salud?
          </h2>
          
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-green-600 px-12 py-4 rounded-2xl hover:bg-gray-100 font-semibold text-lg inline-flex items-center gap-3"
          >
            <span>💬</span>
            Comenzar por WhatsApp
          </button>
          
          <p className="text-green-100 mt-4">
            Resolvemos todas tus dudas antes de comenzar
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">The Relief System</h3>
          <p className="text-gray-400 mb-4">
            Clínica Holística de Medicina Funcional
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 The Relief System. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
