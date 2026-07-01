# Yudho Tri Putranto - Portfolio

Personal portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

## Features

- **Dark / Light Mode** — Theme toggle with system preference detection
- **EN / ID Translation** — Full bilingual support (English & Indonesian)
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Tab Switching** — Home page toggles between Projects & Experience sections without page navigation
- **Creative UI** — Friendly, modern interface with glassmorphism, timeline layout, and smooth animations (Framer Motion)

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero + tab-switchable Projects / Work Experience |
| `/projects` | All projects (direct access) |
| `/experience` | Work experience timeline (direct access) |
| `/projects/:id` | Project detail view |
| `/about` | About me, skills, fun facts |
| `/resume` | View / download CV |

## Projects

| Project | Role |
|---|---|
| INDICO Engage by Telkomsel | QA PIC |
| MAYZAR ERP & POS SYSTEM | QA PIC |
| ACPEDIA PLATFORM | QA PIC |
| XLSATU Migration Project | QA PIC |
| ESS XLSMART (Enterprise HCIS) | QA PIC |
| SIDIVA XLSMART Mobile App | QA Engineer |
| D'Farm Dream - IoT Poultry Platform | QA PIC & UI/UX Designer |
| OrangeHRM - QA Automation | QA Engineer |

## Work Experience

| Company | Role | Period |
|---|---|---|
| PT. IDstar Cipta Teknologi | Quality Assurance Engineer | Oct 2025 - Present |
| PT. Zealtech Solution Indonesia | Software QA Engineer | Oct 2024 - Oct 2025 |
| Elisoft Technology | QA Engineer | Jul 2024 - Oct 2024 |

## Tech Stack

- **React 19** + Hooks (Context for theme & language state)
- **TypeScript** — Fully typed
- **Vite** — Fast dev server & build
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Page, scroll & tab-switch animations
- **React Router v7** — Client-side routing

## Getting Started

```bash
npm install
npm run dev        # Dev server → http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

## Project Structure

```
src/
  contexts/
    ThemeContext.tsx      # Dark/light mode state
    LanguageContext.tsx   # EN/ID language state
  translations/
    en.ts                # English strings
    id.ts                # Indonesian strings
  components/
    Header.tsx            # Navbar with theme/lang toggles
    Footer.tsx            # Footer with links & toggles
    Contact.tsx           # Contact section
    ProjectCard.tsx       # Project card component
  pages/
    Home.tsx              # Hero + tab-switchable sections
    About.tsx             # About page
    Experience.tsx        # Work experience page
    Projects.tsx          # All projects page
    ProjectDetail.tsx     # Project detail page
    Resume.tsx            # Resume/CV page
  data/
    projects.ts           # All 8 project entries
    experience.ts         # Work experience entries
public/images/
  {project-name}/         # Per-project image folders
  CV Yudho Tri Putranto_en.pdf
```
