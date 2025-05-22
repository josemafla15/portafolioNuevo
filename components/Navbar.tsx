"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es móvil o PC
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Comprobar al cargar
    checkIfMobile()

    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

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
        position: "relative",
        zIndex: 50,
      }}
    >
      {/* Versión móvil con hamburguesa - Solo visible en móviles */}
      {isMobile && (
        <div
          style={{
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            José Mafla
          </span>
          <button
            onClick={toggleMenu}
            style={{
              color: "white",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              padding: "8px",
              display: "block",
            }}
            aria-label="Menú de navegación"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      )}

      {/* Versión desktop - Solo visible en PC */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 16px",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "24px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            <li>
              <Link
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                className="hover:text-purple-400"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/acerca-de-mi"
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                className="hover:text-purple-400"
              >
                Acerca de mí
              </Link>
            </li>
            <li>
              <Link
                href="/proyectos"
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                className="hover:text-purple-400"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/testimonios"
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                className="hover:text-purple-400"
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                className="hover:text-purple-400"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Menú móvil desplegable - Solo visible en móviles cuando está abierto */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#0f172a",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
            zIndex: 40,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "8px 0",
              display: "flex",
              flexDirection: "column",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "12px 24px",
                  display: "block",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "background-color 0.2s",
                }}
                className="hover:bg-gray-700"
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
                  padding: "12px 24px",
                  display: "block",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "background-color 0.2s",
                }}
                className="hover:bg-gray-700"
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
                  padding: "12px 24px",
                  display: "block",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "background-color 0.2s",
                }}
                className="hover:bg-gray-700"
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
                  padding: "12px 24px",
                  display: "block",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "background-color 0.2s",
                }}
                className="hover:bg-gray-700"
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
                  padding: "12px 24px",
                  display: "block",
                  transition: "background-color 0.2s",
                }}
                className="hover:bg-gray-700"
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
