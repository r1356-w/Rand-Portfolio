import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../UI/SectionLabel";

export default function Activities() {
  return (
    <section id="activities" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Beyond the Job</SectionLabel>
          <h2 className="section-title text-white mb-4">
            <span className="text-gradient-cyan">Activities</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Sharpening problem-solving skills outside of day-to-day work.
          </p>
        </motion.div>

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
