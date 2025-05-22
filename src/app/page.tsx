export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Contenedor principal con padding extra */}
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

          {/* Texto de prueba para verificar que esta sección es visible */}
          <div className="mb-8">
            <p className="text-red-500 font-bold">
              ¿Puedes ver este texto rojo? Si sí, el problema está específicamente en los botones.
            </p>
          </div>

          {/* Botones con estilos completamente básicos */}
          <div className="space-y-4">
            <div>
              <a
                href="/proyectos"
                className="bg-purple-600 text-white px-8 py-4 text-lg font-bold"
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
                className="bg-purple-600 text-white px-8 py-4 text-lg font-bold"
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
                className="bg-purple-600 text-white px-8 py-4 text-lg font-bold"
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
                className="bg-purple-600 text-white px-8 py-4 text-lg font-bold"
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

          {/* Texto de prueba después de los botones */}
          <div className="mt-8">
            <p className="text-blue-500 font-bold">¿Puedes ver este texto azul después de los botones?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
