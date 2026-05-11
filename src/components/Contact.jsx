import { personalInfo } from "../data";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const mailto = `mailto:${personalInfo.email}?subject=Portfolio Contact: ${form.subject.value}&body=${encodeURIComponent(
      `Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-400 text-center mb-10 text-sm md:text-base">
          I'm currently open to opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            {[
              { icon: "✉️", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: "📞", label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: "📍", label: "Location", value: personalInfo.location, href: null },
              { icon: "💼", label: "LinkedIn", value: "Connect with me", href: personalInfo.linkedin },
              { icon: "🐙", label: "GitHub", value: "Check my code", href: personalInfo.github },
              { icon: "⚡", label: "LeetCode", value: "Rating: 1642", href: personalInfo.leetcode },
            ].map((item) => (
              <div key={item.label} className="glow-card bg-card rounded-xl p-4 flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name", placeholder: "Your Name", type: "text" },
              { name: "email", placeholder: "Your Email", type: "email" },
              { name: "subject", placeholder: "Subject", type: "text" },
            ].map((field) => (
              <input
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
              />
            ))}
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              required
              className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-dark font-semibold text-sm hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
