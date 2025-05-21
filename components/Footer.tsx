import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ padding: "1rem", backgroundColor: "#111", color: "#fff", textAlign: "center" }}>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>Mis redes sociales</h3>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          margin: "0 auto 1rem",
          maxWidth: "150px",
        }}
      >
        <a
          href="https://github.com/josemafla15"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "1.5rem" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jos%C3%A9-manuel-mafla-mu%C3%B1oz-55b874313/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "1.5rem" }}
        >
          <FaLinkedin />
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} Jose Manuel Mafla Muñoz. Todos los derechos reservados.</p>
    </footer>
  );
}