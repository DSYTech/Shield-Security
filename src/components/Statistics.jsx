import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    { number: 10, suffix: '+', label: 'Years Experience' },
    { number: 500, suffix: '+', label: 'Clients Protected' },
    { number: 1000, suffix: '+', label: 'Security Personnel' },
    { number: 100, suffix: '%', label: '24/7 Support' },
  ];

  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [end]);

    return (
      <>
        {count}
        {suffix}
      </>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-yellow-400 to-gold opacity-0 group-hover:opacity-5 smooth-transition rounded-lg blur-xl" />

              <div className="relative text-center p-8 bg-dark rounded-lg border border-charcoal group-hover:border-gold smooth-transition hover:shadow-glow-lg">
                <motion.h3
                  className="text-5xl md:text-6xl font-bold text-gold mb-4"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  <Counter end={stat.number} suffix={stat.suffix} />
                </motion.h3>

                <p className="text-gray-400 text-lg font-semibold">{stat.label}</p>

                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-gold to-yellow-400 rounded-full w-0 group-hover:w-full smooth-transition mx-auto"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
