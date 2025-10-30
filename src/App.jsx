import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Home_2 from "./Components/Home_2";

export default function App() {
  return (
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
    </div>
  );
}
