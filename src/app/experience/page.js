'use client';

import React from 'react';

const experiences = [
  {
    year: '2025',
    title: 'Full Stack Intern',
    org: 'TGIT, BCCL (The Times of India)',
    duration: 'June 2025 – Present',
    logo: '/logos/toi.png', 
    points: [
      'Developed frontend modules using React.js, Next.js, and Tailwind CSS.',
      'Currently working on backend APIs using FastAPI, Python, and Pydantic to ensure seamless integration and data flow.',
      'Delivered a production-ready frontend module within deadline, ensuring cross-browser compatibility, responsive design, and adherence to UI/UX standards.',
      'Received appreciation from internal stakeholders for quality and timely delivery.',
    ],
  },
  {
    year: '2024',
    title: 'Python & ML Intern',
    org: 'IGDTUW – Centre of Excellence (AI)',
    duration: 'June 2024 – July 2024',
    logo: '/logos/igdtuw.png', 
    points: [
      'Built a rainfall prediction machine learning model achieving 84.81% accuracy using Python and Flask.',
      'Worked with Pandas, NumPy, and Scikit-learn for data preprocessing, model training/testing, and basic deployment.',
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="bg-black text-white py-25 px-4 md:px-10 scroll-mt-25">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-teal-300 tracking-wide">
        Experience
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Timeline bar */}
        <div className="relative h-2 bg-gray-700 rounded-full">
          <div className="absolute flex justify-between w-full top-[-18px] px-4 md:px-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col items-center w-1/2">
                {/* Dot */}
                <div className="w-5 h-5 bg-teal-400 border-4 border-black rounded-full z-10 shadow-md"></div>
                {/* Year */}
                <div className="mt-3 text-teal-400 font-bold text-lg">{exp.year}</div>

                {/* Card */}
                <div className="mt-3 w-80 md:w-96 bg-[#111827] rounded-2xl shadow-xl p-6 border border-gray-800 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex justify-center mb-4">
                    <img src={exp.logo} alt={exp.org} className="h-20 w-auto object-contain" />
                  </div>
                  <h3 className="text-white font-semibold text-xl text-center mb-1">{exp.title}</h3>
                  <p className="text-md text-gray-300 text-center">{exp.org}</p>
                  <p className="text-sm text-gray-400 text-center mb-4">{exp.duration}</p>
                  <ul className="text-sm text-gray-300 list-disc list-inside space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
