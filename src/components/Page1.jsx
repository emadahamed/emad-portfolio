

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Page1 = () => {
  return (
    <div>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex justify-between items-center">
          {/* Logo */}
          <img
            src="/logo (3).png"
            alt="EA Vertex Media Logo"
            className="h-8 sm:h-10 object-contain cursor-pointer"
          />

          {/* Links */}
          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Showreel</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-white/5 blur-3xl rounded-full top-20 left-0 sm:left-10"></div>
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-white/5 blur-3xl rounded-full bottom-10 right-0 sm:right-10"></div>

        <div className="relative z-10 max-w-4xl pt-16 sm:pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4 sm:mb-6">
            EA Vertex Media
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-400 mb-4 sm:mb-6">
            Modern Social Media Video Editor
          </p>

          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-10 leading-7 px-2">
            I specialize in creating scroll-stopping Reels, Shorts, and YouTube
            content that helps brands and creators stand out online.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a href="#portfolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
                View My Work
              </button>
            </a>

            <a href="#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                Hire Me
              </button>
            </a>
          </div>
        </div>

        {/* HERO CURVED FADE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24 sm:h-32 md:h-44"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="black" stopOpacity="0" />
                <stop offset="100%" stopColor="black" stopOpacity="1" />
              </linearGradient>
            </defs>

            <path
              d="M0,40 C480,120 960,120 1440,40 L1440,120 L0,120 Z"
              fill="url(#heroFade)"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden py-20 px-4 sm:px-6"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105"
          style={{ backgroundImage: "url('/about-bg.png')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* MIRRORED CURVE */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
          <svg
            className="relative block w-full h-24 sm:h-32 md:h-44"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="aboutFadeMirror" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="black" stopOpacity="0" />
                <stop offset="100%" stopColor="black" stopOpacity="1" />
              </linearGradient>
            </defs>

            <path
              d="M0,40 C480,120 960,120 1440,40 L1440,120 L0,120 Z"
              fill="url(#aboutFadeMirror)"
            />
          </svg>
        </div>

        {/* SMALL MIDDLE SOFT FADE */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-xl text-white"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h1>

            <p className="text-base sm:text-lg leading-relaxed mb-4">
              I'm Emad, the creative editor behind <br />
              <span className="font-semibold">EA Vertex Media.</span>
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4">
              I specialize in crafting modern, high-impact social media videos
              designed to{" "}
              <span className="font-semibold">
                capture attention instantly.
              </span>
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              From Reels and Shorts to YouTube content, I transform raw footage
              into engaging visual stories that connect with audiences and
              elevate brands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:max-w-[420px] md:ml-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-white"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              What I Specialize In
            </h2>

            <ul className="space-y-3 text-base sm:text-lg">
              <li>✓ Cinematic Social Media Edits</li>
              <li>✓ Reels & Shorts Optimization</li>
              <li>✓ YouTube Video Enhancement</li>
              <li>✓ Smooth Transitions & Effects</li>
              <li>✓ Trend-Based Editing Style</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section id="portfolio" className="bg-black text-white py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My Recent Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              A collection of cinematic edits, social media reels, and YouTube
              projects
            </p>
          </div>

          {/* VIDEO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Video 1 */}
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
              <video
                src="/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-3xl">▶</span>
              </div>
            </div>

            {/* Video 2 */}
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
              <video
                src="/video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-3xl">▶</span>
              </div>
            </div>

            {/* Video 3 */}
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
              <video
                src="/video3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-3xl">▶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="bg-gradient-to-b from-black to-gray-900 text-white py-20 sm:py-24 px-4 sm:px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 mb-10 text-sm sm:text-base max-w-2xl mx-auto">
          Ready to create scroll-stopping content? Let’s bring your vision to
          life.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=emadahamed2927@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Email
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-500 py-10 text-center border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
            EA Vertex Media
          </h3>

          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Modern Social Media Video Editing for Brands & Creators.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-6 text-xl sm:text-2xl">
            <a
              href="https://instagram.com/ea.vertexmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-125 hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-125 hover:text-blue-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/919895032927"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-125 hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-gray-600">
            © {new Date().getFullYear()} EA Vertex Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page1;