import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Proyectos() {
  return (
    <div className="bg-background text-text py-8 sm:py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-center">
          Proyectos
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl text-center">
          Estos son algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único que me ha
          permitido crecer como desarrollador.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Proyecto 1 */}
        <div className="border border-black rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md flex flex-col">
          <div className="relative h-48 w-full">
            <Image src="/proyecto-web.png" alt="Proyecto 1" fill className="object-cover" />
          </div>
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-bold mb-2">Aplicación Web</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Una aplicación web desarrollada con Next.js y Tailwind CSS. Incluye autenticación de usuarios y base de
              datos.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                Next.js
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                Tailwind
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                MongoDB
              </span>
            </div>
          </div>
          <div className="p-4 pt-0 flex justify-between">
            <Link
              href="https://github.com/josemafla15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
            >
              <FaGithub className="text-lg" /> Código
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
            >
              <FaExternalLinkAlt /> Demo
            </Link>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="border border-black rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md flex flex-col">
          <div className="relative h-48 w-full">
            <Image src="/mobile-application.png" alt="Proyecto 2" fill className="object-cover" />
          </div>
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-bold mb-2">Aplicación Móvil</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Una aplicación móvil desarrollada con React Native. Incluye notificaciones push y almacenamiento local.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                React Native
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                Firebase
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                Redux
              </span>
            </div>
          </div>
          <div className="p-4 pt-0 flex justify-between">
            <Link
              href="https://github.com/josemafla15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
            >
              <FaGithub className="text-lg" /> Código
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
            >
              <FaExternalLinkAlt /> Demo
            </Link>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="border border-black rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="/placeholder.svg?height=400&width=600&query=API REST"
              alt="Proyecto 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-bold mb-2">API REST</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Una API REST desarrollada con Django REST Framework. Incluye autenticación JWT y documentación con
              Swagger.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                Django
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                PostgreSQL
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                Docker
              </span>
            </div>
          </div>
          <div className="p-4 pt-0 flex justify-between">
            <Link
              href="https://github.com/josemafla15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
            >
              <FaGithub className="text-lg" /> Código
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
            >
              <FaExternalLinkAlt /> Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
