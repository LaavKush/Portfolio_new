// "use client";

// import { Tooltip } from "@nextui-org/react";
// import { motion } from "framer-motion";
// import { FaJava, FaPython } from "react-icons/fa";
// import { VscCode } from "react-icons/vsc";

// import {
//   SiCplusplus,
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiReact,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiFastapi,
//   SiGit,
//   SiGithub,
//   SiPostman,
//   SiJupyter,
//   SiMysql,
//   SiMongodb,
//   SiSqlite,
//   SiPandas,
//   SiNumpy,
//   SiScikitlearn,
// } from "react-icons/si";

// const skills = [
//   {
//     category: "Languages & Frameworks",
//     items: [
//       { name: "Java", icon: <FaJava />, level: "Intermediate" },
//       { name: "C++", icon: <SiCplusplus />, level: "Intermediate" },
//       { name: "Python", icon: <FaPython />, level: "Intermediate" },
//       { name: "C", icon: <span className="font-bold text-lg">C</span>, level: "Intermediate" },
//       { name: "JavaScript", icon: <SiJavascript />, level: "Intermediate" },
//       { name: "HTML", icon: <SiHtml5 />, level: "Advanced" },
//       { name: "CSS", icon: <SiCss3 />, level: "Advanced" },
//       { name: "React.js", icon: <SiReact />, level: "Advanced" },
//       { name: "Next.js", icon: <SiNextdotjs />, level: "Intermediate" },
//       { name: "Node.js", icon: <SiNodedotjs />, level: "Intermediate" },
//       { name: "FastAPI", icon: <SiFastapi />, level: "Intermediate" },
//     ],
//   },
//   {
//     category: "Tools & Databases",
//     items: [
//       { name: "Git", icon: <SiGit />, level: "Advanced" },
//       { name: "GitHub", icon: <SiGithub />, level: "Advanced" },
//       { name: "VS Code", icon: <VscCode />, level: "Advanced" },
//       { name: "Postman", icon: <SiPostman />, level: "Intermediate" },
//       { name: "Jupyter", icon: <SiJupyter />, level: "Intermediate" },
//       { name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
//       { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
//       { name: "SQLite", icon: <SiSqlite />, level: "Intermediate" },
//     ],
//   },
//   {
//     category: "ML & Data Tools",
//     items: [
//       { name: "Pandas", icon: <SiPandas />, level: "Intermediate" },
//       { name: "NumPy", icon: <SiNumpy />, level: "Intermediate" },
//       { name: "Scikit-learn", icon: <SiScikitlearn />, level: "Beginner" },
//     ],
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, translateY: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     translateY: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function SkillsPage() {
//   return (
//     <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] px-6 pt-24 pb-16">
//       <h1 className="text-4xl font-bold mb-6 text-center text-[#22d3ee] tracking-wide">
//         My Skills
//       </h1>

//       <div className="flex flex-wrap justify-center gap-6">
//         {skills.map(({ category, icon, items }, i) => (
//           <motion.div
//             key={category}
//             className="w-full sm:w-[300px] bg-[#1e293b] rounded-2xl p-6 shadow-md border border-[#22d3ee] hover:shadow-[0_0_20px_#38bdf8] transition duration-300"
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             custom={i}
//           >
//             <h2 className="text-2xl font-semibold mb-5 text-[#22d3ee] flex items-center">
//               {icon}
//               {category}
//             </h2>

//             <ul className="space-y-4">
//               {items.map(({ name, level, icon: skillIcon }) => (
//                 <li key={name} className="flex items-center space-x-3">
//                   <Tooltip
//                     content={level}
//                     placement="right"
//                     className="bg-[#1e293b] text-sm text-white border border-[#22d3ee]"
//                   >
//                     <span className="text-xl text-[#22d3ee]">{skillIcon}</span>
//                   </Tooltip>
//                  <Tooltip
//   content={level}
//   placement="right"
//   className="bg-[#1e293b] text-sm text-white border border-[#22d3ee] px-2 py-1"
// >

//                     <span className="hover:text-[#38bdf8] transition cursor-help">
//                       {name}
//                     </span>
//                   </Tooltip>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaAws, FaDatabase, FaBrain } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiJupyter,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSqlite,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGithubactions,
} from "react-icons/si";

const skills = [
  {
    category: "Languages & Frameworks",
    icon: <VscCode className="mr-2 text-2xl" />,
    items: [
      { name: "Python", icon: <FaPython />, level: "Advanced" },
      { name: "JavaScript", icon: <SiJavascript />, level: "Advanced" },
      { name: "C++", icon: <SiCplusplus />, level: "Intermediate" },
      { name: "Java", icon: <FaJava />, level: "Intermediate" },
      { name: "C", icon: <span className="font-bold text-[#22d3ee] text-lg">C</span>, level: "Intermediate" },
      { name: "React.js / Native", icon: <SiReact />, level: "Advanced" },
      { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
      { name: "FastAPI", icon: <SiFastapi />, level: "Advanced" },
      { name: "Node.js / Express", icon: <SiNodedotjs />, level: "Intermediate" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced" },
    ],
  },
  {
    category: "Databases & Cloud",
    icon: <FaDatabase className="mr-2 text-xl" />,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced" },
      { name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
      { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
      { name: "Firebase", icon: <SiFirebase />, level: "Intermediate" },
      { name: "SQLite", icon: <SiSqlite />, level: "Intermediate" },
      { name: "AWS (EC2, S3)", icon: <FaAws />, level: "Intermediate" },
      { name: "ChromaDB / FAISS", icon: <FaDatabase />, level: "Intermediate" },
    ],
  },
  {
    category: "AI, ML & Tools",
    icon: <FaBrain className="mr-2 text-xl" />,
    items: [
      { name: "Pandas & NumPy", icon: <SiPandas />, level: "Advanced" },
      { name: "Scikit-learn / XGBoost", icon: <SiScikitlearn />, level: "Intermediate" },
      { name: "Git & GitHub", icon: <SiGit />, level: "Advanced" },
      { name: "GitHub Actions (CI/CD)", icon: <SiGithubactions />, level: "Intermediate" },
      { name: "Postman", icon: <SiPostman />, level: "Advanced" },
      { name: "Jupyter Notebooks", icon: <SiJupyter />, level: "Advanced" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: (i) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] px-6 pt-24 pb-16" id="skills">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#22d3ee] tracking-wide">
        Skills & Technologies
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {skills.map(({ category, icon, items }, i) => (
          <motion.div
            key={category}
            className="w-full sm:w-[340px] bg-[#1e293b] rounded-2xl p-6 shadow-md border border-[#22d3ee]/40 hover:border-[#22d3ee] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition duration-300 flex flex-col justify-between"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[#22d3ee] flex items-center border-b border-gray-700/60 pb-3">
                {icon}
                {category}
              </h2>

              <ul className="space-y-4">
                {items.map(({ name, level, icon: skillIcon }) => (
                  <li key={name} className="flex items-center space-x-3">
                    <span className="text-xl text-[#22d3ee] shrink-0">
                      {skillIcon}
                    </span>
                    <Tooltip
                      content={`Proficiency: ${level}`}
                      placement="right"
                      className="bg-[#0f172a] text-xs text-teal-300 border border-[#22d3ee] px-2 py-1 rounded shadow-lg"
                    >
                      <span className="hover:text-[#38bdf8] transition cursor-help text-gray-200 text-sm font-medium">
                        {name}
                      </span>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}