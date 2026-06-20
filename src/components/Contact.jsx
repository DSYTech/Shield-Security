import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@sentinelshield.com',
      link: 'mailto:info@sentinelshield.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      value: '123 Security Avenue, Business District, City, Country',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gold-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Ready to discuss your security needs? Contact our team today for a
            professional consultation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center p-8 bg-dark rounded-lg border border-charcoal hover:border-gold smooth-transition card-hover"
            >
              <motion.div
                className="text-5xl text-gold mb-4 mx-auto w-fit"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <info.icon />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gold hover:text-yellow-400 smooth-transition"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-400">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto service-card p-8 rounded-lg border border-charcoal shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-bright border border-transparent focus:border-gold rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none smooth-transition"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-bright border border-transparent focus:border-gold rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none smooth-transition"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="input-bright border border-transparent focus:border-gold rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none smooth-transition"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="input-bright border border-transparent focus:border-gold rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none smooth-transition"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full input-bright border border-transparent focus:border-gold rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none smooth-transition"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full input-bright border border-transparent focus:border-gold rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none resize-none smooth-transition"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.button
              type="submit"
              className="w-full cta-button text-dark px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={submitted}
            >
              {submitted ? (
                <span>Message Sent! ✓</span>
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
