import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code, ChevronRight, Filter } from 'lucide-react';
import elevate from './Images/elevate.png'

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
            info: "Frontend Project",
            category: "Frontend",
            githubLink: 'https://github.com/Manoj-Dev/Portfolio',
            deploymentLink: 'https://myportfolio-six-inky.vercel.app/'
        },
        {
            projectName: 'OTT-PLATFORM ',
            des: 'A full-stack e-book platform with user authentication, book uploads, and digital reading capabilities.',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'NodeJs', 'ExpressJs', 'MongoDB', 'Mongoose', 'Cloudinary'],
            img: elevate,
            startDate: '05-Nov-2025',
            endDate: '20-Dec-2025',
            deploymentLink: 'https://elevate-2.vercel.app/',
            info: "Full Stack Project",
            category: "Full Stack",
            githubLink: 'https://github.com/harkaransingh08/my_portfolio.git',
        },
        {
            projectName: 'BLENDER',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A966nawqqzga9Qz0b9t9x123DoiWMXiBhYtit6TCuw&s',
            deploymentLink: 'https://manoj-dev.github.io/Portfolio/',
            des: 'A 3D model viewer web application that allows users to upload, view, and interact with 3D models in various formats directly in the browser.',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'NodeJs', 'ExpressJs', 'MongoDB', 'Mongoose', 'Cloudinary'],
            startDate: '02-May-2026',
            info: "3D-MODELS Project",
            category: "Full Stack",
            githubLink: 'https://github.com/Manoj-Dev/Portfolio',

        },
    ];

    const categories = ['All', 'Frontend', 'Full Stack','3D-MODELS'];
    const filteredProjects = filter === 'All'
        ? ProjectData
        : ProjectData.filter(project => project.category === filter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        }
    };

    const techVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 200
            }
        })
    };

    return (
        <div className="min-h-screen  py-12 px-10">
            <div className=" flex flex-col  items-center mx-auto">
                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                ><h1 className="flex justify-center flex-col mt-20 w-100 items-center font-bold  text-4xl hover:underline transition-all duration-300 text-white cursor-pointer hover:text-yellow-400  bg-white/10 backdrop-blur-md px-10 py-3 rounded-full m-10 ml-60 mr-60 "
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                        My Projects
                    </h1>

                </motion.h1>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mb-8"
                >
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 flex gap-2 border border-slate-700">
                        <Filter className="w-5 h-5 text-purple-400 mt-1" />
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${filter === category
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                                        : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.projectName}
                                variants={itemVariants}
                                whileHover="hover"
                                className="group cursor-pointer"
                                layout
                            >
                                <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col">

                                    {/* Project Image */}
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                            src={project.img}
                                            alt={project.projectName}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Tech Stack Overlay */}
                                        <motion.div
                                            className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {project.tech.slice(0, 3).map((tech, i) => (
                                                <motion.span
                                                    key={tech}
                                                    custom={i}
                                                    variants={techVariants}
                                                    className="px-2 py-1 bg-slate-900/90 backdrop-blur-sm text-xs font-medium text-blue-300 rounded-full border border-blue-500/30"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <motion.span
                                                    custom={3}
                                                    variants={techVariants}
                                                    className="px-2 py-1 bg-slate-900/90 backdrop-blur-sm text-xs font-medium text-purple-300 rounded-full border border-purple-500/30"
                                                >
                                                    +{project.tech.length - 3}
                                                </motion.span>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-3">
                                                <motion.h3
                                                    className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    {project.projectName}
                                                </motion.h3>
                                                <ChevronRight className="w-5 h-5 text-purple-400 transform group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>

                                            <motion.p
                                                className="text-gray-400 text-sm mb-4 line-clamp-2"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {project.des}
                                            </motion.p>

                                            {/* Project Info */}
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Calendar className="w-4 h-4 text-purple-400" />
                                                    <span>{project.startDate} - {project.endDate}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Code className="w-4 h-4 text-blue-400" />
                                                    <span>{project.info}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <motion.div
                                            className="flex gap-3 pt-4 border-t border-slate-700/50"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <motion.a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-xl transition-all duration-300 border border-slate-600 hover:border-slate-500"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span className="text-sm font-medium">Code</span>
                                            </motion.a>

                                            <motion.a
                                                href={project.deploymentLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span className="text-sm font-medium">Live Demo</span>
                                            </motion.a>
                                        </motion.div>
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