import React from 'react'
import { motion } from 'framer-motion'
import "../App.css";
import { typingText } from '../Animations/Home_animation'
export default function Experience() {
    return (
        <div>
            <ul>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                ><h1 className="flex justify-center  mt-20 w-100 items-center font-bold  text-4xl hover:underline transition-all duration-300 text-white cursor-pointer hover:text-yellow-400  bg-white/10 backdrop-blur-md px-10 py-3 rounded-full m-10 ml-60 mr-60"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                        Education
                    </h1>

                </motion.h1>
             </ul>


             <ul className='flex flex-col gap-5 list justify-evenly font-semibold'
             style={{ fontFamily: "'Oswald', sans-serif" }}
             >
                <li className='cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all '>I am a recent graduate with a degree in Computer Science.</li> <hr />
                <li className='cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all '>I have a strong foundation in programming languages, algorithms, and data structures.</li> <hr />
                <li className='cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all '>I am passionate about coding and problem-solving.</li> <hr />
                
             </ul>

            <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                ><h1 className="flex justify-center w-100 items-center font-bold mt-30 text-4xl hover:underline transition-all duration-300 text-white cursor-pointer hover:text-yellow-400  bg-white/10 backdrop-blur-md px-10 py-3 rounded-full m-10 ml-60 mr-60"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                        My Experience
                    </h1>

                </motion.h1>

                <ul className='flex flex-col gap-5  font-semibold'
                style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                    <h1 className='text-2xl cursor-pointer hover:scale-120 transition-all ml-30 W-100 mr-50 bg-blue-600 text-red-300 h-10  rounded-xl hover:underline'>Front-End Developer Intern | TechNova Labs     (June 2025 – Sept 2025)</h1>
                    <li className='cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all'>Collaborated with a small team to design and develop responsive web pages using React and Tailwind CSS.</li><hr />
                    <li  className='cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all'>Worked on improving UI performance and optimizing code for better load times.</li><hr />
                    <li  className='cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all'>Assisted in testing and debugging across multiple browsers and devices.</li><hr />
                    <li  className='cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all'>Built multiple web projects using React, Tailwind, and motion animations.</li><hr />
                    <li  className='cursor-pointer hover:text-yellow-400 hover:scale-110 transition-all'>Experimented with APIs, animations, and performance optimization techniques.</li><hr />
                   
                </ul>



        </div>
    )
}
