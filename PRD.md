I'll create a comprehensive PRD with dummy student information. Let me generate realistic answers first, then create the full PRD.

---

## Simulated Student Responses:

1. **Name & Year:** "I'm Arjun Sharma, 3rd year CS student"
2. **GitHub:** "arjun-dev"
3. **Repository:** "portfolio-2025"
4. **Skills:** "React, Node.js, Python, MongoDB, Express, Java, DSA"
5. **Projects:** "5 projects"
6. **Experience:** "One internship at a startup, Google Cloud certification, won college hackathon"
7. **Sections:** "All suggested sections + a Blog section"
8. **Color Scheme:** "Professional Blue with gradient accents"
9. **UI Library:** "DaisyUI 5"
10. **Animations:** "Smooth scroll, typing effect for hero, card hover effects, fade-in on scroll"
11. **AI Assistant:** "GitHub Copilot"
12. **Features:** "Dark/Light mode toggle, contact form with email, resume download"

---

# Arjun Sharma's Professional Portfolio Website
**Product Requirements Document**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646cff?logo=vite)](https://vitejs.dev/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?logo=daisyui)](https://daisyui.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock)](https://greensock.com/gsap/)

**Developer:** Arjun Sharma | **GitHub:** [@arjun-dev](https://github.com/arjun-dev)  
**Live Demo:** https://arjun-dev.github.io/portfolio-2025/

---

## 🎯 Project Overview

### Purpose
A modern, responsive portfolio website showcasing Arjun Sharma's technical skills, projects, and professional journey as a 3rd-year Computer Science undergraduate specializing in full-stack development and competitive programming.

### Target Audience
- Recruiters and HR professionals from tech companies
- Potential employers (startups and product-based companies)
- Academic collaborators and research mentors
- Professional network connections and fellow developers

### Core Objective
Create a visually engaging, performant single-page application that effectively communicates technical competence, project experience, and problem-solving abilities using atomic design principles while maintaining a professional blue aesthetic with modern gradient accents.

---

## 🧬 Design Methodology: Atomic Design

This project follows **Brad Frost's Atomic Design** methodology for building a scalable, maintainable component system.

**Reference:** [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/table-of-contents/)

### Why Atomic Design?

Atomic Design provides a mental model for thinking about UI in a hierarchical way, breaking interfaces down into fundamental building blocks and combining them to form increasingly complex organisms.

### The Five Stages

```
Atoms → Molecules → Organisms → Templates → Pages
```

#### 1️⃣ **Atoms** (Basic Building Blocks)
The smallest functional units - cannot be broken down further without losing meaning.

**Examples for this portfolio:**
- `Button` - CTA buttons, nav buttons, social icons, theme toggle
- `Input` - Form input fields, search bars
- `Label` - Text labels for forms
- `Icon` - Social media icons, skill icons, navigation icons
- `Typography` - Heading, Paragraph, Link, Code components
- `Avatar` - Profile image component
- `Badge` - Skill badges, tech stack tags, status indicators
- `Divider` - Section separators
- `Switch` - Dark/light mode toggle
- `Card` - Base card component

**Implementation:**
```typescript
// src/components/atoms/Button/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  loading?: boolean;
}
```

#### 2️⃣ **Molecules** (Simple Component Groups)
Combinations of atoms that form simple functional units.

**Examples for this portfolio:**
- `ThemeToggle` - Switch + Icon + Label
- `SocialLinks` - Icon + Link (multiple instances)
- `SkillCard` - Icon + Label + Badge
- `FormField` - Label + Input + Error Message
- `NavItem` - Link + Icon (optional) + Active indicator
- `ProjectTag` - Badge + Text
- `StatCard` - Icon + Number + Label
- `BlogCard` - Image + Typography + Badge + Link
- `CertificationBadge` - Icon + Typography + Badge

**Implementation:**
```typescript
// src/components/molecules/SkillCard/SkillCard.tsx
// Combines: Icon (atom) + Typography (atom) + Badge (atom)
interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced';
  category: 'language' | 'frontend' | 'backend' | 'tool';
}
```

#### 3️⃣ **Organisms** (Complex Component Sections)
Complex UI components composed of molecules and/or atoms.

**Examples for this portfolio:**
- `Navbar` - Logo + NavItems + ThemeToggle + MobileMenu
- `Hero` - Typography + Buttons + TypingEffect + Background
- `ProjectCard` - Image + Typography + Tags + Buttons + HoverEffect
- `SkillsGrid` - Multiple SkillCards arranged with categories
- `ContactForm` - Multiple FormFields + Button + SocialLinks
- `Footer` - SocialLinks + Typography + NavItems + Copyright
- `Timeline` - Multiple TimelineItems (Experience/Education)
- `BlogSection` - BlogCard grid with filters
- `AchievementsShowcase` - CertificationBadges + Awards

**Implementation:**
```typescript
// src/components/organisms/Navbar/Navbar.tsx
// Combines: Logo + NavItem[] + ThemeToggle + MobileMenu
interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}
```

#### 4️⃣ **Templates** (Page-Level Structure)
Page-level layouts that combine organisms into a structure, without real content.

**Examples for this portfolio:**
- `HomeTemplate` - Layout structure for homepage sections
- `SectionTemplate` - Reusable section wrapper with padding/spacing
- `FormTemplate` - Generic form layout with validation
- `BlogTemplate` - Blog section layout with sidebar

**Implementation:**
```typescript
// src/components/templates/HomeTemplate/HomeTemplate.tsx
// Defines layout grid, spacing, section order
// Uses placeholder content
interface HomeTemplateProps {
  hero: React.ReactNode;
  about: React.ReactNode;
  skills: React.ReactNode;
  projects: React.ReactNode;
  experience: React.ReactNode;
  blog: React.ReactNode;
  contact: React.ReactNode;
}
```

#### 5️⃣ **Pages** (Final Implementation)
Templates populated with real content and data.

**Examples for this portfolio:**
- `HomePage` - HomeTemplate with actual portfolio data
- `App` - Complete application with all sections and routing

**Implementation:**
```typescript
// src/pages/HomePage/HomePage.tsx
// HomeTemplate + real projects data + real skills data + real blog posts
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/skills';
import { blogPosts } from '@/data/blog';
```

### Atomic Design File Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── Button.test.tsx
│   │   ├── Icon/
│   │   ├── Typography/
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   ├── Input/
│   │   ├── Switch/
│   │   ├── Card/
│   │   └── Divider/
│   │
│   ├── molecules/
│   │   ├── SkillCard/
│   │   │   ├── SkillCard.tsx
│   │   │   ├── SkillCard.stories.tsx
│   │   │   └── SkillCard.test.tsx
│   │   ├── SocialLinks/
│   │   ├── ProjectTag/
│   │   ├── FormField/
│   │   ├── NavItem/
│   │   ├── ThemeToggle/
│   │   ├── BlogCard/
│   │   └── CertificationBadge/
│   │
│   ├── organisms/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.stories.tsx
│   │   │   └── Navbar.test.tsx
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── ProjectCard/
│   │   ├── SkillsGrid/
│   │   ├── Timeline/
│   │   ├── BlogSection/
│   │   ├── ContactForm/
│   │   └── Footer/
│   │
│   ├── templates/
│   │   ├── HomeTemplate/
│   │   │   ├── HomeTemplate.tsx
│   │   │   └── HomeTemplate.stories.tsx
│   │   ├── SectionTemplate/
│   │   └── BlogTemplate/
│   │
│   └── pages/
│       └── HomePage/
│           └── HomePage.tsx
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── about.ts
│   ├── experience.ts
│   └── blog.ts
│
├── hooks/
│   ├── useTheme.ts
│   ├── useScrollSpy.ts
│   └── useAnimation.ts
│
├── styles/
│   └── globals.css
│
└── utils/
    ├── animations.ts
    └── helpers.ts
```

### Development Workflow with Atomic Design

**Build from smallest to largest:**

```
Step 1: Create Atoms
└─ Build and test Button, Typography, Icon, Badge in Storybook

Step 2: Compose Molecules
└─ Combine atoms into SkillCard, NavItem, ThemeToggle, FormField

Step 3: Build Organisms
└─ Assemble molecules into Navbar, Hero, ProjectCard, SkillsGrid

Step 4: Design Templates
└─ Create HomeTemplate with organism placeholders

Step 5: Populate Pages
└─ Fill HomeTemplate with real Arjun's content and data
```

### Benefits for Your Portfolio

✅ **Reusability** - Button used in Hero, Projects, Contact, Blog  
✅ **Consistency** - Unified blue gradient design language  
✅ **Scalability** - Easy to add blog posts or new projects  
✅ **Testability** - Test components in isolation with Storybook  
✅ **Documentation** - Self-documenting component library  
✅ **Maintainability** - Change button style once, updates everywhere  
✅ **Theme Support** - Dark/Light mode applied at atom level

---

## ✨ Key Features

### Must-Have (MVP)
- ✅ **Responsive Hero Section** with animated typing effect introduction
- ✅ **About Me** with photo, bio, and animated tech stack visualization
- ✅ **Projects Showcase** with 5 featured projects in grid layout
- ✅ **Skills Matrix** displaying proficiencies across 4 categories
- ✅ **Experience Timeline** showing internship and achievements
- ✅ **Contact Section** with working email form (EmailJS integration)
- ✅ **Smooth Scroll Navigation** with active section highlighting
- ✅ **Mobile-First Responsive Design** (320px to 1920px+)
- ✅ **Dark/Light Mode Toggle** with persistent preference

### Nice-to-Have (Phase 2)
- 🎨 **Blog Section** with filterable tech articles
- 📄 **Resume Download** button with PDF generation
- 🏆 **Achievements Showcase** (hackathon wins, certifications)
- 📊 **GitHub Stats Integration** via GitHub API
- ✨ **Advanced Animations** with GSAP ScrollTrigger
- 🔍 **Project Search/Filter** functionality
- 📱 **PWA Support** for offline access
- 🌐 **SEO Optimization** with meta tags and structured data

---

## 🎨 Design Specifications

### Visual Theme
- **Primary Color Scheme:** Professional Blue (`#3B82F6`) with gradient accents
- **Gradient Palette:**
    - Primary Gradient: `from-blue-500 to-cyan-500`
    - Accent Gradient: `from-blue-600 via-cyan-500 to-teal-400`
    - Dark Mode Gradient: `from-blue-700 to-indigo-900`
- **Typography:**
    - Headings: **Inter** (weights: 600, 700, 800)
    - Body: **Inter** (weights: 400, 500)
    - Code: **Fira Code** (monospace)
- **Component Library:** DaisyUI 5.0
- **Style:** Modern Professional with Gradient Accents

### Color System
```css
/* Light Mode */
--primary: #3B82F6;      /* Blue 500 */
--secondary: #06B6D4;    /* Cyan 500 */
--accent: #14B8A6;       /* Teal 500 */
--neutral: #1F2937;      /* Gray 800 */
--base-100: #FFFFFF;     /* White */
--base-200: #F3F4F6;     /* Gray 100 */

/* Dark Mode */
--primary: #60A5FA;      /* Blue 400 */
--secondary: #22D3EE;    /* Cyan 400 */
--accent: #2DD4BF;       /* Teal 400 */
--neutral: #F9FAFB;      /* Gray 50 */
--base-100: #111827;     /* Gray 900 */
--base-200: #1F2937;     /* Gray 800 */
```

### Animation Strategy (GSAP)
- **Hero Section:**
    - Typing effect for name/title using custom typewriter function
    - Fade in + slide up for CTA buttons (staggered 0.2s)
    - Subtle parallax effect on scroll
- **Navigation:**
    - Smooth scroll with 80px offset for fixed navbar
    - Active link highlighting with sliding underline effect
    - Mobile menu slide-in from right
- **Projects:**
    - Card hover lift effect (translateY: -8px, shadow increase)
    - Reveal on scroll with stagger (0.15s between cards)
    - Image zoom on hover (scale: 1.05)
- **Skills:**
    - Category-wise reveal on scroll
    - Icon bounce effect on hover
    - Badge fade-in animation
- **Transitions:**
    - All section fade-ins with ScrollTrigger
    - Smooth theme toggle transition (0.3s)
    - Page load animation sequence

### Responsive Breakpoints
```css
/* Mobile First Approach */
- Mobile: 320px - 640px (1 column layouts)
- Tablet: 641px - 1024px (2 column layouts)
- Desktop: 1025px - 1536px (3-4 column layouts)
- Wide: 1537px+ (max-width: 1920px container)
```

---

## 🏗️ Technical Architecture

### Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | React | 19.x | UI library with latest features |
| **Language** | TypeScript | 5.7.x | Type safety and IntelliSense |
| **Build Tool** | Vite | 8.x | Fast dev server and bundling |
| **Styling** | TailwindCSS | 4.1.x | Utility-first CSS framework |
| **Components** | DaisyUI | 5.x | Pre-built Tailwind components |
| **Animation** | GSAP | 3.12.x | Professional animations |
| **Forms** | React Hook Form | 7.x | Form validation and handling |
| **Email** | EmailJS | 4.x | Contact form backend |
| **Icons** | React Icons | 5.x | Icon library (Lucide, FA, SI) |
| **Version Control** | Git + GitHub | - | Source control and hosting |
| **Component Dev** | Storybook | 10.x | Component documentation |
| **IDE** | WebStorm | Latest | Primary development environment |
| **AI Assistant** | GitHub Copilot | - | Code completion and suggestions |
| **Deployment** | GitHub Pages | - | Static site hosting |

### Atomic Design Component Inventory

#### Atoms (20 components)
| Component | Purpose | Key Props | DaisyUI Class |
|-----------|---------|-----------|---------------|
| `Button` | Interactive elements | variant, size, onClick, loading | btn, btn-primary |
| `Icon` | Visual symbols | name, size, color, rotate | - |
| `Typography` | Text elements | variant, weight, color | text-xl, font-bold |
| `Input` | Form inputs | type, value, onChange, error | input, input-bordered |
| `Textarea` | Multi-line input | value, onChange, rows | textarea |
| `Label` | Form labels | htmlFor, required | label |
| `Avatar` | Profile images | src, alt, size, ring | avatar, avatar-ring |
| `Badge` | Tags/labels | color, size, variant | badge, badge-primary |
| `Divider` | Section separators | orientation, text | divider |
| `Link` | Navigation links | href, external, underline | link, link-hover |
| `Image` | Optimized images | src, alt, loading, aspectRatio | - |
| `Switch` | Toggle controls | checked, onChange, label | toggle |
| `Card` | Container element | variant, hover, bordered | card, card-bordered |
| `Progress` | Progress bars | value, max, color | progress |
| `Spinner` | Loading indicator | size, color | loading, loading-spinner |
| `Tooltip` | Hover information | text, position | tooltip |
| `Alert` | Notifications | type, message, dismissible | alert |
| `Code` | Code snippets | language, inline | mockup-code |
| `Kbd` | Keyboard keys | key | kbd |
| `Quote` | Blockquotes | author, cite | - |

#### Molecules (15 components)
| Component | Atoms Used | Purpose | Features |
|-----------|-----------|---------|----------|
| `SkillCard` | Icon + Typography + Badge | Display individual skill | Hover animation, proficiency indicator |
| `SocialLinks` | Icon + Link | Social media links group | Hover effects, external indicators |
| `ProjectTag` | Badge + Typography | Tech stack tags | Color-coded by category |
| `FormField` | Label + Input + Typography | Form input with validation | Error states, required indicators |
| `NavItem` | Link + Typography + Icon | Navigation menu item | Active state, smooth scroll |
| `StatCard` | Icon + Typography | Quick stats display | Count-up animation |
| `CTAButton` | Button + Icon | Call-to-action with icon | Gradient background, pulse effect |
| `ThemeToggle` | Switch + Icon + Typography | Dark/light mode switcher | Smooth transition, icon swap |
| `BlogCard` | Card + Image + Typography + Badge | Blog post preview | Read time, category badge |
| `CertificationBadge` | Icon + Typography + Badge | Achievement display | Verification link, issue date |
| `TimelineItem` | Icon + Typography + Divider | Timeline entry | Connector line, hover highlight |
| `SearchBar` | Input + Icon + Button | Search functionality | Debounced input, clear button |
| `DownloadButton` | Button + Icon | File download | Progress indicator, success state |
| `ContactItem` | Icon + Typography + Link | Contact method | Copy to clipboard |
| `SkillProgress` | Typography + Progress + Badge | Skill with proficiency bar | Animated fill |

#### Organisms (12 components)
| Component | Molecules/Atoms Used | Purpose | Key Features |
|-----------|---------------------|---------|--------------|
| `Navbar` | NavItem + ThemeToggle + Button + Avatar | Main navigation | Sticky, glass morphism, mobile menu |
| `Hero` | Typography + CTAButton + Badge | Landing section | Typing effect, gradient background, particles |
| `About` | Avatar + Typography + StatCard + Badge | About section | Image reveal, bio with highlights |
| `SkillsGrid` | SkillCard + Typography | Skills matrix | Category tabs, filter by proficiency |
| `ProjectCard` | Card + Image + ProjectTag + CTAButton | Project showcase | Hover 3D tilt, live demo + GitHub links |
| `Timeline` | TimelineItem + Typography | Experience/Education | Vertical timeline, hover expand |
| `BlogSection` | BlogCard + SearchBar + Badge | Blog posts grid | Filter by category, pagination |
| `AchievementsShowcase` | CertificationBadge + Card | Certifications & awards | Modal with details, verification links |
| `ContactForm` | FormField + Button + Alert | Contact form | EmailJS integration, validation, success toast |
| `Footer` | SocialLinks + Typography + NavItem | Site footer | Newsletter signup, back to top |
| `MobileMenu` | NavItem + ThemeToggle + Button | Mobile navigation | Slide-in drawer, overlay |
| `ProjectFilter` | Button + Badge | Project filtering | Active filter state, reset option |

---

## 📄 Detailed Section Requirements

### 1. Hero Section (Organism)
**Purpose:** Create immediate impact and introduce Arjun as a full-stack developer

**Atomic Breakdown:**
- **Atoms:** Typography (h1, h2, p), Button, Icon (scroll indicator, social icons)
- **Molecules:** CTAButton group, SocialLinks
- **Animation:** GSAP typing effect, stagger fade-in, parallax scroll

**Elements:**
- Full viewport height (100vh)
- Animated typing effect: "Hi, I'm Arjun Sharma" → "Full-Stack Developer" → "Problem Solver"
- Professional tagline: "3rd Year CS Undergrad | MERN Stack Developer | Competitive Programmer"
- Gradient background with subtle animated mesh pattern
- Two CTA buttons: "View Projects" (primary) + "Download Resume" (outline)
- Social links row: GitHub, LinkedIn, Twitter, LeetCode
- Animated scroll indicator (bouncing arrow)

**Component Structure:**
```typescript
// Organism: Hero
Hero
├── Background (gradient mesh animation)
├── Typography (Atom) - Greeting
├── TypingEffect (Custom) - Name/Roles
├── Typography (Atom) - Tagline
├── CTAButton (Molecule) - View Projects
├── CTAButton (Molecule) - Download Resume
├── SocialLinks (Molecule)
│   ├── Link (Atom) - GitHub
│   ├── Link (Atom) - LinkedIn
│   ├── Link (Atom) - Twitter
│   └── Link (Atom) - LeetCode
└── Icon (Atom) - Scroll indicator
```

**Data Structure:**
```typescript
interface HeroData {
  greeting: string;
  name: string;
  roles: string[];
  tagline: string;
  ctaButtons: {
    primary: { text: string; action: string };
    secondary: { text: string; action: string };
  };
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}
```

### 2. About Section (Organism)
**Purpose:** Humanize Arjun with personal story and technical background

**Atomic Breakdown:**
- **Atoms:** Avatar, Typography, Badge, Icon
- **Molecules:** StatCard, SkillProgress
- **Organisms:** About component with grid layout

**Elements:**
- Professional headshot (400px circle, blue gradient ring, subtle shadow)
- 3-paragraph bio covering:
    - Academic background (3rd year CS, specialization in web dev & DSA)
    - Technical journey (started with Java, fell in love with React ecosystem)
    - Career aspirations (building scalable products, contributing to open source)
- Tech stack badge wall (animated reveal): React, Node.js, Python, MongoDB, Express, Java
- Quick stats section:
    - 📂 **5** Projects Completed
    - 💻 **7** Technologies Mastered
    - 🏆 **3** Achievements Unlocked
    - ⭐ **500+** Problems Solved (LeetCode/Codeforces)

**Component Structure:**
```typescript
// Organism: About
About
├── Grid Container (2 columns desktop, 1 mobile)
│   ├── Left Column
│   │   ├── Avatar (Atom) - Profile photo
│   │   └── SocialLinks (Molecule)
│   └── Right Column
│       ├── Typography (Atom) - Section title
│       ├── Typography (Atom) - Bio paragraphs
│       └── TechStack
│           └── Badge[] (Atom) - Technologies
├── Stats Grid (4 columns)
│   ├── StatCard (Molecule) - Projects
│   ├── StatCard (Molecule) - Technologies
│   ├── StatCard (Molecule) - Achievements
│   └── StatCard (Molecule) - Problems Solved
```

**Data Structure:**
```typescript
interface AboutData {
  name: string;
  title: string;
  bio: string[];
  image: string;
  techStack: string[];
  stats: {
    projects: number;
    technologies: number;
    achievements: number;
    problemsSolved: number;
  };
  socialLinks: SocialLink[];
}
```

### 3. Skills Section (Organism)
**Purpose:** Showcase technical proficiency across multiple categories

**Atomic Breakdown:**
- **Atoms:** Icon, Typography, Badge, Progress
- **Molecules:** SkillCard, SkillProgress
- **Organisms:** SkillsGrid with category tabs

**Categories:**
1. **Languages:** JavaScript, TypeScript, Python, Java, C++
2. **Frontend:** React 19, TailwindCSS, HTML5, CSS3, Redux
3. **Backend:** Node.js, Express.js, MongoDB, MySQL, RESTful APIs
4. **Tools & Others:** Git, GitHub, VS Code, Postman, Docker (learning)

**Component Structure:**
```typescript
// Organism: SkillsGrid
SkillsGrid
├── CategoryTabs (Molecule)
│   ├── Button (Atom) - Languages
│   ├── Button (Atom) - Frontend
│   ├── Button (Atom) - Backend
│   └── Button (Atom) - Tools
└── Grid Container (4 columns desktop, 2 tablet, 1 mobile)
    └── SkillCard[] (Molecule)
        ├── Icon (Atom) - Tech logo
        ├── Typography (Atom) - Skill name
        └── Badge (Atom) - Proficiency level
```

**Visualization:**
- Grid layout with hover effects (card lift + glow)
- Proficiency levels indicated by badge colors:
    - 🟢 Advanced (green) - React, JavaScript, Node.js, Java
    - 🟡 Intermediate (yellow) - TypeScript, Python, MongoDB
    - 🔵 Learning (blue) - Docker, AWS

**Animation:**
- Category-wise reveal on scroll (fade + slide up)
- Stagger effect: 0.1s delay between cards
- Icon pulse on hover

**Data Structure:**
```typescript
interface Skill {
  id: string;
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'tool';
  icon: string; // React Icons component name or SVG
  proficiency: 'beginner' | 'intermediate' | 'advanced';
  yearsOfExperience?: number;
}

const skillsData: Skill[] = [
  { id: '1', name: 'React', category: 'frontend', icon: 'FaReact', proficiency: 'advanced', yearsOfExperience: 2 },
  { id: '2', name: 'Node.js', category: 'backend', icon: 'FaNodeJs', proficiency: 'advanced', yearsOfExperience: 1.5 },
  // ... 20+ more skills
];
```

### 4. Projects Section (Organism)
**Purpose:** Demonstrate practical application of skills

**Atomic Breakdown:**
- **Atoms:** Image, Typography, Button, Badge, Icon
- **Molecules:** ProjectTag, CTAButton
- **Organisms:** ProjectCard, ProjectFilter

**Number of Projects:** 5 featured projects

**Component Structure:**
```typescript
// Organism: ProjectCard
ProjectCard
├── Card (Atom) - Container
├── Image (Atom) - Project screenshot/mockup
├── Content Section
│   ├── Typography (Atom) - Title
│   ├── Typography (Atom) - Short description
│   ├── ProjectTag[] (Molecule) - Tech stack badges
│   ├── Typography (Atom) - Key features (bullet list)
│   └── Actions
│       ├── CTAButton (Molecule) - Live Demo
│       └── CTAButton (Molecule) - View Code
└── HoverOverlay (gradient effect)
```

**Featured Projects:**

1. **E-Commerce Platform** (MERN Stack)
    - Full-stack shopping site with cart, payments, admin panel
    - Tech: React, Node.js, Express, MongoDB, Stripe
    - Features: JWT auth, Razorpay integration, admin dashboard
    - Links: Live Demo, GitHub

2. **Real-Time Chat Application**
    - WebSocket-based messaging app with rooms
    - Tech: React, Socket.io, Node.js, MongoDB
    - Features: Private/group chats, typing indicators, file sharing
    - Links: Live Demo, GitHub

3. **Portfolio Website Builder** (SaaS)
    - Template-based portfolio generator for students
    - Tech: React, TypeScript, TailwindCSS, Firebase
    - Features: Drag-drop editor, custom domains, analytics
    - Links: Live Demo, GitHub

4. **College Event Management System**
    - Platform for organizing campus events
    - Tech: React, Node.js, MySQL, AWS S3
    - Features: Event registration, QR tickets, email notifications
    - Links: Live Demo, GitHub

5. **DSA Problem Tracker** (Personal Tool)
    - Track competitive programming progress
    - Tech: React, Chart.js, LocalStorage
    - Features: Problem categorization, streak tracking, stats dashboard
    - Links: Live Demo, GitHub

**Layout:**
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Featured project (E-Commerce) spans 2 columns on desktop
- Filter buttons above grid: All, Frontend, Full-Stack, Tools

**Hover Effect:**
- 3D tilt effect using vanilla-tilt.js
- Gradient overlay reveal
- Image zoom (scale: 1.05)
- Shadow increase

**Data Structure:**
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: 'frontend' | 'fullstack' | 'backend' | 'tool';
  completionDate: string;
}
```

### 5. Experience Section (Organism)
**Purpose:** Show academic and professional timeline

**Atomic Breakdown:**
- **Atoms:** Icon, Typography, Image, Badge, Divider
- **Molecules:** TimelineItem, CertificationBadge
- **Organisms:** Timeline

**Component Structure:**
```typescript
// Organism: Timeline
Timeline
├── Typography (Atom) - Section title "Journey"
└── TimelineItem[] (Molecule)
    ├── Connector (Divider + Icon)
    ├── Image (Atom) - Company/University logo
    ├── Content
    │   ├── Typography (Atom) - Title/Position
    │   ├── Typography (Atom) - Organization
    │   ├── Badge (Atom) - Duration
    │   ├── Typography (Atom) - Description
    │   └── Typography (Atom) - Achievements (bullets)
    └── HoverExpand (reveal more details)
```

**Timeline Entries:**

1. **Full-Stack Development Intern** (June 2024 - August 2024)
    - **Company:** TechStartup Innovations Pvt. Ltd.
    - **Achievements:**
        - Built RESTful APIs serving 10,000+ requests/day
        - Optimized React components reducing load time by 40%
        - Collaborated with 5-person team using Agile methodology
        - Deployed features to production using Docker + AWS

2. **Google Cloud Certified** (May 2024)
    - **Certification:** Associate Cloud Engineer
    - **Skills:** GCP, Cloud Architecture, Kubernetes
    - **Verification:** [Link to credential]

3. **Smart India Hackathon Winner** (March 2024)
    - **Achievement:** 1st Place - Software Edition
    - **Project:** AI-powered agriculture advisory system
    - **Team Size:** 6 members
    - **Recognition:** ₹1,00,000 prize + mentorship

4. **Bachelor of Technology - Computer Science** (2022 - 2026)
    - **University:** Indian Institute of Technology (Example)
    - **CGPA:** 8.5/10
    - **Relevant Courses:** DSA, DBMS, Web Development, AI/ML
    - **Clubs:** Coding Club Secretary, Tech Fest Coordinator

**Visualization:**
- Vertical timeline on mobile, horizontal on desktop
- Animated connector line reveal on scroll
- Hover to expand: Show full descriptions
- Logo/icon animations on viewport entry

**Data Structure:**
```typescript
interface TimelineEntry {
  id: string;
  type: 'work' | 'education' | 'achievement';
  title: string;
  organization: string;
  duration: string;
  logo?: string;
  description: string;
  achievements: string[];
  skills?: string[];
  link?: string;
}
```

### 6. Blog Section (Organism)
**Purpose:** Share technical knowledge and insights

**Atomic Breakdown:**
- **Atoms:** Card, Image, Typography, Badge, Icon, Button
- **Molecules:** BlogCard, SearchBar
- **Organisms:** BlogSection with grid and filters

**Component Structure:**
```typescript
// Organism: BlogSection
BlogSection
├── Header
│   ├── Typography (Atom) - "Latest Articles"
│   └── SearchBar (Molecule) - Filter by keyword
├── CategoryFilter
│   └── Badge[] (Atom) - React, Node.js, DSA, Career
└── BlogGrid
    └── BlogCard[] (Molecule)
        ├── Image (Atom) - Cover image
        ├── Badge (Atom) - Category
        ├── Typography (Atom) - Title
        ├── Typography (Atom) - Excerpt
        ├── Metadata
        │   ├── Icon (Atom) + Typography - Read time
        │   └── Icon (Atom) + Typography - Publish date
        └── Button (Atom) - Read More
```

**Sample Blog Posts:**

1. **"Building Scalable APIs with Node.js and Express"**
    - Category: Backend
    - Read Time: 8 min
    - Date: Dec 2024
    - Excerpt: Learn best practices for RESTful API design...

2. **"React 19 New Features You Should Know"**
    - Category: Frontend
    - Read Time: 6 min
    - Date: Nov 2024
    - Excerpt: Exploring React's latest updates including...

3. **"My Journey to Solving 500+ DSA Problems"**
    - Category: Career
    - Read Time: 10 min
    - Date: Oct 2024
    - Excerpt: Tips and strategies for competitive programming...

**Layout:**
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Filter by category (client-side filtering)
- Search functionality (fuzzy search on title + excerpt)
- "Load More" button for pagination

**Data Structure:**
```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Full markdown content
  coverImage: string;
  category: 'react' | 'nodejs' | 'dsa' | 'career' | 'tutorial';
  readTime: number; // minutes
  publishDate: string;
  slug: string;
  tags: string[];
}
```

### 7. Contact Section (Organism)
**Purpose:** Facilitate connections with recruiters and collaborators

**Atomic Breakdown:**
- **Atoms:** Typography, Input, Textarea, Button, Icon, Link, Alert
- **Molecules:** FormField, SocialLinks, ContactItem
- **Organisms:** ContactForm

**Component Structure:**
```typescript
// Organism: ContactForm
ContactForm
├── Grid (2 columns desktop, 1 mobile)
│   ├── Left Column - Form
│   │   ├── Typography (Atom) - Title
│   │   ├── Typography (Atom) - Subtitle
│   │   ├── FormField (Molecule) - Name
│   │   ├── FormField (Molecule) - Email
│   │   ├── FormField (Molecule) - Subject
│   │   ├── FormField (Molecule) - Message (Textarea)
│   │   ├── Button (Atom) - Send Message
│   │   └── Alert (Atom) - Success/Error message
│   └── Right Column - Contact Info
│       ├── Typography (Atom) - "Let's Connect"
│       ├── ContactItem (Molecule) - Email
│       ├── ContactItem (Molecule) - Phone
│       ├── ContactItem (Molecule) - Location
│       ├── Divider (Atom)
│       ├── SocialLinks (Molecule)
│       └── DownloadButton (Molecule) - Resume
```

**Elements:**
- Section title: "Get In Touch"
- Motivational CTA: "Have a project in mind? Let's build something amazing together!"

**Contact Form Fields:**
- Name (required, min 2 chars)
- Email (required, email validation)
- Subject (optional, max 100 chars)
- Message (required, min 10 chars, max 500 chars)
- Send button with loading spinner

**Contact Information:**
- ✉️ Email: arjun.sharma@example.com (mailto: link + copy button)
- 📱 Phone: +91 98765 43210 (tel: link + copy button)
- 📍 Location: Mumbai, Maharashtra, India

**Social Links:**
- GitHub: github.com/arjun-dev
- LinkedIn: linkedin.com/in/arjun-sharma-dev
- Twitter: twitter.com/arjunDev
- LeetCode: leetcode.com/arjun_coder

**Form Integration:**
- EmailJS for backend
- React Hook Form for validation
- Success toast: "Message sent! I'll get back to you soon 🚀"
- Error handling with user-friendly messages

**Validation Rules:**
```typescript
interface ContactFormData {
  name: string;      // required, min: 2, max: 50
  email: string;     // required, email format
  subject?: string;  // optional, max: 100
  message: string;   // required, min: 10, max: 500
}

