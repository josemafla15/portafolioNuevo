"use client"

import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center md:justify-center">
        {/* Menú para móviles */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menú para escritorio */}
        <ul className="hidden md:flex flex-wrap gap-6 text-lg font-semibold">
          <li>
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/acerca-de-mi" className="hover:text-purple-400 transition-colors">
              Acerca de mí
            </Link>
          </li>
          <li>
            <Link href="/proyectos" className="hover:text-purple-400 transition-colors">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/testimonios" className="hover:text-purple-400 transition-colors">
              Testimonios
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-purple-400 transition-colors">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg">
          <ul className="flex flex-col items-center py-4 gap-4 text-lg font-semibold">
            <li>
              <Link href="/" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/acerca-de-mi" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                Acerca de mí
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/testimonios" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                Testimonios
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-purple-400 transition-colors" onClick={toggleMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
