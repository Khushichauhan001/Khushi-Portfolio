import { personalInfo } from "../data";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* <p className="text-gray-500 text-xs font-mono">
          &lt;{personalInfo.name} /&gt; 
        </p> */}
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: "LeetCode", href: personalInfo.leetcode },
            { label: "Email", href: `mailto:${personalInfo.email}` },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary text-xs transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-xs">
          ©  {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
