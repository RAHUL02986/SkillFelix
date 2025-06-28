  "use client";
  import React, { useEffect, useRef } from "react";
  import Image from "next/image";

  export default function Varification() {
    const refUse = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      const container = refUse.current;
      if (!container) return;

      const ulList = container.querySelector("ul") as HTMLUListElement | null;
      if (!ulList) return;

      ulList.innerHTML += ulList.innerHTML;

      let scrollTop = 0;
      const scrollPX = 1;
      const scrollSpeed = 10;

      const startScroll = () => {
        intervalRef.current = setInterval(() => {
          scrollTop += scrollPX;
          if (scrollTop > ulList.scrollHeight / 2) {
            scrollTop = 0;
          }
          container.scrollTop = scrollTop;
        }, scrollSpeed);
      };

      const stopScroll = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };

      startScroll();

      container.addEventListener("mouseenter", stopScroll);
      container.addEventListener("mouseleave", startScroll);

      return () => {
        stopScroll();
        container.removeEventListener("mouseenter", stopScroll);
        container.removeEventListener("mouseleave", startScroll);
      };
    }, []);

    const jobRolesArray = [
      { id: 1, title: "SOC Verification Engineer", img: "/companies_varify/scrollimg1.jpg" },
      { id: 2, title: "DFT Specialist", img: "/companies_varify/scrollimg2.jpg" },
      { id: 3, title: "IP Verification Engineer", img: "/companies_varify/scrollimg3.jpg" },
      { id: 4, title: "DFT Engineer", img: "/companies_varify/scrollimg4.jpg" },
      { id: 5, title: "Design and Verification Engineer", img: "/companies_varify/scrollimg5.jpg" },
      { id: 6, title: "Application Engineer", img: "/companies_varify/scrollimg6.jpg" },
      { id: 7, title: "FPGA Design Engineer", img: "/companies_varify/scrollimg7.jpg" },
    ];

    return (
      <div className="py-10 md:py-16 md:px-5 px-2 ">
        <div className="container mx-auto p-0 text-black">
          <h2 className="text-3xl md:text-5xl font-normal text-center py-4 md:py-8 text-black">
            Companies  <span className="text-[#0B96F3]">you can go</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 py-2 md:py-8 gap-10 items-stretch">
            <div>
              <Image
                src="/companies_varify/halfgirl.jpg"
                alt="Half Girl"
                width={550}
                height={780}
                className="rounded-xl md:h-[780px] w-full shadow-[0_0_20px_rgba(0,0,0,0.3)] object-cover"
              />
            </div>

            <div className="flex flex-col h-[780px]">
              <div className="text-black">
                <h3 className="text-3xl  leading md:leading-[45px] text-center md:text-left">
                  Best-in-Industry Job Roles After SkillFelix Course Completion
                </h3>
              </div>

              <div className="overflow-hidden mt-8" ref={refUse}>
                <ul className="list">
                  {jobRolesArray.map((item) => (
                    <li key={item.id} className="border-[#0B96F3]">
                      <div className="flex items-center rounded border-[#0B96F3] border-1 bg-white p-2 my-3 md:my-4">
                        <Image
                          src={item.img}
                          alt="Half Girl"
                          width={70}
                          height={70}
                        />
                        <h6 className="text-base md:text-lg mx-5">{item.title}</h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
