import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TechStack from '../components/TechStack';
import ProjectSection from '../components/ProjectSection';
import CertificationsSection from '../components/CertificationsSection';
import { ContactSection } from '../components/InfoSections';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="bg-[#050507] text-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <TechStack />
      <ProjectSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
