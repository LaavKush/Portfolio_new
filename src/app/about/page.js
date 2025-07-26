'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import devAnimation from '@/assets/Programming.json';
import { motion } from 'framer-motion';

// Animation variants
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

const AboutMe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0f172a] text-[#e2e8f0] min-h-screen flex items-center px-6 py-12 pt-28"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-45">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-1">
          <h2 className="text-3xl font-bold text-[#22d3ee] text-center md:text-left">About Me</h2>

          <motion.div
            className="flex flex-col gap-1"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Card Template */}
            {[
  `I'm Laavanya Kushwaha, an Information Technology undergraduate at IGDTUW (2023–2027) with a current CGPA of 8.38. My passion lies in building scalable web and AI solutions that solve real-world problems.`,
  
  `Currently working as a Full Stack Intern at TGIT, BCCL (The Times of India), building frontend modules in React.js/Next.js and backend APIs using FastAPI. Previously built a rainfall prediction model with 84.81% accuracy at IGDTUW COE. Projects include Times Health (AI-healthcare), GrahLaxmi (women’s finance tool with AI chatbot), and CALMYA (wellness web app with Hugging Face).`
,
  
  `As the President of ADTC and Technical Head of GeeksforGeeks IGDTUW, I lead a tech community of 1.2k+ students and organize coding challenges, mentorship programs, and hands-on tech events to empower future innovators.`,
].map((text, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="mt-5 bg-[#1e293b] border border-[#22d3ee] p-6 rounded-2xl shadow-xl w-[780px] mx-auto"
              >
                <p className="text-lg leading-relaxed text-gray-300">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lottie Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          {isClient && (
            <div className="w-full max-w-md">
              <Lottie animationData={devAnimation} loop={true} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
