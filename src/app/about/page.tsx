'use client';

import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Award, Users, HeartHandshake, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  
  const values = [
    {
      title: 'Empathy First',
      description: 'We listen to our patients with care, tailoring clinical solutions that respect their unique health pathways.',
      icon: Heart
    },
    {
      title: 'Clinical Accuracy',
      description: 'Every chemical composition and compound dosage is double-checked by certified pharmacists to protect your health.',
      icon: ShieldCheck
    },
    {
      title: 'Community Commitment',
      description: 'We serve as active wellness partners in our local neighborhood, conducting free screenings and education.',
      icon: HeartHandshake
    }
  ];

  const pharmacists = [
    {
      name: 'Dr. Sarah Jenkins, PharmD',
      role: 'Chief Clinical Pharmacist',
      specialty: 'Cardiovascular Care & Geriatrics',
      bio: 'Sarah has over 12 years of clinical experience managing complex drug therapies and leading community health initiatives.',
      image: '/assets/clinic-tablet-hands-doctor-patient-600nw-2472677039.webp'
    },
    {
      name: 'Dr. David Chen, PharmD',
      role: 'Medication Safety Officer',
      specialty: 'Pediatric Care & Drug Interactions',
      bio: 'David specializes in drug interaction analysis, helping patients manage polypharmacy conditions safely and effectively.',
      image: '/assets/clinic-tablet-hands-doctor-patient-600nw-2472677039.webp'
    },
    {
      name: 'Dr. Elena Rostova, PharmD',
      role: 'Patient Care Director',
      specialty: 'Diabetes Education & Nutrition',
      bio: 'Elena directs our clinical consultation programs and holds certifications in nutritional therapy and lifestyle counseling.',
      image: '/assets/clinic-tablet-hands-doctor-patient-600nw-2472677039.webp'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Pharmacy Founded',
      description: 'Opened our first physical clinic in the heart of Medicity, offering direct, patient-focused consultations.'
    },
    {
      year: '2020',
      title: 'Express Delivery Launch',
      description: 'Created our own dedicated local medical courier network to supply medications safely during accessibility lockdowns.'
    },
    {
      year: '2023',
      title: 'Clinical Care Expansion',
      description: 'Authorized by national medical boards to conduct point-of-care blood testing, vaccinations, and lipid screenings.'
    },
    {
      year: '2026',
      title: 'Digital Health Platform',
      description: 'Launched our modern web app to enable secure prescription uploads, online consultations, and express ordering.'
    }
  ];

  return (
    <div className="font-inter bg-bg-custom pb-20">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/20 to-bg-custom py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Our Heritage</span>
          <h1 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            About Ciyal Pharmacy
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Combining traditional community care values with modern digital innovation to make health management simple, safe, and convenient.
          </p>
        </div>
      </section>

      {/* 1. Our Story & Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Redefining the Future of Patient Care
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ciyal Pharmacy was founded on a simple premise: access to critical healthcare services should be simple, personal, and reliable. Over the years, we have transitioned from a traditional corner store to a comprehensive healthcare resource.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Today, our patients enjoy the security of fully certified medication dispensation alongside the speed of digital uploads and express delivery. We believe that clinical excellence should never sacrifice personal, empathetic human connections.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="space-y-1">
                <span className="block font-manrope font-extrabold text-2xl text-primary">10k+</span>
                <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Patients Served</span>
              </div>
              <div className="space-y-1">
                <span className="block font-manrope font-extrabold text-2xl text-primary">50k+</span>
                <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Prescriptions Filled</span>
              </div>
              <div className="space-y-1">
                <span className="block font-manrope font-extrabold text-2xl text-primary">15+</span>
                <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Medical Awards</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white">
              <img
                src="/assets/clinic-tablet-hands-doctor-patient-600nw-2472677039.webp"
                alt="Pharmacist explaining medication directions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 1.5 Founder Interview Video */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-8 space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Leadership Perspectives</span>
          <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            A Conversation with Our Director
          </h2>
        </div>
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl bg-slate-900 flex items-center justify-center border border-slate-200">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            poster="/assets/founder.jpg"
          >
            <source src="/assets/ciyal interview 2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* 2. Mission & Values */}
      <section className="py-20 bg-white border-y border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission & Vision Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-slate-100">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-manrope font-bold text-lg text-slate-900">Our Mission</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  To provide secure, accurate, and compassionate pharmacy services by merging advanced technological logistics with expert clinical counseling.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl shrink-0">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-manrope font-bold text-lg text-slate-900">Our Vision</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  To build a trusted healthcare organization that delivers quality pharmaceutical services, public health solutions, and healthcare consultancy while embracing global best practices, regulatory compliance, and continuous innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Row */}
          <div className="pt-16 space-y-12">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Our Philosophy</span>
              <h3 className="font-manrope font-bold text-2xl text-slate-900 mt-1">Values That Guide Our Practice</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <div className="h-10 w-10 bg-white border border-slate-200/80 rounded-lg flex items-center justify-center text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-manrope font-bold text-slate-800 text-base">{v.title}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Meet Our Pharmacists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Expert Advice</span>
          <h2 className="font-manrope font-extrabold text-3xl text-slate-900 tracking-tight">
            Meet Our Licensed Pharmacists
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our team of board-certified clinical pharmacists is always ready to guide you on safe medication therapeutic practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pharmacists.map((ph, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm premium-shadow-hover hover:border-primary/20 flex flex-col"
            >
              <div className="h-56 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={ph.image}
                  alt={ph.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <span className="bg-primary/5 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {ph.specialty}
                  </span>
                  <h4 className="font-manrope font-bold text-slate-900 text-base mt-2">{ph.name}</h4>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">{ph.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mt-3">{ph.bio}</p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 flex items-center space-x-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                  <span>Licensed PharmD & CPR Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Timeline Milestones */}
      <section className="py-20 bg-white border-t border-slate-100 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Our Progress</span>
            <h2 className="font-manrope font-extrabold text-3xl text-slate-900 tracking-tight mt-1">
              Milestones & Achievements
            </h2>
          </div>

          <div className="space-y-12 relative before:absolute before:left-4 before:sm:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-start relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline bullet */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-4 w-4 bg-primary border-4 border-white rounded-full shadow z-10 top-1" />

                  {/* Panel */}
                  <div className="w-full sm:w-[calc(50%-2rem)] ml-10 sm:ml-0 pl-2 sm:pl-0">
                    <div className={`p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 shadow-sm ${
                      isEven ? 'sm:text-right' : 'sm:text-left'
                    }`}>
                      <span className="font-manrope font-extrabold text-lg text-primary block leading-none">
                        {m.year}
                      </span>
                      <h4 className="font-manrope font-bold text-slate-800 text-sm sm:text-base leading-snug">
                        {m.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
