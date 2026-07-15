'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  MessageCircle, Phone, MapPin, Stethoscope, ShoppingBag, Store,
  ShieldCheck, Star, Zap, Heart, ChevronRight, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '2348039144988';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20a%20pharmacist.`;
const WHATSAPP_BOOKING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Ciyal%20Pharmacy%2C%20I%20would%20like%20to%20book%20an%20appointment.`;
const MAPS_URL = 'https://www.google.com/maps/search/Ciyal+Pharmacy+%26+stores+chikakore+kubwa+abuja';
const PHONE = 'tel:+2348039144988';

/* ─── 1. Hero CTA Strip ──────────────────────────────────────────────── */
export const HeroCTAStrip: React.FC = () => {
  const items = [
    {
      icon: Stethoscope,
      title: 'Talk to a Pharmacist',
      desc: 'Get expert advice instantly',
      href: WHATSAPP_URL,
      external: true,
      accent: 'text-primary bg-primary/10',
    },
    {
      icon: ShoppingBag,
      title: 'Order Medicines',
      desc: 'Fast doorstep delivery',
      href: WHATSAPP_URL,
      external: true,
      accent: 'text-secondary bg-secondary/10',
    },
    {
      icon: Store,
      title: 'Visit Our Store',
      desc: 'Kubwa, Abuja — Open now',
      href: MAPS_URL,
      external: true,
      accent: 'text-accent bg-accent/10',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                whileHover={{ backgroundColor: '#F8FAFC' }}
                className="flex items-center gap-4 px-6 py-5 group cursor-pointer transition-colors duration-200"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${item.accent}`}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <div className="min-w-0">
                  <p className="font-manrope font-bold text-slate-900 text-sm group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary ml-auto shrink-0 transition-all duration-200 group-hover:translate-x-1" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 2. Post-Services Premium CTA Banner ────────────────────────────── */
export const ServicesCTABanner: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16"
  >
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-blue-700 to-blue-800 p-8 sm:p-12 text-white shadow-2xl shadow-primary/25">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl space-y-3 text-center md:text-left">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-200">Expert Guidance</span>
          <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl leading-tight">
            Need Professional Pharmaceutical Advice?
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Our licensed pharmacists are available to help you choose the right medication and answer your healthcare questions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-premium flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA56] text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-lg shadow-black/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </motion.a>
          <motion.a
            href={PHONE}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-premium flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-7 py-3.5 rounded-2xl text-sm backdrop-blur-sm transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </motion.a>
        </div>
      </div>
    </div>
  </motion.section>
);

/* ─── 3. Looking For Something Specific ─────────────────────────────── */
export const FindMedicineCTA: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16"
  >
    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-xl text-center md:text-left space-y-3">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
          <Zap className="h-3 w-3" /> Quick Sourcing
        </div>
        <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
          Looking for Something Specific?
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          If you can't find your medication online, contact us and we'll help you source it quickly and at the best price.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="btn-premium flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-md shadow-primary/15 transition-colors"
        >
          <ShoppingBag className="h-4 w-4" />
          Request Medicine
        </motion.a>
        <motion.a
          href={PHONE}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="btn-premium flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold px-7 py-3.5 rounded-2xl text-sm transition-colors"
        >
          <Stethoscope className="h-4 w-4 text-primary" />
          Speak to a Pharmacist
        </motion.a>
      </div>
    </div>
  </motion.section>
);

/* ─── 4. Trust CTA (After About/Founder section) ────────────────────── */
export const TrustCTA: React.FC = () => {
  const trustPoints = [
    { icon: ShieldCheck, text: 'NAFDAC Certified Medicines' },
    { icon: Star, text: 'Board-Licensed Pharmacists' },
    { icon: Heart, text: 'Patient-First Approach' },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16"
    >
      <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="space-y-5 text-center lg:text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Promise</span>
          <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
            Your Health Deserves Expert Care
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
            Visit our pharmacy for genuine medications, professional guidance, and friendly healthcare support that puts your wellbeing first.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-premium flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-2xl text-sm shadow-md shadow-primary/15 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Visit Our Pharmacy
            </motion.a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 w-full max-w-xs lg:max-w-sm">
          {trustPoints.map((tp, idx) => {
            const Icon = tp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4"
              >
                <div className="h-9 w-9 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="font-manrope font-semibold text-slate-800 text-sm">{tp.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

/* ─── 5. Pre-Footer Full-Width CTA ───────────────────────────────────── */
export const PreFooterCTA: React.FC = () => {
  const badges = [
    '✓ Licensed Pharmacists',
    '✓ Fast Response',
    '✓ Friendly Support',
  ];
  return (
    <div className="relative mt-0">
      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 block"
          aria-hidden="true"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#EFF6FF"
          />
        </svg>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-blue-50 py-16 sm:py-24"
      >
        {/* Subtle decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-primary/6 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block font-manrope">Always Here For You</span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              We're Here Whenever <br className="hidden sm:block" />You Need Us
            </h2>
            <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Whether you need medication, wellness products, or expert pharmaceutical advice, our team is ready to help you live healthier.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-premium w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA56] text-white font-bold px-8 py-4 rounded-2xl text-sm shadow-lg shadow-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with a Pharmacist
            </motion.a>
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-premium w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold px-8 py-4 rounded-2xl text-sm shadow-sm transition-colors"
            >
              <MapPin className="h-5 w-5 text-primary" />
              Get Directions
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
          >
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

/* ─── 6. Floating WhatsApp Button ────────────────────────────────────── */
export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-slate-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-slate-100 whitespace-nowrap"
          >
            💬 Need help? Chat with a Pharmacist
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-14 w-14 bg-[#25D366] hover:bg-[#20BA56] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="h-6 w-6 relative z-10" />
      </motion.a>
    </div>
  );
};

/* ─── 7. Mobile Sticky Bottom Bar ────────────────────────────────────── */
export const MobileStickyBar: React.FC = () => (
  <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
    <div className="flex items-stretch divide-x divide-slate-100">
      <a
        href={PHONE}
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-slate-700 hover:text-primary hover:bg-slate-50 active:bg-slate-100 transition-colors"
        aria-label="Call Us"
      >
        <Phone className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-[#25D366] text-white hover:bg-[#20BA56] active:bg-[#1DA851] transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
      </a>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-slate-700 hover:text-primary hover:bg-slate-50 active:bg-slate-100 transition-colors"
        aria-label="Directions"
      >
        <MapPin className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
      </a>
    </div>
  </div>
);
