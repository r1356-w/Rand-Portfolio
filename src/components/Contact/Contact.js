import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionLabel from "../UI/SectionLabel";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const contactLinks = [
  {
    label: "WhatsApp",
    value: "+963 992 684 568",
    href: "https://wa.me/963992684568",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    accent: "#A855F7",
  },
  {
    label: "GitHub",
    value: "github.com/r1356-w",
    href: "https://github.com/r1356-w",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    accent: "#22D3EE",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rand-oraij-49965b436",
    href: "https://www.linkedin.com/in/rand-oraij-49965b436",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "#A855F7",
  },
  {
    label: "Email",
    value: "randorij27@gmail.com",
    href: "mailto:randorij27@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#22D3EE",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="section-title text-white mb-4">
            Let's Build{" "}
            <span className="text-gradient-cyan">Something</span>
          </h2>
          <p className="text-slate-400 max-w-lg">
            Have a project in mind, a role to fill, or just want to connect? My
            inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass glass-hover rounded-xl p-5 group"
              >
                <span
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: `rgba(${link.accent === "#22D3EE" ? "34,211,238" : "168,85,247"}, 0.1)`,
                    border: `1px solid rgba(${link.accent === "#22D3EE" ? "34,211,238" : "168,85,247"}, 0.2)`,
                    color: link.accent,
                  }}
                >
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs text-slate-400 font-mono mb-0.5">{link.label}</p>
                  <p className="text-sm text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {link.value}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            ))}

            {/* Availability note */}
            <div className="glass rounded-xl p-5 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400">Currently available</span>
              </div>
              <p className="text-slate-400 text-sm">
                Open to full-time roles, freelance contracts, and interesting collaborations.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[360px]"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-2xl"
                  style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)" }}
                >
                  ✓
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[360px]"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-2xl"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}
                >
                  ✕
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  Error Sending Message
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Failed to send your message. Please try again or email directly.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="btn-outline"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Rand Oraij" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:ring-1"
                      style={{
                        background: "rgba(30,41,59,0.6)",
                        border: "1px solid rgba(148,163,184,0.1)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(34,211,238,0.4)";
                        e.target.style.boxShadow = "0 0 0 1px rgba(34,211,238,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(148,163,184,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "rgba(30,41,59,0.6)",
                      border: "1px solid rgba(148,163,184,0.1)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(34,211,238,0.4)";
                      e.target.style.boxShadow = "0 0 0 1px rgba(34,211,238,0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(148,163,184,0.1)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