const validationSchema = {
  name: yup.string().min(2).max(50).required(),
  email: yup.string().email().required(),
  subject: yup.string().max(100),
  message: yup.string().min(10).max(500).required()
};
```

---

## 🚀 Development Workflow

### Phase 1: Setup & Configuration (Day 1-2)
**Tasks:**

1. **Initialize Vite + React + TypeScript project**
   ```bash
   npm create vite@latest portfolio-2025 -- --template react-ts
   cd portfolio-2025
   npm install
   ```

2. **Install dependencies**
   ```bash
   # Core dependencies
   npm install react@19 react-dom@19
   
   # Styling
   npm install -D tailwindcss@4.1 postcss autoprefixer
   npm install daisyui@5
   
   # Animation
   npm install gsap @gsap/react
   
   # Forms & Validation
   npm install react-hook-form @hookform/resolvers yup
   
   # Icons & UI
   npm install react-icons lucide-react
   
   # Email integration
   npm install @emailjs/browser
   
   # Dev dependencies
   npm install -D @types/react @types/react-dom
   npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
   npm install -D prettier eslint-plugin-prettier
   ```

3. **Configure TailwindCSS**
   ```bash
   npx tailwindcss init -p
   ```

   **tailwind.config.js:**
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           primary: '#3B82F6',
           secondary: '#06B6D4',
           accent: '#14B8A6',
         },
       },
     },
     plugins: [require("daisyui")],
     daisyui: {
       themes: [
         {
           light: {
             primary: "#3B82F6",
             secondary: "#06B6D4",
             accent: "#14B8A6",
             neutral: "#1F2937",
             "base-100": "#FFFFFF",
           },
           dark: {
             primary: "#60A5FA",
             secondary: "#22D3EE",
             accent: "#2DD4BF",
             neutral: "#F9FAFB",
             "base-100": "#111827",
           },
         },
       ],
     },
   }
   ```

