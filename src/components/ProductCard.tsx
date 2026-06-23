'use client';

import React, { useState } from 'react';
import { ShoppingCart, Heart, ShieldAlert, Check } from 'lucide-react';
import { useCart, CartItem } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    availability: boolean;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col premium-shadow-hover hover:border-primary/20 relative group h-full font-inter"
    >
      {/* Category & Wishlist overlays */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-slate-900/5 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </span>
      </div>

      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/70 backdrop-blur-md border border-slate-100 text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm"
        aria-label="Add to Wishlist"
      >
        <Heart className={`h-4.5 w-4.5 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
      </button>

      {/* Image Area */}
      <div className="pt-8 pb-6 px-6 bg-slate-50/50 flex items-center justify-center h-48 overflow-hidden relative shrink-0">
        <div className="w-36 h-36 relative transition-transform duration-500 group-hover:scale-105">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/ciyal logo.png';
            }}
          />
        </div>
        
        {/* Availability Badge Overlay */}
        {!product.availability && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] flex items-center justify-center">
            <span className="flex items-center space-x-1 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <ShieldAlert className="h-4 w-4" />
              <span>Out of Stock</span>
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="font-manrope font-semibold text-slate-800 text-sm tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h4>
          <div className="flex items-center space-x-2 mt-2">
            <span className="font-manrope font-extrabold text-slate-900 text-lg">
              ${product.price.toFixed(2)}
            </span>
            {product.availability && (
              <span className="text-[10px] text-secondary font-bold flex items-center">
                <span className="h-1.5 w-1.5 bg-secondary rounded-full inline-block mr-1 animate-pulse" />
                In Stock
              </span>
            )}
          </div>
        </div>

        {/* Quick Add Action */}
        <div className="pt-4 mt-auto">
          {product.availability ? (
            <button
              onClick={handleAdd}
              disabled={isAdding}
              className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center space-x-1.5 ${
                isAdding
                  ? 'bg-secondary text-white'
                  : 'bg-primary hover:bg-primary-hover text-white shadow-sm shadow-primary/5 hover:shadow-primary/10'
              }`}
            >
              {isAdding ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>Quick Add</span>
                </>
              )}
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-slate-100 text-slate-400 py-2.5 rounded-xl font-semibold text-xs cursor-not-allowed text-center"
            >
              Unavailable
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
