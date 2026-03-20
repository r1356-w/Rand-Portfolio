import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const badges = ["Flutter", "React", "Django", "Node.js", "Data Science"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{
                  background: "rgba(34,211,238,0.07)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  color: "#22D3EE",
                }}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="section-title text-white mb-2">
                Hi, I'm{" "}
                <span className="text-gradient-cyan">Rand Oraij</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <p className="font-display text-xl md:text-2xl font-medium text-slate-400">
                IT Engineer &{" "}
                <span className="shimmer-text">Full-Stack Developer</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base leading-relaxed mb-8 max-w-md"
            >
              I craft high-performance digital products — from intuitive mobile apps
              to intelligent AI-powered systems. Specializing in{" "}
              <span className="text-white font-medium">Flutter, React, Django</span>,
              and scalable data pipelines.
            </motion.p>

            {/* Tech badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
              {badges.map((badge) => (
                <span key={badge} className="tag">{badge}</span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { value: "10+", label: "Projects" },
                { value: "3+", label: "Years Exp." },
                { value: "5+", label: "Tech Stacks" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-gradient-cyan">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-mono mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 relative"
            style={{ height: "480px" }}
          >
            {/* Glow underneath sphere */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(34,211,238,0.12) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Orbital lines - Very close to image */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-purple-400 opacity-70"
                initial={{ rotate: 45 }}
                animate={{ rotate: 405 }}
                transition={{
                  duration: 18,
                  ease: "linear",
                  repeat: Infinity,
                  delay: 0,
                }}
                style={{
                  width: "calc(100% + 2px)",
                  height: "calc(100% + 2px)",
                  left: "-4px",
                  top: "-4px",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-cyan-400 opacity-60"
                initial={{ rotate: -30 }}
                animate={{ rotate: 330 }}
                transition={{
                  duration: 22,
                  ease: "linear",
                  repeat: Infinity,
                  delay: 1.5,
                }}
                style={{
                  width: "calc(100% + 4px)",
                  height: "calc(100% + 4px)",
                  left: "-8px",
                  top: "-8px",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-dashed border-blue-400 opacity-50"
                initial={{ rotate: 15 }}
                animate={{ rotate: 375 }}
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                  delay: 0.8,
                }}
                style={{
                  width: "calc(100% + 2px)",
                  height: "calc(100% + 24px)",
                  left: "-12px",
                  top: "-12px",
                  borderStyle: "dotted",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-purple-300 opacity-40"
                initial={{ rotate: -60 }}
                animate={{ rotate: 300 }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                  delay: 2.2,
                }}
                style={{
                  width: "calc(100% + 32px)",
                  height: "calc(100% + 32px)",
                  left: "-16px",
                  top: "-16px",
                  borderStyle: "dashed",
                }}
              />
              
              <img 
                src="images/profile.jpg" 
                alt="Rand Oraij" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl relative z-10"
                style={{
                  boxShadow: "0 0 60px rgba(34,211,238,0.3), 0 0 120px rgba(168,85,247,0.1)"
                }}
              />
            </div>

            {/* Floating tech labels */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 left-0 glass rounded-xl px-3 py-2 text-xs font-mono text-cyan-400"
            >
              &lt;React /&gt;
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 right-0 glass rounded-xl px-3 py-2 text-xs font-mono"
              style={{ color: "#A855F7" }}
            >
              Node.js
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 right-4 glass rounded-xl px-3 py-2 text-xs font-mono text-cyan-400"
            >
              Flutter
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
