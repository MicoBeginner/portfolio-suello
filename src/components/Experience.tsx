"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "fleetx-lead",
    role: "Lead Systems Analyst & Full-Stack Developer",
    organization: "FLEETX — CAPT Tourist Transport Services",
    period: "2024 – 2026",
    location: "Biñan City, Laguna / Parañaque City",
    type: "Capstone Project Engagement",
    description:
      "Led the systems analysis, functional decomposition, and full-stack software development for an enterprise smart car rental and GPS fleet monitoring platform serving 20+ commercial vehicles.",
    highlights: [
      "Architected multi-tier web and mobile workflows across five system roles (Guest, Customer, Staff, Admin, Tech Admin).",
      "Built client-server REST APIs with Node.js and Express, integrating MongoDB spatial indices and GPS telemetry.",
      "Conducted formal User Acceptance Testing (UAT) with 69 evaluators, securing a 5.80/6.00 composite score from IT professionals.",
      "Authored technical specifications, software architecture diagrams, and comprehensive IEEE-format project documentation.",
    ],
  },
  {
    id: "clinic-systems",
    role: "Systems Analyst & MERN Stack Developer",
    organization: "Healthcare Laboratory & Clinical Systems",
    period: "2026",
    location: "Parañaque City, Metro Manila",
    type: "Academic Coursework & Systems Delivery",
    description:
      "Engineered automated patient intake, consultation scheduling, and administrative record management portals with strict role-based access controls.",
    highlights: [
      "Designed dynamic appointment booking schedules with schedule conflict validation algorithms.",
      "Developed secure RESTful endpoints for doctor availability and patient intake processing.",
      "Executed unit, functional, and regression test suites to guarantee data integrity.",
    ],
  },
  {
    id: "academic-nu",
    role: "BS Information Technology Student",
    organization: "National University – Mall of Asia",
    period: "2023 – Present",
    location: "Pasay City, Metro Manila",
    type: "Degree Specialization in Web & Mobile Apps",
    description:
      "Consistently achieved Dean's List honors from First Year through Third Year while mastering full-stack engineering, mobile development, and enterprise networking.",
    highlights: [
      "Completed hands-on certifications in Cisco Packet Tracer, computer networking, and IoT workshop series.",
      "Actively contributed to JPCS NU MOA chapter and community-based digital outreach initiatives.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-12 scroll-mt-24">
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-400">
            Work &amp; Academic Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Key Engineering Experience
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Practical experience delivering real-world software solutions,
            capstone systems analysis, and verified academic milestones.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-7 sm:p-9 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm space-y-4 hover:border-zinc-400 dark:hover:border-zinc-700 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    {exp.organization}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Key Deliverables
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{exp.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
