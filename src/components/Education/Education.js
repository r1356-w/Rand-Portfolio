import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const educationData = [
  {
    degree: "Diploma in Business Administration",
    institution: "University of the People, United States",
    period: "2025 – Present",
    location: "United States",
    type: "diploma"
  },
  {
    degree: "Bachelor of Information and Technology Engineering (ITE)",
    institution: "Syrian Virtual University, Syria",
    period: "2020 – 2026",
    location: "Syria",
    major: "Major: Data Science",
    type: "bachelor"
  },
  {
    degree: "Bachelor's Degree in Business Administration",
    institution: "University of the People, United States",
    period: "2020 – 2025",
    location: "United States",
    type: "bachelor"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-4">Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My academic journey in technology and business administration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-8 border border-slate-800 hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full ${
                      edu.type === 'diploma' ? 'bg-purple-400' : 'bg-cyan-400'
                    }`} />
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 font-medium mb-2">
                    {edu.institution}
                  </p>
                  
                  {edu.major && (
                    <p className="text-slate-400 text-sm mb-3">
                      {edu.major}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`px-3 py-1 rounded-full text-xs font-mono ${
                    edu.type === 'diploma' 
                      ? 'bg-purple-400/10 text-purple-400 border border-purple-400/20'
                      : 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20'
                  }`}>
                    {edu.type === 'diploma' ? 'Diploma' : 'Bachelor'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
