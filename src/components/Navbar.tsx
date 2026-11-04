"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      requestAnimationFrame(() => setIsDark(true));
    } else {
      document.documentElement.classList.remove("dark");
      requestAnimationFrame(() => setIsDark(false));
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const matched = navItems.find((item) => item.href === `#${id}`);
            if (matched) setActiveSection(matched.name);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (typeof window === "undefined") return;

    const lenisInstance = (
      window as unknown as {
        lenis?: {
          scrollTo: (
            target: HTMLElement | number,
            opts?: { offset?: number },
          ) => void;
        };
      }
    ).lenis;

    if (href === "#home") {
      setActiveSection("Home");
      if (lenisInstance) {
        lenisInstance.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    if (lenisInstance) {
      lenisInstance.scrollTo(target as HTMLElement, { offset: -90 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md shadow-lg shadow-black/5"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.name;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full cursor-pointer ${
                isActive
                  ? "text-zinc-950 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          );
        })}

        <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800 mx-1" />

        <button
          onClick={toggleTheme}
          type="button"
          aria-label="Toggle Theme"
          className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
        >
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-zinc-700" />
          )}
        </button>
      </motion.nav>
    </header>
  );
}
