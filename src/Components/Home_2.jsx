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

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ><h1 className="flex justify-center items-center font-bold text-4xl hover:underline transition-all duration-300 text-white cursor-pointer hover:text-yellow-400  bg-white/10 backdrop-blur-md px-10 py-3 rounded-full m-10 ml-90 mr-90"
        style={{ fontFamily: "'Oswald', sans-serif" }}>
        The Languages I Learned
      </h1>
      
      </motion.div>
      

      <div className='cursor-pointer mt-30'>
        <ul className='flex justify-evenly items-center gap-10 px-0 flex-wrap mb-90  '>
          <li className='w-60 flex justify-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mr-6'>
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
          <li className='w-60 mr-6 mb-5 flex items-center justify-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mr-6'>
            <motion.div

              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className='inline-block'

            >

              <motion.img
                src={javascript}
                alt="JavaScript"
                className="object-contain "
                whileHover={{
                  scale: 1.4,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
              />

            </motion.div>

          </li>


          <li className='w-70 items-center  flex  justify-center bg-white/10 backdrop-blur-md w-40 h-40  rounded-full p-5 mr-6'>

            <motion.div
              className='inline-block '
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <motion.img
                src={cLangauga}
                alt="C Language"
                whileHover={{
                  scale: 2.1
                }}
              />

            </motion.div>



          </li>
          <li className='w-70 flex ml-2 justify-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mr-6'>

            <motion.div
              className='inline-block'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <motion.img
                src={html}
                alt="html"
                whileHover={{
                  scale: 1.4,
                  transition: { duration: 0.15 }
                }}
              />
            </motion.div>

          </li>
          <li className='w-60 mr-3flex justify-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mr-6'>

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
