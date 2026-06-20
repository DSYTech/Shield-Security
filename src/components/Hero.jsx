import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMouse({ x, y });
      }}
      className="relative w-full h-screen bg-gradient-to-br from-dark via-charcoal to-navy-light overflow-hidden flex items-center justify-center"
    >
      {/* Mouse parallax state */}
      {/* Animated Background Elements (reduced opacity and size for readability) */}
      <motion.div
        className="absolute top-12 left-10 w-48 h-48 bg-gold opacity-8 rounded-full blur-3xl hero-deco"
        style={{ transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)` }}
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 right-10 w-72 h-72 bg-navy opacity-6 rounded-full blur-3xl hero-deco"
        style={{ transform: `translate(${mouse.x * -40}px, ${mouse.y * -40}px)` }}
        animate={{ rotate: [0, -6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/images/shield.svg"
        alt="decor"
        className="absolute -right-12 top-1/3 w-32 opacity-8 hero-deco"
        style={{ transform: `translate(${mouse.x * -20}px, ${mouse.y * 12}px)` }}
      />

      {/* subtle extra parallax layer */}
      <motion.div
        className="absolute left-1/4 top-1/4 w-40 h-40 rounded-full bg-gold opacity-6 hero-deco"
        style={{ transform: `translate(${mouse.x * 14}px, ${mouse.y * 14}px)` }}
        animate={{ rotate: [0, 4, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* dark overlay to improve text contrast */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h1
          className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-heading-left">Protecting</span>{' '}
          <span className="hero-heading-gold" style={{ WebkitTextFillColor: 'transparent' }}>What Matters Most</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Advanced security solutions for businesses, industries, and residential
          communities. Trust in our expertise, experience, and commitment to your
          safety.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group cta-button flex items-center gap-3 btn-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Request Security Assessment
            <FaArrowRight className="group-hover:translate-x-2 smooth-transition" />
          </motion.button>

          <motion.button
            className="group border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-dark smooth-transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gold rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
