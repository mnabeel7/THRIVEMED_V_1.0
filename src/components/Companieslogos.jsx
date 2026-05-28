import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import a from '../assets/c1.PNG';
import b from '../assets/c2.PNG';
import c from '../assets/c3.PNG';
import d from '../assets/c4.PNG';
import e from '../assets/c5.PNG';
import f from '../assets/c6.PNG';
import g from '../assets/c7.PNG';
import h from '../assets/c8.PNG';
import i from '../assets/c9.PNG';
import j from '../assets/c10.PNG';

export default function Companieslogos() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const logos = [a, b, c, d, e, f, g, h, i, j];
  // Duplicate for seamless infinite scroll
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center" data-aos="fade-up">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          Trusted by Innovative Healthcare Providers
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {marqueeLogos.map((logo, index) => (
            <img 
              key={index}
              src={logo} 
              alt={`Partner Logo ${index + 1}`} 
              loading="lazy"
              className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            />
          ))}
        </div>
        {/* Fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Tailwind config for animate-marquee needs to be in index.css, I'll add the keyframe style here for simplicity since we already modified index.css */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
