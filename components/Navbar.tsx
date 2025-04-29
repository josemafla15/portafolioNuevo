// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#111", color: "#fff" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/acerca-de-mi">Acerca de mi</Link></li>
        <li><Link href="/proyectos">Proyectos</Link></li>
        <li><Link href="/testimonios">Testimonios</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