4. **Setup Storybook**
   ```bash
   npx storybook@latest init
   ```

5. **Configure Git & GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Project setup with Vite, React 19, TypeScript, TailwindCSS, DaisyUI"
   git branch -M main
   git remote add origin https://github.com/arjun-dev/portfolio-2025.git
   git push -u origin main
   ```

6. **WebStorm Configuration**
    - Enable TypeScript language service
    - Setup Prettier (Format on save)
    - Configure ESLint
    - Install GitHub Copilot plugin
    - Setup Live Server

7. **Create Atomic Design Folder Structure**
   ```bash
   mkdir -p src/components/{atoms,molecules,organisms,templates,pages}
   mkdir -p src/{data,hooks,styles,utils,assets}
   touch src/components/atoms/.gitkeep
   touch src/components/molecules/.gitkeep
   touch src/components/organisms/.gitkeep
   touch src/components/templates/.gitkeep
   touch src/components/pages/.gitkeep
   ```

**Final Structure:**
```
portfolio-2025/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   ├── utils/
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .storybook/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

### Phase 2: Build Atomic Components (Day 3-7)
**Focus: Atoms & Molecules**

#### Atom Development Workflow

**Week 1 Atom Checklist:**
- [x] Button (variants: primary, secondary, outline, ghost)
- [x] Typography (h1, h2, h3, p, code)
- [x] Icon (wrapper for react-icons)
- [x] Input (text, email, tel)
- [x] Textarea
- [x] Label
- [x] Badge (colors: blue, cyan, teal, gray)
- [x] Avatar (sizes: sm, md, lg, with ring)
- [x] Image (with lazy loading)
- [x] Switch (theme toggle)
- [x] Card (base container)
- [x] Divider
- [x] Link (internal + external)
- [x] Progress
- [x] Spinner

