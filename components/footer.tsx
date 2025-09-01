"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-6">ÚNETE AL CLUB</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Impulsa tu pasión por el running junto a una comunidad que nunca se detiene.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-12 py-4 rounded-full text-lg font-bold tracking-wide hover:bg-gray-100 transition-colors duration-300"
          >
            CONTACTAR
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Secciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-8 tracking-wide">SECCIONES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  ENTRENAMIENTOS
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  COMUNIDAD
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  LOGROS
                </a>
              </div>
              <div className="space-y-4">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  EVENTOS PRÓXIMOS
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  VALORES
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                  ÚNETE AHORA
                </a>
              </div>
            </div>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href="#"
              className="block w-full py-4 px-6 border border-gray-600 rounded-full text-center hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium"
            >
              WhatsApp
            </a>
            <a
              href="#"
              className="block w-full py-4 px-6 border border-gray-600 rounded-full text-center hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium"
            >
              Instagram
            </a>
            <a
              href="#"
              className="block w-full py-4 px-6 border border-gray-600 rounded-full text-center hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium"
            >
              Facebook
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-12"
        >
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-800 tracking-wider leading-none">
              WADADA RUN CLUB
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400">
            <span>Kingston, Jamaica</span>
            <span>hello@wadadarun.club</span>
            <span>+1 (876) 555-WADA</span>
          </div>

          <p className="text-gray-500">© 2024 Wadada Run Club. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
