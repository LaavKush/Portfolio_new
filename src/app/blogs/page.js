"use client";

import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const highlights = [
  {
    title: "Full Stack Intern @ TGIT (The Times of India)",
    slug: "toi-internship",
    category: "Industry Experience",
    description:
      "Built frontend modules with React, Next.js & Tailwind; now working on backend APIs using FastAPI and Python. Delivered production-ready features on tight deadlines.",
    date: "June 2025 – Present",
  },
  {
    title: "Python & ML Intern @ IGDTUW – Centre of Excellence (AI)",
    slug: "ml-internship",
    category: "AI & Machine Learning",
    description:
      "Created a rainfall prediction model with 84.81% accuracy using Python, Flask, and Scikit-learn. Focused on data preprocessing, model training/testing, and basic deployment.",
    date: "June – July 2024",
  },
  {
    title: "Times Health Platform (Ongoing Project)",
    slug: "times-health",
    category: "AI-Powered Platforms",
    description:
      "Developing a healthcare app using FastAPI, PostgreSQL & Recharts for report uploads, appointment tracking, and AI-powered insights to assist doctors.",
    date: "2025",
  },
  {
    title: "GrahLaxmi – Financial Planner for Women",
    slug: "grahlaxmi",
    category: "Women Empowerment",
    description:
      "Responsive web app with AI chatbot, scheme recommendations, and secure FastAPI + SQLite backend to promote financial literacy among women.",
    date: "2025",
  },
  {
    title: "Campus Connect – College Services Portal",
    slug: "campus-connect",
    category: "Full-Stack Development",
    description:
      "Centralized platform to streamline faculty-student interactions. Includes canteen ordering, messaging, and trading tools using React, Spring Boot & MySQL.",
    date: "2024",
  },
  {
    title: "CALMYA – Mental Wellness Platform",
    slug: "calmya",
    category: "Mental Health & AI",
    description:
      "Mental wellness chatbot using BlenderBot API. Features include planner, journaling, and meditation tools for academic stress relief.",
    date: "2024",
  },
  {
    title: "President, ADTC IGDTUW",
    slug: "adtc-president",
    category: "Leadership & Community",
    description:
      "Founded a 1.2k+ member tech community. Led mentorship programs, DSA challenges, and national-level competitions to empower women in tech.",
    date: "July 2024 – Present",
  },
  {
    title: "Technical Head, GFG IGDTUW",
    slug: "gfg-leadership",
    category: "Community & Outreach",
    description:
      "Organized hands-on workshops, and built the official chapter website. Managed a team of 10+ to execute tech initiatives on campus.",
    date: "July 2024 – Present",
  },
  {
    title: "1st Place – Devcation 2024 Hackathon",
    slug: "hackathon-win",
    category: "Achievements",
    description:
      "Won Gemini Genesis Hackathon among 100+ participants. Recognized for technical depth, user experience, and innovation in product delivery.",
    date: "April 2024",
  },
];

export default function BlogsPage() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white pt-24 pb-20 px-6 md:px-20">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-300 to-cyan-500 text-transparent bg-clip-text tracking-tight"
      >
        Laavanya Kushwaha – Highlights
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {highlights.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1e293b] border border-cyan-500 rounded-xl p-6 shadow-xl hover:shadow-cyan-400/40 hover:bg-[#1e3a4c] transition-all duration-300 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between text-cyan-300 text-sm font-medium">
              <span className="flex items-center gap-1">
                <FaLaptopCode className="text-black" /> {item.category}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <MdDateRange className="text-black" /> {item.date}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
