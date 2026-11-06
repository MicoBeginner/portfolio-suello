"use client";

import { useState } from "react";
import { Code2, Server, Wrench } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: typeof Code2;
  description: string;
  skills: { name: string; level: string }[];
}

const categories: SkillCategory[] = [
  {
    id: "web-mobile",
    name: "Web & Mobile Development",
    icon: Code2,
    description:
      "Core full-stack and mobile client-server implementation stack.",
    skills: [
      { name: "Next.js", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "React Native (Expo)", level: "Advanced" },
      { name: "Flutter / Dart", level: "Proficient" },
      { name: "Node.js & Express", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Spring Boot / Java", level: "Foundational" },
      { name: "Python", level: "Foundational" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    id: "systems-network",
    name: "Systems & IT Infrastructure",
    icon: Server,
    description:
      "Enterprise networking, firewall controls, and virtualized labs.",
    skills: [
      { name: "Cisco Packet Tracer", level: "Certified" },
      { name: "OPNsense Firewall", level: "Hands-on" },
      { name: "Active Directory", level: "Configured" },
      { name: "TCP/IP & Subnetting", level: "Advanced" },
      { name: "DNS / DHCP Systems", level: "Hands-on" },
      { name: "Windows Server", level: "Hands-on" },
      { name: "VMware & VirtualBox", level: "Proficient" },
    ],
  },
  {
    id: "tools-methods",
    name: "Engineering & QA Tools",
    icon: Wrench,
    description:
      "Systems analysis, requirements gathering, and quality validation.",
    skills: [
      { name: "Systems Analysis (SRS)", level: "Lead Level" },
      { name: "Functional & Regression Testing", level: "Hands-on" },
      { name: "Figma Prototyping", level: "Proficient" },
      { name: "Postman API Testing", level: "Advanced" },
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Traccar GPS Engine", level: "Integrated" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("web-mobile");
  const current = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="skills" className="w-full py-12 scroll-mt-24">
      <div className="space-y-10">
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-400">
            Technical Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Skills &amp; Capabilities
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Hands-on technical stacks across full-stack engineering, systems
            analysis, and enterprise networking.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer border ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-zinc-900 dark:border-white shadow-sm"
                    : "bg-white/60 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.name}
              </button>
            );
          })}
        </div>

        <div className="p-7 sm:p-9 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {current.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {current.description}
              </p>
            </div>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 w-fit">
              {current.skills.length} Competencies
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {current.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 flex flex-col justify-between space-y-2 hover:border-zinc-400 dark:hover:border-zinc-600 transition"
              >
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {skill.name}
                </span>
                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
