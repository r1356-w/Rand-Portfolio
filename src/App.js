import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/UI/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/UI/Footer";
import CursorGlow from "./components/UI/CursorGlow";

function App() {
  return (
    <div className="relative min-h-screen bg-navy-900 overflow-x-hidden">
      {/* Cursor glow */}
      <CursorGlow />

      {/* Global grid background */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0" />

      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "-200px",
            right: "-200px",
            background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "20%",
            left: "-150px",
            background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
