import { useEffect, useState } from "react";
import { personalInfo } from "../data";

const roles = [
  "Full-Stack Developer",
  "AI / ML Enthusiast",
  "RAG Pipeline Builder",
  "LLM Integration Dev",
  "Open Source Contributor",
];

// Floating animated blobs background
function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
    >
      <FloatingBlobs />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <p
          className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
           Hello, World! I'm
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight opacity-0 animate-slide-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Typing Role */}
        <div
          className="text-xl md:text-2xl text-gray-300 font-medium mb-6 h-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <span className="text-primary font-mono">{"<"}</span>{" "}
          <span className="typing-cursor">{displayed}</span>{" "}
          <span className="text-primary font-mono">{"/>"}</span>
        </div>

        {/* Tagline */}
        <p
          className="text-gray-400 max-w-xl mx-auto text-base md:text-lg mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
        >
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-dark font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
          >
            View My Work →
          </button>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full border border-primary/50 text-primary text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Icons */}
        <div
          className="flex justify-center gap-20 mt-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
        >
          {[
            { label: "GitHub", href: personalInfo.github, icon: "GitHub" },
            { label: "LinkedIn", href: personalInfo.linkedin, icon: "LinkedIn" },
            { label: "LeetCode", href: personalInfo.leetcode, icon: "Leetcode" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-17 h-12 rounded-full border border-border flex items-center justify-center text-xs font-mono text-gray-300 hover:border-primary hover:text-primary hover:scale-110 transition-all duration-200"
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "2s", animationFillMode: "forwards" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
