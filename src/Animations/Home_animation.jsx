// src/animations.js
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

export const typingText = {
  hidden:{opacity : 0},
  visible : (i = 1 ) => ({
    opacity :1 ,
    transition : {
      delayChildren : i * 0.05,
      staggerChildren : 0.05
    },
  }),
};

export const typingLetter = {
  hidden : {opacity : 0 , y : 10},
  visible : {opacity : 1 , y : 0}
}