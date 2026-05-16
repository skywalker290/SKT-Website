"use client";

import { motion, AnimatePresence } from "framer-motion";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-surface-container-lowest">
              <div>
                <h3 className="text-2xl font-bold text-brand-charcoal font-headline">Get in Touch</h3>
                <p className="text-sm text-gray-500 mt-1">Leave your details and our concierge will contact you.</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-brand-charcoal transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Body */}
            <div className="p-8">
              <form 
                className="flex flex-col gap-6" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert("Enquiry Sent Successfully!"); 
                  onClose(); 
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-brand-charcoal" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-brand-charcoal" 
                    placeholder="+91 9412548777" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-brand-charcoal" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Your Requirements</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={3} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none text-brand-charcoal" 
                    placeholder="I'm looking for a premium tempo traveller for 3 days..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 mt-2 bg-brand-charcoal text-white font-bold rounded-xl hover:bg-brand-gold hover:text-brand-charcoal transition-all uppercase tracking-widest text-sm shadow-md active:scale-[0.98]"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
