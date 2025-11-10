"use client";

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
