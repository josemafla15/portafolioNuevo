export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          José Manuel Mafla
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
          Ingeniero de Software
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Bienvenido a mi portafolio profesional. Soy un desarrollador apasionado por crear soluciones digitales que
          mejoren la vida de las personas.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/proyectos"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            Ver proyectos
          </a>
          <a
            href="/acerca-de-mi"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            Acerca de mí
          </a>
          <a
            href="/testimonios"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            Testimonios
          </a>
          <a
            href="/contacto"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  )
}
