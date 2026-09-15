import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

const education = [
  {
    degree: "Bachelor of Information and Technology Engineering (ITE)",
    institution: "Syrian Virtual University",
    period: "2020 – 2026",
    type: "Bachelor's Degree",
    description: "Bachelor's degree in Information Technology Engineering with specialization in Data Science. Focused on software architecture, algorithms, databases, computer networks, and applied data science.",
    skills: ["Data Science", "Machine Learning", "Algorithms", "Databases", "Statistical Analysis"],
    accent: "#22D3EE",
  },
  {
    degree: "Bachelor's Degree in Business Administration",
    institution: "University of the People",
    period: "2020 – 2025",
    type: "Bachelor's Degree",
    description: "Professional degree in Business Administration complementing technical expertise with business acumen, project management, and strategic planning skills.",
    skills: ["Business Strategy", "Project Management", "Strategic Planning", "Leadership"],
    accent: "#A855F7",
  },
  {
    degree: "Diploma in Business Administration",
    institution: "University of the People",
    period: "2025 – Present",
    type: "Diploma",
    description: "Advanced diploma in Business Administration focusing on modern business practices and management strategies.",
    skills: ["Business Administration", "Management", "Strategic Planning"],
    accent: "#22D3EE",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Academics</SectionLabel>
          <h2 className="section-title text-white mb-4">
            Education &{" "}
            <span className="text-gradient-cyan">Learning</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Academic foundations spanning information technology and business administration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, #A855F7, rgba(34,211,238,0.5), transparent)",
            }}
          />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2"
                  style={{
                    borderColor: edu.accent,
                    background: "#0F172A",
                    boxShadow: `0 0 12px ${edu.accent}50`,
                    transform: "translateX(-50%)",
                  }}
                />

                {/* Card */}
                <div className="glass glass-hover rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: edu.accent }}>
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-mono px-2 py-1 rounded"
                        style={{
                          background: `rgba(${edu.accent === "#22D3EE" ? "34,211,238" : "168,85,247"}, 0.08)`,
                          border: `1px solid rgba(${edu.accent === "#22D3EE" ? "34,211,238" : "168,85,247"}, 0.15)`,
                          color: edu.accent,
                        }}
                      >
                        {edu.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
