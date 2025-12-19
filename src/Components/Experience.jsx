import React from 'react'
import { motion } from 'framer-motion'
import "../App.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Experience() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col lg:flex-row gap-20 max-w-6xl w-full">

         <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex-1 flex flex-col items-center gap-10"
        >
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md px-12 hover:text-yellow-400 py-4 rounded-full text-4xl font-bold text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            My Education
          </motion.h1>

          <div className="w-full flex flex-col gap-8">
            {[
              "I am a recent graduate with a degree in Computer Science.",
              "Strong foundation in programming languages, algorithms, and data structures.",
              "Passionate about coding and problem-solving."
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center text-white font-semibold
                           shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
              >
                {text}
                <span className="absolute left-1/2 -bottom-2 w-16 h-[2px] bg-yellow-400 -translate-x-1/2 opacity-60"></span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= EXPERIENCE ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex-1 flex flex-col items-center gap-10"
        >
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md px-12 hover:text-yellow-400 py-4 rounded-full text-4xl font-bold text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            My Experience
          </motion.h1>

          
          <div className="w-full flex flex-col gap-6">
            {[
              "Collaborated with a team to build responsive web pages using React and Tailwind CSS.",
              "Improved UI performance and optimized code for faster load times.",
              "Tested and debugged across multiple browsers and devices.",
              "Built multiple projects using React, Tailwind, and motion animations.",
              "Experimented with APIs, animations, and performance optimizations."
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white/5 backdrop-blur-md p-6 rounded-2xl text-white font-semibold
                           shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
              >
                {text}
                <span className="absolute left-1/2 -bottom-2 w-20 h-[2px] bg-cyan-400 -translate-x-1/2 opacity-60"></span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
