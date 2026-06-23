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
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {checkoutMode === 'success' ? (
                /* Success screen */
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 px-4 animate-fade-up">
                  <div className="w-16 h-16 bg-secondary/15 text-secondary rounded-full flex items-center justify-center">
                    <ShieldCheck className="h-10 w-10" />
                  </div>
                  <h4 className="font-manrope font-extrabold text-xl text-slate-900">Payment Confirmed</h4>
                  <p className="text-sm text-slate-500 max-w-xs">
                    Your prescription and order details have been securely transmitted to our pharmacists. Your medicine is being prepared!
                  </p>
                  <span className="text-xs text-slate-400 italic">This window will close in 3 seconds...</span>
                </div>
              ) : checkoutMode === 'card' ? (
                /* Card Checkout form */
                <div className="py-4 space-y-5 animate-fade-up">
                  <button
                    onClick={() => setCheckoutMode('options')}
                    className="text-xs font-semibold text-primary hover:underline flex items-center"
                  >
                    &larr; Back to checkout options
                  </button>
                  <h4 className="font-manrope font-bold text-base text-slate-900">Enter Payment Details</h4>
                  
                  <form onSubmit={handleCardCheckout} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Cardholder Name</label>
                      <input
                        type="text"
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Card Number</label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                        placeholder="4242 4242 4242 4242"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Expiration Date</label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">CVC / CVV</label>
                        <input
                          type="password"
                          required
                          maxLength={3}
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ''))}
                          placeholder="123"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-primary/15"
                      >
                        <ShieldCheck className="h-4 w-4" />
                        <span>Pay ${cartTotal.toFixed(2)} Securely</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : cart.length === 0 ? (
                /* Empty Cart screen */
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-manrope font-bold text-base text-slate-900">Your basket is empty</h4>
                    <p className="text-sm text-slate-500 mt-1 max-w-[240px] mx-auto">
                      Explore our medicine categories and add required products to your cart.
                    </p>
                  </div>
                </div>
              ) : (
                /* Cart Items List */
                <div className="space-y-4 py-2">
                  {cart.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      className="flex items-center space-x-4 border border-slate-100 rounded-xl p-3 bg-white"
                    >
                      <div className="h-16 w-16 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100/50 p-1">
                        {/* Render localized file assets, or fallback icons */}
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain mix-blend-multiply"
                            onError={(e) => {
                              // If image fails to load, replace it with standard placeholder
                              (e.target as HTMLImageElement).src = '/assets/ciyal logo.png';
                            }}
                          />
                        ) : (
                          <ShoppingBag className="h-6 w-6 text-slate-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">
                          {item.category}
                        </span>
                        <h5 className="text-sm font-semibold text-slate-800 truncate leading-snug">
                          {item.name}
                        </h5>
                        <p className="text-sm font-bold text-primary mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden shrink-0">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-slate-50 text-slate-500 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-slate-800 min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-slate-50 text-slate-500 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        {/* Delete button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Checkout Summary (Only if cart not empty and in options mode) */}
            {cart.length > 0 && checkoutMode === 'options' && (
              <div className="border-t border-slate-100 px-6 py-5 bg-slate-50/50 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Medicines Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Pharmacy Dispensation Fee</span>
                    <span className="text-secondary font-medium">FREE</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Temperature-Controlled Delivery</span>
                    <span className="text-secondary font-medium">FREE</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-200/60 pt-3">
                    <span className="font-manrope font-bold text-slate-800 text-base">Estimated Total</span>
                    <span className="font-manrope font-extrabold text-primary text-xl">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col space-y-3">
                  {/* WhatsApp Express Checkout */}
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-[#25D366] hover:bg-[#20BA56] text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-md shadow-[#25D366]/10"
                  >
                    <span>Express Order via WhatsApp</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {/* Standard Secure Card checkout option */}
                  <button
                    onClick={() => setCheckoutMode('card')}
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 border border-primary/20"
                  >
                    <CreditCard className="h-4 w-4" />
                    <span>Pay with Credit/Debit Card</span>
                  </button>

                  <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400 text-center pt-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                    <span>Secure Stripe-grade SSL encrypted checkout</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
