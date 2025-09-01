"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

const ValuesSection = () => {
  const values = [
    { name: "Pasión", description: "por cada kilómetro" },
    { name: "Disciplina", description: "en cada entrenamiento" },
    { name: "Liderazgo", description: "inspirando a otros" },
    { name: "Respeto", description: "hacia cada corredor" },
  ]

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/black-and-white-photo-of-professional-runner-in-tr.png" alt="Runner training" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white mb-4">WADADA RUN CLUB</h2>
          <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-gray-300 font-medium">
            <span>CORREMOS CON PASIÓN</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>ENTRENAMOS CON PROPÓSITO</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">NUESTROS VALORES</h3>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform duration-200" />
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                        {value.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 p-6 border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <h4 className="text-2xl font-bold text-white mb-2">Compromiso</h4>
                <p className="text-gray-300">
                  El valor central que une todos los demás. Nuestro compromiso con la excelencia, con cada miembro del
                  club y con el crecimiento continuo.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Somos más que un club de running. Somos una comunidad unida por valores sólidos que nos impulsan a ser
                mejores corredores y mejores personas cada día.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Nuestra trayectoria se distingue por la disciplina en cada entrenamiento, la constancia en cada meta y
                los logros obtenidos en escenarios de alto rendimiento.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg font-semibold"
              >
                CONOCE NUESTRA HISTORIA
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
