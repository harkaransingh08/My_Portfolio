import React, { useEffect, useState } from 'react';
import Image from './images/Image.png';
import { BookOpenText, PackageOpen, Headset, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { setIsVisible(true); }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent background scroll when menu open (mobile)
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const NavBar = [
    { name: "Summary", path: "/summary", icon: <BookOpenText /> },
    { name: "Projects", path: "/projects", icon: <PackageOpen /> },
    { name: "Contact", path: "/contact", icon: <Headset /> },
  ];

  return (
    <div className={`px-4 py-0 transform transition-transform duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
      <nav className="flex items-center justify-between bg-transparent select-none text-inherit relative">

        {/* Logo */}
        <div className="w-40">
          <img src={Image} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-wrap justify-center gap-6 font-medium sm:gap-10 md:gap-20">
          {NavBar.map(link => (
            <li key={link.path} className="flex flex-col items-center relative cursor-pointer group hover:text-yellow-400">
              {link.icon}
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 top-14 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="p-2 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Resume Button (desktop) */}
        <div className="hidden md:flex mr-20 bg-[#0b0033] font-medium h-10 w-40 items-center justify-center rounded-2xl hover:text-yellow-400 transition-colors duration-300">
          <button>Download Resume</button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 w-full md:hidden z-50 transition-all duration-300
            ${isMenuOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-4 opacity-0 pointer-events-none"}`}
        >
          <div className="bg-[#0b0033] text-white flex flex-col items-center py-4 gap-2">
            {NavBar.map(link => (
              <div
                key={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 w-full px-6 py-3 cursor-pointer hover:bg-white/5"
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </div>
            ))}
            <button
              className="mx-auto my-3 px-6 py-2 rounded-xl font-semibold bg-yellow-400 text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Resume
            </button>
          </div>
        </div>

      </nav>
    </div>  
  );
}
