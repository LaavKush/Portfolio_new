'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import devAnimation from '@/assets/Programming.json';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaLaptopCode, FaUsers } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardContent = [
  {
    icon: <FaUserGraduate size={28} className="text-[#22d3ee]" />,
    title: 'Academic Background',
    text: `I'm Laavanya Kushwaha, an Information Technology undergraduate at IGDTUW (2023–2027) with a CGPA of 8.38. Passionate about building scalable web and AI solutions that solve real-world problems.`,
  },
  {
    icon: <FaLaptopCode size={28} className="text-[#22d3ee]" />,
    title: 'Technical Experience',
    text: `Full Stack Intern at TGIT, BCCL (The Times of India), building frontend modules in React/Next.js and backend APIs in FastAPI. Built a rainfall prediction model (84.81% accuracy). Projects: Times Health (AI-healthcare), GrahLaxmi (finance + AI chatbot), CALMYA (wellness app using Hugging Face).`,
  },
  {
    icon: <FaUsers size={28} className="text-[#22d3ee]" />,
    title: 'Leadership & Community',
    text: `President of ADTC & Technical Head of GeeksforGeeks IGDTUW, leading a community of 1.2k+ students. Organized mentorship programs, coding contests, and hands-on events to nurture future innovators.`,
  },
];

const AboutMe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0f172a] text-[#e2e8f0] min-h-screen flex items-center px-4 py-10 pt-28"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-[#22d3ee] text-center md:text-left">
            About Me
          </h2>

          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {cardContent.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#1e293b] border border-[#22d3ee] p-5 rounded-xl shadow-md flex items-start gap-4"
              >
                <div>{card.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lottie Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          {isClient && (
            <div className="w-full max-w-sm">
              <Lottie animationData={devAnimation} loop={true} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
