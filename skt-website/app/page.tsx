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
      <Hero />
      <FeaturedTours />

      {/* Social Proof Marquees */}
      <FleetMarquee />

      {/* The Dark Mode Breaker - Cinematic Premium Services */}
      <PremiumServices />

      {/* The Trust Builder - Sticky Editorial Reveal */}
      <OurPromise />

      <TestimonialMarquee />
    </main>
  );
}
