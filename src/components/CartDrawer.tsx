'use client';

import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartCount,
    clearCart,
  } = useCart();

  const [checkoutMode, setCheckoutMode] = useState<'options' | 'card' | 'success'>('options');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardName, setCardName] = useState('');

  const handleWhatsAppCheckout = () => {
    // Generate order summary for WhatsApp
    const orderItems = cart
      .map((item) => `- ${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');
    const message = `Hello Ciyal Pharmacy, I would like to place an order:\n\n${orderItems}\n\n*Total:* $${cartTotal.toFixed(2)}\n\nPlease advise on the next steps. Thank you!`;
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348039144988?text=${encodedText}`;
    
    // Open in new window
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsCartOpen(false);
  };

  const handleCardCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutMode('success');
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
      setCheckoutMode('options'); // Reset
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsCartOpen(false);
              setCheckoutMode('options');
            }}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col font-inter"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center space-x-2.5">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h3 className="font-manrope font-bold text-lg text-slate-900">Your Basket</h3>
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setCheckoutMode('options');
                }}
                className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-2">
                <ShoppingBag className="h-10 w-10" />
              </div>
              <div>
                <h4 className="font-manrope font-extrabold text-2xl text-slate-900 tracking-tight">Coming Soon!</h4>
                <p className="text-sm text-slate-500 mt-2 max-w-[260px] mx-auto leading-relaxed">
                  We are currently developing our online store checkout experience. Please check back later or order your prescriptions via WhatsApp!
                </p>
              </div>
              <div className="pt-4 w-full max-w-[260px]">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    // Open booking/whatsapp option if needed, but for now just close
                  }}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
