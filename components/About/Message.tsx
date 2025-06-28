'use client';

import Image from 'next/image';
import React from 'react';

const Message: React.FC = () => {
  return (
    <div
      className="md:py-16 md:px-5 py-10 px-2 bg-[#EBF7FF]"
      style={{ boxShadow: '0px 4px 24px -10px #083C6026' }}
    >
      <div className="container">
        <h2 className="text-3xl md:text-5xl text-center pb-10">
          A Message from Our
          <span className="text-[#0B96F3]"> Founder & CEO</span>
        </h2>

        <div className="w-full  lg:flex justify-between  shadow-2xl rounded-2xl gap-10 md:pl-10 md:py-0 py-5 md:pt-10 md:px-0 px-6 bg-[#FFFFFF]">
          <div className="w-full md:w-1/2  mt-5 lg:mt-0 space-y-2 p-4">
            <p className="text-lg font-semibold">
              Dear Learners, Partners, and Industry Leaders,    
            </p>

            <p>
              Welcome to SkillFelix.
            </p>
            <p>In todays rapidly evolving tech landscape, the gap between theoretical education and industry requirements is more evident than ever—especially in specialized fields like VLSI and core electronics. At SkillFelix, we recognized this challenge and built a platform dedicated to hands-on learning, skill development, and employability.</p>
            <p>Our goal is simple: To make every engineering student industry-ready.Our goal is simple: To make every engineering student industry-ready.</p>
            <p>We dont just offer internships—we offer career-launching experiences. With project-based learning, personalized mentoring, and dedicated placement support, we prepare students for the realities of the job market and help companies discover trained, motivated talent.</p>
            <p>As we move forward, SkillFelix will continue to expand its offerings, embrace emerging technologies, and build more industry collaborations—to ensure that our students remain ahead of the curve.</p>
            <p>Thank you for being a part of our journey.</p>

            <div className="py-2 space-y-2">
              <p>Warm regards,
              </p>
              <h4 className="text-2xl">Ajay Sharma
              </h4>
              <h5>Founder & CEO, SkillFelix </h5>
            </div>
          </div>

          <div className="flex lg:justify-end  md:mt-16  mt-2  lg:mt-0">
            <div className=" md:rounded-tl-[50px] md:rounded-br-xl md:rounded-bl-none  md:rounded-tr-none rounded-xl w-full flex justify-center items-end ">
              <Image  
                src="/courses/ceo.jpeg"
                alt="CEO's Message"
                height={500}
                width={500}
                className=' md:rounded-tl-[50px] md:rounded-br-xl md:rounded-bl-none  md:rounded-tr-none rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
