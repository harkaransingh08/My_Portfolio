import React from 'react'
import ReactLogo from './Images/React-Logo.png'
import javascript from './Images/javascript.png'
import html from './Images/html.png'
import cLangauga from './Images/cLangauga.png'
import css from './Images/css.png'
import "../App.css";
import { motion } from "framer-motion";


export default function Home_2() {
  return (
    <div>

      <h1 className="flex justify-center font-bold text-4xl text-white bg-white/10 backdrop-blur-md px-10 py-3 rounded-2xl mb-10"
        style={{ fontFamily: "'Oswald', sans-serif" }}>
        The Languages I Learned
      </h1>

      <div className='cursor-pointer mt-30'>
        <ul className='flex justify-evenly items-center gap-10 px-10 flex-wrap mb-90 '>
          <li className='w-60 flex justify-center'>



            <motion.img
              src={ReactLogo}
              alt="React"
              className="object-contain"
              animate={{ rotate: [0, 360] }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
              whileHover={{
                scale: 1.6,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
            />
            <motion
              src={ReactLogo}
              alt="React"
              className="object-contain"
            />

          </li>
          <li className='w-60 mr-6 flex justify-center'>
            <motion.div

              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className='inline-block'

            >

              <motion.img
                src={javascript}
                alt="JavaScript"
                className="object-contain"
                whileHover={{
                  scale: 1.6,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
              />

            </motion.div>

          </li>


          <li className='w-40 flex mr-16 justify-center'>

            <motion.div
              className='inline-block'
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <motion.img
                src={cLangauga}
                alt="C Language"
                whileHover={{
                  scale: 1.6
                }}
              />

            </motion.div>



          </li>
          <li className='w-40 flex ml-2 justify-center'>

            <motion.div
              className='inline-block'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <motion.img
                src={html}
                alt="html"
                whileHover={{
                  scale: 1.6,
                  transition: { duration: 0.15 }
                }}
              />
            </motion.div>

          </li>
          <li className='w-80 mr-3flex justify-center'>

            <motion.div
  className="inline-block"
  animate={{ rotate: [0, 10, -10, 0] }}
  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
>
              <motion.img

                src={css}
                alt="css"
                 className="object-contain"
                whileHover={{
                  scale: 1.6,
                  transition: { duration: 0.15 }
                }}
              />
            </motion.div>

          </li>
        </ul>
      </div>
    </div>
  )
}
