import React from "react";
import { motion } from "framer-motion";

export default function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden mb-8"
      style={{ border: `1px solid rgba(${project.accentRgb}, 0.25)` }}
    >
      <div className="grid md:grid-cols-[260px_1fr]">
        {/* App icon */}
        <div
          className="flex items-center justify-center p-8"
          style={{
            background: `radial-gradient(circle at center, rgba(${project.accentRgb}, 0.14) 0%, transparent 70%)`,
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}${project.icon}`}
            alt={`${project.title} app icon`}
            width={512}
            height={512}
            className="w-28 h-28 md:w-40 md:h-40 rounded-[22%]"
            style={{ boxShadow: `0 16px 50px rgba(${project.accentRgb}, 0.25)` }}
          />
        </div>

        {/* Details */}
        <div className="p-6 md:p-8 md:pl-2 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="text-xs font-mono px-2 py-1 rounded"
              style={{
                background: `rgba(${project.accentRgb}, 0.1)`,
                color: project.accent,
                border: `1px solid rgba(${project.accentRgb}, 0.25)`,
              }}
            >
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-500">{project.type}</span>
          </div>

          <h3 className="font-display text-2xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          <ul className="space-y-1.5 mb-4">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                <span style={{ color: project.accent }} className="mt-0.5 shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="tag"
                style={{
                  color: project.accent,
                  background: `rgba(${project.accentRgb}, 0.07)`,
                  borderColor: `rgba(${project.accentRgb}, 0.18)`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {project.store && (
            <div>
              <a
                href={project.store}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 1.8a1.5 1.5 0 00-.6 1.2v18a1.5 1.5 0 00.6 1.2l10-10.2L3.6 1.8zm11.1 8.1l2.6-2.6L5.6 1.2l9.1 8.7zm0 4.2l-9.1 8.7 11.7-6.1-2.6-2.6zm3.6-3.6l-1.8 1.8 1.8 1.8 2.6-1.4a1.2 1.2 0 000-2.2l-2.6-1.4z" />
                </svg>
                Get it on Google Play
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
