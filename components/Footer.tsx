import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-4 px-4 bg-gray-900 text-white text-center">
      <h3 className="mb-2 text-lg sm:text-xl">Mis redes sociales</h3>
      <div className="flex justify-center gap-6 mx-auto mb-4 max-w-[150px]">
        <a
          href="https://github.com/josemafla15"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl sm:text-2xl hover:text-purple-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jos%C3%A9-manuel-mafla-mu%C3%B1oz-55b874313/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl sm:text-2xl hover:text-purple-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Jose Manuel Mafla Muñoz. Todos los derechos reservados.
      </p>
    </footer>
  )
}
