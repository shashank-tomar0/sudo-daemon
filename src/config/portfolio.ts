export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  githubLink?: string
}

export interface ExperienceItem {
  company: string
  position: string
  duration: string
  points: string[]
  href?: string
  logoUrl?: string
}

export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  date: string
  author: string
  tags: string[]
  readTime?: string
  externalUrl?: string
}

export const portfolioConfig = {
  name: "Shashank Tomar",
  age: "22",
  title: "Full Stack Developer • AI/ML Architect",
  githubUsername: "shashank-tomar0",
  email: "shashanktomar.dev@gmail.com",
  socials: {
    github: "https://github.com/shashank-tomar0",
    twitter: "https://x.com/shashank1tomar",
    linkedin: "https://www.linkedin.com/in/shashank1tomar",
    resume: "https://drive.google.com/file/d/1cbPntPjyYwh23XLYtcWEONPjq1s_XYou/view?usp=sharing",
    mail: "mailto:shashanktomar.dev@gmail.com",
    calendar: "mailto:shashanktomar.dev@gmail.com",
  },
  bio: [
    "I'm a Programmer specializing in cutting-edge AI/ML integration and scalable full-stack architectures. I focus on building production-ready, high-performance systems that leverage advanced language models and robust backend pipelines.",
    "I thrive on building complex applications from scratch—from neural document auditing to autonomous Telegram fact-checking protocols. My goal is to make every project run with sub-second latency, robust security, and absolute reliability."
  ],
  contributions: [
    "At TalentScout AI, I architected a forensic resume auditing engine, building a 7-layer LLM security firewall and an 8x parallel neural analysis pipeline to detect prompt injections and hidden text hacks.",
    "Designed and shipped Veridian, a Telegram-native misinformation-neutralizing autonomous protocol using Whisper-v3 transcription, Llama-3.2-Vision analysis, and Celery asynchronous task distribution.",
    "Built ChronosGrid (ABES GO), an advanced timetable scheduler processing complex scheduling spreadsheets with pandas and rendering interactive glassmorphic scheduling grids in Next.js."
  ],
  experiences: [
    {
      company: 'AI/ML SaaS & Full Stack Architect',
      position: 'Indie Hacker & Freelance Developer',
      duration: 'April 2025 · Present',
      points: [
        'Developing TalentScout-AI, a forensic resume evaluation engine designed to handle 25+ resumes in under 10 seconds with zero risk of prompt injections.',
        'Building Veridian, a Celery-driven, high-fidelity Telegram fact-checking bot generating dynamic verdict receipts.',
        'Architecting Next.js 15+ and FastAPI/Python backends deployed to cloud environments.'
      ],
      logoUrl: '',
    },
    {
      company: 'ChronosGrid / ABES GO',
      position: 'Lead Architecture Developer',
      duration: 'August 2025 · December 2025',
      points: [
        'Shipped an advanced college timetable management system to optimize faculty duties and schedules.',
        'Wrote a Python parser in pandas/openpyxl to structure complex Excel spreadsheets into clean, queryable JSON schemas.',
        'Built a custom workload scheduling recommender inside Next.js to flag and recommend duty swaps.'
      ]
    }
  ] as ExperienceItem[],
  projects: [
    {
      id: 'talentscout-ai',
      title: 'TalentScout AI',
      description: 'Anti-manipulation hiring engine designed to evaluate 25+ resumes in under 10 seconds, scoring candidates deterministically while destroying prompt injections.',
      longDescription: 'Standard ATS systems rely on keyword matching, allowing candidates to cheat. TalentScout acts as a Forensic Auditor to detect invisible text or prompt injection hacks. Powered by Groq LLaMA 3.1, Clerk Auth, FastAPI, and Next.js.',
      image: '/images/github.jpg',
      tags: ['Next.js', 'FastAPI', 'Groq LLaMA 3.1', 'Clerk Auth', 'TailwindCSS', 'WebSocket'],
      githubLink: 'https://github.com/shashank-tomar0/TalentScout-AI'
    },
    {
      id: 'veridian',
      title: 'Veridian',
      description: 'Autonomous Forensic Protocol Telegram bot engineered to neutralize digital misinformation and render trust receipts from the cloud.',
      longDescription: 'Celery-driven asynchronous task worker executing parallel Whisper-v3 transcription and Llama-3.2-Vision analysis. Verdicts are recorded in PostgreSQL and rendered as lightweight HTML receipts.',
      image: '/images/github.jpg',
      tags: ['Python', 'FastAPI', 'Celery', 'PostgreSQL', 'Telegram Bot API', 'Whisper-v3', 'Llama-3.2-Vision'],
      githubLink: 'https://github.com/shashank-tomar0/veridian'
    },
    {
      id: 'chronosgrid',
      title: 'ChronosGrid (ABES GO)',
      description: 'College timetable orchestration dashboard converting complex Excel grids into responsive workload scheduling interfaces.',
      longDescription: 'A timetable planning system featuring Python spreadsheet parsing, workload calculations, and a glassmorphic dashboard for faculty duty management.',
      image: '/images/github.jpg',
      tags: ['Next.js', 'Python', 'pandas', 'openpyxl', 'TypeScript', 'TailwindCSS'],
      githubLink: 'https://github.com/shashank-tomar0/ChronosGrid'
    }
  ] as Project[],
  blogs: [
    {
      id: 'talentscout-forensics',
      title: 'Forensic Resume Intelligence: Defeating Prompt Injections in Modern ATS',
      description: 'How standard keyword matchers fail and how we built TalentScout AI to neutralize microscopic font cheats and prompt injections.',
      content: '# Forensic Resume Intelligence: Defeating Prompt Injections in Modern ATS\n\nResumes have become prompt-injection vectors. This article details the security layers we built for TalentScout AI to defend against adversarial PDFs.',
      date: '2026-05-15',
      author: 'Shashank Tomar',
      tags: ['Security', 'AI', 'ATS', 'TalentScout'],
      readTime: '6 min read'
    },
    {
      id: 'veridian-autonomous-factchecking',
      title: 'Veridian: Engineering an Autonomous Misinformation Edge Protocol',
      description: 'Under the hood of a Celery-driven Telegram bot that transcribes, verifies, and publishes evidentiary trust receipts in real time.',
      content: '# Veridian: Engineering an Autonomous Misinformation Edge Protocol\n\nFact-checking must happen at the speed of social feeds. We explore the design of Veridian\'s asynchronous pipeline.',
      date: '2026-06-01',
      author: 'Shashank Tomar',
      tags: ['Python', 'Celery', 'Inference', 'FastAPI', 'Telegram'],
      readTime: '8 min read'
    }
  ] as BlogPost[]
}
