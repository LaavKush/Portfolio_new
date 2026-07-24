'use client';

import React from 'react';
import Image from 'next/image';

const certificates = [
  {
    title: 'Computational Problem Solving with Python',
    issuer: 'NPTEL',
    year: '2025',
    link: 'https://drive.google.com/file/d/1xmGAfEr91otXF7dj-CL03fd-gVtG5ZSU/view',
    logo: '/logos/nptel.png',
  },
  {
    title: 'Introduction to Career Skills in Data Analytics',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://drive.google.com/file/d/1MrF7ElpIkgq0AzizrzMixUAeJGmJbWqX/view',
    logo: '/logos/linkedin.png',
  },
  {
    title: 'Python & ML Internship Certificate',
    issuer: 'IGDTUW – CoE (AI)',
    year: '2024',
    link: 'https://drive.google.com/file/d/1XW__8E9Qzh8Ph5aQpH-oR3YS-YLCfPr_/view',
    logo: '/logos/igdtuw.png',
  },
  {
    title: 'Gen AI Study Jam 2024',
    issuer: 'Google Developer Student Clubs (IGDTUW)',
    year: '2024',
    link: 'https://drive.google.com/file/d/1UgFJOixO3iGTrjY7i3kQdGfLRbtf2oJh/view?usp=sharing',
    logo: '/logos/gdg.png',
  },
  {
    title: 'Drone Workshop – WIEmPower 5.0',
    issuer: 'IEEE IGDTUW (EDS Delhi Chapter)',
    year: '2024',
    link: 'https://drive.google.com/file/d/1afK1VtF7OGsaaJs7Yx1Ry2EvXFIvvT99/view?usp=sharing',
    logo: '/logos/ieee.png',
  },
  {
    title: 'Logo Design Competition',
    issuer: 'NIRVANA × ACM IGDTUW',
    year: '2024',
    link: 'https://drive.google.com/file/d/1BhsAYgRwlMtzXVwjScoNQBrbFumpfel9/view?usp=sharing',
    logo: '/logos/nirvana.png',
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="bg-black text-white py-24 px-4 md:px-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-teal-400 tracking-wide">
        Certifications
      </h2>

      {/* Centered Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {certificates.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[360px] bg-[#111827] border border-gray-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between min-h-[280px]
                         transition-all duration-300 hover:scale-105 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]"
            >
              <div>
                <div className="flex justify-center mb-6 h-16 items-center">
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={140}
                    height={64}
                    className="h-16 w-auto object-contain max-w-[160px]"
                  />
                </div>

                <h3 className="text-lg font-semibold text-center text-white line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400 text-center mt-2">
                  {cert.issuer} • {cert.year}
                </p>
              </div>

              <p className="text-sm text-teal-400 text-center mt-6 font-medium group-hover:underline">
                View Certificate →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;