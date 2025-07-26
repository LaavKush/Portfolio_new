'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Me', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/90 text-[#e2e8f0] shadow-lg z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo_web.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-2xl md:text-3xl font-bold tracking-wide text-[#22d3ee]">
            &lt; Laavanya / &gt;
          </span>
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-[17px] font-medium">
  {navItems.map((item, idx) => (
    <li key={idx}>
      <a
        href={item.href}
        className="relative inline-block px-2 py-1 text-[#e2e8f0] hover:text-white transition-colors duration-300
        before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0
        before:bg-gradient-to-r before:from-[#22d3ee] before:to-[#7c3aed]
        hover:before:w-full before:transition-all before:duration-500"
      >
        {item.label}
      </a>
    </li>
  ))}
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
