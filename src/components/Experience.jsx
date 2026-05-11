import { experience, achievements } from "../data";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience & Achievements">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Timeline */}
        <div>
          <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest text-primary">
            Experience
          </h3>
          <div className="relative border-l-2 border-border pl-6 space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-dark" />
                <div className="glow-card bg-card rounded-xl p-5">
                  <div className="flex justify-between items-start flex-wrap gap-1 mb-3">
                    <div>
                      <h4 className="text-white font-semibold text-sm">{exp.role}</h4>
                      <p className="text-primary text-xs font-mono">{exp.org}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{exp.duration}</span>
                  </div>
                  <ul className="space-y-1">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-gray-400 text-xs flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest text-secondary">
            Achievements
          </h3>
          <div className="space-y-3">
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="glow-card bg-card rounded-xl px-5 py-4 text-sm text-gray-300 flex items-start gap-3"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span>{ach}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
