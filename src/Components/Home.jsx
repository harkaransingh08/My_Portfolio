import React from "react";
import pfp from "./Images/karan.jpg";
import { motion } from "framer-motion";
import { fadeInUp, typingText, typingLetter } from "../Animations/Home_animation";
import "../App.css";

export default function Home() {
  const text = `’m a developer who enjoys building clean, interactive web experiences and learning how things work under the hood. I work primarily with React, Tailwind CSS, and modern JavaScript, and I like combining smooth UI animations with solid logic.

I’ve built full projects ranging from responsive front-end applications to full-stack platforms, and I’m also exploring 3D design and animation using Blender. I care about performance, usability, and writing code that makes sense not just today, but later.`;

  return (
    <div className="md:flex flex-col md:flex-row  items-center mb-40 gap-20 justify-evenly ">

      {/* Animated text */}
      <motion.div
        className="max-w-xl text-justify leading-relaxed text-gray-300 text-2xl font-medium  font-oswald"
        variants={typingText}
        style={{ fontFamily: "'Oswald', sans-serif" }}
        initial="hidden"
        whileInView="visible"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={typingLetter}>
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Animated image */}
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.whileInView}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={pfp}
          alt="image"
          className="flex rounded-full  h-120 w-95 bg-[#080029]"
        />
      </motion.div>
    </div>
  );
}
