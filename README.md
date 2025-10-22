# 🚀 **Shashwat Singh Rathour – Portfolio Website**

A sleek, **modern, and responsive portfolio** built with **Next.js 15**, **Tailwind CSS**, and **TypeScript** — featuring **smooth animations**, **SEO optimization**, and a **professional interface** to showcase my work and skills.  

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

---

## 📚 **Table of Contents**

- [✨ Features](#-features)  
- [🛠️ Tech Stack](#️-tech-stack)  
- [🚀 Live Demo](#-live-demo)  
- [📦 Project Structure](#-project-structure)  
- [🏃‍♂️ Getting Started](#️-getting-started)  
- [🎨 Customization](#-customization)  
- [📦 Deployment](#-deployment)  
- [🎯 Portfolio Sections](#-portfolio-sections)  
- [🔧 Scripts](#-scripts)  
- [📊 Performance](#-performance)  
- [🤝 Contributing](#-contributing)  
- [📄 License](#-license)  
- [📞 Contact](#-contact)  
- [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ **Features**

- ⚡ **Blazing Fast** — Built on Next.js 15 and optimized for performance  
- 🎨 **Modern Design** — Clean, professional UI powered by Tailwind CSS  
- 📱 **Fully Responsive** — Perfect experience on all devices  
- 🎭 **Smooth Animations** — Framer Motion transitions  
- 🔍 **SEO Optimized** — Meta tags, Open Graph, and sitemap  
- 🌙 **Theme Consistent** — Cohesive colors and fonts  
- 📧 **Contact Form** — Fully functional with validation  
- 🎯 **Interactive Projects** — Filterable showcase with modal previews  

---

## 🛠️ **Tech Stack**

| Category | Technology |
|-----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS |
| **Language** | TypeScript |
| **Animations** | Framer Motion |
| **Deployment** | Vercel |
| **Icons** | React Icons + Emojis |
| **Font** | Inter (Google Fonts) |

---

## 🚀 **Live Demo**

🔗 **[View Portfolio →](https://your-portfolio-url.vercel.app)**  

---

## 📦 **Project Structure**

```
my-portfolio/
├── public/                     # Static assets
│   ├── projects/               # Project images
│   └── favicon.ico             # Site icon
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                 # UI components
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectModal.tsx
│   │       ├── ProjectsFilter.tsx
│   │       ├── ContactForm.tsx
│   │       ├── SocialLinks.tsx
│   │       ├── PageTransition.tsx
│   │       ├── ScrollProgress.tsx
│   │       └── BackToTop.tsx
│   └── data/                   # Static data
│       └── projects.ts
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## 🏃‍♂️ **Getting Started**

### **Prerequisites**
- Node.js **v18+**
- npm / yarn / pnpm

### **Installation**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/ISHASHWAT-SINGHI/my-portfolio.git
cd my-portfolio

# 2️⃣ Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3️⃣ Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then open 👉 **http://localhost:3000**

---

## 🎨 **Customization**

### 🧑‍💻 Personal Information  
Update the following files:  
- `src/app/page.tsx` → Hero section  
- `src/components/layout/Header.tsx` → Navigation  
- `src/components/layout/Footer.tsx` → Footer  

### 💼 Projects  
Edit `src/data/projects.ts`:  

```ts
{
  id: 1,
  title: "Your Project Title",
  description: "Brief description",
  detailedDescription: "Detailed project description",
  technologies: ["Tech1", "Tech2", "Tech3"],
  category: "web", // web | iot | robotics | cloud
  imageUrl: "/projects/your-image.jpg",
  liveUrl: "https://your-live-demo.com",
  githubUrl: "https://github.com/yourusername/your-repo",
  featured: true
}
```

Add images to `public/projects/`  
Update social links in `src/components/ui/SocialLinks.tsx`

### 🎨 Styling
- **Colors:** `tailwind.config.ts`  
- **Fonts:** `src/app/layout.tsx`  
- **Animations:** UI components (Framer Motion configs)

---

## 📦 **Deployment**

**Vercel (Recommended)**  
1. Push your code to GitHub  
2. Connect your repository to Vercel  
3. Deploy — automatic builds for each push to the `main` branch  

---

## 🎯 **Portfolio Sections**

| Section | Description |
|----------|--------------|
| 🏠 **Hero** | Introduction and CTA |
| 👤 **About** | Skills, education, and certifications |
| 💼 **Projects** | Filterable showcase with modals |
| 📞 **Contact** | Contact form and social links |

---

## 🔧 **Scripts**

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

---

## 📊 **Performance**

- ⚡ Lighthouse Score: **95+** (Perf, Accessibility, SEO)  
- ✅ Core Web Vitals: All green  
- 📦 Bundle Size: Code-split and optimized  
- 🖼️ Images: Auto-optimized using Next.js Image  

---

## 🤝 **Contributing**

While this is a personal portfolio, contributions are welcome!

```bash
# Fork → Create Branch → Commit → Push → Pull Request
```

---

## 📄 **License**

This project is open-source under the **MIT License**.

---

## 📞 **Contact**

- 📧 Email: [ssrathour45@gmail.com](mailto:ssrathour45@gmail.com)  
- 💼 LinkedIn: [Shashwat Singh](https://linkedin.com/in/your-link)  
- 🌐 Portfolio: [Live Demo](https://your-portfolio-url.vercel.app)

---

## 🙏 **Acknowledgments**

- [Next.js](https://nextjs.org/) – The React Framework  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling  
- [Vercel](https://vercel.com/) – Deployment platform  
- [Framer Motion](https://www.framer.com/motion/) – Animation library  
