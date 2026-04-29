import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Mail, Link as SocialIcon, Code, Send, Phone } from 'lucide-react';
import { personalData } from '../data/portfolio';

export const ExperienceSection = () => {
  const proofs = [
    { title: "250+ DSA Problems Solved", desc: "Expertise in complex algorithms and data structures." },
    { title: "Built scalable microservices systems", desc: "Hands-on architectural design for high-traffic apps." },
    { title: "Hands-on AI + Backend integration", desc: "Specializing in operationalizing ML models." },
    { title: "Vihaan 9.0 Hackathon", desc: "Certificate of Participation from IEEE DTU", link: "vihaan_certificate.png" },
    { title: "Unstop Hackathon 1", desc: "Verified hackathon credential on Unstop.", link: "https://unstop.com/certificate-preview/b10aefe6-c889-47fd-91c2-a15b18ac9fe6" },
    { title: "Unstop Hackathon 2", desc: "Verified hackathon credential on Unstop.", link: "https://unstop.com/certificate-preview/25bf7ed1-ff44-484e-9e63-836617471b18" },
    { title: "Truscholar Credential", desc: "Blockchain-powered digital certificate.", link: "https://app.truscholar.io/profile?credId=69e785c3a0a1d70eaffece1e" }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-12 text-center">Achievements & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofs.map((proof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl text-center flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-all">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{proof.title}</h3>
              <p className="text-white/40">{proof.desc}</p>
              {proof.link && (
                <a href={proof.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-primary font-bold hover:underline">
                  View Credential &rarr;
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const EducationSection = () => {
  const { education } = personalData;
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <GraduationCap size={48} className="mx-auto text-secondary mb-8" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Education</h2>
        <div className="glass p-12 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-3xl rounded-full" />
          <h3 className="text-2xl font-bold mb-2">{education.institution}</h3>
          <p className="text-secondary font-medium text-lg mb-4">{education.degree}</p>
          <div className="inline-block px-6 py-2 bg-white/10 rounded-full font-bold text-xl">
            GPA: {education.gpa}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-6">Get In Touch</h2>
          <h3 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-10">LET'S BUILD <br /> SOMETHING <br /> <span className="gradient-text">LEGENDARY.</span></h3>
          
          <div className="space-y-6">
            <a href={`mailto:${personalData.contact.email}`} className="flex items-center gap-4 text-xl hover:text-primary transition-colors">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center"><Mail size={24} /></div>
              {personalData.contact.email}
            </a>
            {personalData.contact.phone && (
              <a href={`tel:${personalData.contact.phone}`} className="flex items-center gap-4 text-xl hover:text-primary transition-colors">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center"><Phone size={24} /></div>
                {personalData.contact.phone}
              </a>
            )}
            <div className="flex gap-4">
              <a href={personalData.contact.linkedin} className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <SocialIcon size={28} />
              </a>
              <a href={personalData.contact.github} className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Code size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[40px]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Your Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
              <textarea rows="5" placeholder="Let's talk about a project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all group">
              Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
