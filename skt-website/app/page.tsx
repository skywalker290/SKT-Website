import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import Hero from "../components/Hero";
import FeaturedTours from "../components/FeaturedTours";
import PremiumServices from "../components/PremiumServices";
import OurPromise from "../components/OurPromise";
import FleetMarquee from "../components/FleetMarquee";
import TestimonialMarquee from "../components/TestimonialMarquee";
export default function Home() {
  return (
    <main className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">

      <Navbar />
      <Hero />
      <FeaturedTours />

      {/* Social Proof Marquees */}
      <FleetMarquee />

      {/* The Dark Mode Breaker - Cinematic Premium Services */}
      <PremiumServices />

      {/* The Trust Builder - Sticky Editorial Reveal */}
      <OurPromise />


      <TestimonialMarquee />

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
                Block-B-174, 1st Floor, Ahemadi Complex, near Petrol Pump, Baluganj, Rakabganj, Agra, Uttar Pradesh 282001
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                +91 9412548777
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
              <a
                href="https://maps.app.goo.gl/USYgczLM1N3pd5SB8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center group/map"
              >
                <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-full font-bold text-primary shadow-sm group-hover/map:bg-white group-hover/map:scale-110 transition-all duration-300">View Map</span>
              </a>
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
