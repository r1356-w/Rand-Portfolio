import React from "react";

export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs tracking-[0.2em] text-cyan-400 uppercase">
        {children}
      </span>
      <div className="flex-1 h-px" style={{
        background: "linear-gradient(90deg, rgba(34,211,238,0.4), transparent)"
      }} />
    </div>
  );
}
