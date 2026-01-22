import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
  ];

  const tools = [
    { name: 'Git', level: 85 },
    { name: 'Webpack', level: 75 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Figma', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#00df9a]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#00df9a] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-[#00df9a]">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00df9a] to-teal-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Professional Skills</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{tool.name}</span>
                    <span className="text-[#00df9a]">{tool.level}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00df9a] to-teal-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + (skills.length + index) * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'Python', 'English', 'Filipino'].map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-[#00df9a] transition-colors duration-300"
                  >
                    {lang}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;