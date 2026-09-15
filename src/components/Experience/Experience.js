import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

const experiences = [
  {
    role: "Flutter Developer",
    company: "Casper AI",
    period: "07/2026 – Present",
    type: "Part-time · Remote",
    description: "Building cross-platform mobile applications with Flutter for AI-driven products. Responsible for implementing clean, maintainable UI architecture, managing complex app state, and integrating with backend and AI services to deliver smooth, production-ready experiences.",
    skills: ["Flutter", "Dart", "Mobile Development", "State Management", "API Integration"],
    accent: "#22D3EE",
  },
  {
    role: "Full-Stack Developer",
    company: "Sityx",
    period: "12/2025 – Present",
    type: "Part-time · Remote",
    description: "Working remote as a full-stack developer for Sityx, a company based in Suwayda. Building and maintaining web applications end-to-end — from responsive frontend interfaces to backend APIs, databases, and deployment.",
    skills: ["React", "Node.js", "Express", "REST APIs", "Databases", "Full-Stack Development"],
    accent: "#A855F7",
  },
  {
    role: "Mobile Application Developer",
    company: "Al-Anqoud Multi-Service Platform",
    period: "11/2025 – 12/2025",
    type: "Volunteer",
    description: "Volunteer Flutter developer for Al-Anqoud, a community initiative improving bread distribution services in Suwayda. Built the citizen- and agent-facing app for managing bread quotas, including a high-speed QR validation module, offline-first local caching with background sync for areas with unstable connectivity, and an accessible, WCAG-conscious UI for all demographics, including elderly users.",
    skills: ["Flutter", "QR Code Scanning", "Offline-First Architecture", "CI/CD", "Accessibility (WCAG)"],
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
            Work{" "}
            <span className="text-gradient-purple">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A journey through engineering, development, and hands-on delivery.
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
