<div align="center">

# ⚡ sudotom — Shashank Tomar's Developer Hub

Welcome to the repository for **sudotom**, the developer portfolio and playground of **Shashank Tomar** ([@shashank-tomar0](https://github.com/shashank-tomar0)). Shashank is a Full Stack Developer and AI/ML Architect specializing in building scalable AI-integrated systems, robust web platforms, and automated agents.

[![Next.js](https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Sanity CMS](https://img.shields.io/badge/Sanity_CMS-v3-F03E3E?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F5A623?style=for-the-badge)](https://opensource.org/licenses/MIT)

*A premium, glassmorphic portfolio featuring real-time GitHub integration, headless Sanity CMS blogs/OSS tracking, haptic animations, background music, and desktop companion animations.*

[Explore Portfolio Website](https://github.com/shashank-tomar0/sudo-daemon) • [Read Blog Posts](https://github.com/shashank-tomar0/sudo-daemon#) • [Report Issues](https://github.com/shashank-tomar0/sudo-daemon/issues)

</div>

---

## 📸 Preview & Aesthetics

The portfolio is designed with a premium, state-of-the-art **glassmorphic aesthetic**:
- **Curated Palettes**: HSL color schemes with custom translucent styling layers.
- **Dynamic Elements**: Smooth Framer Motion transitions, custom loading sequences, and hover reactions.
- **Dark & Light Modes**: Seamless theme shifting utilizing custom theme providers.

---

## 🌟 Interactive Highlights & Features

This is not just a static showcase, but a functional, interactive hub:

- 🐈 **Interactive Desk Cat (Oneko)**: An animated companion mascot that stays on the bottom right and actively chases your cursor when it moves.
- 🎵 **Integrated Audio Player**: A built-in lo-fi audio player in the navigation bar that lets visitors toggle music on/off while browsing, saving state in local storage.
- 📊 **Dynamic GitHub Contribution Grid**: A real-time calendar grid charting your git activity via the GitHub GraphQL API, equipped with local fallback mocks in case of API rate limits.
- ✍️ **Dynamic Headless CMS**: Fully integrated headless studio for publishing articles and tracking open-source contribution pull requests.
- ⚙️ **One-File Configuration Layer**: Update all primary details (bio, socials, projects, experiences) from a single centralized TypeScript config.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | **Next.js 15+** (App Router), **TypeScript**, **React 19** |
| **Styling & Animation** | **Tailwind CSS**, **Framer Motion**, **Lucide Icons** |
| **Content Management** | **Sanity CMS** (Headless Schema + Embedded Studio) |
| **API & Integrations** | **GitHub GraphQL API** (Contribution data) |
| **State & Core Utilities** | **Local Storage** (Theme & Music presets), **NextJS On-Demand Revalidation** |

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- **Node.js** (version 20 or higher recommended)
- **npm** (comes with Node) or **yarn**

### Installation & Environment Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shashank-tomar0/sudo-daemon.git
   cd sudo-daemon
   ```

2. **Install Project Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Copy the sample environment file to create your local copy:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and add your custom credentials:
   - Create a **Sanity Project** at [sanity.io/manage](https://www.sanity.io/manage) to get your `NEXT_PUBLIC_SANITY_PROJECT_ID`.
   - Obtain a **GitHub Personal Access Token** at [github.com/settings/tokens](https://github.com/settings/tokens) for git contribution stats.

---

## 🏃 Running the Application

### Development Server
Run the local Next.js dev server with hot-reloading:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the portfolio.

### Production Build
Compile an optimized production-ready bundle and start the server:
```bash
npm run build
```
Once built successfully, start the production server:
```bash
npm run start
```

---

## ⚙️ Content Customization

The core details of this portfolio are configuration-driven, meaning you don't need to dive deep into components to change personal information.

Open **[src/config/portfolio.ts](file:///c:/Users/dell/Desktop/portfolio/src/config/portfolio.ts)** to edit:
- **Profile Data**: Name, age, title, email, avatar image, and banner image.
- **Social Accounts**: Direct URLs to GitHub, LinkedIn, Twitter/X, and Resume Google Drive location.
- **Work Experiences**: Duration, company names, position titles, bullet points, company logos, and website links.
- **Static Baseline Projects**: Fallback portfolio projects displayed on the client side.

---

## 📝 Headless CMS (Sanity Studio Integration)

Sanity CMS is embedded directly within the Next.js router, meaning you don't have to navigate to an external URL to manage your dynamic articles or pull-requests.

### 1. Launching Sanity Studio
Start your development server (`npm run dev`) and navigate to:
👉 **[http://localhost:3000/studio](http://localhost:3000/studio)**

*Make sure your Sanity account is added as an administrator or editor under your project dashboard.*

### 2. Supported Schemas
- **Blog Posts**: Create posts with a title, custom URL slug, summary, content body, publish date, author details, tags, and custom read times.
- **OSS Contributions**: Track open-source contributions. Specify repo name (`owner/repo`), the Pull Request URL, and the merge date.

### 3. On-Demand Revalidation Webhook
To ensure your portfolio updates instantly when you hit "Publish" in the studio without waiting for full rebuilds:
1. Go to your Sanity project dashboard at [sanity.io/manage](https://sanity.io/manage).
2. Go to **API** ➡️ **Webhooks** ➡️ **Create Webhook**.
3. Set the configuration details:
   - **Name**: Next.js Portfolio Revalidate
   - **URL**: `https://your-deployed-domain.com/api/revalidate`
   - **HTTP Method**: `POST`
   - **Secret**: Create a secret string and place it in your server env as `SANITY_REVALIDATE_SECRET`.
   - **Triggers**: Enable `Create`, `Update`, `Delete` for documents.

---

## 📁 Project Structure

```
├── public/                 # Static assets (images, logos, lo-fi tracks, favicon)
├── sanity/                 # Sanity CMS configurations and schema types
│   ├── schemas/            # Document structures (blogs, contributions)
│   ├── image.ts            # Image URL builders
│   └── client.ts           # Sanity client setup
├── src/
│   ├── app/                # Next.js App Router (Layouts, routes, & revalidate endpoints)
│   │   ├── api/            # API endpoints (revalidation)
│   │   ├── blogs/          # Dynamic Blog pages
│   │   ├── opensource/     # Open source tracking page
│   │   ├── projects/       # Projects detail page
│   │   └── studio/         # Embedded Sanity Studio
│   ├── components/         # Premium glassmorphic React components
│   │   ├── ui/             # Core UI atoms (cards, marquee, theme)
│   │   ├── BackgroundMusic.tsx  # Custom floating audio player
│   │   ├── OnekoCat.tsx         # Mouse-chasing desk companion
│   │   └── NewHeroSection.tsx   # Glassmorphic intro panel
│   ├── config/             # Config layer (portfolio.ts)
│   ├── hooks/              # Custom reusable React hooks
│   └── lib/                # Shared utilities and configurations
```

---

## 👥 Contacts & Socials

Created with ❤️ by **Shashank Tomar** — [Full Stack Developer & AI/ML Architect](mailto:shashanktomar912@gmail.com).

- **GitHub**: [@shashank-tomar0](https://github.com/shashank-tomar0)
- **LinkedIn**: [Shashank Tomar](https://www.linkedin.com/in/shashank1tomar)
- **Twitter/X**: [@shashank1tomar](https://x.com/shashank1tomar)
- **Email**: [shashanktomar912@gmail.com](mailto:shashanktomar912@gmail.com)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
