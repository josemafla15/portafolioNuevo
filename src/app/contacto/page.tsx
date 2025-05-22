import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contacto() {
  return (
    <div className="bg-background text-text py-8 sm:py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-center">
          Contacto
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl text-center">
          ¿Interesado en trabajar juntos? No dudes en contactarme. Estoy abierto a nuevas oportunidades y
          colaboraciones.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl mx-auto">
        {/* Información de contacto */}
        <div className="flex flex-col items-center border border-black rounded-lg p-4 sm:p-6 w-full sm:w-80 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Información de contacto</h2>
          <div className="flex flex-col gap-4 w-full text-left">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-700 dark:text-purple-300 text-lg flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300">Teléfono</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">+57 314 687 9157</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-700 dark:text-purple-300 text-lg flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300">Email</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">
                  josemafla441@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-700 dark:text-purple-300 text-lg flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300">Ubicación</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Pasto, Colombia</p>
              </div>
            </div>
          </div>
        </div>
        {/* Formulario de contacto */}
        <form
          action="https://formspree.io/f/xrbqejdk"
          method="POST"
          className="flex flex-col gap-4 w-full sm:w-80 bg-white dark:bg-gray-800 border border-black rounded-lg p-4 sm:p-6 shadow-md"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center">Envíame un mensaje</h2>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="px-3 sm:px-4 py-2 rounded border dark:bg-gray-700 dark:text-white text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="px-3 sm:px-4 py-2 rounded border dark:bg-gray-700 dark:text-white text-sm sm:text-base"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            required
            className="px-3 sm:px-4 py-2 rounded border min-h-[120px] sm:min-h-[150px] dark:bg-gray-700 dark:text-white text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            style={{
              display: "block",
              width: "100%",
              backgroundColor: "#9333ea",
              color: "white",
              padding: "10px 16px",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              textAlign: "center",
            }}
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  )
}
