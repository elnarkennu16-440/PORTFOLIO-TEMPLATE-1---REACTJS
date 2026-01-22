import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#00df9a]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#00df9a] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#00df9a] to-teal-400 rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-56 h-56 md:w-72 md:h-72 rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#00df9a] text-xl font-bold">Web</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Frontend Developer & UI Designer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Kennu Elnar, a passionate frontend developer with expertise in creating modern, responsive, and interactive web applications. With a strong foundation in React, JavaScript, and modern CSS frameworks, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My approach combines technical skills with creative problem-solving to deliver exceptional user experiences. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <p className="text-2xl font-bold text-[#00df9a]">50+</p>
                <p className="text-gray-300">Projects</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <p className="text-2xl font-bold text-[#00df9a]">3+</p>
                <p className="text-gray-300">Years Exp</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <p className="text-2xl font-bold text-[#00df9a]">30+</p>
                <p className="text-gray-300">Clients</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <p className="text-2xl font-bold text-[#00df9a]">15+</p>
                <p className="text-gray-300">Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;