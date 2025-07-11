"use client";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className='md:py-48 py-16 bg-cover bg-top mt-[85px] bg-[url("/aboutb.png")]'>
      <div className='container mx-auto'>
        <div className='text-center text-[#ffffff]'>
          <h1 className='text-4xl lg:text-7xl'>About Skillfelix </h1>
          <p className='mt-3'>Empowering Your Future in VLSI & Embedded Systems
</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
