"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
}

const KNOWLEDGE_BASE = [
  {
    keywords: ["thesis", "capstone", "fleetx", "manuscript", "project", "capt"],
    answer:
      "Mhyco's flagship capstone project is FLEETX: Smart Car Rental and Fleet Management System with Real-Time GPS Tracking for CAPT Tourist Transport Services (Biñan City, Laguna; managing over 20 commercial vehicles)[cite: 8, 29].\n\nServing as Lead Systems Analyst & Full-Stack Developer, Mhyco architected the multi-tier system, modeled the five-role Functional Decomposition (FDD), and engineered core booking, tiered document verification, and live map telemetry features[cite: 8, 50, 94].",
  },
  {
    keywords: [
      "uat",
      "result",
      "grade",
      "testing",
      "evaluation",
      "score",
      "respondent",
    ],
    answer:
      "According to the documented evaluation in the FLEETX manuscript, the platform underwent User Acceptance Testing (UAT) with 69 evaluators (64 system users and 5 IT Professionals)[cite: 179]:\n• IT Professionals (Mobile): 5.80 / 6.00 (Strongly Agree)[cite: 189]\n• Web Admin Platform: 5.93 to 6.00 / 6.00 (Strongly Agree)[cite: 197, 200, 203]\n• End-User Grand Means: 5.48 (Guest) and 5.45 (Customer)[cite: 184, 187].",
  },
  {
    keywords: [
      "adviser",
      "panel",
      "group",
      "team",
      "members",
      "nu",
      "moa",
      "authors",
    ],
    answer:
      "The FLEETX capstone study was submitted to the NU MOA School of Information Technology under the guidance of Prof. Emilyn A. Donor (Capstone Adviser) and Prof. Lorna C. Lim (Subject Adviser)[cite: 8]. The research team is comprised of Mhyco Lorence A. Suello, Ashley Benedict Q. Celi, Kenjie F. Madeja, John Lawrence C. Martin, and Ma. Chanel B. Valencia[cite: 8].",
  },
  {
    keywords: [
      "tech",
      "stack",
      "mern",
      "react",
      "expo",
      "tools",
      "database",
      "skills",
    ],
    answer:
      "FLEETX was engineered using a modern client-server architecture[cite: 50]:\n• Web Frontends: React.js (Vite) & Tailwind CSS[cite: 47, 51]\n• Mobile Application: React Native with Expo Go (Cross-platform Android & iOS)[cite: 46, 51]\n• Backend Server: Node.js & Express.js REST APIs with JWT security[cite: 46, 47, 55]\n• Database & Cloud: MongoDB NoSQL, Cloudinary media storage, Google Maps API, and Render hosting[cite: 47, 50, 54].",
  },
  {
    keywords: [
      "contact",
      "email",
      "phone",
      "hire",
      "schedule",
      "call",
      "address",
    ],
    answer:
      "You can connect directly with Mhyco Lorence Suello through:\n• Email: mhycosuello@gmail.com\n• Phone: +63 961 674 9147\n• Location: Parañaque City, Metro Manila\n• Open for Full-Stack Web & Mobile engineering positions and Systems Analyst roles!",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Mhyco's portfolio assistant. You can ask me about his FLEETX capstone system, software architecture, UAT test findings, or technical skill sets!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { sender: "user", text: userText },
    ];
    setMessages(newMessages);
    setInput("");

    const query = userText.toLowerCase();
    const matched = KNOWLEDGE_BASE.find((entry) =>
      entry.keywords.some((keyword) => query.includes(keyword)),
    );

    setTimeout(() => {
      if (matched) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: matched.answer },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Great question! You can review the system case study in the Projects section for full technical metrics, or reach out to Mhyco directly at mhycosuello@gmail.com.",
          },
        ]);
      }
    }, 400);
  };

  const quickPrompts = [
    "What are the FLEETX UAT results?",
    "What is the system architecture of FLEETX?",
    "Who is the client of the FLEETX system?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-80 sm:w-96 h-[490px] rounded-3xl border border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden mb-3"
          >
            <div className="px-5 py-4 bg-zinc-900 text-white dark:bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-xl bg-zinc-800 text-zinc-100">
                  <Bot className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Mhyco AI Assistant</h3>
                  <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Trained on FLEETX Manuscript &amp; CV[cite: 8]
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                      m.sender === "user"
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-br-sm"
                        : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 rounded-bl-sm border border-zinc-200/50 dark:border-zinc-700/50"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-white dark:text-zinc-900" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-950/40">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 transition truncate max-w-full"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about FLEETX, technical stack, metrics..."
                className="flex-1 text-xs px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 disabled:opacity-40 transition shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-xl border border-zinc-700/30 hover:opacity-95 transition cursor-pointer"
        aria-label="Open Portfolio AI Assistant"
      >
        <Sparkles className="w-4 h-4 text-amber-400 dark:text-amber-600 animate-spin" />
        <span className="text-xs font-semibold">Ask AI</span>
        <MessageSquare className="w-4 h-4 ml-0.5" />
      </motion.button>
    </div>
  );
}
