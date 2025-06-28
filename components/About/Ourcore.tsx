import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface CoreValue {
  icon: string;
  title: string;
  bgColor?: string;
}

const coreValuesData: { values: CoreValue[] } = {
  values: [
    {
      icon: "/courses/Group 71198.svg",
      title: "Exceptional Teamwork",
      bgColor: ""
    },
    {
      icon: "/courses/Group 71202.svg",
      title: "Student-Centric Collaboration ",
      bgColor: ""
    },
    {
      icon: "/courses/Group 71230 (1).svg",
      title: "Constant Innovation & Growth",
      bgColor: ""
    },
    {
      icon: "/courses/Group 71835 (1).svg",
      title: "Career aspirations in VLSI and Embedded Systems",
      bgColor: ""
    }
  ]
};

const CoreValuesSection: React.FC = () => {
  return (
    <section className="md:px-5 md:py-16 px-2 py-10 rounded-lg bg-gradient-to-b from-[#f6fbff] to-white" >
      <div className="container px-0">
         <h2 className="md:text-5xl text-3xl text-black text-center  md:mb-16 mb-6">
              Our Core <span className='text-[#0B96F3]'> Values </span>
            </h2>
          
          <div className='md:max-w-5xl w-full m-auto'>
           
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 lg:gap-8">
              {coreValuesData.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="lg:text-left text-center lg:flex items-center md:space-x-2 space-y-3 border border-white bg-white shadow-[2px_8px_27px_-3px_#0000000F] hover:border-[#0B96F3] rounded p-2 "
                >
                  <div className=" rounded-lg flex justify-center">
                    <Image src={value.icon} alt='coreicon' height={137} width={146} />
                  </div>
                  <div>
                    <h3 className="md:text-xl text-base font-normal">{value.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default CoreValuesSection;
