'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Truck, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 font-inter pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 mb-12 border-b border-slate-850">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-slate-800 text-secondary mt-0.5">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-manrope font-semibold text-white text-base">Fully Licensed Pharmacy</h4>
              <p className="text-sm text-slate-400 mt-1">100% certified medicines dispensed by licensed pharmacists.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-slate-800 text-accent mt-0.5">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-manrope font-semibold text-white text-base">Express Home Delivery</h4>
              <p className="text-sm text-slate-400 mt-1">Same-day delivery for local prescriptions, fully temperature-controlled.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-slate-800 text-yellow-500 mt-0.5">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-manrope font-semibold text-white text-base">5-Star Health Services</h4>
              <p className="text-sm text-slate-400 mt-1">Trusted by 10,000+ local families for clinical health support.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-12 w-12 bg-white rounded-xl p-1 flex items-center justify-center">
                <img src="/assets/logo.png" alt="Ciyal Pharmacy Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-manrope font-extrabold text-lg text-white tracking-tight">
                Ciyal<span className="text-primary font-medium">Pharmacy</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Redefining local healthcare by combining clinical excellence with modern convenience. Secure prescriptions, expert diagnostics, and fast delivery at your doorstep.
            </p>
            {/* Payment Badges Placeholder */}
            <div className="pt-2 flex items-center space-x-2">
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold block mb-1">We Accept:</span>
              <div className="flex items-center space-x-2 text-slate-400 text-xs">
                <span className="px-2 py-1 bg-slate-800 rounded font-bold">Visa</span>
                <span className="px-2 py-1 bg-slate-800 rounded font-bold">MC</span>
                <span className="px-2 py-1 bg-slate-800 rounded font-bold">Apple Pay</span>
                <span className="px-2 py-1 bg-slate-800 rounded font-bold">Insurance</span>
              </div>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-manrope font-semibold text-white text-sm uppercase tracking-wider mb-5">Quick Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">Health Blog</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Our Pharmacy</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact & Hours</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Contact */}
          <div>
            <h4 className="font-manrope font-semibold text-white text-sm uppercase tracking-wider mb-5">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Chikakore Junction, Kubwa,<br />Abuja, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+234 803 914 4988</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <span className="block font-medium text-slate-300">Mon - Sat: 8 AM - 10 PM</span>
                  <span className="block text-xs">Sunday: 10 AM - 6 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="space-y-4">
            <h4 className="font-manrope font-semibold text-white text-sm uppercase tracking-wider mb-2">Health Newsletter</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe to receive weekly wellness tips, pharmacy offers, and seasonal health guides.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 p-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors duration-250 flex items-center justify-center"
                aria-label="Submit"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-secondary font-medium animate-fade-up">
                Successfully subscribed! Check your inbox.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {currentYear} Ciyal Pharmacy. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">FDA Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
