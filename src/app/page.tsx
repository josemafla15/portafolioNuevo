import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-background text-text py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Mi portafolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl text-center">
          Bienvenido a mi espacio digital donde comparto mi trabajo, experiencia y pasión por la tecnología.
        </p>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Tarjeta 1 - Acerca de mí */}
        <Link
          href="/acerca-de-mi"
          className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 transition-transform hover:scale-105 cursor-pointer"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Acerca de mí</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Esta es una tarjeta de ejemplo usando Next.js y Tailwind CSS. Puedes personalizarla fácilmente.
          </p>
          <div className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg inline-block">
            Ver más
          </div>
        </Link>

        {/* Tarjeta 2 - Mis proyectos */}
        <Link
          href="/proyectos"
          className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 transition-transform hover:scale-105 cursor-pointer"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Mis proyectos</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Esta es una tarjeta de ejemplo usando Next.js y Tailwind CSS. Puedes personalizarla fácilmente.
          </p>
          <div className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg inline-block">
            Ver más
          </div>
        </Link>

        {/* Tarjeta 3 - Testimonios */}
        <Link
          href="/testimonios"
          className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 transition-transform hover:scale-105 cursor-pointer"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Testimonios</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Esta es una tarjeta de ejemplo usando Next.js y Tailwind CSS. Puedes personalizarla fácilmente.
          </p>
          <div className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg inline-block">
            Ver más
          </div>
        </Link>

        {/* Tarjeta 4 - Contacto */}
        <Link
          href="/contacto"
          className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 transition-transform hover:scale-105 cursor-pointer"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Contáctanos</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Esta es una tarjeta de ejemplo usando Next.js y Tailwind CSS. Puedes personalizarla fácilmente.
          </p>
          <div className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg inline-block">
            Ver más
          </div>
        </Link>
      </div>
    </div>
  )
}
