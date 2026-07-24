// "use client";

// import {
//   SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiExpress,
//   SiNodedotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3,
//   SiGit, SiGithub, SiVercel, SiFirebase
// } from "react-icons/si";
// import { FaEye } from "react-icons/fa";
// import ParticlesBackground from "./ParticlesBackground";

// const techIcons = [
//   { Icon: SiNextdotjs, x: "left-[5%]", y: "top-[10%]" },
//   { Icon: SiReact, x: "right-[20%]", y: "top-[30%]" },
//   { Icon: SiTailwindcss, x: "left-[10%]", y: "bottom-[10%]" },
//   { Icon: SiMongodb, x: "right-[12%]", y: "bottom-[8%]" },
//   { Icon: SiExpress, x: "left-[45%]", y: "top-[3%]" },
//   { Icon: SiNodedotjs, x: "right-[42%]", y: "bottom-[5%]" },
//   { Icon: SiJavascript, x: "left-[20%]", y: "top-[25%]" },
//   { Icon: SiTypescript, x: "right-[5%]", y: "top-[5%]" },
//   { Icon: SiHtml5, x: "left-[30%]", y: "bottom-[20%]" },
//   { Icon: SiCss3, x: "right-[25%]", y: "bottom-[25%]" },
//   { Icon: SiGit, x: "left-[10%]", y: "top-[45%]" },
//   { Icon: SiGithub, x: "right-[10%]", y: "top-[50%]" },
//   { Icon: SiVercel, x: "left-[45%]", y: "bottom-[30%]" },
//   { Icon: SiFirebase, x: "right-[45%]", y: "top-[20%]" },
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen bg-black text-white overflow-hidden">
//       <ParticlesBackground />

//       {/* Floating Tech Icons */}
//       {techIcons.map(({ Icon, x, y }, index) => (
//         <div
//           key={index}
//           className={`absolute ${x} ${y} text-6xl text-white opacity-20 hover:opacity-100 transition-all duration-300 zoom-animation`}
//         >
//           <Icon />
//         </div>
//       ))}

//       {/* Zoom Animation */}
//       <style jsx>{`
//         @keyframes zoomInOut {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.3);
//           }
//         }
//         .zoom-animation {
//           animation: zoomInOut 3s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//         <h1 className="text-5xl md:text-7xl font-bold mb-4">
//           Hello, I&apos;m <span className="text-teal-400">Laavanya Kushwaha</span>
//         </h1>
//         <p className="text-lg md:text-2xl mb-6">
//   Building impactful tech solutions by blending{" "}
//   <span className="text-teal-300 font-semibold">engineering</span> expertise with{" "}
//   <span className="text-teal-300 font-semibold">community -  driven innovation</span>.
// </p>


//         {/* Role Badges */}
//         <div className="flex flex-wrap gap-4 mb-6 justify-center">
//           {["Web Developer", "MERN Stack", "Tech Enthusiast"].map((role) => (
//             <span
//               key={role}
//               className="px-4 py-1 border border-teal-400 rounded-full text-sm md:text-base"
//             >
//               #{role.replace(" ", "")}
//             </span>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="/projects"
//             className="bg-teal-500 text-black px-6 py-2 rounded hover:bg-teal-600 transition"
//           >
//             View Projects
//           </a>
//           <a
//   href="/Laavanya_Resume.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex items-center gap-2 border border-teal-500 text-teal-400 px-6 py-2 rounded hover:bg-teal-600 hover:text-white transition"
// >
//   <FaEye className="text-base md:text-lg" />
//   <span>View Resume</span>
// </a>


//           <a
//             href="/contact"
//             className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNumpy,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import { FaEye, FaAws, FaRocket, FaEnvelope } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

