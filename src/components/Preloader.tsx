'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const brandName = "Ciyal Pharmacy";

  useEffect(() => {
    // Show preloader for 2.6 seconds, then fade out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring' as const, damping: 12, stiffness: 200 },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -50,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center font-manrope selection:bg-none"
        >
          {/* Animated pulsing brand emblem */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.9, 1.05, 1], 
              opacity: 1,
              boxShadow: [
                "0 0 0 0px rgba(34, 197, 94, 0)",
                "0 0 0 15px rgba(34, 197, 94, 0.15)",
                "0 0 0 0px rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ 
              duration: 1.8, 
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 0.2
            }}
            className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-8 border border-white/10"
          >
            <span className="text-white text-2xl font-extrabold">C</span>
          </motion.div>

          {/* Typing brand text */}
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center font-extrabold text-2xl sm:text-3xl tracking-tight text-white"
          >
            {brandName.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={char === " " ? "w-2.5 sm:w-3" : index >= 5 ? "text-primary font-medium" : "text-white"}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Bottom security text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="absolute bottom-8 flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-slate-400 font-semibold"
          >
            <span>Fully Certified Medical Services</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
