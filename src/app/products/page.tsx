import React from 'react';
import type { Metadata } from 'next';
import { FeaturedProducts } from '@/components/FeaturedProducts';

export const metadata: Metadata = {
  title: 'Featured Health Essentials | Ciyal Pharmacy',
  description: 'Explore our curated catalog of authentic healthcare items, wellness supplements, and personal care products trusted by professionals.',
};

export default function ProductsPage() {
  return (
    <div className="font-inter bg-bg-custom pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/20 to-bg-custom py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Health & Wellness</span>
          <h1 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Featured Health Essentials
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our curated catalog of authentic healthcare items, wellness supplements, and personal care products trusted by professionals.
          </p>
        </div>
      </section>

      {/* Featured Products Component */}
      <FeaturedProducts />
    </div>
  );
}
