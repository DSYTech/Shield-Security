import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gold-gradient">Sentinel Shield</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-8" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 10 years of industry experience, Sentinel Shield Security has
              established itself as a trusted partner for comprehensive security
              solutions. Our mission is to provide unparalleled protection and peace of
              mind to businesses, industries, and communities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We combine cutting-edge technology with highly trained security
              professionals to deliver customized solutions that exceed expectations. Our
              commitment to excellence and innovation sets us apart in the security
              industry.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Sentinel Shield, we believe that security is not a luxury—it's a
              necessity. That's why we work tirelessly to ensure that every client
              receives the highest standard of protection 24/7.
            </p>
          </motion.div>

          {/* Right - Key Points */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {[
              {
                title: 'Our Mission',
                desc: 'To deliver world-class security solutions that protect assets, people, and businesses.',
              },
              {
                title: 'Our Vision',
                desc: 'To be the most trusted security partner in the region, known for innovation and reliability.',
              },
              {
                title: 'Our Values',
                desc: 'Integrity, professionalism, and unwavering commitment to our clients\' safety and success.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark bg-opacity-50 p-6 rounded-lg border-l-4 border-gold hover:bg-opacity-70 smooth-transition"
              >
                <h3 className="text-xl font-bold text-gold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
