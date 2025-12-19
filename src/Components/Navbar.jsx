import React, { useEffect, useState } from 'react';
import logo from './Images/logo.png';
import { BookOpenText, PackageOpen, Headset, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { setIsVisible(true); }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const NavBar = [
    { name: "I learned", path: "/What i learned", icon: <BookOpenText size={20} /> },
    { name: "Projects", path: "/projects", icon: <PackageOpen size={20} /> },
    { name: "Contact", path: "/contact", icon: <Headset size={20} /> },
  ];

  return (
    <div
      className={`px-4 sm:px-6 lg:px-12 py-3 transform transition-transform duration-700 
      ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
    >
      <nav className="flex items-center justify-between relative">

        {/* Logo */}
        <div className="w-28 sm:w-32 md:w-40">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center justify-center 
                       gap-8 lg:gap-16 font-medium">
          {NavBar.map(link => (
            <li
              key={link.path}
              className="flex flex-col items-center relative cursor-pointer group hover:text-yellow-400"
            >
              {link.icon}
              <span className="text-sm lg:text-base">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 top-14 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="p-2 rounded-xl"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Resume Button (desktop) */}
        <div className="hidden md:flex bg-[#0b0033] font-medium 
                        h-10 px-6 items-center justify-center rounded-xl 
                        hover:text-yellow-400 transition-colors duration-300">
          <button>Download Resume</button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 w-full md:hidden z-50 transition-all duration-300
          ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
        >
          <div className="bg-[#0b0033] rounded-xl flex flex-col items-center py-6 gap-2 mx-2">
            {NavBar.map(link => (
              <div
                key={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 w-full px-6 py-3 
                           hover:text-yellow-400 cursor-pointer hover:bg-white/5 rounded-lg"
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </div>
            ))}

            <button
              className="mt-4 px-6 py-2 rounded-xl font-semibold 
                         bg-yellow-400 text-black"
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
