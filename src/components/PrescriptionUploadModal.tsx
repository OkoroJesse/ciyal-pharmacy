'use client';

import React from 'react';
import { X, FileText, AlertCircle, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const PrescriptionUploadModal: React.FC = () => {
  const { isPrescriptionOpen, setIsPrescriptionOpen } = useCart();

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent("Hello Ciyal Pharmacy, I would like to send my prescription for review.");
    window.open(`https://wa.me/2348039144988?text=${text}`, '_blank');
    setIsPrescriptionOpen(false);
  };

  return (
    <AnimatePresence>
      {isPrescriptionOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPrescriptionOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col font-inter"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h3 className="font-manrope font-bold text-lg text-slate-900">Send Prescription</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Secure, HIPPA-compliant medical transmission</p>
                </div>
                <button
                  onClick={() => setIsPrescriptionOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm border border-green-200">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h4 className="font-manrope font-extrabold text-xl text-slate-900">Send via WhatsApp</h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                    To ensure fast and secure processing, we accept prescriptions directly via our official WhatsApp line. 
                  </p>
                </div>

                <div className="p-4 bg-blue-50/50 rounded-2xl flex items-start space-x-3 border border-blue-100/50">
                  <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800 block mb-0.5">How it works:</span>
                    Click the button below to open a chat with our clinical pharmacist. You can easily attach a photo or PDF of your doctor's note directly in the WhatsApp chat.
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#25D366]/20"
                >
                  <Phone className="h-5 w-5" />
                  <span>Continue to WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
