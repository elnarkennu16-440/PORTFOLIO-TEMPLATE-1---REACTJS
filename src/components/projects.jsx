import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce solution with cart functionality and payment integration.',
      technologies: ['React', 'Redux', 'Stripe'],
      image: 'https://via.placeholder.com/600x400/1f2937/00df9a?text=E-commerce+Platform'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects with deadline tracking.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400/1f2937/00df9a?text=Task+Manager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with forecasting and location services.',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      image: 'https://via.placeholder.com/600x400/1f2937/00df9a?text=Weather+Dashboard'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Creative portfolio template with smooth animations and responsive design.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400/1f2937/00df9a?text=Portfolio+Site'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics and engagement tracking.',
      technologies: ['React', 'Chart.js', 'Node.js'],
      image: 'https://via.placeholder.com/600x400/1f2937/00df9a?text=Social+Dashboard'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-first application for tracking workouts and nutrition goals.',
      technologies: ['React Native', 'MongoDB', 'Express'],
      image: 'https://via.placeholder.com/600x400/1f2937/00df9a?text=Fitness+Tracker'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#00df9a]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#00df9a] mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Here are some of my recent projects showcasing my skills and expertise in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-[#00df9a]/10 text-[#00df9a] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-transparent border border-[#00df9a] text-[#00df9a] rounded-lg hover:bg-[#00df9a] hover:text-gray-900 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;