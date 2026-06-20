import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Khan',
      title: 'CEO, Tech Solutions Corp',
      content:
        'Sentinel Shield Security has transformed our corporate security. Their professionals are highly trained and the 24/7 monitoring gives us complete peace of mind.',
      rating: 5,
    },
    {
      name: 'Fatima Al-Mansouri',
      title: 'Property Manager, Oasis Residences',
      content:
        'The level of professionalism and responsiveness from Sentinel Shield is exceptional. Our residents feel safe and protected under their watch.',
      rating: 5,
    },
    {
      name: 'Mohammed Hassan',
      title: 'Operations Director, Apex Industries',
      content:
        'Outstanding industrial security solutions. The advanced technology combined with expert staff has significantly reduced security incidents at our facility.',
      rating: 5,
    },
    {
      name: 'Sarah Al-Dosari',
      title: 'Event Coordinator, Elite Events',
      content:
        'We\'ve worked with Sentinel Shield on multiple events. Their crowd management and security protocols are top-notch. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Khalid Al-Otaibi',
      title: 'General Manager, Royal Hotel',
      content:
        'Professional, discreet, and incredibly reliable. Sentinel Shield Security is our preferred partner for ensuring guest and property safety.',
      rating: 5,
    },
    {
      name: 'Noor Al-Shammari',
      title: 'Director, Business Park Management',
      content:
        'Exceptional service quality and rapid response times. Sentinel Shield has become an integral part of our security infrastructure.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Real testimonials from satisfied clients who trust us with their security.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-yellow-400 to-gold opacity-0 group-hover:opacity-5 smooth-transition rounded-lg blur-xl" />

              <div className="relative service-card p-8 rounded-lg border border-charcoal group-hover:border-gold smooth-transition card-hover">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-lg" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-charcoal pt-4">
                  <h4 className="font-bold text-white group-hover:text-gold smooth-transition">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
