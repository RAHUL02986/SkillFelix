"use client";
import React from "react";
import BlogCard from "@/components/About/BlogCard";

const blogPosts = [
  {
    slug: "soc-verification-methodologies",
    title: "SoC Verification Flow and Methodologies",
    date: "2022-12-12",
    author: "SIVAKUMAR P R",
    image: "/blog-b1.png",
    category: "SoC Verification",
  },
  {
    slug: "mqtt-iot-devices",
    title: "MQTT: Efficient Communication for IoT Devices",
    date: "2025-05-22",
    author: "MAVEN SILICON",
    image: "/blog-s1.png",
    category: "Embedded Systems",
  },
  {
    slug: "final-year-embedded-projects-2025",
    title: "Final Year Embedded System Projects 2025",
    date: "2025-05-20",
    author: "MAVEN SILICON",
    image: "/blog-s2.png",
    category: "Embedded Systems",
  },
  {
    slug: "understanding-coap",
    title: "Understanding CoAP: A Lightweight IoT Protocol",
    date: "2025-05-16",
    author: "MAVEN SILICON",
    image: "/blog-s3.png",
    category: "Embedded Systems",
  },
];

const BlogPost: React.FC = () => {
  const [featured, ...others] = blogPosts;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-5xl text-[#162726] text-center mb-10 leading-snug">
        Expertise to level up <span className="text-[#0B96F3]">your VLSI skills</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <BlogCard {...featured} featured />

        <div className="md:w-1/3 flex flex-col gap-6">
          {others.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
