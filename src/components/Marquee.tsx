"use client";

import { motion } from "framer-motion";

const items = [
  "MERN Stack",
  "React Native (Expo)",
  "Flutter / Dart",
  "Systems Analysis",
  "REST APIs",
  "Dean's Lister • NU MOA",
  "Full-Stack Web & Mobile",
  "IT & Network Solutions",
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-sm">
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
        >
          {[...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
