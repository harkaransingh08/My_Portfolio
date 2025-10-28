import React from "react";
import pfp from "./Images/pfp.png";
import { motion } from "framer-motion";
import { fadeInUp, typingText, typingLetter } from "../Animations/Home_animation";

export default function Home() {
  const text = `I’m Monkey, a curious mind trapped in a suit, driven by instinct and imagination.
  I believe in solving complex problems with simple ideas, learning fast, and adapting faster.
  Whether it’s coding, creating, or just figuring out how the world works, I approach every challenge
  with a mix of logic, curiosity, and a bit of wild energy. Intelligence may have evolved,
  but curiosity never left the jungle.`;

  return (
    <div className="flex justify-evenly py-20">

      {/* Animated text */}
      <motion.div
        className="max-w-xl text-justify leading-relaxed text-white font-medium text-lg"
        variants={typingText}
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
          className="flex rounded-full h-70 bg-[#0b0033]"
        />
      </motion.div>
    </div>
  );
}
