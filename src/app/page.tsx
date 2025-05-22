export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Contenedor principal con padding */}
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <h1 className="text-4xl font-bold mb-6 text-purple-600">José Manuel Mafla</h1>

          {/* Subtítulo */}
          <h2 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300">Ingeniero de Software</h2>

          {/* Descripción */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Bienvenido a mi portafolio profesional. Soy un desarrollador apasionado por crear soluciones digitales que
            mejoren la vida de las personas.
          </p>

          {/* Botones con estilos que funcionan en móviles */}
          <div className="space-y-4">
            <div>
              <a
                href="/proyectos"
                style={{
                  display: "block",
                  width: "250px",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Ver proyectos
              </a>
            </div>

            <div>
              <a
                href="/acerca-de-mi"
                style={{
                  display: "block",
                  width: "250px",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Acerca de mí
              </a>
            </div>

            <div>
              <a
                href="/testimonios"
                style={{
                  display: "block",
                  width: "250px",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Testimonios
              </a>
            </div>

            <div>
              <a
                href="/contacto"
                style={{
                  display: "block",
                  width: "250px",
                  margin: "0 auto 16px auto",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "#9333ea",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
