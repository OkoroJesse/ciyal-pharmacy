'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { mockProducts, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { 
  MessageCircle, Info, CheckCircle2, AlertCircle, ShoppingBag, 
  HelpCircle, ChevronRight, X, Heart, ShieldAlert 
} from 'lucide-react';

const WHATSAPP_NUMBER = '2349069184683';

export const FeaturedProducts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filters = ['All', 'Pain Relief', 'Baby Care', 'Wellness', 'Personal Care'];
  const ITEMS_PER_PAGE = 9;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const filteredProducts = activeFilter === 'All' 
    ? mockProducts 
    : mockProducts.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  const isAllFilter = activeFilter === 'All';
  const paginatedProducts = isAllFilter 
    ? filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE) 
    : filteredProducts;

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handleWhatsAppOrder = (product: Product) => {
    const text = encodeURIComponent(`Hello Ciyal Pharmacy, I would like to inquire about the availability of: ${product.name}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleGeneralWhatsApp = () => {
    const text = encodeURIComponent("Hello Ciyal Pharmacy, I am looking for a specific medicine or supplement not listed on your website.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-24 bg-bg-custom overflow-hidden">
      {/* Premium Floating Medical-themed Decorative SVGs */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15">
        {/* Heart / Plus SVG icon 1 */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-10 text-primary/30"
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
          </svg>
        </motion.div>
        
        {/* Heart / Plus SVG icon 2 */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 text-secondary/30"
        >
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* DNA Helix or Pill style SVG icon 3 */}
        <motion.div
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-12 text-accent/20"
        >
          <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 3h12c1.66 0 3 1.34 3 3v12c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3zm0 2c-.55 0-1 .45-1 1v5h14V6c0-.55-.45-1-1-1H6zm14 8H4v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-5z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Featured Health Essentials</span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Select Wellness & Medical Products
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Carefully selected healthcare products trusted by thousands of customers for everyday wellness and better health.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold font-manrope transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'text-white shadow-md shadow-primary/10' 
                    : 'text-slate-600 bg-white border border-slate-200 hover:border-slate-350 hover:bg-slate-50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {filter}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {paginatedProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                key={product.id}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between premium-shadow-hover relative group"
              >
                {/* Badge Overlay */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm ${
                      product.badge === 'Prescription Required'
                        ? 'bg-rose-50 text-rose-600 border border-rose-100'
                        : product.badge === 'Popular'
                        ? 'bg-amber-50 text-amber-600 border border-amber-100'
                        : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="h-48 bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden shrink-0 border-b border-slate-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/ciyal logo.png';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-manrope font-bold text-slate-800 text-sm sm:text-base leading-snug line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-sm font-semibold text-primary">
                      Chat for Availability
                    </span>
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="px-5 pb-5 pt-0 grid grid-cols-2 gap-2 border-t border-slate-50/50 pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    <Info className="h-3.5 w-3.5" />
                    <span>Learn More</span>
                  </button>
                  <button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20BA56] text-white font-bold py-2.5 rounded-xl text-xs transition-all duration-200 shadow-sm shadow-[#25D366]/10 cursor-pointer"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination UI - Only show on 'All' category if totalPages > 1 */}
        {isAllFilter && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-20">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 font-bold rounded-xl text-xs transition-colors cursor-pointer ${
                  currentPage === page
                    ? 'bg-primary text-white shadow-md shadow-primary/10'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Next
            </button>
          </div>
        )}

        {/* Centered CTA Help Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 text-center overflow-hidden border border-slate-200/80 bg-white/70 backdrop-blur-md shadow-lg shadow-slate-100/40"
        >
          {/* Decorative gradients */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex h-10 w-10 bg-primary/10 text-primary rounded-xl items-center justify-center shadow-sm">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h3 className="font-manrope font-extrabold text-xl sm:text-2xl text-slate-900 leading-tight">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Our clinical pharmacists can help you locate specific medications, custom formulations, supplements, and healthcare products not currently displayed.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <button
                onClick={handleGeneralWhatsApp}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA56] text-white font-bold px-6 py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/10 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat with a Pharmacist</span>
              </button>
              <Link
                href="/blog"
                className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold px-6 py-3.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Browse All Products</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Learn More Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="fixed inset-x-4 bottom-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-50 max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-manrope">
                  Product Details
                </span>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto p-6 space-y-6 flex-1">
                <div className="flex gap-4 items-start border-b border-slate-100 pb-5">
                  <div className="h-24 w-24 bg-slate-50 rounded-2xl flex items-center justify-center p-2 border border-slate-100 shrink-0">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="h-full object-contain mix-blend-multiply"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/ciyal logo.png';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-slate-900 text-lg leading-snug">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-1">
                      Chat for Availability
                    </p>
                    <span className={`inline-block text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider mt-2 border ${
                      selectedProduct.badge === 'Prescription Required'
                        ? 'bg-rose-50 text-rose-600 border-rose-100'
                        : selectedProduct.badge === 'Popular'
                        ? 'bg-amber-50 text-amber-600 border-amber-100'
                        : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                    }`}>
                      {selectedProduct.badge || 'In Stock'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-manrope">Description</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {selectedProduct.dosage && (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-manrope">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Recommended Dosage</span>
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {selectedProduct.dosage}
                      </p>
                    </div>
                  )}

                  {selectedProduct.warnings && (
                    <div className="bg-rose-50/30 p-4 rounded-2xl border border-rose-100/40">
                      <h4 className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-manrope">
                        <ShieldAlert className="h-4 w-4 text-rose-500" />
                        <span>Precautionary Warnings</span>
                      </h4>
                      <p className="text-rose-600/80 text-xs sm:text-sm leading-relaxed">
                        {selectedProduct.warnings}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-3 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Close Details
                </button>
                <button
                  onClick={() => {
                    handleWhatsAppOrder(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA56] text-white font-bold py-3 rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-sm shadow-[#25D366]/10 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
