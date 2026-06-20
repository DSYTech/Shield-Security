import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaClock,
  FaRobot,
  FaLightbulb,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaUsers,
      title: 'Trained Professionals',
      desc: 'Our team consists of highly trained and certified security experts with years of industry experience.',
    },
    {
      icon: FaClock,
      title: '24/7 Monitoring',
      desc: 'Round-the-clock surveillance and monitoring to ensure continuous protection of your assets.',
    },
    {
      icon: FaRobot,
      title: 'Advanced Technology',
      desc: 'State-of-the-art security systems and AI-powered surveillance for enhanced protection.',
    },
    {
      icon: FaLightbulb,
      title: 'Fast Response',
      desc: 'Quick response times and immediate action protocols to handle any security situation.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-gold-gradient">Choose Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            We're committed to delivering exceptional security services with
            reliability and professionalism.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6"
            >
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.12, rotate: 5 }}
                transition={{ duration: 0.08 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-transparent">
                  <reason.icon className="text-2xl" style={{ color: 'var(--gold)' }} />
                </div>
              </motion.div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats moved to unified Statistics component */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
