"use client";

import { useState } from "react";
import { FaGithub, FaChartBar } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiPydantic,
  SiPostgresql,
  SiSqlite,
  SiReact,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiHuggingface,
  SiJavascript,
  SiFlask,
  SiCss3,
  SiHtml5,
  SiBootstrap
} from "react-icons/si";
import Modal from "@/app/components/Modal";

const projects = [
 
  {
    title: "Times Health (Ongoing)",
    shortDesc:
      "AI-powered healthcare platform for doctors to analyze reports and monitor trends.",
    stack: [
      SiNextdotjs,
      SiTailwindcss,
      SiFastapi,
      SiPython,
      SiPydantic,
      SiPostgresql,
      FaChartBar,
    ],
    github: "#",
    live: "#",
    year: 2025,
    details: [
      "Hospitals often lack digitized tools for tracking patient insights and medical trends in real time.",
      "This platform supports doctors by offering intelligent dashboards and AI-driven health trend analysis.",
      "Developed using Next.js and Recharts for frontend, FastAPI and PostgreSQL for scalable backend integration.",
    ],
  },
  {
    title: "GrahLaxmi",
    shortDesc:
      "Financial planning tool for women, including chatbot and scheme recommendations.",
    stack: [SiNextdotjs, SiTailwindcss, SiPython, SiFastapi, SiSqlite],
    github: "https://github.com/LaavKush/financial-women-app/tree/dev",
    live: "#",
    year: 2025,
    details: [
      "Many women in rural or underserved regions lack access to personalized financial guidance.",
      "This tool provides scheme recommendations and financial literacy support via an easy-to-use chatbot.",
      "Implemented using FastAPI with SQLite for lightweight data handling and Next.js for a responsive UI.",
    ],
  },
  {
    title: "Campus Connect",
    shortDesc:
      "Centralized student-faculty portal with messaging and service modules.",
    stack: [SiReact, SiTailwindcss, SiSpringboot, SiMysql],
    github: "https://github.com/LaavKush/campus-connect",
    live: "https://www.youtube.com/watch?v=KjxahKGQSgE",
    year: 2025,
    details: [
      "Students often rely on scattered tools for campus-related needs such as messaging, canteen orders, and announcements.",
      "This portal merges services like food ordering, book trading, and chat into a single interface.",
      "Frontend in React with Tailwind CSS; backend built using Spring Boot and MySQL for robustness.",
    ],
  },
  {
    title: "CALMYA",
    shortDesc:
      "Personalized mental health support tool with chatbot and wellness features.",
    stack: [SiReact, SiTailwindcss, SiHuggingface, SiNodedotjs, SiExpress],
    github: "https://github.com/LaavKush/Calmya",
    live: "https://calmya.vercel.app/",
    year: 2025,
    details: [
      "Mental health apps are often generic and miss personalized conversations for real-time emotional support.",
      "Calmya offers a conversational wellness bot and daily calming activities tailored to users’ moods.",
      "Created using BlenderBot from HuggingFace, Express.js for backend routing, and deployed on Vercel.",
    ],
  },
   {
  title: "SkyPredict",
  shortDesc:
    "Rain prediction tool aiding farmers and transport sectors with smart weather insights.",
  stack: [SiPython, SiFlask, FaChartBar],
  github: "https://github.com/LaavKush/precipitation-prediction",
  live: "#",
  year: 2024,
  details: [
    "Developed a rain prediction model to assist agriculture and transport decision-making.",
    "Used Python for data preprocessing and trained regression models to forecast rainfall accurately.",
    "Built the web interface with Flask and visualized predictions with Power BI dashboards.",
    "Integrated real-time weather data and News API to enhance prediction context and alerting.",
  ],
},
 {
    title: "Thangabali's Suitcase Marketplace",
    shortDesc:
      "A second-hand suitcase marketplace backend with user authentication and product listings.",
    stack: [SiNodedotjs, SiExpress, SiMongodb],
    github: "https://github.com/LaavKush/thangabali",
    live: "https://thangabali-1.onrender.com/",
    year: 2024,
    details: [
      "Developed a full-stack backend for a fictional suitcase marketplace using Node.js, Express, and MongoDB.",
      "Implemented JWT-based authentication for secure signup and login.",
      "Enabled posting, browsing, and managing suitcase listings through protected REST API endpoints.",
      "Included a Postman collection for easier API testing and documentation.",
      "Deployed on Render with environment variables and proper project structuring.",
    ],
  },
  {
  title: "RecycleMitra",
  shortDesc:
    "An eco-conscious web app for scheduling doorstep pickups and tracking recycling rewards.",
  stack: [SiReact, SiNodedotjs, SiMongodb, SiBootstrap],
  github: "https://github.com/LaavKush/Recycle-Mitra",
  live: "https://recycle-mitra-seven.vercel.app/",
  year: 2024,
  details: [
    "Designed a user-friendly recycling app encouraging responsible waste management with real-time pickup scheduling.",
    "Built the frontend with React.js and Bootstrap; backend with Node.js and MongoDB.",
    "Implemented JWT-based authentication for secure user sign-up and login.",
    "Gamified user experience by integrating an Instant Rewards Program with credit redemption in the marketplace.",
    "Deployed on Vercel to ensure accessibility and smooth performance.",
  ],
},

{
  title: "Gemini Clone",
  shortDesc:
    "AI-powered chatbot interface using Gemini's free API with a responsive UI clone.",
  stack: [SiJavascript, SiCss3, SiHtml5],
  github: "https://github.com/LaavKush/gemini_clone",
  live: "https://gemini-clone-beta-vert.vercel.app/",
  year: 2025,
  details: [
  "Developed a responsive Gemini chatbot interface using HTML, CSS and React.js",
  "Utilized Gemini's free API to deliver real-time conversational responses.",
  "Implemented features like dropdown toggles, smooth animations, and dark mode.",
  "Built using Vite for fast development and deployed publicly via Vercel.",
]
,
}
,

];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-6 py-32 bg-black text-white" id="projects">
      <div className="flex justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-16 tracking-wide">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelected(project)}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl border border-gray-700 p-8 min-h-[320px] flex flex-col justify-between shadow-md hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 italic">{project.year}</p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.shortDesc}
            </p>

            <div className="flex flex-wrap gap-4 text-2xl text-cyan-400 mb-6">
              {project.stack.map((Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-cyan-300 transition duration-200"
                />
              ))}
            </div>

            <div className="flex gap-6 text-sm mt-auto">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2"
                >
                  <FaGithub className="text-lg" /> GitHub
                </a>
              )}

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2"
                >
                  🌐 Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
