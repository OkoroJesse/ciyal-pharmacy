'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldAlert, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const { setIsPrescriptionOpen } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending delay
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => setSent(false), 5000); // Clear after 5s
    }, 1500);
  };

  return (
    <div className="font-inter bg-bg-custom pb-20">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/20 to-bg-custom py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Get In Touch</span>
          <h1 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Contact Our Clinical Team
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about your prescription, dosage, or deliveries? Connect with our support team or clinical pharmacists today.
          </p>
        </div>
      </section>

      {/* Main Details and Form grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-manrope font-extrabold text-2xl text-slate-900 tracking-tight">
                Ciyal Support Desk
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We are committed to providing you with clear advice. Drop by in person, call our helpdesk, or fill out the inquiry form.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="flex items-start space-x-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="block font-manrope font-bold text-slate-800 text-sm">Pharmacy Location</span>
                  <span className="block text-slate-500 text-xs sm:text-sm">Chikakore Junction, Kubwa, Abuja, Nigeria</span>
                  <a
                    href="#location-map"
                    className="text-xs font-bold text-primary hover:underline inline-flex items-center pt-1"
                  >
                    <span>View Map Directions</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start space-x-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
                <div className="p-3 bg-secondary/10 text-secondary rounded-xl shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="block font-manrope font-bold text-slate-800 text-sm">Opening Hours</span>
                  <span className="block text-slate-500 text-xs sm:text-sm font-medium">Monday - Saturday: 8:00 AM - 10:00 PM</span>
                  <span className="block text-slate-400 text-xs">Sunday & Holidays: 10:00 AM - 6:00 PM</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start space-x-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
                <div className="p-3 bg-accent/15 text-primary rounded-xl shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="block font-manrope font-bold text-slate-800 text-sm">Direct Helpdesk</span>
                  <span className="block text-slate-500 text-xs sm:text-sm font-semibold">+234 803 914 4988</span>
                  <span className="block text-slate-400 text-xs">support@ciyalpharmacy.com</span>
                </div>
              </div>
            </div>

            {/* Emergency Caution */}
            <div className="p-5 bg-red-50/50 border border-red-100/50 rounded-2xl flex items-start space-x-3.5 shadow-sm">
              <ShieldAlert className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800 block mb-0.5">Emergency Medical Notice:</span>
                For severe medical emergencies, please call **911** or go to your nearest emergency department immediately. For urgent pharmacy questions after-hours, call: **+1 234 567 899**.
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="font-manrope font-bold text-lg text-slate-900">Send an Inquiry</h3>
              <p className="text-xs text-slate-500">Expect a clinical response in 1-2 business hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Contact Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 567 890"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Prescription Issue">Prescription Refilling</option>
                    <option value="Order Status">Delivery Tracking</option>
                    <option value="Pharmacist Call">Consultation Request</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message Description</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explain how our pharmacists can assist you today..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-primary/10"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Success Alert */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-secondary/10 border border-secondary/20 text-secondary-hover rounded-2xl flex items-center space-x-3 text-xs font-semibold"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>Inquiry Sent Successfully! A care officer will contact you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>
      </section>

      {/* 3. Real Google Maps embed */}
      <section id="location-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="space-y-2 mb-6">
          <h3 className="font-manrope font-extrabold text-xl text-slate-900">Find Us at Kubwa, Abuja</h3>
          <p className="text-slate-500 text-xs sm:text-sm">We are located at Chikakore Junction, Kubwa, Abuja, Nigeria. Easy access from the Kubwa Expressway.</p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-80 sm:h-[420px] w-full">
          <iframe
            title="Ciyal Pharmacy Location – Kubwa, Abuja"
            src="https://maps.google.com/maps?q=Chikakore+Junction,+Kubwa,+Abuja,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Quick directions card */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.google.com/maps/search/Chikakore+Junction,+Kubwa,+Abuja,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-md shadow-primary/15"
          >
            <MapPin className="h-4 w-4" />
            <span>Open in Google Maps</span>
          </a>
          <a
            href="https://waze.com/ul?q=Chikakore+Junction+Kubwa+Abuja"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Navigate with Waze</span>
          </a>
        </div>
      </section>

    </div>
  );
}
