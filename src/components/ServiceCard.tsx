'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    iconName: string; // Lucide icon name, e.g., 'HeartPulse'
    ctaText: string;
    onClick: () => void;
  };
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically resolve icon from lucide-react name
  const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-slate-100 p-6 rounded-2xl premium-shadow-hover hover:border-primary/20 flex flex-col justify-between h-full font-inter group"
    >
      <div>
        {/* Dynamic Icon */}
        <div className="h-12 w-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm shadow-primary/5">
          <IconComponent className="h-6 w-6" />
        </div>

        {/* Text Details */}
        <h4 className="font-manrope font-bold text-slate-800 text-lg tracking-tight mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Interactive CTA */}
      <div className="pt-6">
        <button
          onClick={service.onClick}
          className="text-primary hover:text-primary-hover font-semibold text-sm flex items-center transition-colors group/btn"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
