import Image from "next/image";

export default function Testimonios() {
  return (
    <div className="bg-background text-text py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Testimonios
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl text-center">
          Estas son algunas opiniones de profesores y colegas con los que he tenido el placer de trabajar. Su satisfacción
          es mi mayor recompensa.
        </p>
      </div>

      {/* Contenedor de testimonios */}
      <div className="flex flex-wrap justify-center gap-8">

        {/* Testimonio 1 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <Image
            src="/pepito.jpg" // Cambia esto por la ruta real de tu imagen
            alt="Foto de Pepito Pérez"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Pepito Pérez</h2>
          <h3 className="text-gray-600 dark:text-gray-300 mb-4 text-center">Profesor</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Jose es un gran profesional, pero por sobre todo una gran persona.
          </p>
        </div>

        {/* Testimonio 2 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <Image
            src="/andres.jpg"
            alt="Foto de Andrés Arteaga"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Andrés Arteaga</h2>
          <h3 className="text-gray-600 dark:text-gray-300 mb-4 text-center">Profesor</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Jose es un gran ingeniero debido a su gran capacidad para resolver problemas y trabajar en equipo.
          </p>
        </div>

        {/* Testimonio 3 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <Image
            src="/camilo.jpg"
            alt="Foto de Camilo Ortega"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Camilo Ortega</h2>
          <h3 className="text-gray-600 dark:text-gray-300 mb-4 text-center">Profesor</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Jose es un gran líder, siempre sabe cómo motivar a su equipo y llevarlo al éxito.
          </p>
        </div>

        {/* Testimonio 4 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <Image
            src="/camila.jpg"
            alt="Foto de Camila Martínez"
            width={100}
            height={100}
            className="rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Camila Martínez</h2>
          <h3 className="text-gray-600 dark:text-gray-300 mb-4 text-center">Compañera de trabajo</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Jose es un gran amigo y un gran compañero, siempre dispuesto a ayudar y colaborar.
          </p>
        </div>

      </div>
    </div>
  );
}
