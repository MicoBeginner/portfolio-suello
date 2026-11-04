"use client";

import { useState } from "react";
import {
  Layers,
  Smartphone,
  Stethoscope,
  X,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  MapPin,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  role: string;
  client: string;
  description: string;
  contributions: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  architectureDetails: {
    problem: string;
    solution: string;
    modules: string[];
    stackBreakdown: { layer: string; detail: string }[];
    testingAndResults: string;
  };
}

const projects: ProjectItem[] = [
  {
    id: "fleetx",
    title:
      "FLEETX: Smart Car Rental & Fleet Management System with Real-Time GPS Tracking",
    category: "Academic Capstone Project (BSIT NU MOA)",
    badge: "Enterprise Web & Mobile System",
    role: "Lead Systems Analyst & Full-Stack Developer",
    client:
      "CAPT Tourist Transport Services (Biñan City, Laguna — 20+ Vehicles)",
    description:
      "An integrated web and cross-platform mobile platform developed to transition the manual rental operations of CAPT Tourist Transport Services into automated booking pipelines, customer verification, invoice generation, payment audit, and live GPS fleet monitoring.",
    contributions: [
      "Led requirements elicitation, architectural design, and Functional Decomposition (FDD) across five user roles: Guest, Customer, Staff, Admin, and Tech Admin.",
      "Engineered structured booking workflows with automated document validation rules for Self-Drive (Driver's License) and With-Driver (Government ID).",
      "Integrated invoice issuance, payment proof audit pipelines, and live telemetry rendering using IoT GPS device data and Google Maps API.",
      "Administered end-to-end User Acceptance Testing (UAT) involving 69 evaluators, securing a 5.80/6.00 composite score from IT Professionals.",
    ],
    techStack: [
      "React.js (Vite)",
      "React Native (Expo Go)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Google Maps API",
      "Render",
      "GoDaddy DNS",
    ],
    metrics: [
      { label: "IT Pro UAT Rating", value: "5.80 / 6.00" },
      { label: "Evaluators Sample", value: "69 Respondents" },
      { label: "Admin Usability", value: "6.00 / 6.00" },
    ],
    architectureDetails: {
      problem:
        "CAPT Tourist Transport Services previously relied on manual Facebook messages and phone reservations for over 20 commercial vehicles. This created severe scheduling delays, risk of double bookings, lack of active route visibility across Luzon, and slow verification of payment receipts.",
      solution:
        "Constructed a multi-tier client-server architecture: customer-facing web and mobile apps for self-service reservations and document uploads, a dedicated administrative web application with 4-role RBAC, a Node.js/Express REST server executing validation logic, and a central MongoDB database tied to Cloudinary and GPS data feeds.",
      modules: [
        "Plan My Trip Module (Trip preference synthesis and AI-assisted vehicle recommendations)",
        "Tiered Customer Verification (Driver's License for Self-Drive, Government ID for With-Driver)",
        "Structured Payment Pipeline (Invoice creation, payment receipt submission, admin approval, and automated receipts)",
        "Live Monitoring & Fleet Tracking (Interactive GPS mapping for real-time tracking of active rentals)",
        "Role-Based Access Control (Granular permissions and system audit trails for Staff, Admin, and Tech Admin)",
      ],
      stackBreakdown: [
        {
          layer: "Mobile Client",
          detail:
            "React Native with Expo Go (Cross-platform compatibility for Android 8+ & iOS 13+)",
        },
        {
          layer: "Web & Admin Frontend",
          detail: "React.js with Vite and responsive UI layouts",
        },
        {
          layer: "Application Server",
          detail:
            "Node.js & Express.js RESTful API endpoints secured with JWT tokens",
        },
        {
          layer: "Database & Storage",
          detail:
            "MongoDB collections (Users, Vehicles, Bookings, Drivers) and Cloudinary media storage",
        },
        {
          layer: "Deployment & Security",
          detail:
            "Render Cloud Hosting, GoDaddy DNS, Email OTP verification, and environment variable encryption",
        },
      ],
      testingAndResults:
        "Validated through a comprehensive UAT assessment with 69 respondents (64 end users and 5 IT professionals). The Web Administrative platform scored 6.00/6.00 in Functionality and Compliance, while the Mobile Application attained 5.80/6.00 from IT specialists and a 5.48/6.00 composite mean from general users.",
    },
  },
  {
    id: "clinic-web",
    title: "Clinic Management System",
    category: "Full-Stack Web Application",
    badge: "MERN Stack",
    role: "Systems Analyst & Developer",
    client: "Healthcare Coursework & Laboratory Environment",
    description:
      "A centralized clinical administration portal designed to streamline outpatient appointment booking, electronic health records (EHR), and multi-tier medical staff roles.",
    contributions: [
      "Designed dynamic appointment booking schedules with schedule conflict validation algorithms.",
      "Built patient intake and clinic administrator record workflows using the MERN stack.",
      "Conducted functional test case executions, unit tests, and defect logging.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Security", value: "JWT RBAC" },
    ],
    architectureDetails: {
      problem:
        "Paper-based scheduling systems frequently result in double-booked doctor appointments, missing consultation histories, and delayed patient intake during clinic operating hours.",
      solution:
        "Implemented a modular MERN architecture with strict practitioner availability rules, automated calendar locks, and distinct role views for Patients, Physicians, and Receptionists.",
      modules: [
        "Patient Self-Service Appointment Booking & Slot Picker",
        "Doctor Consultation Calendar Management",
        "Medical Records & Patient History Management",
        "Staff Role-Based Permissions Engine",
      ],
      stackBreakdown: [
        {
          layer: "Frontend UI",
          detail:
            "React.js Single Page Application with dynamic appointment selectors",
        },
        {
          layer: "Backend Server",
          detail:
            "Node.js and Express REST services featuring conflict detection filters",
        },
        {
          layer: "Database",
          detail: "MongoDB database leveraging normalized document references",
        },
      ],
      testingAndResults:
        "Validated through unit and functional test runs confirming zero double-booking occurrences and secure isolation of patient medical charts.",
    },
  },
  {
    id: "clinic-mobile",
    title: "Clinic Mobile Prototype",
    category: "Mobile Application",
    badge: "Cross-Platform Mobile",
    role: "Mobile App Developer",
    client: "Healthcare Usability Prototype",
    description:
      "A cross-platform mobile healthcare prototype built for streamlined patient account creation, appointment bookings, and schedule modifications on mobile devices.",
    contributions: [
      "Implemented mobile user authentication, verification screens, and appointment booking forms.",
      "Structured schedule cancellation and reschedule state transitions in Flutter and Dart.",
      "Designed clean, mobile-first layouts adhering to mobile accessibility standards.",
    ],
    techStack: ["Flutter", "Dart", "Mobile UI/UX", "State Management", "Figma"],
    metrics: [
      { label: "Framework", value: "Flutter / Dart" },
      { label: "UI Design", value: "Figma Prototypes" },
    ],
    architectureDetails: {
      problem:
        "Patients frequently encounter usability issues when accessing desktop-oriented appointment systems from mobile browsers during travel.",
      solution:
        "Created an intuitive 60fps mobile application featuring an accessible three-step reservation flow and tactile input controls.",
      modules: [
        "Rapid Patient Registration & Authentication",
        "Mobile Appointment Rescheduling & Calendar Picker",
        "Status Notifications & Digital Booking Receipts",
      ],
      stackBreakdown: [
        {
          layer: "Mobile Framework",
          detail: "Flutter SDK for native multi-platform compilation",
        },
        {
          layer: "Language",
          detail: "Dart with reactive state management patterns",
        },
        {
          layer: "Prototyping",
          detail:
            "Figma UI/UX system validated against human interface guidelines",
        },
      ],
      testingAndResults:
        "Evaluated across multiple Android screen dimensions to confirm touch target ergonomics, rapid layout rendering, and clear visual hierarchy.",
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  return (
    <section id="projects" className="w-full py-12 scroll-mt-24">
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-400">
            Selected Systems &amp; Capstone
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Featured Systems &amp; Applications
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Real-world enterprise solutions and academic capstone systems built
            with thorough requirements analysis, testing pipelines, and client
            validation.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="p-7 sm:p-9 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Client: {project.client}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {project.badge}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Role:{" "}
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold">
                    {project.role}
                  </span>
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 py-1">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center gap-2"
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      {m.label}:
                    </span>
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Key Engineering Deliverables &amp; Analysis
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {project.contributions.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-400 dark:text-zinc-500 font-bold">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition cursor-pointer"
                >
                  View System Architecture &amp; Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                  System Architecture Specification
                </span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-5 text-xs sm:text-sm">
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-[11px] mb-1.5">
                  1. Operational Problem &amp; Client Context
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {selectedProject.architectureDetails.problem}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-[11px] mb-1.5">
                  2. Architectural Solution &amp; Workflows
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                  {selectedProject.architectureDetails.solution}
                </p>
                <div className="space-y-1.5 mb-3">
                  <p className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                    Core Functional Modules:
                  </p>
                  {selectedProject.architectureDetails.modules.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 rounded-2xl bg-zinc-50 dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800">
                  {selectedProject.architectureDetails.stackBreakdown.map(
                    (layer, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1"
                      >
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                          {layer.layer}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400 text-right">
                          {layer.detail}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-[11px] mb-1.5">
                  3. System Evaluation &amp; User Acceptance Testing (UAT)
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {selectedProject.architectureDetails.testingAndResults}
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
