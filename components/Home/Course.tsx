'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // useRouter for navigation
import Link from 'next/link'; // Link for routing

const Page = () => {
  const router = useRouter(); // initialize router

  return (
    <div className="grid bg-[url('/Course.svg')] lg:grid-cols-12 bg-center bg-cover mt-16">
      {/* Left section with text and button */}
      <div className='col-span-3 lg:col-span-7 text-center px-4 lg:px-0 py-10 lg:py-0 lg:text-left flex lg:flex-col lg:justify-center lg:pl-[81px] w-full lg:max-w-3xl'>
        <div>
          <h2 className='font-normal text-3xl md:text-[45px] leading-[125%] text-[#ffffff]'>
            Your Journey from Learning to Earning: Courses, Mentorship & Real-World Labs
          </h2>
          <div className='py-6'>
            <p className='font-normal text-lg leading-[21px] text-[#ffffff]'>
              Join SkillFelix for hands-on courses and expert mentorship to build your career with industry-aligned skills training.
            </p>
          </div>
       
          <div className='flex justify-center lg:justify-start'>
               <Link href="/courses">
            <button
              onClick={() => router.push('/courses')}
              className='w-60 bg-[#0B96F3] p-3 rounded-[2px] text-[16px] hover:bg-[#000717] leading-[100%] text-[#ffffff] flex gap-2 justify-center items-center'
            >
              Explore friendly Courses
              <Image src="/arrow.svg" alt='arrow' height={16} width={16} />
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right section with image */}
      <div className='col-span-12 md:col-span-5 lg:flex justify-end items-end hidden'>
        <Image className='object-cover' src='/Group.svg' alt='Group' height={551} width={659} />
      </div>
    </div>
  );
};

export default Page;
