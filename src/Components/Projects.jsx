import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Calendar,
  Code,
  ChevronRight,
  Filter,
  Instagram
} from 'lucide-react';
import elevate from './Images/elevate.png';

export default function Project() {
  const [filter, setFilter] = useState('All');

  const ProjectData = [
    {
      projectName: 'PORTFOLIO',
      img: 'https://st2.depositphotos.com/1032577/6582/i/450/depositphotos_65828845-stock-photo-portfolio-written-on-notebook.jpg',
      des: 'A modern, responsive portfolio website showcasing my projects and skills with smooth animations and clean design.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
      startDate: '02-Oct-2025',
      endDate: '31-Oct-2025',
      info: 'Frontend Project',
      category: 'Frontend',
      githubLink: 'https://github.com/harkaransingh08/my_portfolio.git',
      deploymentLink: 'https://myportfolio-six-inky.vercel.app/'
    },
    {
      projectName: 'OTT-PLATFORM',
      img: elevate,
      des: 'A full-stack e-book platform with user authentication, book uploads, and digital reading capabilities.',
      tech: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Framer Motion',
        'Lucide Icons',
        'NodeJs',
        'ExpressJs',
        'MongoDB',
        'Mongoose',
        'Cloudinary'
      ],
      startDate: '05-Nov-2025',
      endDate: '20-Dec-2025',
      info: 'Full Stack Project',
      category: 'Full Stack',
      githubLink: 'https://github.com/harkaransingh08/Elevate_2.git',
      deploymentLink: 'https://elevate-2.vercel.app/'
    },
    {
      projectName: 'BLENDER',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A966nawqqzga9Qz0b9t9x123DoiWMXiBhYtit6TCuw&s',
      des: 'A 3D model viewer web application that allows users to upload, view, and interact with 3D models in various formats directly in the browser.',
      tech: [],
      startDate: '02-May-2026',
      info: '3D-MODELS Project',
      category: '3D-MODELS',
      instagramLink: 'https://www.instagram.com/novaatlass?igsh=NWY4cmVobDBsb3By'
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', '3D-MODELS'];
  const filteredProjects =
    filter === 'All'
      ? ProjectData
      : ProjectData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen py-12 px-10">
      <div className="flex flex-col items-center mx-auto">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-white/10 backdrop-blur-md px-10 py-3 rounded-full
                     text-4xl font-bold text-white hover:text-yellow-400
                     hover:underline transition-all duration-300"
                     style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          My Projects
        </motion.h1>

        {/* Filters */}
        <div className="flex justify-center my-10">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 flex gap-2 border border-slate-700">
            <Filter className="w-5 h-5 text-purple-400 mt-1" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.projectName}
                layout
                whileHover={{ y: -10 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-3xl
                           border border-slate-700/50 overflow-hidden shadow-xl
                           flex flex-col"
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.projectName}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 flex justify-between">
                    {project.projectName}
                    <ChevronRight className="text-purple-400" />
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.des}
                  </p>

                  <div className="text-sm text-gray-400 mb-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      {project.startDate} {project.endDate && `- ${project.endDate}`}
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-400" />
                      {project.info}
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="mt-auto pt-4 border-t border-slate-700/50 flex gap-3">

                    {project.category !== '3D-MODELS' ? (
                      <>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2
                                     bg-slate-700/50 hover:bg-slate-700
                                     text-gray-300 hover:text-white
                                     px-4 py-2 rounded-xl transition"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>

                        <a
                          href={project.deploymentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2
                                     bg-gradient-to-r from-purple-600 to-pink-600
                                     text-white px-4 py-2 rounded-xl transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      </>
                    ) : (
                      <a
                        href={project.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2
                                   bg-gradient-to-r from-pink-500 to-purple-500
                                   text-white px-4 py-2 rounded-xl transition"
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                    )}

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