const techIcons = [
  { name: "Next.js", Icon: SiNextdotjs, x: "left-[8%]", y: "top-[14%]", delay: "0s" },
  { name: "React", Icon: SiReact, x: "right-[15%]", y: "top-[25%]", delay: "1.2s" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, x: "left-[12%]", y: "bottom-[14%]", delay: "2.4s" },
  { name: "Python", Icon: SiPython, x: "right-[10%]", y: "bottom-[12%]", delay: "0.8s" },
  { name: "FastAPI", Icon: SiFastapi, x: "left-[45%]", y: "top-[8%]", delay: "1.6s" },
  { name: "PostgreSQL", Icon: SiPostgresql, x: "right-[38%]", y: "bottom-[8%]", delay: "3.0s" },
  { name: "JavaScript", Icon: SiJavascript, x: "left-[22%]", y: "top-[22%]", delay: "0.4s" },
  { name: "AWS", Icon: FaAws, x: "right-[6%]", y: "top-[10%]", delay: "2.0s" },
  { name: "MongoDB", Icon: SiMongodb, x: "left-[28%]", y: "bottom-[22%]", delay: "1.0s" },
  { name: "NumPy", Icon: SiNumpy, x: "right-[22%]", y: "bottom-[22%]", delay: "2.8s" },
  { name: "Git", Icon: SiGit, x: "left-[6%]", y: "top-[48%]", delay: "0.6s" },
  { name: "GitHub", Icon: SiGithub, x: "right-[8%]", y: "top-[52%]", delay: "1.8s" },
  { name: "Vercel", Icon: SiVercel, x: "left-[42%]", y: "bottom-[28%]", delay: "2.2s" },
  { name: "Firebase", Icon: SiFirebase, x: "right-[42%]", y: "top-[18%]", delay: "1.4s" },
];

const roles = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "Cloud Enthusiast",
  
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTech, setActiveTech] = useState(null);

  // Typing Effect Logic
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Particle Effects */}
      <ParticlesBackground />

      {/* Radial Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[140px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating Background Tech Icons */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {techIcons.map(({ name, Icon, x, y, delay }, index) => (
          <div
            key={index}
            style={{ animationDelay: delay }}
            onMouseEnter={() => setActiveTech(name)}
            onMouseLeave={() => setActiveTech(null)}
            className={`pointer-events-auto absolute ${x} ${y} group cursor-pointer transition-all duration-300 floating-icon`}
          >
            <div className="relative flex flex-col items-center">
              <Icon className="text-4xl md:text-5xl text-gray-400/30 group-hover:text-teal-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(45,212,191,0.8)] transition-all duration-300" />
              {/* Tooltip on Icon Hover */}
              <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 bg-slate-900/90 text-teal-300 text-xs px-2 py-0.5 rounded border border-teal-500/40 whitespace-nowrap transition-opacity duration-200">
                {name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
          }
        }
        .floating-icon {
          animation: floatSlow 5s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-400/30 bg-teal-950/30 backdrop-blur-md mb-6 text-xs md:text-sm text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span>Open to Opportunities & Collaborations</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            Laavanya Kushwaha
          </span>
        </h1>

        {/* Typing Subtitle Effect */}
        <div className="h-10 md:h-12 flex items-center justify-center mb-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            I am a{" "}
            <span className="text-teal-300 border-b-2 border-teal-400 pb-0.5">
              {displayText}
            </span>
            <span className="animate-pulse text-teal-400 font-normal">|</span>
          </p>
        </div>

        {/* Tagline Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
          Building impactful tech solutions by blending{" "}
          <span className="text-teal-300 font-medium underline decoration-teal-500/50 underline-offset-4">
            engineering expertise
          </span>{" "}
          with{" "}
          <span className="text-teal-300 font-medium underline decoration-teal-500/50 underline-offset-4">
            community-driven innovation
          </span>
          .
        </p>

        {/* Interactive Skill Badges */}
        <div className="flex flex-wrap gap-2.5 mb-10 justify-center">
          {roles.map((role) => (
            <span
              key={role}
              className="px-4 py-1.5 border border-gray-700/80 hover:border-teal-400/80 rounded-full text-xs md:text-sm text-gray-300 hover:text-teal-300 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(45,212,191,0.2)]"
            >
              #{role.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
          <Link
            href="/projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-semibold px-7 py-3 rounded-xl hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] hover:scale-105 transition-all duration-300 text-center"
          >
            <FaRocket className="text-sm" />
            <span>View Projects</span>
          </Link>

          <a
            href="/Laavanya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-teal-500/80 text-teal-300 bg-teal-950/20 px-7 py-3 rounded-xl hover:bg-teal-500 hover:text-black hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:scale-105 transition-all duration-300 font-medium text-center backdrop-blur-md"
          >
            <FaEye className="text-base" />
            <span>View Resume</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white hover:text-black font-medium px-7 py-3 rounded-xl hover:scale-105 transition-all duration-300 text-center backdrop-blur-md border border-white/20"
          >
            <FaEnvelope className="text-sm" />
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;