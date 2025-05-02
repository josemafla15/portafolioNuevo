// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-center">
        <ul className="flex flex-wrap gap-6 text-lg font-semibold">
          <li>
            <Link href="/" className="hover:text-purple-400 transition-colors">Inicio</Link>
          </li>
          <li>
            <Link href="/acerca-de-mi" className="hover:text-purple-400 transition-colors">Acerca de mí</Link>
          </li>
          <li>
            <Link href="/proyectos" className="hover:text-purple-400 transition-colors">Proyectos</Link>
          </li>
          <li>
            <Link href="/testimonios" className="hover:text-purple-400 transition-colors">Testimonios</Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-purple-400 transition-colors">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
