"use client";

import {
  SiNextdotjs, SiReact, SiTailwindcss, SiPython, SiFastapi,
  SiPostgresql, SiFirebase, SiAmazonaws, SiGit, SiGithub,
  SiVercel, SiNumpy, SiJavascript, SiMongodb
} from "react-icons/si";
import { FaEye } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

const techIcons = [
  { Icon: SiNextdotjs, x: "left-[5%]", y: "top-[10%]" },
  { Icon: SiReact, x: "right-[20%]", y: "top-[30%]" },
  { Icon: SiTailwindcss, x: "left-[10%]", y: "bottom-[10%]" },
  { Icon: SiPython, x: "right-[12%]", y: "bottom-[8%]" },
  { Icon: SiFastapi, x: "left-[45%]", y: "top-[3%]" },
  { Icon: SiPostgresql, x: "right-[42%]", y: "bottom-[5%]" },
  { Icon: SiJavascript, x: "left-[20%]", y: "top-[25%]" },
  { Icon: SiAmazonaws, x: "right-[5%]", y: "top-[5%]" },
  { Icon: SiMongodb, x: "left-[30%]", y: "bottom-[20%]" },
  { Icon: SiNumpy, x: "right-[25%]", y: "bottom-[25%]" },
  { Icon: SiGit, x: "left-[10%]", y: "top-[45%]" },
  { Icon: SiGithub, x: "right-[10%]", y: "top-[50%]" },
  { Icon: SiVercel, x: "left-[45%]", y: "bottom-[30%]" },
  { Icon: SiFirebase, x: "right-[45%]", y: "top-[20%]" },
];

const roles = ["Full Stack Developer", "AI/ML Engineer", "Cloud Enthusiast"];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      <ParticlesBackground />

      {/* Floating Tech Icons */}
      <div aria-hidden="true">
        {techIcons.map(({ Icon, x, y }, index) => (
          <div
            key={`${Icon.name}-${index}`}
            className={`absolute ${x} ${y} text-6xl text-white opacity-20 hover:opacity-100 transition-all duration-300 zoom-animation`}
          >
            <Icon />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes zoomInOut {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        .zoom-animation {
          animation: zoomInOut 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hello, I&apos;m{" "}
          <span className="text-teal-400">Laavanya Kushwaha</span>
        </h1>

        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Building impactful tech solutions by blending{" "}
          <span className="text-teal-300 font-semibold">engineering expertise</span>{" "}
          with{" "}
          <span className="text-teal-300 font-semibold">community-driven innovation</span>.
        </p>

        {/* Role Badges */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          {roles.map((role) => (
            <span
              key={role}
              className="px-4 py-1 border border-teal-400 rounded-full text-sm md:text-base"
            >
              #{role.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            href="/projects"
            className="bg-teal-500 text-black px-6 py-2 rounded hover:bg-teal-600 transition"
          >
            View Projects
          </a>

          
            href="/Laavanya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-teal-500 text-teal-400 px-6 py-2 rounded hover:bg-teal-600 hover:text-white transition"
          >
            <FaEye className="text-base md:text-lg" aria-hidden="true" />
            <span>View Resume</span>
          </a>

          
            href="/contact"
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;