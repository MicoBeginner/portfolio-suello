"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  FileDown,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        window.location.href = `mailto:mhycosuello@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
        setStatus("idle");
      }
    } catch {
      window.location.href = `mailto:mhycosuello@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="w-full py-16 scroll-mt-20">
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Let&apos;s Build Something Reliable Together
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Available for full-stack web and mobile engineering positions,
            systems analysis roles, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={() =>
                  copyToClipboard("mhycosuello@gmail.com", "email")
                }
                className="p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition text-xs flex items-center gap-1 cursor-pointer"
                aria-label="Copy Email"
              >
                {copiedType === "email" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Email
              </p>
              <a
                href="mailto:mhycosuello@gmail.com"
                className="text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:underline break-all"
              >
                mhycosuello@gmail.com
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                <Phone className="w-5 h-5" />
              </div>
              <button
                onClick={() => copyToClipboard("09616749147", "phone")}
                className="p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition text-xs flex items-center gap-1 cursor-pointer"
                aria-label="Copy Phone"
              >
                {copiedType === "phone" ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Phone
              </p>
              <a
                href="tel:09616749147"
                className="text-sm font-bold text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                +63 961 674 9147
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                Metro Manila
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Location
              </p>
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Parañaque City, Philippines
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 p-7 sm:p-9 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md space-y-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Directly routed to my primary inbox.
              </p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full text-xs px-4 py-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full text-xs px-4 py-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
                />
              </div>

              <textarea
                required
                rows={4}
                placeholder="Message (Role opportunities, project inquiries, or consulting)..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full text-xs p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              {status === "success" && (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Message sent successfully!
                </span>
              )}
              {status !== "success" && <span />}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
              >
                {status === "loading" ? "Sending..." : "Submit Inquiry"}
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/40 backdrop-blur-md flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                Curriculum Vitae
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Download the Complete Resume
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Access verified academic credentials from NU MOA, complete
                coursework engineering specs, and Cisco networking
                certifications.
              </p>
            </div>

            <a
              href="/SUELLO_RESUME.pdf"
              download="SUELLO_RESUME.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
            >
              Download Resume (.PDF)
              <FileDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        <footer className="pt-12 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© 2026 Mhyco Lorence Suello. All rights reserved.</p>
          <a
            href="#home"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
