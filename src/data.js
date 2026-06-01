// ╔══════════════════════════════════════════════════════════════╗
// ║        PORTFOLIO DATA — Edit this file to update info        ║
// ╚══════════════════════════════════════════════════════════════╝

export const personalInfo = {
  name: "Khushi Chauhan",
  title: "Full-Stack Developer & AI/ML Enthusiast",
  tagline: "Building intelligent systems with LLMs, RAG pipelines & full-stack solutions.",
  location: "Greater Noida, India",
  email: "khushichauhan2506@gmail.com",
  phone: "+91-7037441323",
  linkedin: "https://www.linkedin.com/in/khushi-chauhan001/", // ← update with your actual LinkedIn URL
  github: "https://github.com/Khushichauhan001",        // ← update with your actual GitHub URL
  leetcode: "https://leetcode.com/u/khushii001/",     // ← update with your actual LeetCode URL
  resumeLink: "/Khushi_Res_MIcor1.pdf",                            // ← place your resume PDF in /public/resume.pdf
  avatarInitials: "KC",
};

export const summary =
  "Third-year B.Tech. CSE student experienced in LLM integration, RAG pipelines, and Generative AI development using Sentence Transformers, FAISS, and Phi-3. Backed by full-stack skills in React.js, Node.js, and FastAPI for end-to-end deployment, with 600+ DSA problems solved on LeetCode (Rating: 1642).";

export const education = [
  {
    degree: "B.Tech. – Computer Science & Engineering",
    institution: "G.L. Bajaj Institute of Technology and Management, AKTU",
    duration: "2023 – 2027",
    score: "CGPA: 8.7",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Priyanka Modern School, Dhampur (Bijnor) — CBSE",
    duration: "May 2023",
    score: "92.8%",
  },
  {
    degree: "Secondary (Class X)",
    institution: "Priyanka Modern School, Dhampur (Bijnor) — CBSE",
    duration: "May 2021",
    score: "92.4%",
  },
];

export const projects = [
  {
    title: "Offline-CortexDoc",
    description:
      "A privacy-focused offline RAG system to query unstructured documents locally with zero external API cost. Implements chunking, embeddings, VectorDB (FAISS), and semantic retrieval. Integrated Phi-3 LLM for context-aware responses over 1,000+ document chunks.",
    tech: ["Python", "FAISS", "Phi-3", "RAG", "Shell Script", "Sentence Transformers", "VectorDB", "RAG Pipeline", "Embeddings"],
    github: "https://github.com/Khushichauhan001/Offline_CortexDoc", // ← update
    live: "",
  },
  {
    title: "Git-PR-Analyzer",
    description:
      "Built an AI-powered GitHub PR Risk Analyzer for detecting and analyzing risky pull requests on GitHub. Personally fine-tuned Meta Phi-2 for instruction-based code review generation and CodeBERT for high-accuracy PR risk classification.",
    tech: ["React.js" , "Javascript", "FASTAPI", "Python", "HTML/CSS" , "Collab", "PostgreSQL", "VectorDB", "REST APIs", "FineTune Phi-2", "CodeBert"],
    github: "https://github.com/Khushichauhan001/Git_PR_Analyzer", // ← update
    // live: "https://genixx-ai.vercel.app/",
  },
  {
    title: "Signalist – Stock Tracker",
    description:
      "Full-stack stock tracking web app with secure authentication, personalized watchlists, and real-time market insights via interactive heatmaps across 10+ sectors. Built with Inngest-powered background job processing.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Inngest", "API Integration"],
    github: "https://github.com/Khushichauhan001/Stock_Tracker", // ← update
    live: "https://stock-trackerr-three.vercel.app/sign-in",
  },
  
  {
    title: "GenixAI",
    description:
      "AI-powered content generation platform integrating Gemini for text & image creation, and OpenAI for resume analysis. Architected with PostgreSQL (Neon serverless), secure file upload handling, and REST API layer.",
    tech: ["React.js" , "Node.js", "Express.js", "PostgreSQL", "Gemini API", "OpenAI", "Postman"],
    github: "https://github.com/Khushichauhan001/GenixAi", // ← update
    live: "https://genixx-ai.vercel.app/",
  },
   {
    title: "Road-insight-pulse",
    description:
      "An AI-powered road safety and accident analysis platform that provides real-time insights, interactive visualizations, and smart analytics to identify accident-prone areas and improve transportation safety.",
    tech: ["HTML", "Tailwind CSS", "Javascript", "React.js", "Kaggle"],
    github: "https://github.com/Khushichauhan001/road-insight-pulse", // ← update
    live: "https://road-insight-pulse.vercel.app/",
  },
 {
    title: "Password Generator",
    description:
      "A website for Generating Password of differnet length , types and even with the choice of including special characters or not",
    tech: ["HTML", "Tailwind CSS", "Javascript"],
    github: "https://github.com/Khushichauhan001/Password-Generator", // ← update
    live: "https://password-generatorr-nine.vercel.app/",
  },
  {
    title: "Arcade-A-Thon",
    description:
      "A website for Hackathon Registration and Info",
    tech: ["HTML", "Tailwind CSS", "Javascript", "React.js", "Next.js", "Framer Motion"],
    github: "https://github.com/Khushichauhan001/prototype", // ← update
    live: "https://arcada-a-thon-1.vercel.app/",
  },
];

export const skills = {
  "Languages & Core": ["Java", "JavaScript", "Python", "DSA", "OOPs", "DBMS", "Distributed Systems"],
  "Frontend": ["HTML", "Tailwind CSS", "React.js", "Framer Notion"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "FastAPI"],
  "AI / ML": ["RAG", "LLM Integration", "Generative AI", "Prompt Engineering", "Semantic Search", "Vector DB", "Agentic AI", "Pandas", "PyTorch", "Finetuning Model"],
  "Database": ["MongoDB", "MySQL", "PostgreSQL", "VectorDB"],
  "Tools": [ "Git", "GitHub", "Docker", "Linux", "Vercel", "Render", "Hugging Face"],
};

export const achievements = [
  " -> Top 5 Finalist Nationwide – Code Kshetra 2.0",
  " -> 3rd Place – Katalyst Tech Fest 2026, Delhi Region (150 participants)",
  " -> LeetCode Rating: 1642 | 500+ problems solved",
  " -> Google Cloud Certificate – Develop GenAI Apps with Gemini & Streamlit",
  " -> Udemy – Build Full Stack Websites using MERN",
  " -> Selected for Katalyst India – National Women-in-STEM Leadership Program",
];

export const experience = [
  {
    role: "Technical Lead",
    org: "Yuktikula Club",
    duration: "July 2024 – Present",
    points: [
      "Organized hackathons and workshops with 200+ student participants.",
      "Developer of the club's official website for events and updates.",
    ],
  },
  {
    role: "Program Participant",
    org: "Katalyst India, New Delhi",
    duration: "2024",
    points: [
      "Selected for prestigious National Women-in-STEM Leadership Program.",
      "Completed 100+ advanced technical training modules & 50+ mentoring sessions.",
      "4+ industry visits (Microsoft, CNH Industrial, etc.) with 20+ professionals.",
    ],
  },
];
