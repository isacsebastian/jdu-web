"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

interface Achievement {
  id: number
  title: string
  description: string
  details?: string[]
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Carrera Open",
    description: "Finalista Panamericano en dos ocasiones, medallas en Juegos Bolivarianos y Panamericanos.",
    details: [
      "Medalla de oro en Juegos Bolivarianos 2022",
      "Finalista en Panamericanos Lima 2019",
      "Récord nacional en 10K masculino",
      "Más de 50 atletas clasificados a competencias internacionales",
    ],
  },
  {
    id: 2,
    title: "World Games",
    description: "Participación destacada en competencias mundiales de atletismo.",
    details: [
      "Representación en World Athletics Championships",
      "Clasificación a Juegos Olímpicos Tokyo 2020",
      "Top 10 en maratón mundial",
      "Embajadores oficiales de World Athletics",
    ],
  },
  {
    id: 3,
    title: "Ranking",
    description: "Posicionamiento destacado en rankings nacionales e internacionales.",
    details: [
      "Top 5 club de running en Latinoamérica",
      "Más de 1000 miembros activos",
      "95% de satisfacción en encuestas",
      "Reconocimiento como mejor club emergente 2023",
    ],
  },
]

export default function AchievementsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-[0.2em] text-white mb-4">LOGROS</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="border-b border-gray-800 last:border-b-0"
            >
              <div className="flex items-start gap-8 py-8">
                {/* Large Number */}
                <div className="flex-shrink-0">
                  <span className="text-6xl md:text-8xl font-black text-gray-600 leading-none">
                    {achievement.id.toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{achievement.title}</h3>

                    <button
                      onClick={() => toggleExpanded(achievement.id)}
                      className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors duration-200"
                      aria-label={expandedId === achievement.id ? "Colapsar" : "Expandir"}
                    >
                      {expandedId === achievement.id ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>

                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">{achievement.description}</p>

                  <AnimatePresence>
                    {expandedId === achievement.id && achievement.details && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-800">
                          <ul className="space-y-3">
                            {achievement.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: detailIndex * 0.1,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex items-start gap-3 text-gray-400"
                              >
                                <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                                <span className="text-base leading-relaxed">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
