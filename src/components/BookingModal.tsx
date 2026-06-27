'use client';

import React, { useState } from 'react';
import { X, Calendar, MessageSquare, ShieldCheck, Clock, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const BookingModal: React.FC = () => {
  const { isBookingOpen, setIsBookingOpen } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Drug Consultation');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (8:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Compile booking details for WhatsApp
      const message = `Hello Ciyal Pharmacy, I would like to book a clinical appointment:\n\n` +
        `*Patient Name:* ${name}\n` +
        `*Phone Number:* ${phone}\n` +
        `*Service:* ${service}\n` +
        `*Preferred Date:* ${date}\n` +
        `*Time Slot:* ${timeSlot}\n` +
        `${notes ? `*Medical Notes:* ${notes}\n` : ''}\n` +
        `Please let me know if this slot is available. Thank you!`;

      const encodedText = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/2349069184683?text=${encodedText}`;

      // Open WhatsApp API
      window.open(whatsappUrl, '_blank');

      // Clear states & close modal
      setLoading(false);
      setIsBookingOpen(false);
      setName('');
      setPhone('');
      setService('Drug Consultation');
      setDate('');
      setTimeSlot('Morning (8:00 AM - 12:00 PM)');
      setNotes('');
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBookingOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col font-inter max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
                <div className="flex items-center space-x-2.5">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-manrope font-bold text-base text-slate-900">Book WhatsApp Consultation</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">Secure clinical appointment booking system</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
                
                {/* Patient Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Patient Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jonathan Doe"
                      className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-slate-700 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Contact Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 803 914 4988"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Service Required</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-primary transition-colors text-slate-700"
                  >
                    <option value="Drug Consultation">Drug Consultation & Side Effects</option>
                    <option value="Prescription Refill">Prescription Refill Coordination</option>
                    <option value="Blood Pressure Check">Blood Pressure Reading Slot</option>
                    <option value="Vaccination Appointment">Clinical Vaccine Appointment</option>
                    <option value="Health Screening">Cholesterol / Glucose Screening</option>
                    <option value="General Health Inquiry">General Wellness Consultation</option>
                  </select>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-slate-700"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Time Slot</label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-primary transition-colors text-slate-700"
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">Morning (8-12 AM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12-4 PM)</option>
                      <option value="Evening (4:00 PM - 8:00 PM)">Evening (4-8 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Medical Messages / Symptoms (Optional)</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Allergies, current symptoms, medication names..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Bottom Trigger Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#25D366] hover:bg-[#20BA56] text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-md shadow-[#25D366]/10"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        <span>Opening WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="h-4.5 w-4.5" />
                        <span>Confirm Booking on WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-1.5 text-[10px] text-slate-400 text-center pt-1 leading-none shrink-0">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  <span>Clinical consultation verified by licensed PharmD</span>
                </div>

              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
