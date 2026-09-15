import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

const skillCategories = [
  {
    label: "Frontend",
    icon: "⚡",
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    skills: [
      { name: "React.js", level: 78 },
      { name: "React Native", level: 50 },
      { name: "Flutter", level: 82 },
      { name: "Dart", level: 79 },
      { name: "Tailwind CSS", level: 74 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    label: "Backend",
    icon: "🔧",
    accent: "#A855F7",
    accentRgb: "168,85,247",
    skills: [
      { name: "Node.js", level: 66 },
      { name: "Django", level: 52 },
      { name: "Flask", level: 40 },
      { name: "Python", level: 68 },
      { name: "MySQL", level: 60 },
      { name: "PostgreSQL", level: 48 },
    ],
  },
  {
    label: "AI Tools",
    icon: "🤖",
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    skills: [
      { name: "Claude 3.5 Sonnet", level: 85 },
      { name: "Google Gemini", level: 68 },
      { name: "GitHub Copilot", level: 78 },
      { name: "AI Agent Orchestration", level: 58 },
      { name: "OpenAI API", level: 62 },
      { name: "Vibe Coding", level: 75 },
    ],
  },
  {
    label: "Databases",
    icon: "🗄️",
    accent: "#A855F7",
    accentRgb: "168,85,247",
    skills: [
      { name: "SQL", level: 62 },
      { name: "MySQL", level: 60 },
      { name: "Firebase", level: 55 },
      { name: "NoSQL", level: 48 },
      { name: "MongoDB", level: 42 },
      { name: "PostgreSQL", level: 48 },
    ],
  },
];

function SkillBar({ name, level, accent, accentRgb, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color: accent }}>{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: `rgba(${accentRgb}, 0.1)` }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.9, delay: index * 0.07 + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accent}, rgba(${accentRgb}, 0.4))`,
            boxShadow: `0 0 8px rgba(${accentRgb}, 0.4)`,
          }}
        />
      </div>
    </motion.div>
  );
}

const otherSkills = [
  "TypeScript", "REST APIs", "GraphQL", "WebSockets", "Redis",
  "Figma", "Agile / Scrum", "CI/CD", "Pandas", "NumPy",
  "TensorFlow", "HuggingFace", "Docker", "AWS", "Linux",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="section-title text-white mb-4">
            Skills &{" "}
            <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A broad toolkit built through years of hands-on engineering and continuous learning.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              viewport={{ once: true }}
              className="glass glass-hover rounded-xl p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                  style={{
                    background: `rgba(${cat.accentRgb}, 0.1)`,
                    border: `1px solid rgba(${cat.accentRgb}, 0.2)`,
                  }}
                >
                  {cat.icon}
                </span>
                <span
                  className="font-display font-semibold text-sm"
                  style={{ color: cat.accent }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  accent={cat.accent}
                  accentRgb={cat.accentRgb}
                  index={si}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Other skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6"
        >
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
            Also proficient in
          </p>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="tag cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
