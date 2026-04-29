import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import ProjectSection from '../components/ProjectSection';
import { ExperienceSection, EducationSection, ContactSection } from '../components/InfoSections';

const Home = () => {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <TechStack />
      <ProjectSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default Home;
