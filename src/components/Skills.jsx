import { skills } from "../data";
import SectionWrapper from "./SectionWrapper";

const categoryColors = {
  "Languages & Core": "from-blue-500 to-cyan-400",
  "Frontend": "from-pink-500 to-rose-400",
  "Backend": "from-green-500 to-emerald-400",
  "AI / ML": "from-purple-500 to-violet-400",
  "Database": "from-orange-500 to-amber-400",
  "Tools": "from-red-500 to-rose-400",

};

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => {
          const gradient = categoryColors[category] || "from-primary to-secondary";
          return (
            <div key={category} className="glow-card bg-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient}`} />
                <h3 className="text-white font-semibold text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-mono border border-border text-gray-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
