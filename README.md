# Sudo Daemon — Shashank Tomar's Portfolio

Welcome to the repository for the personal developer portfolio and project showcase of **Shashank Tomar** ([@shashank-tomar0](https://github.com/shashank-tomar0)), a Full Stack Developer and AI/ML Architect. 

This is a premium, performance-optimized, glassmorphic portfolio web application built with **Next.js 15+**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**.

---

## 🌟 Key Features

- **Rich Aesthetics**: Stunning glassmorphic user interface featuring smooth transitions, customized HSL color palettes, dark/light modes, and micro-interactions.
- **Configuration-Driven Architecture**: Easily personalized via a single configuration layer at `src/config/portfolio.ts`.
- **Hybrid Content Layer**: Combines a permanent local static data baseline with a headless dynamic layer powered by Sanity CMS.
- **Sanity Headless CMS**: Fully integrated headless studio for publishing blog articles and tracking open-source contribution pull requests.
- **GitHub Contributions Integration**: Embedded real-time grid charting contributions, utilizing fallback mocks in case of API rate limits.
- **Haptic Micro-Animations**: Embedded spring-based micro-animations and optional interactive features designed to wow visitors on desktop and mobile.
- **SEO & Performance Ready**: Strictly structured semantic HTML, structured JSON-LD metadata, and optimized bundle builds compiling with Next.js Turbopack.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20 or higher recommended)
- npm or yarn

### Installation

1. Clone this repository (if you haven't already):
   ```bash
   git clone https://github.com/shashank-tomar0/sudo-daemon.git
   cd sudo-daemon
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file by copying the template:
   ```bash
   cp .env.example .env.local
   ```
   *Fill in your project-specific credentials from your Sanity Dashboard.*

### Running Locally

To run the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

### Production Build

To compile a production-ready, optimized bundle:
```bash
npm run build
npm run start
```

---

## ⚙️ Project Customization

All personal details, bios, projects, and experiences are centralized in a single configuration file:
👉 **[src/config/portfolio.ts](file:///c:/Users/dell/Desktop/portfolio/src/config/portfolio.ts)**

To personalize the portfolio, simply open this file and update the metadata:
- **Profile details**: `name`, `age`, `title`, `email`, `avatar`, and `banner` images.
- **Social links**: GitHub, LinkedIn, Twitter/X, and resume download URLs.
- **Experiences**: List of internships, freelancing roles, or full-time experience.
- **Static Projects**: Baseline projects displayed on the frontend immediately.

---

## 📝 Headless Content Management (Sanity CMS)

The portfolio's blogs and pull-request contributions are powered dynamically by Sanity CMS. A local instance of Sanity Studio is embedded directly within the project.

### Running Studio Locally

1. Ensure your `.env.local` is populated with `NEXT_PUBLIC_SANITY_PROJECT_ID`.
2. Start the dev server (`npm run dev`) and visit: [http://localhost:3000/studio](http://localhost:3000/studio).
3. Log in using your GitHub account (make sure your user is added as a member under [sanity.io/manage](https://sanity.io/manage)).

### Adding Blog Posts & OSS Contributions
- **Blogs**: Navigate to **Blog Post → Create**, fill in the title, generate the slug, and specify if it is a featured post.
- **OSS Contributions**: Navigate to **OSS Contribution → Create**, specify the repo path (`owner/name`), PR URL, and the merge date.

### Revalidation & Webhooks
The application utilizes Next.js On-Demand Revalidation. To configure instant updates upon publishing content in Sanity:
1. Navigate to your project on [sanity.io/manage](https://sanity.io/manage) → **API → Webhooks → Create**.
2. Set the **URL** to: `https://your-domain.com/api/revalidate`
3. Set the **HTTP method** to `POST` and paste your `SANITY_REVALIDATE_SECRET` secret key.
4. Trigger on: `Create`, `Update`, `Delete`.

---

## 🛠️ Project Structure

```
├── public/                 # Static assets (favicons, images, logos, audio)
├── sanity/                 # Sanity Studio schemas, types, and client query configs
│   ├── schemas/            # Schemas defining Blogs and OSS Contributions
│   └── queries.ts          # Central GROQ queries for data fetching
├── src/
│   ├── app/                # Next.js App Router structure and page routing
│   ├── components/         # Reusable UI components (Hero, Marquee, Tooltips)
│   ├── config/             # Centralized personal portfolio configuration
│   ├── data/               # Static baseline fallback datasets
│   └── lib/                # Utility scripts, theme configs, and hooks
```

---

## 📄 License

This project is licensed under the MIT License. Feel free to use and customize it to build your own portfolio.
