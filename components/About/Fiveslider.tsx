'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface Slide {
  title: string;
  content: string;
  highlights: string[];
}

const slides: Slide[] = [
  {
    title: 'Online VLSI Courses',
    content:
      'Engage directly with instructors and peers during live Q&A and review sessions.',
    highlights: [
      'Live Interactive Sessions',
    ],
  },
  {
    title: 'Industry Experts',
    content:
      'Gain hands-on experience using industry-standard tools for real-world projects.',
    highlights: [
      'Practical Lab Access',
    ],
  },
  {
    title: 'Career Assistance',
    content:
      'Access course materials, videos, and exercises conveniently via our mobile app.',
    highlights: [
      'Anytime, Anywhere Learning',
    ],
  },
  {
    title: 'experienced mentors',
    content:
      'Receive dedicated 1:1 guidance and support from experienced mentors.',
    highlights: [
      'Personalized Mentorship',
    ],
  },
];

function Fiveslider() {
  const [current, setCurrent] = useState<number>(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const updateHeights = () => {
      const heights = refs.current.map((ref) => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  return (
    <section className="bg-[#032035] text-white py-16 px-0 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl m-auto text-center max-w-4xl font-normal mb-10">
          Five Reasons to Choose SkillFelix for Your VLSI & Embedded Systems Career        </h2>

        <div style={{ height: maxHeight }} className="relative">
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid md:grid-cols-4 space-x-0 space-y-5 absolute inset-0">
              <div className="md:col-span-1 text-lg font-medium">
                {slides[current].title}
              </div>
              <div className="md:col-span-3 text-base">{slides[current].content}</div>
            </div>
          </div>

          {/* Hidden Slides for measuring height */}
          <div className="absolute opacity-0 pointer-events-none -z-10">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  refs.current[idx] = el;
                }}
                className="grid md:grid-cols-4 gap-10 mb-4"
              >
                <div className="md:col-span-1 text-lg">{slide.title}</div>
                <div className="md:col-span-3">{slide.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-4 gap-10 md:mt-12 mt-5">
          <div className="md:col-span-1 text-lg font-medium">Key highlights</div>
          <div className="md:col-span-3 grid md:grid-cols-3 gap-8 text-sm text-gray-300 border-t border-gray-600 pt-6">
            {slides[current].highlights.slice(0, 3).map((point, idx) => (
              <div key={idx}>{point}</div>
            ))}
            <div className="col-span-3 pt-4 border-t border-gray-600">
              {slides[current].highlights[3]}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <div className="flex space-x-4 ml-6">
            <button
              onClick={prevSlide}
              className="w-7 h-7 rounded-full bg-white text-[#002C2C] flex items-center justify-center font-normal"
            >
              <Image src="/lt.svg" alt="Previous" width={20} height={20} />
            </button>

            <div className="flex space-x-2 items-center">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-7 h-1 rounded-full inline-block transition-transform duration-300 ${current === idx ? 'bg-[#0B96F3] scale-125' : 'bg-gray-400 scale-100'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#002C2C] font-normal"
            >
              <Image src="/rt.svg" alt="Next" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fiveslider;
