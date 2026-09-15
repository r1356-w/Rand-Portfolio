import React from "react";
import { motion } from "framer-motion";

export default function Wordmark({ className = "" }) {
  return (
    <span className={`font-display font-bold inline-flex items-baseline select-none ${className}`}>
      <span style={{ color: "#22D3EE" }}>&lt;</span>
      <span className="text-white">Rand</span>
      <span style={{ color: "#22D3EE" }}>.</span>
      <span
        style={{
          background: "linear-gradient(135deg, #22D3EE, #A855F7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        dev
      </span>
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        style={{ color: "#A855F7" }}
        className="mx-0.5"
      >
        |
      </motion.span>
      <span style={{ color: "#A855F7" }}>&gt;</span>
    </span>
  );
}
