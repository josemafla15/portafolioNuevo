export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          José Manuel Mafla
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-gray-700 dark:text-gray-300">
          Ingeniero de Software
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Bienvenido a mi portafolio profesional. Soy un desarrollador apasionado por crear soluciones digitales que
          mejoren la vida de las personas.
        </p>

        {/* Contenedor de botones con display block para asegurar visibilidad */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
          <a
            href="/proyectos"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors shadow-md text-sm sm:text-base mb-2"
          >
            Ver proyectos
          </a>
          <a
            href="/acerca-de-mi"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors shadow-md text-sm sm:text-base mb-2"
          >
            Acerca de mí
          </a>
          <a
            href="/testimonios"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors shadow-md text-sm sm:text-base mb-2"
          >
            Testimonios
          </a>
          <a
            href="/contacto"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors shadow-md text-sm sm:text-base mb-2"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  )
}
