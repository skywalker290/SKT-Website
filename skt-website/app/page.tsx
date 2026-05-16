import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import Hero from "../components/Hero";
import FeaturedTours from "../components/FeaturedTours";
import PremiumServices from "../components/PremiumServices";
import FleetMarquee from "../components/FleetMarquee";
import TestimonialMarquee from "../components/TestimonialMarquee";
export default function Home() {
  return (
    <main className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">

      <Navbar />
      <Hero />
      <FeaturedTours />



      {/* Separated Sections for better breathing room */}
      <FleetMarquee />
      <TestimonialMarquee />

      {/* The Dark Mode Breaker - Cinematic Premium Services */}
      <PremiumServices />


      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-on-surface">Trending Destinations</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Explore the most sought-after experiences in the heart of the Indian subcontinent.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 group relative rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer">
              <img alt="Agra Heritage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx-7gZFVh4Q9P94nuT9G43Rpp3kG9S3X_fNocZRLG5VFT4Ae_cWj28Jg6-A0SNl8B8tWfQFNuZQ_Hsp9wZ5IQB_4QLTC_fMxIL8-CrAesKQerTAPfakuc_9jdUFTDKvibGuTWxworQ5WRY2cTQdzSsKoeknIDtLfddXWx3sYAz0woqeaKRHoFFc5QrDxtMo6KRhw-JVI6ZbhVhUFYh_xyybVZdui4Int0oDPusiVJNIM_4_nfg9RRnRADaOoMJqE5DTHKxYjf0hrk" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">BEST SELLER</span>
                <h3 className="text-white font-headline text-3xl font-bold mb-2">Agra Heritage Tour</h3>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">3 Days • Historical Journey</p>
                  <p className="text-white font-bold text-xl">From ₹12,500</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 group relative rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer">
              <img alt="Rajasthan Royal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlftMQteskIl6Dpp4DejiJHoF2dgI4wppxFBf8qdT7tSTuWo3shtz_02yhRJGFZ0aoZMi0Ksr5xl6pJWw9oCcM-dCeyxNxSzvfMng-OhBcm6GCZ3vr4AudxcLxYN3T5i9CVHTAC57yX1Nf1gdYzv0cdHA_CSfMYXuSa_TLwOdLaFa8LZpTiJ7KQX9v07LcGkYlcHQKr7MpGiKuAHHmDXBXTq4QCzWWdh8MLnVeC4AbhbHtQRJM6V9ZbWDYEE7CjrzXZ4Y-wMAVlQc" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-headline text-xl font-bold mb-1">Rajasthan Royal Circuit</h3>
                <p className="text-white/80 text-sm mb-4">7 Days • Luxury Heritage</p>
                <p className="text-secondary-container font-bold">From ₹45,000</p>
              </div>
            </div>
            <div className="md:col-span-4 group relative rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer">
              <img alt="Himalayan Escapes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpH0VsorYZ0iTzoV8tLCnOpKc4oY3lHXL2oorlsEWy3D3_4A7we4OLaaKh1D7LizUGd7x6SRPJSqwUfC_G5UAnB1gRjRp4gTMCBG8YLMw8x3C3bMNTIec8y6FYcC6UkcYM192zsfai0-iFs3lQzWlat_FTGa63YQ0IHIU_zfKUbVO2pYBMIJQqV3ReZdjeGTcdOMDlxcHP9_3RoHePoEMXqqCute7x4kMr4sSmfAihQ0WUfP3jre1-pJtbgWte55FryoeMC7K6aEM" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-headline text-xl font-bold mb-1">Himalayan Escapes</h3>
                <p className="text-white/80 text-sm mb-4">5 Days • Nature &amp; Peace</p>
                <p className="text-secondary-container font-bold">From ₹32,000</p>
              </div>
            </div>
            <div className="md:col-span-8 group relative rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer">
              <img alt="Spiritual India" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjC0yTTKLPxHuvzKyj4ZWFxBUF_hdIFONvpMFGw-_OrnDdHHphtCwoEleChJNd-qqwYy7YLkjxVGVR4CffFrIxGw7JhsEHG8pQpqWHlbuCjPNmZw4wVaJsSzTcZMXVeuL3ZT6K9UOsCgzdWFldCCr-fD29iCQChXW5VHPlRBSbBXSwI_dwFo8wPOj0wJdCLYnyX2HjxxSgW6gjij1nST8nwCqFJ4SIyx3EmbJIJoYf_KuG3Q9BQ0iQTRELtGz-7f4fz0nlECOu_T4" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white font-headline text-2xl font-bold mb-1">Spiritual Varanasi</h3>
                <p className="text-white/80">4 Days • Cultural Immersion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-white">
            <div className="absolute inset-0 opacity-10 jali-pattern pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary-fixed font-bold tracking-widest uppercase text-sm mb-4 block">Our Promise</span>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Why Book With Us?</h2>
                <p className="text-primary-fixed/80 text-lg leading-relaxed mb-8">Since 1998, Sri Kela Travels has been the golden standard for tourism in Agra, combining ancestral hospitality with modern professionalism.</p>
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-fixed transition-colors">Start Your Journey</button>
              </div>
              <div className="grid grid-cols-1 gap-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">24/7 Local Support</h4>
                    <p className="text-white/70">Our dedicated concierge team is always available to ensure your trip runs without a hitch.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>interpreter_mode</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expert Multi-lingual Guides</h4>
                    <p className="text-white/70">Our guides are licensed historians fluent in English, French, Spanish, and German.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Safe &amp; Seamless Travel</h4>
                    <p className="text-white/70">Every vehicle in our fleet undergoes rigorous safety checks and is tracked via GPS for your security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <footer className="bg-surface-container-low dark:bg-slate-900 full-width rounded-t-[2.5rem] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-10 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100 font-plus-jakarta-sans">Sri Kela Travels</div>
            <p className="text-slate-500 dark:text-slate-400 font-inter text-sm tracking-wide leading-relaxed">Your gateway to the majestic heritage of India. Specializing in luxury tours and premium travel solutions across the subcontinent.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6">Quick Links</h4>
            <ul className="space-y-4 font-inter text-sm tracking-wide">
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline decoration-blue-500/30" href="#">Tour Packages</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline decoration-blue-500/30" href="#">Car Rentals</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline decoration-blue-500/30" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline decoration-blue-500/30" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-inter text-sm tracking-wide">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                12, Fatehabad Road, opposite Taj Hotel, Agra, UP 282001, India
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                enquiry@srikelatravels.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6">Our Location</h4>
            <div className="rounded-2xl overflow-hidden h-40 bg-surface-container-high relative">
              <img alt="Agra Map" className="w-full h-full object-cover opacity-50 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmsUnIeLwkre_DodcpzN8AcO9YS-M5ela0SwCDL8xNY5HgiZBTB3VKw7QvhhYgT3HYih8empMBp8Wa_dGeUH8b5CKkmkvtrhSxo4vE14-C8qFzZGUTf50t5OND8MkQT7dkCaJ3DuTeHn_IHAMhWvE6eY_JRuSWsLjrb7NEZ7RlROqM7dYbS986cwFK4qljRaLdzxOrvTbqEJsWW7iO5ryvDC4MJYNFKrkIYRN449jzoWhPf2sD5Dnsmqd4UKUmEbkjjMTM3m1aG9Y" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full font-bold text-primary shadow-sm">View Map</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/10 py-8 px-10 text-center max-w-7xl mx-auto">
          <p className="text-slate-500 dark:text-slate-400 font-inter text-sm tracking-wide">© 2024 Sri Kela Travels. Agra, India. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
