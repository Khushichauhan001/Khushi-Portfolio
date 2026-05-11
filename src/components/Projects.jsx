import { projects } from "../data";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="glow-card bg-card rounded-2xl p-6 flex flex-col justify-between group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-lg">
                  📁
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors text-xs font-mono border border-border hover:border-primary/50 px-2 py-1 rounded-full"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-secondary transition-colors text-xs font-mono border border-border hover:border-secondary/50 px-2 py-1 rounded-full"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
