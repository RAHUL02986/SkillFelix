"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonial = () => {
  const reviews = [
    {
      name: "Abhay",
      image: "/companies_varify/profile-icon.webp",
      position: "Physical Design Engineer, Noida",
      text: `"After working in a different domain for over a year, I wasnt sure if I could transition into VLSI. SkillFelix made it possible. The trainers explained every concept from scratch, with a focus on real-time tools. Today, Im confidently working in Physical Design.This training truly changed my path."`,
    },
    {
      name: "Shaktanshi ",
      image: "/companies_varify/profile-icon.webp",
      position: "Graduate Engineer Trainee, Bangalore",
      text: `"As a fresher, I had the knowledge but no industry exposure. SkillFelix filled that gap with practical projects, tool-based sessions, and soft-skill support. I was placed right after completing the program. I'm proud to say SkillFelix laid the foundation for my VLSI career."`,
    },
    {
      name: "Sumit Singh ",
      image: "/companies_varify/profile-icon.webp",
      position: "STA Engineer, Hyderabad",
      text: `"SkillFelix STA module was exactly what I needed. The detailed explanation of timing concepts, corner analysis, and report debugging gave me deep confidence. The trainers are highly experienced and approachable. I cleared my STA interview in the very first attempt!"`,
    },
    {
      name: "Kartik Kumar ",
      image: "/companies_varify/profile-icon.webp",
      position: "ASIC Design Trainee, Chennai",
      text: `"I always had a passion for chip design, but didnt know where to begin. SkillFelix not only gave me technical skills but also helped me build the mindset of a true engineer. The mock interviews and constant mentoring made a big difference. Im grateful for this journey."`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: () => (
      <div className="custom-dott testi_dott md:my-16 my-4">
      </div>
    ),
    dotsClass: "slick-dotss custom-dotss",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[url('/secbg.png')] bg-cover bg-center w-full overflow-hidden px-4 md:px-0">
      <h2 className="text-3xl md:text-5xl font-normal text-center text-white md:py-16 py-10">
        Review From Top Recruiters
      </h2>

      <Slider {...settings} className="max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="px-2">
            <div className="p-4 md:p-8 rounded-xl backdrop-blur-[64px] custom_border_all h-full flex flex-col gap-4">
              <div className="mb-4 md:pr-12 pr-0">
                <p className="text-white md:text-lg text-base font-normal">
                  {review.text}
                </p>
              </div>
              <hr className="border border-[#E0E5EB1A]" />
              <div className="flex gap-3 mt-4 items-center">
                <Image
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full"
                  width={80}
                  height={80}
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-normal text-white">{review.name}</h3>
                  <h4 className="text-sm font-normal text-white">{review.position}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
