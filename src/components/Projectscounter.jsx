import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projectscounter() {
  const [turnaround, setTurnaround] = useState(0);
  const [reduction, setReduction] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const animate = (setter, target, step, interval) => {
      const id = setInterval(() => {
        setter(prev => {
          if (prev >= target) { clearInterval(id); return target; }
          return prev + step;
        });
      }, interval);
    };
    animate(setTurnaround, 7, 1, 200);
    animate(setReduction, 30, 1, 100);
    animate(setRevenue, 20, 1, 150);
    animate(setRatio, 98, 1, 30);
  };

  const stats = [
    {
      value: `${turnaround}-14`,
      label: 'Days Turnaround',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: `${reduction}%`,
      label: 'Reduction in A/R',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
        </svg>
      ),
    },
    {
      value: `${revenue}%`,
      label: 'Revenue Increase',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
    {
      value: `${ratio}%`,
      label: 'Collection Ratios',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} id="stats-section" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      {/* Decorative orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-10" style={{ background: '#0d9488', filter: 'blur(100px)' }}></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-10" style={{ background: '#2563eb', filter: 'blur(100px)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
              <span className="w-8 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></span>
              Numbers Don't Lie
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif', lineHeight: 1.15 }}>
              What Makes Us{' '}
              <span style={{ background: 'linear-gradient(135deg, #2dd4bf, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Special?
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Our results speak volumes: consistent turnaround, maximized revenue, and unbeatable collection ratios.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Proven success: shorter A/R cycles, significant revenue growth, and industry-leading collection rates that set us apart.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(13,148,136,0.15), rgba(37,99,235,0.15))' }}></div>

                <div className="relative z-10">
                  <div className="mb-3 text-teal-400 opacity-70 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                  <p className="text-3xl sm:text-4xl font-black mb-1" style={{ fontFamily: 'Outfit, sans-serif', background: 'linear-gradient(135deg, #f8fafc, #cbd5e1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-slate-400 group-hover:text-teal-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
