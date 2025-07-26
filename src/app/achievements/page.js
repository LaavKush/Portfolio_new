'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useRef, useState } from 'react';

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
    <section className="min-h-screen bg-[#0f172a] text-white pt-28 pb-12 px-4 sm:px-16">
      <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">Achievements</h2>

      <div className="ml-40 flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
        {/* Static Image - Larger Now */}
        <div className="flex-1 max-w-xl w-full">
          <Image
            src="/achievements-cover.png"
            alt="Achievements Cover"
            width={700}
            height={500}
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Swiper Carousel */}
        <div className="flex-1 max-w-xl w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="rounded-2xl border border-cyan-400 p-4 bg-[#1e293b]"
          >
            {['web-win.png', 'ambassador.png', 'gfg.png'].map((img, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={`/${img}`}
                  alt={`Achievement ${idx + 1}`}
                  width={700}
                  height={500}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-xl rounded-full p-2"
          >
            &#8249;
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white text-xl rounded-full p-2"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
