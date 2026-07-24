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
import { FaEye, FaAws } from "react-icons/fa"; // <--- Added FaAws here
import ParticlesBackground from "./ParticlesBackground";

const techIcons = [
  { Icon: SiNextdotjs, x: "left-[5%]", y: "top-[10%]", delay: "0s" },
  { Icon: SiReact, x: "right-[20%]", y: "top-[30%]", delay: "0.5s" },
  { Icon: SiTailwindcss, x: "left-[10%]", y: "bottom-[10%]", delay: "1s" },
  { Icon: SiPython, x: "right-[12%]", y: "bottom-[8%]", delay: "1.5s" },
  { Icon: SiFastapi, x: "left-[45%]", y: "top-[3%]", delay: "0.2s" },
  { Icon: SiPostgresql, x: "right-[42%]", y: "bottom-[5%]", delay: "0.8s" },
  { Icon: SiJavascript, x: "left-[20%]", y: "top-[25%]", delay: "1.2s" },
  { Icon: FaAws, x: "right-[5%]", y: "top-[5%]", delay: "0.4s" }, // <--- Switched to FaAws
  { Icon: SiMongodb, x: "left-[30%]", y: "bottom-[20%]", delay: "1.6s" },
  { Icon: SiNumpy, x: "right-[25%]", y: "bottom-[25%]", delay: "0.7s" },
  { Icon: SiGit, x: "left-[10%]", y: "top-[45%]", delay: "1.1s" },
  { Icon: SiGithub, x: "right-[10%]", y: "top-[50%]", delay: "0.3s" },
  { Icon: SiVercel, x: "left-[45%]", y: "bottom-[30%]", delay: "1.4s" },
  { Icon: SiFirebase, x: "right-[45%]", y: "top-[20%]", delay: "0.9s" },
];

const roles = ["Full Stack Developer", "AI/ML Engineer", "Cloud Enthusiast"];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      <ParticlesBackground />

      {/* Floating Background Icons */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {techIcons.map(({ Icon, x, y, delay }, index) => (
          <div
            key={index}
            style={{ animationDelay: delay }}
            className={`pointer-events-auto absolute ${x} ${y} text-5xl md:text-6xl text-white opacity-20 hover:opacity-100 transition-opacity duration-300 zoom-animation`}
          >
            <Icon />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes zoomInOut {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.25);
          }
        }
        .zoom-animation {
          animation: zoomInOut 4s ease-in-out infinite;
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hello, I'm <span className="text-teal-400">Laavanya Kushwaha</span>
        </h1>

        <p className="text-lg md:text-2xl mb-6 max-w-2xl text-gray-200">
          Building impactful tech solutions by blending{" "}
          <span className="text-teal-300 font-semibold">
            engineering expertise
          </span>{" "}
          with{" "}
          <span className="text-teal-300 font-semibold">
            community-driven innovation
          </span>
          .
        </p>

        {/* Roles Tags */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {roles.map((role) => (
            <span
              key={role}
              className="px-4 py-1 border border-teal-400/60 rounded-full text-sm md:text-base text-teal-300 bg-teal-950/20"
            >
              #{role.replace(/\s+/g, "")}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/projects"
            className="w-full sm:w-auto bg-teal-500 text-black font-medium px-6 py-2.5 rounded hover:bg-teal-400 transition-colors duration-200 text-center"
          >
            View Projects
          </Link>

          <a
            href="/Laavanya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-teal-500 text-teal-400 px-6 py-2.5 rounded hover:bg-teal-500 hover:text-black transition-colors duration-200 font-medium text-center"
          >
            <FaEye className="text-base md:text-lg" aria-hidden="true" />
            <span>View Resume</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto bg-white text-black font-medium px-6 py-2.5 rounded hover:bg-gray-200 transition-colors duration-200 text-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
