import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionLabel from "../UI/SectionLabel";

const projects = [
  {
    id: 6,
    title: "Blink Delivery — Multi-App Platform",
    icon: "🛵",
    type: "Mobile Delivery Platform",
    description:
      "End-to-end delivery platform built at Casper AI — not just the customer app, but the full ecosystem: the customer ordering app, the merchant/admin app for store owners, and the driver (captain) app for live delivery. Already live, serving real customers and real orders for a local business, paired with an AI layer that profiles customer behavior to personalize offers and reduce churn.",
    highlights: [
      "Customer app: feature-first Flutter (GetX, Dio) covering auth, catalog, cart, checkout, and order tracking",
      "Merchant/admin app: order, product, and review management for store owners",
      "Driver (captain) app: live GPS route tracking, WebSocket-based dispatch, and an in-app wallet",
    ],
    stack: ["Flutter", "GetX", "Dio", "Firebase", "Google Maps", "WebSockets"],
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    github: null,
    live: null,
  },
  {
    id: 7,
    title: "Sityx — Cloud Hosting & Dev Agency",
    icon: "☁️",
    type: "SaaS Marketing Website",
    description:
      "Built and maintain the public website for Sityx — a cloud hosting provider with NVMe infrastructure and AI-driven threat protection, which also runs as a software development agency. A bilingual, conversion-focused site covering hosting plans, domain search, and service inquiries.",
    highlights: [
      "Fully bilingual (Arabic/English) with RTL layout switching",
      "Interactive hosting plan pricing (monthly/yearly toggle) and live domain search & pricing table",
      "Lead-generation contact form routing requests by service type (web, mobile, AI, hosting)",
    ],
    stack: ["React", "Tailwind CSS", "i18n / RTL", "Responsive Design"],
    accent: "#A855F7",
    accentRgb: "168,85,247",
    github: null,
    live: "https://sityx.com",
  },
  {
    id: 8,
    title: "debug_layout_hud",
    icon: "🐞",
    type: "Open Source · Flutter Package",
    description:
      "A published, open-source Flutter package — a debug-only floating HUD overlay that shows live screen size, custom responsive breakpoints, text scale, and text direction directly on-device, with no DevTools tether needed.",
    highlights: [
      "Live MediaQuery-driven metrics — the HUD only rebuilds when the screen size actually changes",
      "Custom named breakpoint resolution (mobile/tablet/desktop or any design system) via a simple API",
      "Zero production footprint — compiles to a pass-through widget when disabled in release builds",
    ],
    stack: ["Flutter", "Dart", "pub.dev", "Open Source", "MIT License"],
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    github: "https://github.com/r1356-w/debug_layout_hud",
    live: "https://pub.dev/packages/debug_layout_hud",
  },
  {
    id: 1,
    title: "Sufra - Community Food Sharing",
    icon: "🍲",
    type: "Full-Stack Social Platform",
    description:
      "A community-driven platform connecting food donors with people in need. Features real-time food inventory tracking, donation management, and a user-friendly interface for both donors and recipients.",
    highlights: [
      "Real-time food inventory management with geolocation services",
      "User role system for donors, recipients, and administrators",
      "Integrated food safety tracking and expiration date alerts",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Geolocation", "JWT"],
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    github: "https://github.com/r1356-w/Sufra---Community-Food-Sharing-",
    live: null,
  },
  {
    id: 2,
    title: "Dream Weaver",
    icon: "🧠",
    type: "AI Mobile App",
    description:
      "A Flutter mobile app that transforms text-based dream descriptions into high-quality AI-generated visual scenes using HuggingFace & OpenAI, backed by a GPU-accelerated processing pipeline.",
    highlights: [
      "Clean Architecture with Riverpod (code generation) for robust, scalable state management",
      "GPU-accelerated backend using Docker and NVIDIA CUDA for high-performance AI model processing",
      "Voice-to-Text conversion, secure JWT authentication, and local encrypted storage",
      "Admin dashboard built with Vue.js and Node.js for user management and system monitoring",
    ],
    stack: ["Flutter", "Riverpod", "Docker", "NVIDIA CUDA", "Vue.js", "Node.js"],
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    github: "https://github.com/r1356-w",
    live: null,
  },
  {
    id: 3,
    title: "Velour Beauty",
    icon: "✨",
    type: "E-Commerce",
    description:
      "A comprehensive full-featured e-commerce platform for a beauty brand — with product catalog, shopping cart, secure checkout, and an admin dashboard for inventory management.",
    highlights: [
      "MERN Stack with JWT authentication and role-based access",
      "Stripe payment integration with order tracking",
      "Responsive admin panel for product & order management",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Stripe", "JWT"],
    accent: "#A855F7",
    accentRgb: "168,85,247",
    github: "https://github.com/r1356-w",
    live: null,
  },
  {
    id: 5,
    title: "Course Management Institute",
    icon: "🎓",
    type: "Full-Stack Web Application",
    description:
      "A comprehensive application for managing courses in an educational institute. The system allows students to browse courses while the institute director has exclusive access to control and manage all aspects of the platform.",
    highlights: [
      "Role-based access control with director-only management privileges",
      "Student course browsing and enrollment system",
      "Admin dashboard for course management and oversight",
    ],
    stack: ["React", "Node.js", "Authentication", "Database", "Admin Panel"],
    accent: "#A855F7",
    accentRgb: "168,85,247",
    github: "https://github.com/r1356-w/application-for-managing-courses-institute",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Featured Work</SectionLabel>
          <h2 className="section-title text-white mb-4">
            Projects That{" "}
            <span className="text-gradient-cyan">Define Me</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-base">
            A curated selection of projects spanning AI, full-stack web, and mobile development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/r1356-w"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
