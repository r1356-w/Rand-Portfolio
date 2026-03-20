import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

const experiences = [
  {
    role: "Flutter Developer | Software Development",
    company: "Suwayda, Syria",
    period: "09/2025 – Present",
    type: "Full-time",
    description: "Leading the development of service-oriented mobile applications using Flutter to enhance local community services. Responsible for designing and implementing responsive user interfaces and ensuring seamless performance across platforms. Collaborating with back-end teams to integrate RESTful APIs and manage complex application states.",
    skills: ["Flutter", "React", "RESTful APIs", "UI/UX Design", "Mobile Development"],
    accent: "#22D3EE",
  },
  {
    role: "Flutter Developer Trainee",
    company: "MadSolution Company",
    period: "07/2024 – 08/2024",
    type: "Internship",
    description: "Developed cross-platform mobile applications using Flutter, ensuring smooth UI/UX and high performance. Integrated applications with APIs and managed complex application states for reliability. Gained hands-on experience in the full software development lifecycle (SDLC) and received a certificate of appreciation. Collaborated within a team environment to deliver technical projects under tight deadlines.",
    skills: ["Flutter", "Mobile Development", "API Integration", "SDLC", "Team Collaboration"],
    accent: "#A855F7",
  },
  {
    role: "Bachelor of Information and Technology Engineering (ITE)",
    company: "Syrian Virtual University",
    period: "2020 – 2026",
    type: "Education",
    description: "Bachelor's degree in Information Technology Engineering with specialization in Data Science. Focused on software architecture, algorithms, databases, computer networks, and applied data science.",
    skills: ["Data Science", "Machine Learning", "Algorithms", "Databases", "Statistical Analysis"],
    accent: "#22D3EE",
  },
  {
    role: "Bachelor's Degree in Business Administration",
    company: "University of the People",
    period: "2020 – 2025",
    type: "Education",
    description: "Professional degree in Business Administration complementing technical expertise with business acumen, project management, and strategic planning skills.",
    skills: ["Business Strategy", "Project Management", "Strategic Planning", "Leadership"],
    accent: "#A855F7",
  },
  {
    role: "Diploma in Business Administration",
    company: "University of the People",
    period: "2025 – Present",
    type: "Diploma",
    description: "Advanced diploma in Business Administration focusing on modern business practices and management strategies.",
    skills: ["Business Administration", "Management", "Strategic Planning"],
    accent: "#22D3EE",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Background</SectionLabel>
          <h2 className="section-title text-white mb-4">
            Experience &{" "}
            <span className="text-gradient-purple">Education</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A journey through engineering, development, and continuous learning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, #22D3EE, rgba(168,85,247,0.5), transparent)",
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
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
                    borderColor: exp.accent,
                    background: "#0F172A",
                    boxShadow: `0 0 12px ${exp.accent}50`,
                    transform: "translateX(-50%)",
                  }}
                />

                {/* Card */}
                <div className="glass glass-hover rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: exp.accent }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-mono px-2 py-1 rounded"
                        style={{
                          background: `rgba(${exp.accent === "#22D3EE" ? "34,211,238" : "168,85,247"}, 0.08)`,
                          border: `1px solid rgba(${exp.accent === "#22D3EE" ? "34,211,238" : "168,85,247"}, 0.15)`,
                          color: exp.accent,
                        }}
                      >
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
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
