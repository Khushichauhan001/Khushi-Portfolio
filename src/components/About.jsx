import { personalInfo, summary, education } from "../data";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Avatar + Stats */}
        <div className="flex flex-col items-center gap-8">
          {/* Avatar */}
          <div className="relative animate-float">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-6xl font-extrabold gradient-text font-mono">
                  {personalInfo.avatarInitials}
                </span>
              </div>
            </div>
            {/* Ping ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {[
              { label: "DSA Problems", value: "600+" },
              { label: "LeetCode Rating", value: "1642" },
              { label: "CGPA", value: "8.7" },
              { label: "Projects Built", value: "3+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glow-card bg-card rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{summary}</p>

          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-primary">📍</span> {personalInfo.location}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✉️</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">📞</span> {personalInfo.phone}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">🎓 Education</h3>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="glow-card bg-card rounded-xl p-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <p className="text-sm font-semibold text-white">{edu.degree}</p>
                      <p className="text-xs text-gray-400 mt-1">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-primary font-mono">{edu.score}</span>
                      <p className="text-xs text-gray-500">{edu.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
