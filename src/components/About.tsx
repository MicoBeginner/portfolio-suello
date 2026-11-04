"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Server,
  Layout,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      desc: "4th-Year BS Information Technology at National University – Mall of Asia. Consistent Dean's Lister (1st to 3rd Year).",
    },
    {
      icon: Code2,
      title: "Full-Stack & Mobile Development",
      desc: "Specializing in React, React Native (Expo), Flutter/Dart, Node.js, Express, and MongoDB architectures.",
    },
    {
      icon: Layout,
      title: "Systems Analysis & UI/UX",
      desc: "Skilled in requirements mapping, functional testing, wireframing, and responsive prototyping via Figma.",
    },
    {
      icon: Server,
      title: "Networking & IT Infrastructure",
      desc: "Experienced with Cisco Packet Tracer, TCP/IP, Active Directory, OPNsense firewalls, and hardware diagnostics.",
    },
  ];

  return (
    <section id="about" className="w-full py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Transforming Complex Workflows into Reliable Code
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I am a graduating BSIT student specializing in Web and Mobile
            Applications. My work bridges intuitive user interfaces with robust
            backend systems, backed by hands-on capstone engineering and systems
            testing experience.
          </p>
        </div>

        {/* 4-Card Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Core Principles Pill Strip */}
        <div className="p-6 rounded-3xl border border-zinc-200/70 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Engineering Approach
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Prioritizing maintainability, thorough testing, and clean user
              experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {[
              "Systematic Analysis",
              "Cross-Platform Delivery",
              "Test-Driven Accuracy",
              "Clear Documentation",
            ].map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
