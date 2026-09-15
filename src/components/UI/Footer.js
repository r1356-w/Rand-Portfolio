import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #22D3EE, #A855F7)" }}>
            <span className="text-navy-900 font-mono font-bold text-xs">RO</span>
          </div>
          <span className="text-slate-400 text-sm font-body">
            © {new Date().getFullYear()} Rand Oraij
          </span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/r1356-w" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/rand-oraij-49965b436" },
            { label: "Email", href: "mailto:randorij27@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
