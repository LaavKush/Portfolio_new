// 'use client';

// import React from 'react';

// const experiences = [
//   {
//     year: '2025',
//     title: 'Full Stack Intern',
//     org: 'TGIT, BCCL (The Times of India)',
//     duration: 'June 2025 – Present',
//     logo: '/logos/toi.png', 
//     points: [
//       'Developed frontend modules using React.js, Next.js, and Tailwind CSS.',
//       'Currently working on backend APIs using FastAPI, Python, and Pydantic to ensure seamless integration and data flow.',
//       'Delivered a production-ready frontend module within deadline, ensuring cross-browser compatibility, responsive design, and adherence to UI/UX standards.',
//       'Received appreciation from internal stakeholders for quality and timely delivery.',
//     ],
//   },
//   {
//     year: '2024',
//     title: 'Python & ML Intern',
//     org: 'IGDTUW – Centre of Excellence (AI)',
//     duration: 'June 2024 – July 2024',
//     logo: '/logos/igdtuw.png', 
//     points: [
//       'Built a rainfall prediction machine learning model achieving 84.81% accuracy using Python and Flask.',
//       'Worked with Pandas, NumPy, and Scikit-learn for data preprocessing, model training/testing, and basic deployment.',
//     ],
//   },
// ];

// const ExperienceTimeline = () => {
//   return (
//     <section className="bg-black text-white py-25 px-4 md:px-10 scroll-mt-25">
//       <h2 className="text-4xl font-extrabold text-center mb-10 text-teal-300 tracking-wide">
//         Experience
//       </h2>

//       <div className="relative w-full max-w-7xl mx-auto">
//         {/* Timeline bar */}
//         <div className="relative h-2 bg-gray-700 rounded-full">
//           <div className="absolute flex justify-between w-full top-[-18px] px-4 md:px-10">
//             {experiences.map((exp, idx) => (
//               <div key={idx} className="relative flex flex-col items-center w-1/2">
//                 {/* Dot */}
//                 <div className="w-5 h-5 bg-teal-400 border-4 border-black rounded-full z-10 shadow-md"></div>
//                 {/* Year */}
//                 <div className="mt-3 text-teal-400 font-bold text-lg">{exp.year}</div>

//                 {/* Card */}
//                 <div className="mt-3 w-80 md:w-96 bg-[#111827] rounded-2xl shadow-xl p-6 border border-gray-800 transition-all duration-300 hover:scale-[1.02]">
//                   <div className="flex justify-center mb-4">
//                     <img src={exp.logo} alt={exp.org} className="h-20 w-auto object-contain" />
//                   </div>
//                   <h3 className="text-white font-semibold text-xl text-center mb-1">{exp.title}</h3>
//                   <p className="text-md text-gray-300 text-center">{exp.org}</p>
//                   <p className="text-sm text-gray-400 text-center mb-4">{exp.duration}</p>
//                   <ul className="text-sm text-gray-300 list-disc list-inside space-y-2">
//                     {exp.points.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceTimeline;

'use client';

import React from 'react';
import Image from 'next/image';

const experiences = [
  {
    year: '2026',
    title: 'Research Intern',
    org: 'Scientific Analysis Group (SAG), DRDO',
    duration: '1 June 2026 – 15 July 2026',
    logo: '/logos/drdo.png',
    points: [
      'Implemented AES-128 (NIST FIPS-197) in Python and built a Correlation Power Analysis (CPA) attack using vectorized NumPy, recovering a full 128-bit key from 10,000 power traces with an exact match.',
      'Parallelized key recovery across 6 worker processes with ProcessPoolExecutor, cutting runtime to 10.53 seconds.',
    ],
  },
  {
    year: '2026',
    title: 'Software Development Intern',
    org: 'Techie Place',
    duration: '22 June 2026 – 31 July 2026',
    logo: '/logos/techieplace.png',
    points: [
      'Delivered a live client website rebuild via a Git branch-based workflow, handling content restructuring, branding, and location-based features.',
      'Gained hands-on exposure to AI-integrated software development on client projects under senior engineering guidance.',
    ],
  },
  {
    year: '2025',
    title: 'Full Stack Intern',
    org: 'TGIT, BCCL (The Times of India)',
    duration: '2 June 2025 – 31 July 2025',
    logo: '/logos/toi.png',
    points: [
      'Engineered responsive frontend interfaces for Times Health, an AI-augmented healthcare platform, using Next.js, React.js, and Tailwind CSS.',
      'Built REST APIs with FastAPI and PostgreSQL, implementing Active Directory authentication and role-based access across patient, doctor, and admin roles.',
      'Gained exposure to AWS infrastructure (EC2, S3, RDS) and CI/CD via GitHub Actions; received stakeholder appreciation.',
    ],
  },
  {
    year: '2024',
    title: 'Machine Learning Intern',
    org: 'Centre of Excellence (AI), IGDTUW',
    duration: 'June 2024 – July 2024',
    logo: '/logos/igdtuw.png',
    points: [
      'Completed hands-on training in computational problem solving and ML algorithms using Python, Pandas, NumPy, and Scikit-learn.',
      'Built and evaluated predictive ML workflow models as part of the university AI research initiative.',
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="bg-black text-white py-24 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-teal-400 tracking-wide">
          Experience
        </h2>

        <div className="relative border-l-2 border-teal-500/50 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-400 border-4 border-black shadow-[0_0_10px_#2dd4bf]" />

              {/* Year Label (Desktop Side Anchor) */}
              <span className="hidden md:block absolute -left-28 top-0.5 text-teal-400 font-bold text-xl tracking-wider">
                {exp.year}
              </span>

              {/* Experience Card */}
              <div className="bg-[#111827] rounded-2xl p-6 md:p-8 border border-gray-800 shadow-xl hover:border-teal-500/50 hover:shadow-teal-500/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-800">
                  <div>
                    <span className="md:hidden inline-block text-teal-400 font-bold text-sm mb-1">
                      {exp.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-teal-300 font-medium text-base mt-0.5">
                      {exp.org}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 mt-1">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Company Logo using Next.js Image */}
                  {exp.logo && (
                    <div className="p-2 bg-slate-900/80 rounded-lg border border-gray-800 shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.org} logo`}
                        width={120}
                        height={48}
                        className="h-12 w-auto object-contain max-w-[120px]"
                      />
                    </div>
                  )}
                </div>

                {/* Accomplishments Bullet Points */}
                <ul className="space-y-3 text-sm md:text-base text-gray-300 list-disc list-outside ml-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;