import React from 'react'
import { motion } from 'framer-motion'
import "../App.css";
import { typingText } from '../Animations/Home_animation'
import { MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div>
            <ul >
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                ><h1 className="flex justify-center mt-20 font-bold  text-4xl hover:underline transition-all duration-300 text-white cursor-pointer hover:text-pink-500  bg-white/10 backdrop-blur-md px-10 py-3 rounded-full "
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                    Contact
                    </h1>
                </motion.h1>
            </ul>

            <ul>
                <li className='flex px-50 py-10 hover:text-pink-600 hover:underline hover:scale-110 transition-all duration-300 text-white font-semibold gap-2 text-xl'>

                    <MapPin />
                    INDIA
                </li>


            </ul>
        </div>
    )
}
