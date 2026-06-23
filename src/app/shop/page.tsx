'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, RefreshCw, Upload, Sparkles, Heart } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { mockProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS_PER_PAGE = 6;

export default function ShopPage() {
  const { setIsPrescriptionOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  // Dynamic Categories list extracted from mock data
  const categories = useMemo(() => {
    const list = new Set(mockProducts.map((p) => p.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    // 1. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 3. Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Reset pagination on filter change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination bounds
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('default');
    setCurrentPage(1);
  };

  return (
    <div className="font-inter bg-bg-custom min-h-screen pb-20">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/20 to-bg-custom py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block font-manrope">Store Directory</span>
          <h1 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Shop Healthcare & Pharmacy Products
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Order prescription refilling or browse our general health categories with fast temperature-controlled delivery.
          </p>
        </div>
      </section>

      {/* Filter and Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Filter Section (Desktop) */}
          <div className="lg:col-span-3 space-y-6 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm sticky top-28 hidden lg:block">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-manrope font-bold text-slate-800 text-sm flex items-center">
                <Filter className="h-4 w-4 mr-1.5 text-primary" /> Filters
              </span>
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-bold text-slate-400 hover:text-primary transition-colors flex items-center"
              >
                <RefreshCw className="h-3 w-3 mr-1" /> Reset
              </button>
            </div>

            {/* Category selection */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Health Categories</h4>
              <div className="flex flex-col space-y-1.5 pt-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-primary/5 text-primary font-bold pl-4 border-l-2 border-primary'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Prescription Banner */}
            <div className="bg-primary rounded-xl p-4 text-white text-center space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-blue-700 -z-10" />
              <Upload className="h-6 w-6 mx-auto opacity-90" />
              <h5 className="font-manrope font-bold text-xs">Need Prescription Medicines?</h5>
              <p className="text-[10px] text-blue-100 leading-relaxed">
                Upload your doctor's files online and we will contact you to verify details.
              </p>
              <button
                onClick={() => setIsPrescriptionOpen(true)}
                className="w-full bg-white hover:bg-slate-50 text-primary font-bold py-2 rounded-lg text-[10px] transition-colors"
              >
                Upload Medical Note
              </button>
            </div>
          </div>

          {/* Right Main Shop Content */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Bar Filter Inputs */}
            <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search medicines, vitamins, brands..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary focus:bg-white transition-all duration-200 text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Sorting & Category Selector (Mobile Mode) */}
              <div className="w-full md:w-auto flex items-center justify-end gap-3.5 shrink-0 self-stretch md:self-auto">
                <div className="flex lg:hidden items-center space-x-1 w-full md:w-auto">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full md:w-auto bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-xs text-slate-600 focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center space-x-1.5 shrink-0">
                  <ArrowUpDown className="h-4 w-4 text-slate-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-xs text-slate-600 focus:outline-none"
                  >
                    <option value="default">Default Sort</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Catalog Info Summary */}
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
              <span>
                Showing {filteredProducts.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0} -{' '}
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of{' '}
                {filteredProducts.length} results
              </span>
              {selectedCategory !== 'All' && (
                <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                  Category: {selectedCategory}
                </span>
              )}
            </div>

            {/* Product Cards Grid */}
            <AnimatePresence mode="popLayout">
              {filteredProducts.length === 0 ? (
                /* No Results page */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-slate-100 rounded-3xl py-20 px-4 text-center space-y-4"
                >
                  <Search className="h-12 w-12 text-slate-300 mx-auto" />
                  <h3 className="font-manrope font-bold text-slate-800 text-lg">No matches found</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                    We couldn't find any products matching your query. Check for spelling errors or clear filters to start again.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl transition-colors shadow-md shadow-primary/10"
                  >
                    Clear Search Filters
                  </button>
                </motion.div>
              ) : (
                /* Dynamic Cards Grid */
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {paginatedProducts.map((product) => (
                    <motion.div layout key={product.id}>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pt-8 flex items-center justify-center space-x-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((c) => Math.max(c - 1, 1))}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, idx) => {
                  const pNum = idx + 1;
                  return (
                    <button
                      key={pNum}
                      onClick={() => setCurrentPage(pNum)}
                      className={`h-9 w-9 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        currentPage === pNum
                          ? 'bg-primary text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {pNum}
                    </button>
                  );
                })}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((c) => Math.min(c + 1, totalPages))}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  Next
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
