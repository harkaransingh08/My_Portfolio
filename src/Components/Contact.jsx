import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram
} from "lucide-react"
import "../App.css";

export default function Contact() {
  return (
    <div className="flex justify-center mt-24 px-6">
      <div className="w-full max-w-5xl flex flex-col items-center gap-14">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 backdrop-blur-md px-14 flex justify-center py-4 rounded-full
                     text-4xl font-bold text-white w-200 hover:text-pink-500
                     hover:underline transition-all duration-300"
                     style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Contact
        </motion.h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => alert("Kaithal, Haryana, India")}
            className="cursor-pointer flex items-center gap-4 bg-white/5 backdrop-blur-md
                       p-6 rounded-2xl text-white font-semibold
                       shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            <MapPin />
            <span>India</span>
          </motion.div>

          {/* Email */}
          <motion.a
            href="harkaransingh08ktl@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md
                       p-6 rounded-2xl text-pink-400 font-semibold
                       shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            <Mail />
            <span>harkaransingh08ktl@gmail.com</span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+919416384630"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md
                       p-6 rounded-2xl text-white font-semibold
                       shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            <Phone />
            <span>+91 94163 84630</span>
          </motion.a>

          {/* Socials */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-8 bg-white/5 backdrop-blur-md
                       p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            <a
              href="https://github.com/harkaransingh08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
            >
              <Linkedin />
            </a>

            <a
              href="https://www.instagram.com/novaatlass?igsh=NWY4cmVobDBsb3By"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
            >
              <Instagram />
            </a>
          </motion.div>

        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/70 text-center text-sm"
        >
          Open to opportunities, collaborations, and meaningful conversations.
        </motion.p>

      </div>
    </div>
  )
}
