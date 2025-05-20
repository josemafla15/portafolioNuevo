import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"

export default function Proyectos() {
  return (
    <div className="bg-background text-text py-8 md:py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full mb-8 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-center">
          Mis proyectos
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl text-center">
          Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa un desafío superado y
          nuevas habilidades adquiridas.
        </p>
      </div>

      {/* Contenedor de proyectos */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {/* Proyecto 1 */}
        <div className="flex flex-col justify-between items-center border border-black rounded-lg p-6 w-full sm:w-80 min-h-[500px] bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Gestor financiero</h2>

          <div className="w-full h-[200px] mb-4 overflow-hidden rounded-lg">
            <Image
              src="/gestorFinanciero.jpg"
              alt="Gestor financiero"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-center">
            Aplicación para ver tus ingresos y egresos a lo largo del mes, incluyendo gráficas. En este pequeño proyecto
            se puede apreciar el uso de next.js y tailwind.
          </p>

          <div className="flex flex-wrap gap-2 my-4">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Next.js
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Tailwind
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Typescript
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://trabajo-gesto-financiero.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver demo"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-2xl"
              aria-label="Ver demo"
            >
              <BiLinkExternal />
            </a>
            <a
              href="https://github.com/josemafla15/TrabajoGestoFinanciero"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver en GitHub"
              className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-400 text-2xl"
              aria-label="Ver código en GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="flex flex-col justify-between items-center border border-black rounded-lg p-6 w-full sm:w-80 min-h-[500px] bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Tienda de productos de mascotas</h2>
          <div className="w-full h-[200px] mb-4 overflow-hidden rounded-lg">
            <Image
              src="/paginaWeb.jpg"
              alt="Tienda de productos para mascotas"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-center">
            Aplicativo web de una tienda de productos para mascotas, donde puedes ver los productos y agregarlos al
            carrito. Con un enfoque mayor en el backend.
          </p>

          <div className="flex flex-wrap gap-2 my-4">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Python
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Django
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/josemafla15/PaginaWebTiendaDeMasctos"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver en GitHub"
              className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-400 text-2xl"
              aria-label="Ver código en GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="flex flex-col justify-between items-center border border-black rounded-lg p-6 w-full sm:w-80 min-h-[500px] bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Ventana con Next.js</h2>
          <div className="w-full h-[200px] mb-4 overflow-hidden rounded-lg">
            <Image
              src="/ventana.jpg"
              alt="Ventana con Next.js"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-center">
            Es una ventana simple diseñada con next.js. En esta se pueden apreciar mis habilidades de frontend y el uso
            de tailwind.
          </p>

          <div className="flex flex-wrap gap-2 my-4">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Next.js
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Tailwind
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Typescript
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://trabajo-window-ui-8spm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver demo"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-2xl"
              aria-label="Ver demo"
            >
              <BiLinkExternal />
            </a>
            <a
              href="https://github.com/josemafla15/TrabajoWindowUI-"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver en GitHub"
              className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-400 text-2xl"
              aria-label="Ver código en GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div className="flex flex-col justify-between items-center border border-black rounded-lg p-6 w-full sm:w-80 min-h-[500px] bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Gestor de citas médicas</h2>
          <div className="w-full h-[200px] mb-4 overflow-hidden rounded-lg">
            <Image
              src="/gestorCitasMedicas.jpg"
              alt="Gestor de citas médicas"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-center">
            Aplicación para gestionar citas médicas, donde puedes ver los médicos disponibles y agendar una cita. Tiene
            un mayor enfoque en backend, utilizando consultas SQL nativas.
          </p>

          <div className="flex flex-wrap gap-2 my-4">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Python
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Tkinter
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              SQL
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/josemafla15/TrabajoFinalBasesDeDatos"
              target="_blank"
              rel="noopener noreferrer"
              title="Ver en GitHub"
              className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-400 text-2xl"
              aria-label="Ver código en GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
