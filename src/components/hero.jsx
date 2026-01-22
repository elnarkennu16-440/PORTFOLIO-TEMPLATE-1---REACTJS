import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="min-h-[800px] flex flex-col justify-center pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="text-[#00df9a] font-bold text-lg px-4 py-2 bg-[#00df9a]/10 rounded-full">
                  FULL STACK DEVELOPER
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
              >
                Hi, I'm <span className="text-[#00df9a]">YOUR NAME</span><br />
                A Web Developer
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xl text-gray-300 mb-6 max-w-lg lg:max-w-md"
              >
                I build responsive and stylistic websites using React and Tailwind CSS.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#00df9a] to-teal-500 text-gray-900 font-bold rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-[#00df9a] text-[#00df9a] font-bold rounded-lg hover:bg-[#00df9a] hover:text-gray-900 transition-colors duration-300"
                >
                  Contact Me
                </motion.button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="mt-12 flex justify-center lg:justify-start space-x-6"
              >
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -5 }}
                    className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center"
                  >
                    <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#00df9a] to-teal-400 rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-56 h-56 md:w-72 md:h-72 rounded-full" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -left-4 w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-lg z-10"
                >
                  <span className="text-[#00df9a] text-xl font-bold">Web</span>
                </motion.div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-[#00df9a] to-teal-500 rounded-2xl shadow-xl transform rotate-6"></div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <a href="#about">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block cursor-pointer"
              >
                <div className="w-6 h-10 rounded-full border-2 border-[#00df9a] flex justify-center">
                  <div className="w-1 h-3 bg-[#00df9a] rounded-full mt-2"></div>
                </div>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;