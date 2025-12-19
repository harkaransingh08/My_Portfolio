import React from 'react'
import ReactLogo from './Images/React-Logo.png'
import javascript from './Images/javascript.png'
import html from './Images/html.png'
import cLangauga from './Images/cLangauga.png'
import css from './Images/css.png'
import "../App.css";
import { motion } from "framer-motion";
import { typingText } from '../Animations/Home_animation'
import blender from '../Components/Images/blender.png'


export default function Home_2() {
  return (
    <div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        
      ><h1 className="flex justify-center items-center font-bold  text-4xl hover:underline transition-all duration-300 text-white cursor-pointer hover:text-yellow-400  bg-white/10 backdrop-blur-md px-10 py-3 rounded-full m-10 mx-auto"
        style={{ fontFamily: "'Oswald', sans-serif" }}
        variants={typingText}
         initial="hidden"
        whileInView="visible"
        >
          What I Learned
        </h1>

      </motion.h1>


      <div className='cursor-pointer mt-10 flex justify-center'>
        <ul className='flex justify-center items-center gap-25  flex-wrap mb-90 mx-auto'>
          <li>
            <div className="flex justify-center  mt-10 items-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mb-3">
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

            </div>
            <motion.ul className='text-lg bg-white/10 backdrop-blur-md justify-between  rounded-4xl h-150 p-5 mr-6 font-bold flex flex-col gap-5 text-white text-center max-w-[190px] mt-6'
              style={{ fontFamily: "'Oswald', sans-serif" }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <li className='hover:text-cyan-300 hover:scale-110 transition-transform duration-300'>Built interactive and reusable UI components</li>
              <hr />
              <li className='hover:text-cyan-300 hover:scale-110 transition-transform duration-300'>Managed state efficiently using Hooks and Context API</li>
              <hr />
              <li className='hover:text-cyan-300 hover:scale-110 transition-transform duration-300'>Implemented routing and API integration</li>
              <hr />
              <li className='hover:text-cyan-300 hover:scale-110 transition-transform duration-300'>Added motion effects with Framer Motion</li>

            </motion.ul>
          </li>

          <li>
            <div className='w-50 mt-10 flex items-center justify-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mx-auto
'>
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
            </div>

            <motion.ul className='text-lg font-bold bg-white/10 backdrop-blur-md justify-between h-150 rounded-4xl p-5 mx-auto flex flex-col gap-5 text-white text-center max-w-[190px] mt-6'
              style={{ fontFamily: "'Oswald', sans-serif" }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
              <li className='hover:text-yellow-300 hover:scale-110 transition-transform duration-300'>Developed dynamic, client-side functionality</li>
              <hr />
              <li className='hover:text-yellow-300 hover:scale-110 transition-transform duration-300'>Utilized modern ES6+ features for cleaner code</li>
              <hr />
              <li className='hover:text-yellow-300 hover:scale-110 transition-transform duration-300'>Handled asynchronous operations with Promises and async/await</li>
              <hr />
              <li className='hover:text-yellow-300 hover:scale-110 transition-transform duration-300'>Integrated APIs for data-driven applications</li>

            </motion.ul>
          </li>


          <li>
            <div className='w-50 items-center mt-10 flex  justify-center bg-white/10 backdrop-blur-md w-40 h-40  rounded-full p-5 mx-auto
'>

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

            </div>
            <motion.ul className='text-lg font-bold flex flex-col gap-5 h-150 justify-between bg-white/10 backdrop-blur-md rounded-4xl p-5 mx-auto
 text-white text-center max-w-[190px] mt-6 '
              style={{ fontFamily: "'Oswald', sans-serif" }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
              <li className='hover:text-blue-500 hover:scale-110 transition-transform duration-300' >Strong understanding of procedural programming</li>
              <hr />
              <li className='hover:text-blue-500 hover:scale-110 transition-transform duration-300' >Worked with pointers, memory management, and file handling</li>
              <hr />
              <li className='hover:text-blue-500 hover:scale-110 transition-transform duration-300' >Implemented algorithms and problem-solving techniques</li>
              <hr />
              <li className='hover:text-blue-500 hover:scale-110 transition-transform duration-300' >Built foundational understanding of system-level logic</li>

            </motion.ul>
          </li>


          <li >
            <div className='w-50 flex mt-10 items-center justify-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mx-auto'>
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
            </div>
            <motion.ul className='text-lg font-bold bg-white/10 h-150 backdrop-blur-md justify-between rounded-4xl p-5 mr-6 flex flex-col gap-5 text-white text-center max-w-[190px] mt-6 '
              style={{ fontFamily: "'Oswald', sans-serif" }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
              <li className='hover:text-orange-600 hover:scale-110 transition-transform duration-300' >Created semantic and accessible web structures</li><hr />
              <li className='hover:text-orange-600 hover:scale-110 transition-transform duration-300' >Optimized markup for performance and SEO</li><hr />
              <li className='hover:text-orange-600 hover:scale-110 transition-transform duration-300' >Designed responsive layouts using best practices</li><hr />
              <li className='hover:text-orange-600 hover:scale-110 transition-transform duration-300' >Ensured cross-browser compatibility</li>
            </motion.ul>
          </li>


          <li >
            <div className='w-50  mt-9 flex justify-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mr-6'>
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
                    scale: 1.3,
                    transition: { duration: 0.15 }
                  }}
                />
              </motion.div>

            </div>
            <motion.ul className='text-lg flex flex-col h-150 bg-white/10 mt-5 backdrop-blur-md justify-between rounded-4xl p-5 mr-6 font-bold gap-5 text-white text-center max-w-[190px] '
              style={{ fontFamily: "'Oswald', sans-serif" }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <li className='hover:text-cyan-400 hover:scale-110 transition-transform duration-300' >Styled responsive interfaces with Flexbox and Grid</li><hr />
              <li className='hover:text-cyan-400 hover:scale-110 transition-transform duration-300'>Created smooth animations and transitions</li><hr />
              <li className='hover:text-cyan-400 hover:scale-110 transition-transform duration-300'>Customized designs using Tailwind and media queries</li><hr />
              <li className='hover:text-cyan-400 hover:scale-110 transition-transform duration-300'>Optimized for performance and accessibility</li>
            </motion.ul>
          </li>
        <li >
            <div className='w-50  mt-9 flex justify-center bg-white/10 backdrop-blur-md w-40 h-40 rounded-full p-5 mr-6'>
               <motion.div

                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className='inline-block'

              >
                <motion.img

                  src={blender}
                  alt="blender"
                 className="object-contain "
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                />
              </motion.div>

            </div>
            <motion.ul className='text-lg flex flex-col h-150 bg-white/10 mt-5 backdrop-blur-md justify-between rounded-4xl p-5 mr-6 font-bold gap-5 text-white text-center max-w-[190px] '
              style={{ fontFamily: "'Oswald', sans-serif" }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <li className='hover:text-orange-400 hover:scale-110 transition-transform duration-300' >3D modeling and scene creation</li><hr />
              <li className='hover:text-orange-400 hover:scale-110 transition-transform duration-300'>Lighting, materials, and texturing for realistic visual</li><hr />
              <li className='hover:text-orange-400 hover:scale-110 transition-transform duration-300'>Animation and camera movement</li><hr />
              <li className='hover:text-orange-400 hover:scale-110 transition-transform duration-300'>Rendering with Cycles and Eevee</li>
            </motion.ul>
          </li>
          
        </ul>
        
        <hr />
        
      </div>
    </div>
  )
}
