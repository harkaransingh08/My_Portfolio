import React from "react";
import { ReactLenis } from 'lenis/react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Home_2 from "./Components/Home_2";
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default function App() {
  return (
    <ReactLenis root>
      <div className="relative text-white overflow-x-hidden bg-linear-to-b from-[#000000] via-[#0a0047] to-[#020024]">
        <Navbar />

        {/* Layer 1 */}
        <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12">
          <Home />
        </section>

        {/* Layer 2 */}
        <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12 mt-10 sm:mt-24 lg:mt-32">
          <Home_2 />
        </section>

        {/* Layer 3 */}
        <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12">
          <Experience />
        </section>

        {/* Layer 4 */}
        <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12">
          <Projects />
        </section>

        {/* Layer 5 */}
        <div className="bg-gray-800/50 rounded-2xl sm:rounded-3xl lg:rounded-4xl 
                        mx-4 sm:mx-8 lg:mx-16 
                        my-16 sm:my-24 lg:my-32 
                        px-4 sm:px-8 lg:px-16 py-12">
          <Contact />
        </div>
        
      </div>
    </ReactLenis>
  );
}
