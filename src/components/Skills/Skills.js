import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

const skillCategories = [
  {
    label: "Mobile",
    icon: "📱",
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    tagClass: "tag",
    skills: ["Flutter", "Dart", "GetX", "Riverpod", "Dio", "Google Maps", "Offline-First", "React Native (basic)"],
  },
  {
    label: "Front-End",
    icon: "⚡",
    accent: "#A855F7",
    accentRgb: "168,85,247",
    tagClass: "tag tag-purple",
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Vue.js", "Responsive Design", "i18n / RTL"],
  },
  {
    label: "Back-End",
    icon: "🔧",
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    tagClass: "tag",
    skills: ["Node.js", "Express.js", "Django", "Flask", "Python", "REST APIs", "WebSockets", "JWT Auth"],
  },
  {
    label: "Databases",
    icon: "🗄️",
    accent: "#A855F7",
    accentRgb: "168,85,247",
    tagClass: "tag tag-purple",
    skills: ["SQL", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase"],
  },
  {
    label: "Tools & DevOps",
    icon: "🛠️",
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    tagClass: "tag",
    skills: ["Git & GitHub", "Docker", "CI/CD", "Stripe", "Figma"],
  },
  {
    label: "AI-Assisted Development",
    icon: "🤖",
    accent: "#A855F7",
    accentRgb: "168,85,247",
    tagClass: "tag tag-purple",
    skills: ["Claude", "Google Gemini", "GitHub Copilot", "OpenAI API", "HuggingFace", "Prompt Engineering"],
  },
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
            The tools I use to design, build, and ship production applications.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              viewport={{ once: true }}
              className="glass glass-hover rounded-xl p-6"
            >
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

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`${cat.tagClass} cursor-default`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