**Example Atom: Button**
```typescript
// src/components/atoms/Button/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
```

**Storybook Story:**
```typescript
// src/components/atoms/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FaRocket } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click Me',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Launch Project',
    icon: <FaRocket />,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Sending...',
    loading: true,
  },
};
```

**Git Workflow:**
```bash
git add src/components/atoms/Button/
git commit -m "feat(atoms): add Button component with variants, sizes, and loading state"
git push
```

#### Molecule Development Workflow

**Week 1 Molecule Checklist:**
- [x] SkillCard (Icon + Typography + Badge)
- [x] SocialLinks (Icon + Link array)
- [x] ProjectTag (Badge + Typography)
- [x] FormField (Label + Input + Error)
- [x] NavItem (Link + Typography + Active state)
- [x] CTAButton (Button + Icon + Gradient)
- [x] ThemeToggle (Switch + Icons)
- [x] StatCard (Icon + Number + Label)

**Example Molecule: SkillCard**
```typescript
// src/components/molecules/SkillCard/SkillCard.tsx
import { ReactNode } from 'react';
import { Card } from '@/components/atoms/Card/Card';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { Badge } from '@/components/atoms/Badge/Badge';

interface SkillCardProps {
  icon: ReactNode;
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced';
}

export const SkillCard = ({ icon, name, proficiency }: SkillCardProps) => {
  const badgeColor = {
    beginner: 'badge-info',
    intermediate: 'badge-warning',
    advanced: 'badge-success',
  };

  return (
    <Card className="hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
      <div className="flex flex-col items-center gap-3 p-4">
        <div className="text-4xl text-primary">{icon}</div>
        <Typography variant="h4" className="font-semibold">{name}</Typography>
        <Badge className={badgeColor[proficiency]}>
          {proficiency.charAt(0).toUpperCase() + proficiency.slice(1)}
        </Badge>
      </div>
    </Card>
  );
};
```

