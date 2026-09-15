import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

const certifications = [
  { title: "English Language Course: B1 Intermediate", issuer: "Osoos, Sweida, Syria", date: "Jul 2025" },
  { title: "Flutter Firebase (Insta App)", issuer: "Udemy", date: "Jan 2024" },
  { title: "Mobile Application Development using Flutter", issuer: "Osoos, Sweida, Syria", date: "Dec 2023" },
  { title: "ICDL Training Course", issuer: "IECD, Sweida, Syria", date: "Apr 2021" },
  { title: "General English Conversation Course", issuer: "Al-Maarefa, Sweida, Syria", date: "Jan 2021" },
  { title: "Life Skills Session — Social Initiative", issuer: "IECD, Sweida, Syria", date: "Jan 2021" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Credentials</SectionLabel>
          <h2 className="section-title text-white mb-4">
            Certifications &{" "}
            <span className="text-gradient-cyan">Activities</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Continuous learning and hands-on training beyond the classroom.
          </p>
        </motion.div>

        {/* Certification cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="glass glass-hover rounded-xl p-5"
            >
              <p className="text-sm font-medium text-white mb-1.5 leading-snug">{cert.title}</p>
              <p className="text-xs text-slate-400">{cert.issuer}</p>
              <p className="text-xs font-mono text-cyan-400 mt-2">{cert.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
              style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)" }}
            >
              🏆
            </span>
            <h3 className="font-display font-semibold text-white">
              Competitive Programming — SVU Programming Contest 2024
            </h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Participated in the Syrian Virtual University Programming Contest 2024 after completing
            an intensive bootcamp in Data Structures, Algorithms, and problem-solving techniques —
            sharpening analytical thinking using C++ and Python in a competitive setting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
