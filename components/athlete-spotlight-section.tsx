"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AthleteSpotlightSection() {
  return (
    <section className="bg-black text-white">
      {/* Mobile Layout: Image top, content bottom */}
      <div className="md:hidden">
        {/* Image Section */}
        <div className="relative h-[60vh]">
          <img
            src="/black-and-white-photo-of-professional-runner-in-tr.png"
            alt="Professional runner in training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90" />
        </div>

        {/* Content Section */}
        <div className="relative px-6 py-12">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/90 to-black" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-black tracking-wider mb-6"
            >
              MARÍA ELENA <span className="block text-white/90">RODRÍGUEZ</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-lg font-medium tracking-wide">
                CORRE CON PASIÓN <span className="text-white/70">|</span> INSPIRA CON PROPÓSITO
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <p className="text-base leading-relaxed text-white/90">
                Corredora de élite con más de 15 años de trayectoria en el atletismo. Medallista en Juegos
                Centroamericanos y representante nacional en múltiples maratones internacionales.
              </p>

              <p className="text-base leading-relaxed text-white/90">
                Su carrera se distingue por la dedicación, la constancia y los logros obtenidos en escenarios de alto
                rendimiento. Fundadora y líder inspiracional del Wadada Run Club.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-4 text-base tracking-wide transition-all duration-300 hover:scale-105"
              >
                CONOCE SU HISTORIA
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Original overlay design */}
      <div className="hidden md:block relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/black-and-white-photo-of-professional-runner-in-tr.png"
            alt="Professional runner in training"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-wider mb-6"
            >
              MARÍA ELENA <span className="block text-white/90">RODRÍGUEZ</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-xl md:text-2xl font-medium tracking-wide">
                CORRE CON PASIÓN <span className="text-white/70">|</span> INSPIRA CON PROPÓSITO
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 mb-12"
            >
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                Corredora de élite con más de 15 años de trayectoria en el atletismo. Medallista en Juegos
                Centroamericanos y representante nacional en múltiples maratones internacionales.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                Su carrera se distingue por la dedicación, la constancia y los logros obtenidos en escenarios de alto
                rendimiento. Fundadora y líder inspiracional del Wadada Run Club.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-4 text-lg tracking-wide transition-all duration-300 hover:scale-105"
              >
                CONOCE SU HISTORIA
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  )
}
