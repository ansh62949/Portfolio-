import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TechStack from '../components/TechStack';
import ProjectSection from '../components/ProjectSection';
import CertificationsSection from '../components/CertificationsSection';
import { ContactSection } from '../components/InfoSections';

const Home = () => {
  return (
    <main className="bg-[#050507] text-white min-h-screen">
      <Hero />
      <AboutSection />
      <TechStack />
      <ProjectSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
