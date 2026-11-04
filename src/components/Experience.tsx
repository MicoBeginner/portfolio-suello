"use client";

import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Capstone Systems Analyst & Developer",
      organization: "National University – Mall of Asia",
      period: "2024 – Present",
      type: "Academic Capstone",
      description:
        "Spearheaded systems analysis, UI/UX prototyping, and full-stack implementation for FLEETX (Smart Car Rental & GPS Fleet Tracking System). Coordinated testing pipelines and authored comprehensive SRS documentation.",
    },
    {
      role: "Systems Analyst & Full-Stack Developer",
      organization: "Academic Projects & Laboratory Labs",
      period: "2023 – 2024",
      type: "Coursework Engineering",
      description:
        "Architected clinic management systems and mobile prototypes using MERN and Flutter/Dart. Built role-based access control (RBAC), end-to-end appointment scheduling, and automated state synchronization.",
    },
    {
      role: "Active Member & Community Volunteer",
      organization: "JPCS – NU MOA Chapter & NU MOA COMEX / DSWD",
      period: "2023 – Present",
      type: "Community & Leadership",
      description:
        "Contributed to DSWD relief repacking drives and served as documentation volunteer for community digital-footprint awareness initiatives across Pasay City.",
    },
  ];

  const certifications = [
    {
      title: "Cisco Networking Academy",
      issued: "June 2025",
      badge: "Networking",
      courses: [
        "Introduction to Packet Tracer Exam",
        "Getting Started with Cisco Packet Tracer",
        "Exploring Networking with Cisco Packet Tracer",
        "Exploring IoT with Cisco Packet Tracer",
      ],
    },
    {
      title: "Simplilearn SkillUp",
      issued: "April 2025",
      badge: "IT Infrastructure",
      courses: ["Introduction to Computer Networking"],
    },
    {
      title: "KadaKareer & Packetworx",
      issued: "April 2026",
      badge: "IoT Systems",
      courses: ["IoT & LoRaWAN Workshop Series — Certificate of Participation"],
    },
    {
      title: "16th PALSCON National Conference",
      issued: "September 2026",
      badge: "Professional Training",
      courses: ["1st Philippine HR Expo — Parallel Learning Track"],
    },
  ];

  return (
    <section id="experience" className="w-full py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-400">
            Journey &amp; Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Experience &amp; Certifications
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Proven track record of academic excellence at NU MOA,
            industry-recognized Cisco networking credentials, and collaborative
            development.
          </p>
        </div>

        {/* 2-Column Layout: Experience vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <Briefcase className="w-4 h-4 text-zinc-500" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                Key Experience &amp; Leadership
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2 group"
                >
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-900 dark:group-hover:bg-white transition" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                    {exp.organization} •{" "}
                    <span className="text-zinc-400 dark:text-zinc-500 font-normal">
                      {exp.type}
                    </span>
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Academic Recognition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <Award className="w-4 h-4 text-zinc-500" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                Certifications &amp; Training
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {cert.issued}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {cert.badge}
                    </span>
                  </div>

                  <ul className="space-y-1">
                    {cert.courses.map((c, i) => (
                      <li
                        key={i}
                        className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
