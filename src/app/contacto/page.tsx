import Image from "next/image";

export default function Contacto() {
  return (
    <div className="bg-background text-text py-16 px-4">
      <div className="flex flex-col items-center justify-center w-full mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-center">
          Contacto
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl text-center">
          ¿Interesado en trabajar juntos? No dudes en contactarme. Estoy abierto a 
          nuevas oportunidades y colaboraciones.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center border border-black rounded-lg p-6 w-80 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Información de contacto</h2>

          <div className="flex flex-col gap-4 w-full text-center">
            <div>
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-1">Teléfono</h3>
              <p className="text-gray-600 dark:text-gray-300">+57 314 687 9157</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-1">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">josemafla441@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-1">Ubicación</h3>
              <p className="text-gray-600 dark:text-gray-300">Pasto, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
