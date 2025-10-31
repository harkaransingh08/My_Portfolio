import React from 'react'
import { motion } from 'framer-motion'
import "../App.css";
import { typingText } from '../Animations/Home_animation'
export default function Experience() {
    return (
        <div>
            <ul>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                ><h1 className="flex justify-center w-100 items-center font-bold  text-4xl hover:underline transition-all duration-300 text-white cursor-pointer hover:text-yellow-400  bg-white/10 backdrop-blur-md px-10 py-3 rounded-full m-10 ml-60 mr-60"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
   
                >
                        Experience
                    </h1>

                </motion.h1>

                <ul>
                    
                </ul>

            </ul>
        </div>
    )
}
