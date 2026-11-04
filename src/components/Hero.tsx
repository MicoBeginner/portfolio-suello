"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Smartphone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-8 pb-16 flex flex-col items-center justify-center overflow-hidden scroll-mt-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[360px] bg-gradient-to-tr from-zinc-300/40 via-zinc-200/20 to-transparent dark:from-zinc-800/30 dark:via-zinc-900/10 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            BSIT Senior • Web &amp; Mobile Specialization
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-500">
                Mhyco Suello
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
              Full-Stack Web &amp; Mobile Developer
            </p>
          </div>

          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
            Engineering full-stack web platforms and cross-platform mobile
            applications. Proficient in the{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              MERN Stack (React, Node, Express, MongoDB)
            </span>
            ,{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              React Native (Expo)
            </span>
            , and{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              Flutter/Dart
            </span>
            , backed by a strong foundation in systems analysis and UI/UX
            engineering.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium text-sm hover:opacity-90 transition shadow-sm"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:mhycosuello@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40">
              📍 Parañaque City, Philippines
            </span>
            <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40">
              🎓 NU Mall of Asia (Dean&apos;s Lister)
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-72 sm:w-80 h-96 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-3 shadow-xl flex flex-col justify-end overflow-hidden">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="/profile.jpg"
                alt="Mhyco Lorence Suello"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="absolute bottom-5 left-5 right-5 z-10 p-3 rounded-2xl bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 text-center shadow-md">
              <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                Mhyco Lorence Suello
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                MERN Stack • React Native • Flutter
              </p>
            </div>
          </div>

          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-6 px-3.5 py-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-md flex items-center gap-2"
          >
            <div className="p-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-medium uppercase">
                Academic
              </p>
              <p className="text-xs font-bold text-zinc-800 dark:text-zinc-100">
                Dean&apos;s Lister
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -right-8 px-3.5 py-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-md flex items-center gap-2"
          >
            <div className="p-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-medium uppercase">
                Mobile Apps
              </p>
              <p className="text-xs font-bold text-zinc-800 dark:text-zinc-100">
                Expo &amp; Flutter
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [-3, 4, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-md flex items-center gap-2"
          >
            <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-medium uppercase">
                Engineering
              </p>
              <p className="text-xs font-bold text-zinc-800 dark:text-zinc-100">
                Systems Analysis
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