### Phase 3: Build Organism Components (Day 8-14)
**Focus: Complex composite components**

**Week 2 Organism Checklist:**
- [x] Navbar (with mobile menu, theme toggle, smooth scroll)
- [x] Footer (with social links, copyright, back-to-top)
- [x] Hero (with typing effect, gradient background, CTAs)
- [x] About (with avatar, bio, stats, tech stack)
- [x] SkillsGrid (with category tabs, filtering)
- [x] ProjectCard (with 3D tilt, hover effects)
- [x] Timeline (experience/education with animations)
- [x] BlogSection (with cards, search, filter)
- [x] ContactForm (with EmailJS, validation)

**Example Organism: Navbar**
```typescript
// src/components/organisms/Navbar/Navbar.tsx
import { useState, useEffect } from 'react';
import { NavItem } from '@/components/molecules/NavItem/NavItem';
import { ThemeToggle } from '@/components/molecules/ThemeToggle/ThemeToggle';
import { Button } from '@/components/atoms/Button/Button';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleScroll = (href: string) => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: href, offsetY: 80 },
      ease: 'power2.inOut',
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-md">
      <div className="navbar-start">
        <Button variant="ghost" className="text-xl font-bold">
          AS.
        </Button>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              active={activeSection === item.id}
              onClick={() => handleScroll(item.href)}
            />
          ))}
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <Button variant="primary" className="hidden md:flex">
          Download Resume
        </Button>
      </div>
    </nav>
  );
};
```

