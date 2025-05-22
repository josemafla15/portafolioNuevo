import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portafolio de José Mafla",
  description: "Portafolio profesional de José Manuel Mafla Muñoz, Ingeniero de Software",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 120px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
