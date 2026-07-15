'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Upload, ShoppingBag, ShieldCheck, Heart, Clock, ChevronRight, ChevronLeft, Star, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeroCTAStrip,
  ServicesCTABanner,
  FindMedicineCTA,
  TrustCTA,
  PreFooterCTA,
} from '@/components/CTASections';

export default function HomePage() {
  const { setIsPrescriptionOpen } = useCart();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'How does prescription delivery work?',
      a: 'Simply click "Upload Prescription" on our menu, input your contact information, and upload a clear photo or PDF of your doctor\'s prescription. Our clinical pharmacist will review the documents and contact you within 10-15 minutes to verify details and arrange express doorstep delivery.'
    },
    {
      q: 'Do you accept insurance?',
      a: 'Yes, we accept most major health insurance plans. During the prescription verification call, our billing team will collect your insurance details and apply eligible benefits to reduce your out-of-pocket costs.'
    },
    {
      q: 'How fast is your express delivery?',
      a: 'We offer same-day delivery for all local prescriptions. If your prescription is confirmed before 3:00 PM, you will receive your medication the same evening. All deliveries are made in temperature-controlled packages to guarantee safety.'
    },
    {
      q: 'Are all your medications licensed and certified?',
      a: 'Absolutely. Ciyal Pharmacy is fully licensed and regulated by the Pharmacy Council of Nigeria. All medications are sourced directly from FDA-approved manufacturers and certified distributors, maintaining strict temperature controls during transport and storage.'
    }
  ];

  const reviews = [
    {
      text: '"Uploading my blood pressure prescription took 30 seconds. Within 15 minutes, a pharmacist called to discuss coverage, and the medication arrived at my apartment that afternoon. Unbelievably fast!"',
      name: 'Emily Robinson',
      role: 'Verified Patient',
      rating: 5,
    },
    {
      text: '"As a senior with mobility issues, having temperature-controlled prescription delivery has been a lifesaver. The pharmacist consulted with me on drug interactions with complete patience."',
      name: 'Marcus Sterling',
      role: 'Verified Patient',
      rating: 5,
    },
    {
      text: '"I was worried about sourcing my diabetes medication reliably, but Ciyal Pharmacy has been consistently excellent. They called me proactively when my refill was due. Exceptional service!"',
      name: 'Adaeze Okafor',
      role: 'Regular Customer',
      rating: 5,
    },
    {
      text: '"The booking system on WhatsApp is super convenient. I booked a consultation in seconds and the pharmacist was incredibly knowledgeable. I recommend Ciyal to everyone in Kubwa."',
      name: 'Chukwuemeka Nwosu',
      role: 'Verified Patient',
      rating: 5,
    },
  ];

  const VISIBLE = 2; // how many cards shown at once on desktop

  const goNext = useCallback(() => {
    setDirection(1);
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const goPrev = () => {
    setDirection(-1);
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance every 40 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 40000);
    return () => clearInterval(timer);
  }, [goNext]);

  const stats = [
    { value: '5000+', label: 'Patients Served' },
    { value: '7000+', label: 'Prescriptions Filled' },
    { value: '5+', label: 'Medical Awards' }
  ];

  return (
    <div className="font-inter bg-bg-custom pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-900 text-white">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center space-x-1.5 bg-secondary/30 text-white border border-secondary/40 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Fully Licensed & Clinical Grade</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]"
              >
                Your Trusted Neighborhood <br className="hidden sm:inline" />
                <span className="text-[#38BDF8]">Pharmacy, Simplified.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-200 text-sm sm:text-base leading-relaxed"
              >
                Get certified medications, expert pharmacist advice, and same-day delivery. Upload your prescription online or visit us in Kubwa, Abuja, and we will handle the rest.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <button
                  onClick={() => setIsPrescriptionOpen(true)}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 shadow-xl shadow-primary/20 hover:scale-[1.02] flex items-center justify-center space-x-2 animate-pulse-slow"
                >
                  <Upload className="h-4 w-4" />
                  <span>Order Prescription Now</span>
                </button>
                <Link
                  href="/blog"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 shadow-sm flex items-center justify-center space-x-2 hover:scale-[1.02]"
                >
                  <ShoppingBag className="h-4 w-4 text-[#38BDF8]" />
                  <span>Read Our Blog</span>
                </Link>
              </motion.div>

              {/* Stats Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8 grid grid-cols-3 gap-4 text-left border-t border-white/10"
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="pl-4 border-l border-white/20">
                    <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-white leading-tight">
                      {stat.value}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-300 font-medium mt-1 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800"
              >
                <img 
                  src="/assets/hero-bg.jpg" 
                  alt="Ciyal Pharmacy Storefront" 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Hero CTA Strip */}
      <HeroCTAStrip />

      {/* 2. Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Pharmacy Excellence</span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Clinical Quality Meets Modern Trust
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We leverage advanced logistics and clinical pharmaceutical support to protect your wellness safely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-2xl space-y-5 premium-shadow-hover">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-manrope font-bold text-lg text-slate-800"> Medicines</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                All medications are sourced directly from authorized manufacturers with certified chemical compliance logs and storage records.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-2xl space-y-5 premium-shadow-hover">
              <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shadow-sm">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-manrope font-bold text-lg text-slate-800">Express Same-Day Delivery</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Orders are processed and transported locally in specialized medical cooling boxes, keeping sensitive biologicals completely stable.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-2xl space-y-5 premium-shadow-hover">
              <div className="h-12 w-12 bg-accent/10 text-primary rounded-xl flex items-center justify-center shadow-sm">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-manrope font-bold text-lg text-slate-800">Direct Pharmacist Support</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Talk directly with our licensed clinical staff for drug consultation, interactions, checkups, and general safety reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Services Premium CTA */}
      <ServicesCTABanner />

      {/* 2.5 Director / Founder Section */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/assets/founder.jpg"
                  alt="Pharm. Iyalla Audu Ali Chris"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Leadership</span>
              <div>
                <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  Pharm. Iyalla Audu Ali Chris
                </h2>
                <p className="text-sm font-bold text-primary mt-1">B.Pharm, FPCPharm, MSc Public Health</p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mt-1">Director, Ciyal Healthcare Ltd</p>
              </div>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Pharm. Iyalla Audu Ali Chris is a highly accomplished pharmacist, public health professional, and healthcare leader with over a decade of experience spanning community pharmacy, hospital pharmacy, pharmaceutical supply chain management, and health systems strengthening. As the Director of Ciyal Healthcare Ltd, he is committed to delivering high-quality, patient-centered healthcare services while promoting innovation, professionalism, and excellence in pharmaceutical practice.
                </p>
                <p>
                  A graduate of the University of Jos with a Bachelor of Pharmacy (B.Pharm) degree, he is a Fellow of the West African Postgraduate College of Pharmacists (FPCPharm) in Clinical Pharmacy and holds a Master of Science (MSc) in Public Health. His professional experience includes serving as Superintendent Pharmacist, Head of Pharmacy Department at some public and private Hospitals, and contributing to national pharmaceutical supply chain initiatives under the Federal Ministry of Health, Nigeria.
                </p>
                <p>
                  Beyond clinical practice, Pharm. Iyalla is an experienced administrator and healthcare advocate. He currently serves as Secretary of the Association of Community Pharmacists of Nigeria (ACPN), FCT Branch, where he provides strategic leadership, policy support, stakeholder engagement, and professional advocacy for the advancement of pharmacy practice.
                </p>
                <p>
                  At Ciyal Healthcare Ltd, his vision is to build a trusted healthcare organization that delivers quality pharmaceutical services, public health solutions, and healthcare consultancy while embracing global best practices, regulatory compliance, and continuous innovation. His leadership is driven by integrity, excellence, and a passion for improving health outcomes within Nigeria and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Medicine CTA */}
      <FindMedicineCTA />

      {/* 3. How It Works Flow */}
      <section className="py-20 bg-bg-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Refill Guide</span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Get Your Medicines In 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-md font-manrope font-extrabold text-lg text-primary">
                1
              </div>
              <h3 className="font-manrope font-bold text-base text-slate-800">Upload Prescription</h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[240px]">
                Click upload prescription to securely transmit a photo of your doctor\'s note in seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-md font-manrope font-extrabold text-lg text-primary">
                2
              </div>
              <h3 className="font-manrope font-bold text-base text-slate-800">Pharmacist Review</h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[240px]">
                A clinical specialist reviews the dosage, coordinates with your insurance, and calls you for confirmation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-md font-manrope font-extrabold text-lg text-primary">
                3
              </div>
              <h3 className="font-manrope font-bold text-base text-slate-800">Doorstep Delivery</h3>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[240px]">
                Our express courier delivers the medication in a sealed, temperature-regulated pack directly to your door.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Trust CTA after How It Works */}
      <TrustCTA />

      {/* 5. Clinical Testimonials */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left intro text */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">Patient Trust</span>
              <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                What Local Families Say About Ciyal
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Read clinical success stories and delivery testimonials from our community who rely on us for their chronic care plans.
              </p>
              
              {/* Overall trust rating */}
              <div className="pt-4 flex items-center space-x-3.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-extrabold text-slate-800">4.9 / 5.0 (1,200+ Reviews)</span>
              </div>
            </div>

            {/* Right: Auto-sliding review carousel */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden">
                {/* Slide window */}
                <div className="max-w-xl mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={reviewIndex}
                      initial={{ opacity: 0, x: direction * 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -direction * 40 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white border border-slate-100 p-8 rounded-2xl space-y-5 shadow-sm flex flex-col"
                    >
                      <div className="flex text-amber-500">
                        {[...Array(reviews[reviewIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm italic leading-relaxed flex-1">
                        {reviews[reviewIndex].text}
                      </p>
                      <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-800">{reviews[reviewIndex].name}</span>
                        <span className="text-xs text-slate-400">{reviews[reviewIndex].role}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation controls */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={goPrev}
                    className="h-9 w-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {/* Dot indicators */}
                  <div className="flex gap-2">
                    {reviews.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDirection(i > reviewIndex ? 1 : -1); setReviewIndex(i); }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === reviewIndex ? 'w-6 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to review ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={goNext}
                    className="h-9 w-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Accordion FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">FAQ Helpdesk</span>
            <h2 className="font-manrope font-extrabold text-3xl text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-manrope font-bold text-slate-800 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <span className="text-slate-400 ml-4 shrink-0 p-1 bg-white border border-slate-200/65 rounded-lg">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-slate-150' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 py-5 bg-white text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-0">
        <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-blue-800 -z-10" />
          {/* Decorative shapes */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Ready to Refill Your Active Prescription?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Upload your files now. Our expert clinical pharmacists are online and standing by to review your prescription requirements immediately.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsPrescriptionOpen(true)}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-2xl text-sm transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>Upload Medical Note</span>
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary-hover/50 hover:bg-primary-hover border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-sm transition-all duration-200 flex items-center justify-center"
              >
                Contact a Pharmacist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Full-Width CTA */}
      <PreFooterCTA />

    </div>
  );
}
