import Image from "next/image"

export default function AcercaDeMi() {
  return (
    <div className="min-h-screen p-4">
      <div className="container py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-center">
          Acerca de Mí
        </h1>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-900 shadow-lg">
              <Image
                src="/miFoto.jpg"
                alt="Mi foto de perfil"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">¡Hola! Soy José Manuel Mafla Muñoz</h2>
              <p className="text-muted-foreground">
                Ingeniero industrial y de software. Llevo 2 años en el mundo de la tecnología y el desarrollo web. Me
                apasiona crear soluciones digitales que mejoren la vida de las personas. Me inclino más por el
                desarrollo backend, pero también disfruto del frontend. Me gusta aprender y mejorar mis habilidades
                constantemente.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Mi Experiencia</h3>
              <p className="text-muted-foreground mb-4">
                Aunque todavía no cuento con experiencia laboral formal, he trabajado en diversos proyectos personales
                que han fortalecido mis habilidades como desarrollador. Estos proyectos me han permitido enfrentar y
                resolver distintos desafíos, mejorar mi lógica de programación, mi capacidad de análisis y fortalecer mi
                disciplina para el aprendizaje autónomo. Cada experiencia ha sido una oportunidad de crecimiento y de
                preparación para entornos profesionales.
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Formación</h4>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">Instituto Champagnat de Pasto • 2017</p>
                    <p className="text-sm text-muted-foreground">
                      Ingeniero industrial - Universidad Cooperativa de Colombia • 2023
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ingeniero de software - Universidad Cooperativa de Colombia • 2025
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Habilidades Técnicas</h4>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Poseo sólidos conocimientos en desarrollo de software, desde la planificación hasta la
                      implementación de soluciones funcionales.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tengo experiencia en el diseño de interfaces, la integración de sistemas mediante APIs y el manejo
                      de bases de datos.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Me adapto con facilidad a nuevas tecnologías y metodologías de trabajo, siempre buscando escribir
                      código limpio, eficiente y mantenible.
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Certificaciones</h4>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-muted-foreground">Fundamentos de Python - Coursera • 2024</p>
                    <p className="text-sm text-muted-foreground">Curso avanzado de Python con Django - Udemy • 2025</p>
                    <p className="text-sm text-muted-foreground">Curso de inglés práctico - Focus • 2018</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Mi filosofía de trabajo</h4>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      &quot;Creo en el poder del compromiso, la colaboración efectiva y el aprendizaje constante. Para
                      mí, el desarrollo de software no es solo una disciplina técnica, sino una herramienta capaz de
                      transformar y mejorar la vida de las personas. Me esfuerzo por aportar valor real en cada
                      proyecto, mantener una comunicación abierta y crecer continuamente como profesional y ser
                      humano.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  Python
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  Django
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  HTML
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  SQL
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

