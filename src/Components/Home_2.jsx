import React, { useState } from 'react'
import { Code2, Sparkles } from 'lucide-react'

export default function Home_2() {
  const [hoveredTech, setHoveredTech] = useState(null)

  const technologies = [
    { 
      name: 'JavaScript', 
      color: '#F7DF1E', 
      symbol: 'JS',
      description: 'Dynamic programming language for web development'
    },
    { 
      name: 'Python', 
      color: '#3776AB', 
      symbol: 'Py',
      description: 'Versatile language for data science and backend'
    },
    { 
      name: 'React', 
      color: '#61DAFB', 
      symbol: 'Re',
      description: 'JavaScript library for building user interfaces'
    },
    { 
      name: 'Node.js', 
      color: '#339933', 
      symbol: 'Nd',
      description: 'JavaScript runtime for server-side development'
    },
    { 
      name: 'TypeScript', 
      color: '#3178C6', 
      symbol: 'TS',
      description: 'Typed superset of JavaScript for scalable apps'
    },
    { 
      name: 'MongoDB', 
      color: '#47A248', 
      symbol: 'Mg',
      description: 'NoSQL database for modern applications'
    },
    { 
      name: 'Express', 
      color: '#000000', 
      symbol: 'Ex',
      description: 'Minimal Node.js web application framework'
    },
    { 
      name: 'Git', 
      color: '#F05032', 
      symbol: 'Git',
      description: 'Version control system for tracking changes'
    },
    { 
      name: 'Tailwind', 
      color: '#06B6D4', 
      symbol: 'Tw',
      description: 'Utility-first CSS framework for rapid UI'
    },
    { 
      name: 'PostgreSQL', 
      color: '#4169E1', 
      symbol: 'Pg',
      description: 'Advanced open-source relational database'
    },
    { 
      name: 'Docker', 
      color: '#2496ED', 
      symbol: 'Dk',
      description: 'Platform for containerizing applications'
    },
    { 
      name: 'AWS', 
      color: '#FF9900', 
      symbol: 'Aw',
      description: 'Cloud computing platform and services'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 3}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <nav className="relative bg-gray-900/30 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="w-8 h-8 text-purple-400 animate-pulse" />
              <span className="text-white font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-purple-300">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">Hover to explore</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Technologies I've Mastered
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of the cutting-edge technologies and frameworks I use to build modern applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="relative group"
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{
                animation: `float 3s ease-in-out infinite, fade-in-up 0.6s ease-out forwards`,
                animationDelay: `${index * 0.1}s, ${index * 0.05}s`
              }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500"
                  style={{
                    backgroundColor: tech.color,
                    opacity: hoveredTech === index ? 0.4 : 0
                  }}
                />
                
                {/* Tech card */}
                <div
                  className="relative w-full aspect-square rounded-2xl flex items-center justify-center font-bold text-2xl cursor-pointer transition-all duration-500 shadow-2xl border-2"
                  style={{
                    backgroundColor: hoveredTech === index ? tech.color : `${tech.color}22`,
                    borderColor: hoveredTech === index ? tech.color : `${tech.color}44`,
                    color: tech.color === '#F7DF1E' || tech.color === '#000000' ? (hoveredTech === index ? '#000' : tech.color) : '#fff',
                    transform: hoveredTech === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                  }}
                >
                  {tech.symbol}
                  
                  {/* Sparkle effect on hover */}
                  {hoveredTech === index && (
                    <>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                    </>
                  )}
                </div>

                {/* Description tooltip */}
                <div
                  className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 transition-all duration-300 pointer-events-none"
                  style={{
                    opacity: hoveredTech === index ? 1 : 0,
                    transform: hoveredTech === index ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-10px)'
                  }}
                >
                  <div className="bg-gray-900/95 backdrop-blur-lg border border-purple-500/30 rounded-xl p-4 shadow-2xl">
                    <h3 className="text-white font-bold text-lg mb-1">{tech.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45 border-l border-t border-purple-500/30" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">{technologies.length}+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-gray-300">Projects Built</div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-lg border border-pink-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-gray-300">Passion Level</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}