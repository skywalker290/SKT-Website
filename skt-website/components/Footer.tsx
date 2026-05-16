"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12 border-t-[6px] border-brand-gold relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Lead Capture */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block font-black text-2xl tracking-[0.15em] mb-8 group">
              SRI KELA <span className="text-brand-gold transition-colors duration-500 group-hover:text-white">TRAVELS</span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-8 font-medium">
              The golden standard for luxury tourism and premium fleet rentals across the Indian subcontinent since 1998.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <label className="text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em]">
                Join our private list
              </label>
              <div className="flex border border-white/10 rounded-xl overflow-hidden focus-within:border-brand-gold/50 transition-all duration-500 bg-white/5 backdrop-blur-sm">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent w-full px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-gray-600 font-medium"
                />
                <button type="submit" className="bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal px-4 font-bold text-[10px] uppercase tracking-widest transition-all duration-300">
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Curated Journeys */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Destinations</h4>
            <ul className="space-y-4 text-gray-400 text-[11px] font-medium">
              <li><Link href="#" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Agra Heritage Tours</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Rajasthan Royal Circuit</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Spiritual Varanasi</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Himalayan Escapes</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Bespoke Itineraries</Link></li>
            </ul>
          </div>

          {/* Column 3: Premium Fleet */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Our Fleet</h4>
            <ul className="space-y-4 text-gray-400 text-[11px] font-medium">
              <li><Link href="/search" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Maharaja Tempo</Link></li>
              <li><Link href="/search" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Luxury Tempo</Link></li>
              <li><Link href="/search" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Urbania Cruiser</Link></li>
              <li><Link href="/search" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Volvo Coaches</Link></li>
              <li><Link href="/search" className="hover:text-brand-gold transition-all duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></span>Executive Sedans</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Concierge */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Concierge</h4>
            <ul className="space-y-5 text-gray-400 text-[11px] font-medium">
              <li className="flex items-start gap-3 group/item">
                <span className="material-symbols-outlined text-brand-gold text-[18px] shrink-0">location_on</span>
                <span className="group-hover/item:text-white transition-colors leading-relaxed">Block-B-174, Baluganj,<br/>Agra, UP 282001</span>
              </li>
              <li className="flex items-center gap-3 group/item">
                <span className="material-symbols-outlined text-brand-gold text-[18px] shrink-0">call</span>
                <a href="tel:+919412548777" className="group-hover/item:text-white transition-colors">+91 94125 48777</a>
              </li>
              <li className="flex items-center gap-3 group/item">
                <span className="material-symbols-outlined text-brand-gold text-[18px] shrink-0">mail</span>
                <a href="mailto:enquiry@srikelatravels.com" className="group-hover/item:text-white transition-colors">enquiry@srikelatravels.com</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Location & Map */}
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-[10px]">Location</h4>
            <div className="rounded-xl overflow-hidden h-36 bg-white/5 relative group/map-container border border-white/10 shadow-2xl">
              <img 
                alt="Agra Map" 
                className="w-full h-full object-cover opacity-30 grayscale group-hover/map-container:opacity-50 group-hover/map-container:grayscale-0 group-hover/map-container:scale-110 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmsUnIeLwkre_DodcpzN8AcO9YS-M5ela0SwCDL8xNY5HgiZBTB3VKw7QvhhYgT3HYih8empMBp8Wa_dGeUH8b5CKkmkvtrhSxo4vE14-C8qFzZGUTf50t5OND8MkQT7dkCaJ3DuTeHn_IHAMhWvE6eY_JRuSWsLjrb7NEZ7RlROqM7dYbS986cwFK4qljRaLdzxOrvTbqEJsWW7iO5ryvDC4MJYNFKrkIYRN449jzoWhPf2sD5Dnsmqd4UKUmEbkjjMTM3m1aG9Y" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent opacity-60" />
              <a
                href="https://maps.app.goo.gl/USYgczLM1N3pd5SB8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center group/map gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-charcoal shadow-xl group-hover/map:scale-110 transition-all duration-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                </div>
                <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full font-bold text-[8px] uppercase tracking-widest text-white shadow-sm group-hover/map:bg-brand-gold group-hover/map:text-brand-charcoal transition-all duration-500">
                  Open Maps
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs font-medium tracking-wide">
            © {currentYear} Sri Kela Travels. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-8 text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              className="ml-4 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-500 shadow-xl shadow-black/20"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
