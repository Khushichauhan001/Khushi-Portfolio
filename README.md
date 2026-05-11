# 🌐 Khushi Chauhan — Portfolio

A sleek, animated developer portfolio built with **React.js + Tailwind CSS + Vite**.  
Dark theme, smooth scroll animations, typing effect, and fully responsive.

---

## 🚀 Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/khushi-portfolio.git
cd khushi-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production
```bash
npm run build
```

---

## ✏️ How to Customize (Edit ONE File)

All personal information lives in a single file:

```
src/data.js
```

Open it and update:
- `personalInfo` → name, email, phone, LinkedIn, GitHub, LeetCode URLs
- `summary` → your bio/summary text
- `education` → your degrees and grades
- `projects` → project title, description, tech stack, GitHub links
- `skills` → categorized skill tags
- `achievements` → your awards and certifications
- `experience` → roles and organizations

---

## 📁 Project Structure

```
khushi-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Put your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionWrapper.jsx
│   ├── data.js             ← ✅ Edit THIS for all personal info
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🌍 Deploy to Vercel (Free)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select your repo → click **Deploy**
4. Your portfolio is live at `your-repo.vercel.app` 🎉

---

## 🛠️ Tech Stack

- ⚛️ React.js 18
- 🎨 Tailwind CSS 3
- ⚡ Vite
- 🔤 Google Fonts (Poppins + Fira Code)

---

## 📝 Notes

- Place your resume PDF in `public/resume.pdf` so the Resume button works.
- Update social media URLs in `src/data.js` → `personalInfo`.
- To add more projects, just append to the `projects` array in `src/data.js`.

---

Made with ❤️ by Khushi Chauhan
