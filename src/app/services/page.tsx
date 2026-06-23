'use client';

import React from 'react';
import { ShieldCheck, ArrowRight, HelpCircle, PhoneCall, Heart } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { useCart } from '@/context/CartContext';

export default function ServicesPage() {
  const { setIsPrescriptionOpen } = useCart();

  const servicesData = [
    {
      id: 's1',
      title: 'Prescription Refills',
      description: 'Upload your prescriptions directly online. Our clinical pharmacists will coordinate with your primary care doctors and prepare your refills automatically.',
      iconName: 'FileText',
      ctaText: 'Refill Prescription',
      onClick: () => setIsPrescriptionOpen(true)
    },
    {
      id: 's2',
      title: 'Home Delivery',
      description: 'Safe, temperature-controlled delivery of your critical medications directly to your doorstep. Free local shipping on all recurring medication plans.',
      iconName: 'Truck',
      ctaText: 'Arrange Delivery',
      onClick: () => setIsPrescriptionOpen(true)
    },
    {
      id: 's3',
      title: 'Health Consultations',
      description: 'Schedule a secure online video call or in-store consultation with our expert pharmacists to discuss your chronic disease management plans and dosages.',
      iconName: 'UserCheck',
      ctaText: 'Book Consultation',
      onClick: () => window.location.href = '/contact'
    },
    {
      id: 's4',
      title: 'Clinical Vaccinations',
      description: 'Walk in or book slots online to receive seasonal flu shots, travel immunizations, and shingles vaccines administered in-store by certified immunizers.',
      iconName: 'Syringe',
      ctaText: 'Schedule Vaccine',
      onClick: () => window.location.href = '/contact'
    },
    {
      id: 's5',
      title: 'Blood Pressure Checks',
      description: 'Free walk-in blood pressure tracking and cardiovascular health counseling. Get accurate clinical readings and advice on therapeutic lifestyle changes.',
      iconName: 'HeartPulse',
      ctaText: 'Walk In Today',
      onClick: () => window.location.href = '/contact'
    },
    {
      id: 's6',
      title: 'Health Screenings',
      description: 'Rapid health screening tests including blood glucose, cholesterol monitoring, and basic biometric screenings with immediate digital report sheets.',
      iconName: 'Activity',
      ctaText: 'Schedule Screening',
      onClick: () => window.location.href = '/contact'
    },
    {
      id: 's7',
      title: 'Medication Counseling',
      description: 'Review your complete list of medications (prescription & over-the-counter) with a pharmacist to identify duplicate therapies or potential interactions.',
      iconName: 'MessageSquare',
      ctaText: 'Request Counsel',
      onClick: () => window.location.href = '/contact'
    },
    {
      id: 's8',
      title: 'Insurance Support',
      description: 'Direct assistance with prior authorization claims, Medicare coordination, and health savings accounts (HSA/FSA) to optimize your medical benefits.',
      iconName: 'Shield',
      ctaText: 'Verify Insurance',
      onClick: () => window.location.href = '/contact'
    }
  ];

  return (
    <div className="font-inter bg-bg-custom pb-20">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/20 to-bg-custom py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Clinical Care</span>
          <h1 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Our Professional Health Services
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At Ciyal Pharmacy, we do more than dispense medications. We offer a full range of clinical care and support to manage your long-term wellness.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Insurance Trust Strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-20">
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-center space-y-4">
          <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto shadow-sm">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-manrope font-bold text-slate-800 text-lg">We Work Directly With Your Health Insurance</h3>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              We process co-pays directly with major national networks and local clinical insurance plans to help keep your medications affordable.
            </p>
          </div>
          <div className="pt-2 flex flex-wrap justify-center items-center gap-6 text-slate-400 font-manrope font-bold text-sm tracking-wider uppercase">
            <span className="opacity-60 hover:opacity-100 transition-opacity">Aetna</span>
            <span className="opacity-60 hover:opacity-100 transition-opacity">Cigna</span>
            <span className="opacity-60 hover:opacity-100 transition-opacity">UnitedHealth</span>
            <span className="opacity-60 hover:opacity-100 transition-opacity">Blue Cross</span>
            <span className="opacity-60 hover:opacity-100 transition-opacity">Medicare</span>
          </div>
        </div>
      </section>

    </div>
  );
}
