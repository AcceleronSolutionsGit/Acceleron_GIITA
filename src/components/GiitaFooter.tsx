'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about-us' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Infrastructure', href: '/#infrastructure' },
  { label: 'Faculty', href: '/#faculty' },
  { label: 'Upcoming Programs', href: '/#upcoming-programs' },
  { label: 'Resources', href: '/resources' },
];

const GiitaFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (typeof window !== 'undefined') setIsVisible(window.pageYOffset > 300);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }
  }, [toggleVisibility]);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formsubmit.co/ajax/coordinator@gainwellacademy.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          _subject: 'New Contact Form Enquiry from GIITA Website!',
          _template: 'table',
          _captcha: 'false'
        }),
      });

      const data = await response.json();
      console.log('FormSubmit response:', data);

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: '', email: '', phone: '', program: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending your message.');
    }
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Back to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full p-3 shadow-lg bg-gradient-to-r from-[#F5872E] to-[#3A55A5] hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-[#08193C] via-[#0d2456] to-[#08193C] text-white py-4 md:py-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#3A55A5]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#F5872E]/10 blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              Contact Us
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
              Have a question or want to enrol in a program? Fill out the form or reach us directly — we&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Info + Map */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F5872E]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#F5872E]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      602, Godrej Waterside, 6th Floor Tower I<br />
                      Block DP, Sector V, Salt Lake City<br />
                      Kolkata – 700 091, West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3A55A5]/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#3A55A5] brightness-150" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+913366332000" className="text-sm text-slate-200 hover:text-[#F5872E] transition-colors">
                      +91 33353 46288
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#40A748]/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#40A748]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:coordinator@gainwellacademy.com" className="text-sm text-slate-200 hover:text-[#F5872E] transition-colors">
                      coordinator@gainwellacademy.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl relative">
                <iframe
                  title="GIITA Location Map"
                  src="https://maps.google.com/maps?q=22.574633636594896,88.43862781534331&amp;z=17&amp;output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-2 right-2 bg-slate-900/80 text-[10px] text-slate-300 px-2 py-0.5 rounded backdrop-blur-sm z-20">
                  <a
                    href="https://www.google.com/maps/search/?api=1&amp;query=22.574633636594896,88.43862781534331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    View Larger Map
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Send Us an Enquiry</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-[#40A748]/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-[#40A748]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                    <p className="text-slate-300 text-sm">Your enquiry has been received. We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* <input type="hidden" name="_next" value="https://yourwebsite.com/#contact" /> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5872E] focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5872E] focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Phone Number</label>
                        <input
                           type="tel"
                           name="phone"
                           value={form.phone}
                           onChange={(e) => {
                             const sanitized = e.target.value.replace(/[^0-9+]/g, '');
                             setForm(prev => ({ ...prev, phone: sanitized }));
                           }}
                           placeholder="+9198765 43210"
                           pattern="[0-9+]{7,15}"
                           maxLength={15}
                           className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5872E] focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Program of Interest</label>
                        <select
                          name="program"
                          value={form.program}
                          onChange={handleChange}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#F5872E] focus:border-transparent transition appearance-none"
                        >
                          <option value="" className="text-gray-900">Select a program</option>
                          <option value="technical" className="text-gray-900">Technical Programs</option>
                          <option value="leadership" className="text-gray-900">Leadership Programs</option>
                          <option value="softskill" className="text-gray-900">Soft Skill Programs</option>
                          <option value="behavioural" className="text-gray-900">Behavioural & Functional</option>
                          <option value="custom" className="text-gray-900">Custom / Corporate Program</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your training requirements..."
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F5872E] focus:border-transparent transition resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-gradient-to-r from-[#F5872E] to-[#3A55A5] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm tracking-wide"
                    >
                      Send Enquiry →
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050e1f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4">
              <Link href="/" className="inline-block">
                <Image
                  src={`${basePath}/gita-logo-hdr.png`}
                  alt="GIITA Logo"
                  width={120}
                  height={40}
                  className="h-16 w-auto brightness-0 invert"
                />
              </Link>
              <p className="font-bold text-white text-sm uppercase tracking-widest">A Division of MASS Associates</p>
              {/* <p className="text-sm text-slate-400 leading-relaxed max-w-xs mt-4">
                Gainwell Institute of Integrated Talent Advancement — empowering professionals through world-class training programs for the Gainwell Group.
              </p> */}
              {/* Social */}
              {/* <div className="flex gap-2 mt-5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 bg-white/10 hover:bg-[#F5872E] rounded-lg flex items-center justify-center transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} className="text-slate-300" />
                  </motion.a>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F5872E] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:pl-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="col-span-1 md:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F5872E] mb-4">Programs</h4>
              <ul className="space-y-2">
                {['Technical Programs', 'Leadership Programs', 'Soft Skill Programs', 'Behavioural & Functional'].map((p) => (
                  <li key={p}>
                    <Link
                      href="/#programs"
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:pl-1"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group logo column */}
            {/* <div className="col-span-2 sm:col-span-1 md:col-span-3">
              <p className="font-bold text-white text-sm uppercase tracking-widest mb-4">Part of The</p>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src={`${basePath}/group_logo.jpg`}
                  alt="GIITA Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
              </Link>
            </div> */}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">© {new Date().getFullYear()} GIITA. All Rights Reserved.</p>
            <div className="flex gap-4 text-xs text-slate-500">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              {/* <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GiitaFooter;
