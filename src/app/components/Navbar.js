// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//   const navItems = [
//     { label: 'Home', href: '/' },
//     { label: 'About Me', href: '/about' },
//     { label: 'Experience', href: '/experience' },
//     { label: 'Skills', href: '/skills' },
//     { label: 'Projects', href: '/projects' },
//     { label: 'Achievements', href: '/achievements' },
//     { label: 'Certificates', href: '/certificates' },
//     // { label: 'Blogs', href: '/blogs' },
//     { label: 'Contact Me', href: '/contact' },
//   ];

//   return (
//     <nav
//       aria-label="Main Navigation"
//       className="fixed top-0 left-0 w-full bg-[#0f172a]/90 text-[#e2e8f0] shadow-lg z-50 backdrop-blur-lg"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="flex items-center gap-3"
//         >
//           <Image
//             src="/logo_web.png"
//             alt="Laavanya Kushwaha Logo"
//             width={40}
//             height={40}
//             className="rounded-full object-cover"
//           />
//           <span className="text-2xl md:text-3xl font-bold tracking-wide text-[#22d3ee]">
//             Laavanya
//           </span>
//         </motion.div>

//         {/* Links */}
//         <ul className="hidden md:flex gap-6 text-[17px] font-medium">
//           {navItems.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className="relative inline-block px-2 py-1 text-[#e2e8f0] hover:text-white transition-colors duration-300
//                 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0
//                 before:bg-gradient-to-r before:from-[#22d3ee] before:to-[#7c3aed]
//                 hover:before:w-full before:transition-all before:duration-500"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Certificates', href: '/certificates' },
    // { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Me', href: '/contact' },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-full bg-[#0f172a]/90 text-[#e2e8f0] shadow-lg z-50 backdrop-blur-lg border-b border-gray-800/60"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo_web.png"
              alt="Laavanya Kushwaha Logo"
              width={40}
              height={40}
              className="rounded-full object-cover border border-cyan-400/40 group-hover:border-cyan-400 transition-colors"
            />
            <span className="text-2xl md:text-3xl font-bold tracking-wide text-[#22d3ee]">
              Laavanya
            </span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-5 text-[15px] xl:text-[16px] font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative inline-block px-2 py-1 transition-colors duration-300 ${
                    isActive ? 'text-[#22d3ee] font-semibold' : 'text-[#e2e8f0] hover:text-white'
                  } before:absolute before:left-0 before:bottom-0 before:h-[2px] ${
                    isActive ? 'before:w-full' : 'before:w-0'
                  } before:bg-gradient-to-r before:from-[#22d3ee] before:to-[#7c3aed] hover:before:w-full before:transition-all before:duration-300`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden text-2xl text-[#22d3ee] hover:text-white focus:outline-none p-1"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0f172a] border-b border-gray-800 px-6 py-4 shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col gap-4 text-base font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-1 transition-colors ${
                        isActive
                          ? 'text-[#22d3ee] font-semibold pl-2 border-l-2 border-[#22d3ee]'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;