### Phase 4: Templates & Pages (Day 15-17)
**Focus: Page layout and structure**

**Template Development:**
```typescript
// src/components/templates/HomeTemplate/HomeTemplate.tsx
import { ReactNode } from 'react';

interface HomeTemplateProps {
  navbar: ReactNode;
  hero: ReactNode;
  about: ReactNode;
  skills: ReactNode;
  projects: ReactNode;
  experience: ReactNode;
  blog: ReactNode;
  contact: ReactNode;
  footer: ReactNode;
}

export const HomeTemplate = ({
  navbar,
  hero,
  about,
  skills,
  projects,
  experience,
  blog,
  contact,
  footer,
}: HomeTemplateProps) => {
  return (
    <div className="min-h-screen">
      {navbar}
      <main>
        <section id="home">{hero}</section>
        <section id="about" className="py-20">{about}</section>
        <section id="skills" className="py-20 bg-base-200">{skills}</section>
        <section id="projects" className="py-20">{projects}</section>
        <section id="experience" className="py-20 bg-base-200">{experience}</section>
        <section id="blog" className="py-20">{blog}</section>
        <section id="contact" className="py-20 bg-base-200">{contact}</section>
      </main>
      {footer}
    </div>
  );
};
```

**Page Development:**
```typescript
// src/pages/HomePage/HomePage.tsx
import { HomeTemplate } from '@/components/templates/HomeTemplate/HomeTemplate';
import { Navbar } from '@/components/organisms/Navbar/Navbar';
import { Hero } from '@/components/organisms/Hero/Hero';
import { About } from '@/components/organisms/About/About';
// ... import other organisms

import { aboutData } from '@/data/about';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';

export const HomePage = () => {
  return (
    <HomeTemplate
      navbar={<Navbar />}
      hero={<Hero />}
      about={<About data={aboutData} />}
      skills={<SkillsGrid skills={skillsData} />}
      projects={<ProjectsSection projects={projectsData} />}
      experience={<Timeline />}
      blog={<BlogSection />}
      contact={<ContactForm />}
      footer={<Footer />}
    />
  );
};
```

