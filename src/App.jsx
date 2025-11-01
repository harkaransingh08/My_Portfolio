// src/App.jsx (Updated with Lenis)

import React from "react";
import { ReactLenis } from 'lenis/react'; // 1. ADD THIS IMPORT
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Home_2 from "./Components/Home_2";
import Experience from './Components/Experience'
import Projects from './Components/Projects'

export default function App() {
  return (
    // 2. WRAP YOUR ENTIRE APP WITH THIS COMPONENT
    <ReactLenis root>
      <div className="relative text-white overflow-x-hidden bg-gradient-to-b from-[#000000] via-[#0a0047] to-[#020024]">
        <Navbar />

        {/* Layer 1 */}
        <section className="min-h-screen flex items-center justify-center">
          <Home />
        </section>

        {/* Layer 2 */}
        <section className="min-h-screen flex items-center justify-center">
          <Home_2 />
        </section>

        {/* Layer 3 */}
        <section className=" flex items-center justify-center">
          <Experience />
        </section>


        {/* Layer 4 */}
        <section className=" flex items-center justify-center">
          <Projects />
        </section>
        
      </div>
    </ReactLenis>
  );
}