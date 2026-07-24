// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// import { useEffect, useRef, useState } from 'react';

// export default function AchievementsPage() {
//   const swiperRef = useRef(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const handlePrev = () => {
//     if (swiperRef.current) swiperRef.current.slidePrev();
//   };

//   const handleNext = () => {
//     if (swiperRef.current) swiperRef.current.slideNext();
//   };

//   if (!isMounted) return null;

//   return (
//     <section className="min-h-screen bg-[#0f172a] text-white pt-28 pb-12 px-4 sm:px-16">
//       <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">Achievements</h2>

//       <div className="ml-40 flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
//         {/* Static Image - Larger Now */}
//         <div className="flex-1 max-w-xl w-full">
//           <Image
//             src="/achievements-cover.png"
//             alt="Achievements Cover"
//             width={700}
//             height={500}
//             className="rounded-2xl shadow-xl w-full h-auto object-cover"
//             priority
//           />
//         </div>

//         {/* Swiper Carousel */}
//         <div className="flex-1 max-w-xl w-full relative">
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             spaceBetween={20}
//             slidesPerView={1}
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             className="rounded-2xl border border-cyan-400 p-4 bg-[#1e293b]"
//           >
//             {['web-win.png', 'ambassador.png', 'gfg.png'].map((img, idx) => (
//               <SwiperSlide key={idx}>
//                 <Image
//                   src={`/${img}`}
//                   alt={`Achievement ${idx + 1}`}
//                   width={700}
//                   height={500}
//                   className="rounded-xl w-full h-auto object-cover"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-xl rounded-full p-2"
//           >
//             &#8249;
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-xl rounded-full p-2"
//           >
//             &#8250;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useRef, useState } from 'react';
import { FaTrophy, FaUsers, FaMedal } from 'react-icons/fa';

const achievementDetails = [
  {
    title: 'Runner-Up – Cloudflare x CloudPeace Hackathon 2026',
    subtitle: 'Top 5/15 Finalists out of 200+ Teams',
    description:
      'Built ScamLens Bharat, an AI-powered multi-modal scam detection platform for text, images, and links in regional Indian languages.',
    icon: <FaTrophy className="text-amber-400 text-2xl shrink-0" />,
    img: 'cloudflare-hackathon.png',
  },
  {
    title: '1st Position – Gemini Genesis (Devcation 2024)',
    subtitle: 'Winner among 100+ Registered Teams',
    description:
      'Secured top position for developing an innovative AI solution utilizing Google Gemini APIs.',
    icon: <FaMedal className="text-cyan-400 text-2xl shrink-0" />,
    img: 'gemini-genesis.png',
  },
  {
    title: 'President – ADTC IGDTUW',
    subtitle: '1.2k+ Member Tech Community',
    description:
      'Founded and led a vibrant women-in-tech initiative, organizing web development mentorships, UI/UX design events, and coding contests.',
    icon: <FaUsers className="text-teal-400 text-2xl shrink-0" />,
    img: 'adtc-president.png',
  },
  {
    title: 'Technical Head – GeeksForGeeks Chapter',
    subtitle: 'IGDTUW Student Chapter',
    description:
      'Led a core technical team of 10 members to organize university-wide workshops and engineer the official chapter website.',
    icon: <FaUsers className="text-cyan-300 text-2xl shrink-0" />,
    img: 'gfg-head.png',
  },
];

export default function AchievementsPage() {
  const swiperRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  if (!isMounted) return null;

  return (
    <section className="min-h-screen bg-[#0f172a] text-white pt-28 pb-16 px-4 sm:px-12" id="achievements">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-12 text-center tracking-wide">
          Achievements & Recognition
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Static Cover Image - Bada Size */}
          <div className="flex-1 max-w-2xl w-full">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_25px_rgba(34,211,238,0.15)] bg-slate-900/60 p-2">
              <Image
                src="/achievements-cover.png"
                alt="Achievements Cover"
                width={800}
                height={550}
                className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Swiper Carousel with Image & Details - Bada Size */}
          <div className="flex-1 max-w-2xl w-full relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="rounded-2xl border border-cyan-400/50 p-6 bg-[#1e293b] shadow-xl pb-14 min-h-[520px] flex flex-col justify-between"
            >
              {achievementDetails.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col space-y-5">
                    {/* Image Container - Height Bada Kar Diye Hain Aur Full Image Show Hogi */}
                    <div className="relative rounded-xl overflow-hidden h-72 sm:h-80 w-full bg-slate-900/80 p-2 flex items-center justify-center border border-gray-700/50">
                      <Image
                        src={`/${item.img}`}
                        alt={item.title}
                        fill
                        className="object-contain p-2"
                        onError={(e) => {
                          e.currentTarget.srcset = '/achievements-cover.png';
                        }}
                      />
                    </div>
                    <div className="px-2">
                      <div className="flex items-center gap-3 mb-1">
                        {item.icon}
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-cyan-300 text-sm md:text-base font-medium mb-2 sm:pl-9">
                        {item.subtitle}
                      </p>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed sm:pl-9">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-slate-900/90 hover:bg-cyan-500 text-white hover:text-black transition-colors text-2xl rounded-full w-11 h-11 flex items-center justify-center border border-cyan-400/50 shadow-lg"
            >
              &#8249;
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-slate-900/90 hover:bg-cyan-500 text-white hover:text-black transition-colors text-2xl rounded-full w-11 h-11 flex items-center justify-center border border-cyan-400/50 shadow-lg"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}