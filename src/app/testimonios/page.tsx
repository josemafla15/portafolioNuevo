import Image from "next/image"

export default function Testimonios() {
  return (
    <div className="bg-background text-text py-8 sm:py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-center">
          Testimonios
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl text-center">
          Estas son algunas opiniones de profesores y colegas con los que he tenido el placer de trabajar. Su
          satisfacción es mi mayor recompensa.
        </p>
      </div>
      {/* Contenedor de testimonios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Testimonio 1 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md h-full">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
            <Image src="/pepito.jpeg" alt="Foto de Pepito Pérez" fill className="rounded-full object-cover" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Pepito Pérez</h2>
          <h3 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 text-center">Profesor</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Jose es un gran profesional, pero por sobre todo una gran persona.
          </p>
        </div>
        {/* Testimonio 2 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md h-full">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
            <Image src="/andres.jpeg" alt="Foto de Andrés Arteaga" fill className="rounded-full object-cover" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Andrés Arteaga</h2>
          <h3 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 text-center">Profesor</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Jose es un gran ingeniero debido a su gran capacidad para resolver problemas y trabajar en equipo.
          </p>
        </div>
        {/* Testimonio 3 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md h-full">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
            <Image src="/camilo.jpg" alt="Foto de Camilo Ortega" fill className="rounded-full object-cover" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Camilo Ortega</h2>
          <h3 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 text-center">Profesor</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Jose es un gran líder, siempre sabe cómo motivar a su equipo y llevarlo al éxito.
          </p>
        </div>
        {/* Testimonio 4 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md h-full">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
            <Image src="/camila.jpg" alt="Foto de Camila Martínez" fill className="rounded-full object-cover" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">Camila Martínez</h2>
          <h3 className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 text-center">
            Compañera de trabajo
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            Jose es un gran amigo y un gran compañero, siempre dispuesto a ayudar y colaborar.
          </p>
        </div>
      </div>
    </div>
  )
}
