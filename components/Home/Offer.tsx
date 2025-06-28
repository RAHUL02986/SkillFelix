"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Offer = () => {
  // State to track active tab for animation
  const [activeTab, setActiveTab] = useState("domain");

  const domainCourses: Course[] = [
    {
      id: 1,
      title: "Physical Design (PD)",
      description:
        "Physical Design (PD) is the process of transforming a circuit’s logical representation into a physical layout, including placement, routing, and optimization for performance and manufacturability.",
      image: "/offer/Physical Design (PD).png",
      link: "/courses/physical-design-pd-",
    },
    {
      id: 2,
      title: "Design For Testing (DFT)",
      description:
        "Design for Testing (DFT) enhances a circuit’s testability by adding features like scan chains and built-in self-test, enabling efficient fault detection during manufacturing and validation.",
      image: "/offer/Design For Testing.png",
      link: "/courses/design-for-testing-dft-",
    },
    {
      id: 3,
      title: "Static Timing Analysis (STA)",
      description:
        "Static Timing Analysis (STA) is a method used to verify the timing performance of a digital circuit without requiring simulation, ensuring it meets required speed and reliability.",
      image: "/offer/Static Timing Analysis (STA).png",
      link: "/courses/static-timing-analysis-sta-",
    },
  ];

  const rtlDesignCourses: Course[] = [
    {
      id: 1,
      title: "Advanced Embedded System Design",
      description: "Advanced Embedded System Design involves creating optimized, reliable, and efficient hardware-software solutions for real-time applications using microcontrollers, RTOS, and low-level programming techniques.",
      image: "/offer/Advanced Embedded System Design (2).png",
      link: "/courses/advanced-embedded-system-design",
    },
    {
      id: 2,
      title: "Advanced VLSI Design & Verification",
      description: "Advanced VLSI Design & Verification focuses on designing complex integrated circuits and validating functionality using HDL, simulation, synthesis, and formal verification methodologies.",
      image: "/offer/Advanced Embedded System Design (3).png",
      link: "/courses/advanced-vlsi-design-verification",
    },
    {
      id: 3,
      title: "Advanced ASIC Verification (VLSI VM)",
      description: "Advanced ASIC Verification (VLSI VM) emphasizes verifying complex ASIC designs using SystemVerilog, UVM methodology, simulation tools, functional coverage, and debugging to ensure design correctness and reliability.",
      image: "/offer/Advanced Embedded System Design (4).png",
      link: "/courses/advanced-asic-verification-vlsi-vm-",
    },
  ];

  const rtlVerificationCourses: Course[] = [
    {
      id: 1,
      title: "IoT – Internet of Things",
      description: "IoT – Internet of Things connects physical devices to the internet, enabling data exchange, remote monitoring, automation, and intelligent decision-making across various applications and industries.",
      image: "/offer/IoTInternet.png",
      link: "/courses/iot-internet-of-things",
    },
    {
      id: 2,
      title: "Edge AI – Edge Artificial Intelligence",
      description: "Edge AI – Edge Artificial Intelligence brings machine learning models to edge devices, enabling real-time data processing, low latency, enhanced privacy, and reduced dependency on cloud computing.",
      image: "/offer/EdgeIE.png",
      link: "/courses/edge-ai-edge-artificial-intelligence",
    },
    {
      id: 3,
      title: "RISC-V Architecture",
      description: "RISC-V Architecture is an open-standard, modular instruction set architecture (ISA) based on reduced instruction set computing principles, enabling flexibility, customization, and innovation in processor design.",
      image: "/offer/image (10).png",
      link: "/courses/risc-v-architecture",
    },
  ];

  const testingTimingCourses: Course[] = [
    {
      id: 1,
      title: "RTL Design using Verilog HDL",
      description: "RTL Design using Verilog HDL involves modeling digital circuits at the Register Transfer Level, enabling synthesis, simulation, and implementation of hardware logic using Verilog hardware description language.",
      image: "/offer/RTL Design using Verilog HDL.png",
      link: "/courses/rtl-design-using-verilog-hdl",
    },
    {
      id: 2,
      title: "Design Stream (RTL, STA, Synthesis)",
      description: "Design Stream (RTL, STA, Synthesis) covers digital circuit development from RTL coding, logic synthesis, to Static Timing Analysis (STA), ensuring functional correctness and meeting timing requirements in chip design.",
      image: "/offer/Design-Stream.png",
      link: "/courses/design-stream-rtl-sta-synthesis-",
    },
    {
      id: 3,
      title: "Verification Stream (UVM, SV)",
      description: "Verification Stream (UVM, SV) focuses on verifying digital designs using SystemVerilog (SV) and Universal Verification Methodology (UVM) to build reusable, scalable, and coverage-driven verification environments.",
      image: "/offer/Verificatio.png",
      link: "/courses/verification-stream-uvm-sv-",
    },
  ];

  const renderCards = (courses: Course[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          className="relative rounded-xl text-left overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={400}
            className="w-full h-[400px] object-cover z-40"
          />
          <div className="absolute offer-sec-bg inset-0 p-5 flex flex-col justify-end text-white">
            <h3 className="text-xl font-normal mb-2">{course.title}</h3>
            <p className="text-base leading-tight	 mb-4 pr-4 max-w-sm">
              {course.description}{" "}
              <Link href={course.link} className="underline">
                Learn more
              </Link>
            </p>
            <Link href={course.link}>
              <div className="absolute w-[95px] h-[95px] rounded-full bg-blue-500 flex items-start -right-10 -bottom-10 justify-start hover:scale-105 transition-transform">
                <span className="mt-5 ml-5 text-white">→</span>
              </div>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Animated content wrapper variants
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="pt-11 md:pb-20 pb-10 background-we">
      <div className="container flex flex-col gap-6">
        <h2 className="text-3xl md:text-5xl font-normal text-center text-[#0B96F3]">
          What we Offer<span className="text-[#000000]">?</span>
        </h2>

        <Tabs
          defaultValue="domain"
          className="text-center"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="flex flex-wrap justify-center bg-[#EBF7FF] py-6 space-x-4 rounded-lg mx-auto max-w-5xl">
            <TabsTrigger
              value="domain"
              className="px-5 py-2 rounded-[5px] data-[state=active]:bg-[#0B96F3] bg-[#FFFFFF] data-[state=active]:text-white text-[#4F4F4F] transition-all"
            >
              VLSI Internship
            </TabsTrigger>
            <TabsTrigger
              value="rtl-design"
              className="px-5 py-2 rounded-[5px] data-[state=active]:bg-[#0B96F3] bg-[#FFFFFF] data-[state=active]:text-white text-[#4F4F4F] transition-all"
            >
              Job-Oriented Specialization 
              
              </TabsTrigger>
            <TabsTrigger
              value="rtl-verification"
              className="px-5 py-2 rounded-[5px] data-[state=active]:bg-[#0B96F3] bg-[#FFFFFF] data-[state=active]:text-white text-[#4F4F4F] transition-all"
            >
              Emerging Technology
            </TabsTrigger>
            <TabsTrigger
              value="testing-timing"
              className="px-5 py-2 rounded-[5px] data-[state=active]:bg-[#0B96F3] bg-[#FFFFFF] data-[state=active]:text-white text-[#4F4F4F] transition-all"
            >
              Online Courses
            </TabsTrigger>
          </TabsList>

          {/* AnimatePresence handles tab content animation on tab switch */}
          <AnimatePresence mode="wait" initial={false}>
            {activeTab === "domain" && (
              <TabsContent key="domain" value="domain" asChild>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {renderCards(domainCourses)}
                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 bg-[#0079C9] offer-sec text-white hover:bg-[#000717] px-6 py-2 mt-10 rounded-md transition-all"
                    >
                      View all Courses →
                    </Link>
                  </div>
                  <Image
                    src="/demoSession/abso.png"
                    alt="abso"
                    width={131}
                    height={131}
                    className="absolute bottom-[7%] left-[-4%] z-10"
                  />
                </motion.div>
              </TabsContent>
            )}

            {activeTab === "rtl-design" && (
              <TabsContent key="rtl-design" value="rtl-design" asChild>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {renderCards(rtlDesignCourses)}
                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 bg-[#0079C9] offer-sec text-white hover:bg-[#000717] px-6 py-2 mt-10 rounded-md transition-all"
                    >
                      View all Courses →
                    </Link>
                  </div>
                  <Image
                    src="/demoSession/abso.png"
                    alt="abso"
                    width={131}
                    height={131}
                    className="absolute bottom-[7%] left-[-4%] z-10"
                  />
                </motion.div>
              </TabsContent>
            )}

            {activeTab === "rtl-verification" && (
              <TabsContent key="rtl-verification" value="rtl-verification" asChild>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {renderCards(rtlVerificationCourses)}
                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 bg-[#0079C9] offer-sec text-white hover:bg-[#000717] px-6 py-2 mt-10 rounded-md transition-all"
                    >
                      View all Courses →
                    </Link>
                  </div>
                  <Image
                    src="/demoSession/abso.png"
                    alt="abso"
                    width={131}
                    height={131}
                    className="absolute bottom-[7%] left-[-4%] z-10"
                  />
                </motion.div>
              </TabsContent>
            )}

            {activeTab === "testing-timing" && (
              <TabsContent key="testing-timing" value="testing-timing" asChild>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  {renderCards(testingTimingCourses)}
                  <div className="text-center">
                    <Link
                      href="/courses"
                      className="inline-flex items-center gap-2 bg-[#0079C9] offer-sec text-white hover:bg-[#000717] px-6 py-2 mt-10 rounded-md transition-all"
                    >
                      View all Courses →
                    </Link>
                  </div>
                  <Image
                    src="/demoSession/abso.png"
                    alt="abso"
                    width={131}
                    height={131}
                    className="absolute bottom-[7%] left-[-4%] z-10"
                  />
                </motion.div>
              </TabsContent>
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default Offer;