### Phase 5: Content Population (Day 18-20)
**Tasks:**

1. **Create Data Files**
   ```typescript
   // src/data/projects.ts
   export const projectsData: Project[] = [
     {
       id: 'p1',
       title: 'E-Commerce Platform',
       description: 'Full-stack MERN shopping site',
       longDescription: 'Complete e-commerce solution with cart, payments, and admin panel',
       technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
       features: [
         'JWT Authentication',
         'Razorpay Payment Integration',
         'Admin Dashboard',
         'Order Tracking'
       ],
       image: '/projects/ecommerce.png',
       liveUrl: 'https://ecommerce-demo.vercel.app',
       githubUrl: 'https://github.com/arjun-dev/ecommerce',
       featured: true,
       category: 'fullstack',
       completionDate: '2024-08-15'
     },
     // ... 4 more projects
   ];
   ```

2. **Optimize Images**
    - Convert to WebP format
    - Create responsive sizes (400w, 800w, 1200w)
    - Use lazy loading

3. **Test All Links**
    - Verify external links open in new tab
    - Check internal smooth scroll navigation
    - Test GitHub/Live Demo buttons

### Phase 6: Polish & Testing (Day 21-23)
**Testing Checklist:**

- [ ] All atoms render in Storybook
- [ ] Molecules function correctly
- [ ] Organisms are fully responsive
- [ ] Typing effect works in Hero
- [ ] Smooth scroll navigation
- [ ] Dark/Light theme toggle persists
- [ ] Contact form validation works
- [ ] EmailJS integration successful
- [ ] All animations smooth (60fps)
- [ ] No console errors
- [ ] TypeScript compiles without errors
- [ ] Mobile menu works (hamburger)
- [ ] Images lazy load
- [ ] Blog filter/search works

**Performance Optimization:**
```bash
# Run Lighthouse audit
npm run build
npm run preview
# Open DevTools > Lighthouse > Generate Report
# Target: Performance >90, Accessibility >90
```

**Cross-Browser Testing:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Phase 7: Deployment (Day 24-25)
**GitHub Pages Setup:**

1. **Install gh-pages**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update package.json**
   ```json
   {
     "name": "portfolio-2025",
     "homepage": "https://arjun-dev.github.io/portfolio-2025",
     "scripts": {
       "dev": "vite",
       "build": "tsc && vite build",
       "preview": "vite preview",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist",
       "storybook": "storybook dev -p 6006",
       "build-storybook": "storybook build"
     }
   }
   ```

