import React from "react";

export default function Logo({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Rand Oraij logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#logoGradient)" />
      <circle
        cx="32"
        cy="32"
        r="15"
        fill="none"
        stroke="#0F172A"
        strokeWidth="2.5"
        strokeDasharray="4.5 5.5"
        transform="rotate(-25 32 32)"
      />
      <circle cx="32" cy="32" r="6" fill="#0F172A" />
      <circle cx="45.5" cy="22.5" r="3" fill="#0F172A" />
    </svg>
  );
}
