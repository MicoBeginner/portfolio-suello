import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import AmbientGlow from "@/components/AmbientGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mhyco Lorence Suello | Full-Stack & Mobile Developer",
  description:
    "Portfolio of Mhyco Suello - Full-Stack Web & Mobile Developer specializing in MERN, React Native, and Flutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased min-h-screen relative selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900`}
      >
        <AmbientGlow />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Chatbot />
      </body>
    </html>
  );
}