3. **Configure vite.config.ts**
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import path from 'path'

   export default defineConfig({
     plugins: [react()],
     base: '/portfolio-2025/',
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
     },
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
    - Go to: https://github.com/arjun-dev/portfolio-2025/settings/pages
    - Select branch: `gh-pages`
    - Click Save
    - Wait 2-3 minutes

6. **Verify Deployment**
    - Visit: https://arjun-dev.github.io/portfolio-2025/
    - Test all features
    - Check mobile responsiveness

7. **Optional: Deploy Storybook**
   ```bash
   npm run build-storybook
   # Upload storybook-static to Netlify or Vercel
   ```

---

## 📦 Dependencies Reference

### package.json
```json
{
  "name": "portfolio-2025",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://arjun-dev.github.io/portfolio-2025",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1",
    "react-icons": "^5.3.0",
    "lucide-react": "^0.460.0",
    "react-hook-form": "^7.53.2",
    "@hookform/resolvers": "^3.9.1",
    "yup": "^1.4.0",
    "@emailjs/browser": "^4.4.1"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.7.2",
    "vite": "^8.0.0",
    "tailwindcss": "^4.1.0",
    "daisyui": "^5.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "gh-pages": "^6.2.0",
    "storybook": "^10.1.0",
    "@storybook/react": "^10.1.0",
    "@storybook/react-vite": "^10.1.0",
    "@storybook/addon-essentials": "^10.1.0",
    "eslint": "^9.17.0",
    "@typescript-eslint/parser": "^8.19.0",
    "@typescript-eslint/eslint-plugin": "^8.19.0",
    "prettier": "^3.4.2",
    "eslint-plugin-prettier": "^5.2.1"
  }
}
```

---

## 🎯 Success Metrics

### Performance Targets
- **Lighthouse Performance Score:** >90
- **First Contentful Paint (FCP):** <1.5s
- **Time to Interactive (TTI):** <3.0s
- **Largest Contentful Paint (LCP):** <2.5s
- **Cumulative Layout Shift (CLS):** <0.1
- **Total Bundle Size:** <500KB (gzipped)

### User Experience
- **Mobile Responsiveness:** Perfect on 320px - 1920px
- **Cross-Browser Compatibility:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Accessibility Score:** WCAG 2.1 AA compliance (>90 Lighthouse score)
- **SEO Score:** >90 (meta tags, Open Graph, schema.org)
- **Theme Toggle:** Instant switch, preference persistence

### Technical Quality
- **TypeScript:** Strict mode, 0 errors, 100% type coverage
- **ESLint:** 0 warnings, consistent code style
- **Animation Performance:** All animations 60fps
- **Storybook:** 100% component documentation
- **Component Reusability:** >80% atoms/molecules reused across organisms
- **Test Coverage:** >70% (if unit tests added)

### Atomic Design Quality Metrics
- **Atoms:** All have Storybook stories + variants
- **Molecules:** Properly compose 2+ atoms
- **Organisms:** Use consistent molecule patterns
- **Component Hierarchy:** Clear parent-child relationships
- **Prop Drilling:** Never beyond 2 levels
- **State Management:** Lifted only when necessary

---

## 📚 Learning Outcomes

By completing this portfolio project following Atomic Design principles, Arjun will:

✅ **Master React 19** - Functional components, hooks (useState, useEffect, useRef, custom hooks)  
✅ **TypeScript Proficiency** - Interfaces, type safety, generics, strict mode  
✅ **TailwindCSS Expertise** - Utility-first styling, responsive design, DaisyUI components  
✅ **GSAP Animation** - ScrollTrigger, timeline animations, smooth transitions  
✅ **Atomic Design Methodology** - Component hierarchy, reusability, scalability  
✅ **Storybook Development** - Component documentation, isolated testing  
✅ **Professional Git Workflow** - Feature branches, conventional commits, GitHub Pages  
✅ **Form Handling** - React Hook Form, validation, EmailJS integration  
✅ **Performance Optimization** - Code splitting, lazy loading, bundle analysis  
✅ **Accessibility** - WCAG compliance, keyboard navigation, ARIA labels  
✅ **SEO Best Practices** - Meta tags, Open Graph, structured data  
✅ **Responsive Design** - Mobile-first approach, breakpoints, fluid typography

**Career Benefits:**
- Portfolio that impresses recruiters
- Showcase of modern tech stack
- Demonstration of design thinking
- Evidence of clean code practices
- Deployable, production-ready application

---

## 🔗 Resources & References

### Documentation
- **[React 19 Docs](https://react.dev/)** - Official React documentation
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - Complete TS guide
- **[TailwindCSS v4](https://tailwindcss.com/docs)** - Utility-first CSS framework
- **[DaisyUI Components](https://daisyui.com/components/)** - Component library
- **[GSAP Documentation](https://greensock.com/docs/)** - Animation platform
- **[Vite Guide](https://vitejs.dev/guide/)** - Build tool documentation
- **[Storybook Docs](https://storybook.js.org/docs)** - Component workshop
- **[Atomic Design Book](https://atomicdesign.bradfrost.com/table-of-contents/)** ⭐ **Must Read**

### Atomic Design Resources
- **[Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)** - Core concepts
- **[Pattern Lab](https://patternlab.io/)** - Atomic design tool
- **[Component-Driven Development](https://www.componentdriven.org/)** - Best practices
- **[Design Systems Handbook](https://www.designbetter.co/design-systems-handbook)** - Advanced reading

### React Hook Form & Validation
- **[React Hook Form Docs](https://react-hook-form.com/)** - Form library
- **[Yup Validation](https://github.com/jquense/yup)** - Schema validation

### EmailJS Integration
- **[EmailJS Setup Guide](https://www.emailjs.com/docs/)** - Email service
- **[React EmailJS Tutorial](https://www.emailjs.com/docs/examples/reactjs/)** - React integration

### Design Inspiration
- **[Awwwards Portfolio](https://www.awwwards.com/websites/portfolio/)** - Award-winning designs
- **[Dribbble Portfolio](https://dribbble.com/search/portfolio)** - Design inspiration
- **[Behance Portfolios](https://www.behance.net/search/projects?search=portfolio)** - Creative portfolios
- **[One Page Love](https://onepagelove.com/)** - Single-page site gallery

### GitHub & Deployment
- **[GitHub Pages Setup](https://docs.github.com/en/pages)** - Free hosting
- **[Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)** - Build optimization
- **[gh-pages Package](https://github.com/tschaub/gh-pages)** - Deployment automation

### GSAP Animation Tutorials
- **[GSAP Getting Started](https://greensock.com/get-started/)** - Basics
- **[ScrollTrigger Guide](https://greensock.com/docs/v3/Plugins/ScrollTrigger)** - Scroll animations
- **[GSAP Cheat Sheet](https://greensock.com/cheatsheet/)** - Quick reference

---

## 👨‍💻 Developer Information

**Name:** Arjun Sharma  
**University:** Indian Institute of Technology (Example Campus)  
**Year:** 3rd Year (B.Tech Computer Science)  
**CGPA:** 8.5/10  
**Email:** arjun.sharma@example.com  
**Phone:** +91 98765 43210  
**Location:** Mumbai, Maharashtra, India

**GitHub:** [@arjun-dev](https://github.com/arjun-dev)  
**LinkedIn:** [linkedin.com/in/arjun-sharma-dev](https://linkedin.com/in/arjun-sharma-dev)  
**LeetCode:** [leetcode.com/arjun_coder](https://leetcode.com/arjun_coder)  
**Twitter:** [@arjunDev](https://twitter.com/arjunDev)

**Key Strengths:**
- Full-Stack Development (MERN)
- Competitive Programming (500+ problems)
- System Design
- Clean Code Practices
- Agile Methodology

**Certifications:**
- Google Cloud Associate Engineer
- Meta React Professional Certificate (in progress)

**Achievements:**
- 🏆 Smart India Hackathon 2024 Winner
- 🥇 College Coding Competition 1st Place
- ⭐ 500+ DSA Problems Solved
- 📝 Technical Blog with 10K+ views

---

## 📄 License

MIT License - Free to use for educational and personal projects

Copyright (c) 2025 Arjun Sharma

Permission is hereby granted, free of charge, to any person obtaining a copy of this portfolio template...

---

## 🙏 Acknowledgments

**Mentor:** Divyansh Bhardwaj ([@dbc2201](https://github.com/dbc2201))  
**AI Assistant:** GitHub Copilot  
**Component Library:** DaisyUI 5.0  
**Design Methodology:** Atomic Design by Brad Frost  
**Animation Library:** GSAP by GreenSock

**Special Thanks:**
- React Team for React 19
- TailwindCSS Team for v4
- Brad Frost for Atomic Design methodology
- Open source community

---

## 📞 Support & Feedback

If you encounter any issues or have suggestions:
1. Open an issue on GitHub
2. Email: arjun.sharma@example.com
3. DM on Twitter: @arjunDev

**Contribution:** Feel free to fork and create PRs for improvements!

---

**Built with ❤️ and Atomic Design principles by Arjun Sharma**

*Last Updated: December 25, 2025*
*Version: 1.0.0*
*PRD Status: Ready for Development* ✅

---

## 🚀 Next Steps for Arjun

### Immediate Actions:
1. **Review this PRD** - Suggest any changes to sections, projects, or features
2. **Setup Development Environment** - Follow Phase 1 instructions
3. **Start with Atoms** - Build Button component first in Storybook

### I Can Help You With:
- ✅ Generate starter code for any component
- ✅ Create the folder structure script
- ✅ Write Git commit messages
- ✅ Explain Atomic Design concepts with examples
- ✅ Debug TypeScript/React issues
- ✅ Setup EmailJS configuration
- ✅ Create GSAP animation snippets
- ✅ Review code and suggest improvements

### Suggested First Task:
**"Create the project folder structure and setup TailwindCSS configuration"**

Or ask me anything like:
- "Explain how atoms combine to form molecules"
- "Generate Button component code"
- "Help me understand GSAP ScrollTrigger"
- "Create the projects.ts data file"

**What would you like to tackle first?** 🚀