import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const assetUrl = (path) => `${process.env.PUBLIC_URL}${path}`;

export default function FeaturedProject({ project }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const current = project.images[active];

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden mb-8"
      style={{ border: `1px solid rgba(${project.accentRgb}, 0.25)` }}
    >
      <div className="grid md:grid-cols-2">
        {/* Gallery */}
        <div className="p-3 md:p-4" style={{ background: "rgba(0,0,0,0.18)" }}>
          <button
            type="button"
            onClick={() => setLightbox(true)}
            aria-label={`Enlarge: ${current.alt}`}
            className="block w-full rounded-xl overflow-hidden cursor-zoom-in"
          >
            <img
              src={assetUrl(current.src)}
              alt={current.alt}
              width={current.width}
              height={current.height}
              loading="lazy"
              className="w-full h-auto block"
            />
          </button>

          {project.images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}: ${img.alt}`}
                  className="shrink-0 rounded-lg overflow-hidden"
                  style={{
                    width: 72,
                    border: `2px solid ${i === active ? project.accent : "transparent"}`,
                    opacity: i === active ? 1 : 0.6,
                  }}
                >
                  <img src={assetUrl(img.src)} alt="" loading="lazy" className="w-full h-auto block" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
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

      {lightbox &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-zoom-out"
            style={{ background: "rgba(2,6,23,0.9)" }}
          >
            <img
              src={assetUrl(current.src)}
              alt={current.alt}
              className="max-w-full max-h-full rounded-xl"
              style={{ boxShadow: "0 20px 80px rgba(0,0,0,0.6)" }}
            />
          </div>,
          document.body
        )}
    </motion.div>
  );
}
