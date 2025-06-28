"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribeNewsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Subscribed successfully!");
        setEmail("");
      } else {
        alert(`❌ Error: ${result.error || "Subscription failed."}`);
      }
    } catch (err) {
      console.error("Subscription error:", err);
      alert("❌ Failed to subscribe.");
    }
    setSubmitting(false);
  };

  return (
    <footer className="bg-[#032035] text-white">
      <div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-[#D9D9D9]/20 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/">
              <Image src="/Skillfelixfooter.svg" alt="Logo" width={200} height={43} />
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-normal text-white mb-5">Subscribe to our Newsletter</h2>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full rounded-[2px] border border-gray-300 focus-within:border-[#0077cc] transition group"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email Address"
                className="w-full px-4 py-3 text-black rounded-l-md outline-none"
                required
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-white px-2 py-1 rounded-r-md"
              >
                <Image src="/send.svg" alt="Send" width={40} height={40} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-normal mb-5">Quick Links</h3>
          <ul className="space-y-4 text-base font-normal">
            <li><Link href="/">Home</Link></li>
            {/* <li><Link href="#">Explore</Link></li> */}
            {/* <li><Link href="#">Opportunities</Link></li> */}
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/career">Career</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-xl font-normal mb-5">Programs</h3>
          <ul className="space-y-4 text-base font-normal">
            <li><Link href="#">Free VLSI Courses</Link></li>
            <li><Link href="#">Internships/Jobs</Link></li>
            <li><Link href="#">Hire Talent</Link></li>
            <li><Link href="#">Workshops</Link></li>
            <li><Link href="#">Global Programs</Link></li>
            <li><Link href="#">Podcasts</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-normal mb-5">Contact Us</h3>
          <div className="space-y-4 text-base font-normal">
            <div className="flex gap-4 items-start">
              <Image src="/locata.svg" alt="Location" width={36} height={36} />
              <p>B03A H159 VDS BUILDING, Near BSI business park, Noida, Uttar Pradesh</p>
            </div>
            <a
              href="mailto:skillfelix026@gmail.com"
              className="flex gap-4 items-center hover:underline hover:text-blue-500"
            >
              <Image src="/email.svg" alt="Email" width={36} height={36} />
              <p>skillfelix026@gmail.com</p>
            </a>
            <a
              href="tel:+911204515954"
              className="flex gap-4 items-center hover:underline hover:text-blue-500"
            >
              <Image src="/calll.svg" alt="Phone" width={36} height={36} />
              <p>+91 1204515954</p>
            </a>
            <a
              href="https://www.skillfelix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center hover:underline hover:text-blue-500"
            >
              <Image src="/earthh.svg" alt="Website" width={36} height={36} />
              <p>www.skillfelix.com</p>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-normal mb-5">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/profile.php?id=61577333856710" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.svg" alt="facebook" width={36} height={36} />
            </Link>
            <Link href="https://www.instagram.com/skillfelix026/" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.svg" alt="insta" width={36} height={36} />
            </Link>
            <Link href="http://www.youtube.com/@SkillFelix" target="_blank" rel="noopener noreferrer">
              <Image src="/utube.svg" alt="utube" width={36} height={36} />
            </Link>
            <Link href="https://www.linkedin.com/company/107562900/admin/dashboard/" target="_blank" rel="noopener noreferrer">
              <Image src="/in.svg" alt="in" width={36} height={36} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0B96F305] text-center pt-6 pb-2 text-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Image src="/arm.png" alt="ARM Logo" width={51} height={30} />
              <span className="text-[18px] font-normal">ARM Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/rvc.png" alt="RISC-V Logo" width={30} height={30} />
              <span className="text-[18px] font-normal">RISC-V Program</span>
            </div>
          </div>
          <hr className="border-[#FFFFFF2B] px-16 mb-3" />
          <p className="text-[#FFFFFF8A] text-sm font-normal">
            &copy; 2025 Skillfelix. All Rights Reserved.
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
};

export default Footer;
