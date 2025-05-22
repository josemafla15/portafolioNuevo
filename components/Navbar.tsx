"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "16px 0",
        width: "100%",
      }}
    >
      {/* Versión móvil con hamburguesa - SOLO VISIBLE EN MÓVILES */}
      <div
        style={{
          display: "none", // Oculto por defecto
          padding: "0 16px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="block md:hidden" // Visible en móviles, oculto en desktop
      >
        <button
          onClick={toggleMenu}
          style={{
            color: "white",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            padding: "8px",
          }}
          aria-label="Menú de navegación"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Versión desktop - igual que la original */}
      <div
        className="container mx-auto flex justify-center"
        style={{
          display: "flex", // Visible por defecto
        }}
      >
        <ul className="flex flex-wrap gap-6 text-lg font-semibold">
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

      {/* Menú móvil desplegable - SOLO VISIBLE EN MÓVILES CUANDO ESTÁ ABIERTO */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#0f172a",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            zIndex: 40,
            display: "none", // Oculto por defecto
          }}
          className="block md:hidden" // Visible en móviles, oculto en desktop
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "16px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 16px",
                  display: "block",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/acerca-de-mi"
                onClick={toggleMenu}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 16px",
                  display: "block",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                Acerca de mí
              </Link>
            </li>
            <li>
              <Link
                href="/proyectos"
                onClick={toggleMenu}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 16px",
                  display: "block",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/testimonios"
                onClick={toggleMenu}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 16px",
                  display: "block",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                onClick={toggleMenu}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 16px",
                  display: "block",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
