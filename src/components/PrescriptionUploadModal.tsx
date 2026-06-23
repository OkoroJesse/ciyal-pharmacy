'use client';

import React, { useState, useRef } from 'react';
import { X, Upload, FileText, CheckCircle2, ShieldCheck, AlertCircle, Calendar } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const PrescriptionUploadModal: React.FC = () => {
  const { isPrescriptionOpen, setIsPrescriptionOpen } = useCart();
  const [step, setStep] = useState<'upload' | 'info' | 'success'>('upload');
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form info state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [prescriptionId, setPrescriptionId] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      const validFiles = droppedFiles.filter(
        (file) =>
          file.type === 'application/pdf' ||
          file.type.startsWith('image/jpeg') ||
          file.type.startsWith('image/png')
      );
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles = selectedFiles.filter(
        (file) =>
          file.type === 'application/pdf' ||
          file.type.startsWith('image/jpeg') ||
          file.type.startsWith('image/png')
      );
      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleNextStep = () => {
    if (files.length > 0) {
      setStep('info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate transmission delay
    setTimeout(() => {
      // Generate a random prescription tracking ID
      const randomId = `CY-${Math.floor(100000 + Math.random() * 900000)}`;
      setPrescriptionId(randomId);
      setLoading(false);
      setStep('success');
    }, 2000);
  };

  const resetModal = () => {
    setIsPrescriptionOpen(false);
    setTimeout(() => {
      setStep('upload');
      setFiles([]);
      setName('');
      setPhone('');
      setEmail('');
      setAddress('');
      setNotes('');
      setPrescriptionId('');
    }, 300);
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
            onClick={resetModal}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col font-inter max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
                <div>
                  <h3 className="font-manrope font-bold text-lg text-slate-900">Upload Prescription</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Secure, HIPPA-compliant medical transmission</p>
                </div>
                <button
                  onClick={resetModal}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6">
                {step === 'upload' ? (
                  /* STEP 1: Upload files */
                  <div className="space-y-6 animate-fade-up">
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={triggerFileInput}
                      className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                        dragActive
                          ? 'border-primary bg-primary/5 text-primary scale-[1.01]'
                          : 'border-slate-200 hover:border-primary/50 text-slate-500'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        multiple
                        accept=".pdf,image/png,image/jpeg"
                        onChange={handleFileChange}
                      />
                      <div className="p-4 bg-slate-50 rounded-2xl text-primary mb-4 shadow-sm border border-slate-100/50">
                        <Upload className="h-6 w-6" />
                      </div>
                      <span className="font-semibold text-slate-800 text-sm">
                        Drag & drop prescription files
                      </span>
                      <span className="text-xs text-slate-400 mt-1.5">
                        Accepts PDF, PNG, JPG (Max 10MB per file)
                      </span>
                      <button
                        type="button"
                        className="mt-4 px-4 py-2 border border-slate-200 hover:border-primary hover:text-primary rounded-xl text-xs font-bold text-slate-700 bg-white transition-all shadow-sm"
                      >
                        Browse Files
                      </button>
                    </div>

                    {/* Files list */}
                    {files.length > 0 && (
                      <div className="space-y-2.5">
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Selected Documents ({files.length})
                        </h4>
                        <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                          {files.map((file, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-55/30 text-slate-700"
                            >
                              <div className="flex items-center space-x-3 min-w-0">
                                <FileText className="h-5 w-5 text-primary shrink-0" />
                                <div className="truncate">
                                  <p className="text-sm font-medium truncate">{file.name}</p>
                                  <p className="text-[10px] text-slate-400">
                                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile(idx);
                                }}
                                className="text-slate-400 hover:text-red-500 p-1"
                                aria-label="Delete file"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Guidelines and safety callout */}
                    <div className="p-4 bg-blue-50/50 rounded-2xl flex items-start space-x-3 border border-blue-100/50">
                      <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-600 leading-relaxed">
                        <span className="font-bold text-slate-800 block mb-0.5">Dispensation Guidelines:</span>
                        Our licensed pharmacist must review all files. In compliance with local clinical laws, you must present the physical prescription copy to the delivery agent upon receipt.
                      </div>
                    </div>

                    <button
                      disabled={files.length === 0}
                      onClick={handleNextStep}
                      className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-colors text-white ${
                        files.length > 0
                          ? 'bg-primary hover:bg-primary-hover shadow-lg shadow-primary/10'
                          : 'bg-slate-200 cursor-not-allowed'
                      }`}
                    >
                      Continue to Details
                    </button>
                  </div>
                ) : step === 'info' ? (
                  /* STEP 2: Delivery & Contact info */
                  <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Patient Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Johnathan Doe"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Contact Phone</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 234 567 890"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Patient Email</label>
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
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Delivery Address</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street Address, Apt Number, City"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Notes for Pharmacist (Optional)</label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={2}
                        placeholder="Allergies, brand preferences, specific delivery instructions..."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-4 shrink-0">
                      <button
                        type="button"
                        onClick={() => setStep('upload')}
                        className="px-5 py-3.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-sm transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-primary/10"
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                            <span>Uploading securely...</span>
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="h-4 w-4" />
                            <span>Submit Prescription for Review</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  /* STEP 3: Success screen */
                  <div className="text-center py-6 px-4 space-y-6 animate-fade-up">
                    <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-manrope font-extrabold text-xl text-slate-900">Prescription Received</h4>
                      <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                        Excellent! Your files have been uploaded to our secure servers. A clinical pharmacist will review the order and contact you in **10–15 minutes** to confirm dispensation.
                      </p>
                    </div>

                    {/* Prescription Details Card */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 max-w-sm mx-auto text-left space-y-3">
                      <div className="flex justify-between items-center text-xs pb-2.5 border-b border-slate-200/50">
                        <span className="text-slate-400 font-medium">Tracking Reference</span>
                        <span className="font-bold text-slate-800 bg-white border border-slate-200/60 px-2 py-0.5 rounded-md font-mono">
                          {prescriptionId}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-medium">Patient Name</span>
                        <span className="font-semibold text-slate-700">{name}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-medium">Files Sent</span>
                        <span className="font-semibold text-slate-700">{files.length} document(s)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 font-medium">Estimated Review</span>
                        <span className="font-semibold text-secondary flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1" /> Today, ~15 mins
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={resetModal}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-slate-950/15"
                    >
                      Return to Website
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
