import Image from "next/image";

export default function MisProyectos() {
  return (
    <div className="bg-background text-text py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Mis Proyectos
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl text-center">
          Aquí puedes ver algunos de mis proyectos más destacados.
        </p>
      </div>

      {/* Contenedor de proyectos */}
      <div className="flex flex-wrap justify-center gap-8">

        {/* Proyecto 1 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Gestor financiero</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            Esta es una aplicación para gestionar tus finanzas.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Python
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Django
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              HTML
            </span>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Otro proyecto</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            Esta es otra aplicación interesante que desarrollé.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Tailwind
            </span>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Otro proyecto</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            Esta es otra aplicación interesante que desarrollé.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Tailwind
            </span>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Otro proyecto</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            Esta es otra aplicación interesante que desarrollé.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Tailwind
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
