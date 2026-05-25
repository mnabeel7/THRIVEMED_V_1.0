import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsSideMenuOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const services = [
    { name: 'Medical Billing Services', path: '/MedicalBillingServices', icon: '🏥', desc: 'Comprehensive, all-inclusive billing approach' },
    { name: 'Physician Billing Services', path: '/PhysicianBillingServices', icon: '👨‍⚕️', desc: 'Dedicated to your patients\' care' },
    { name: 'AR Recovery Services', path: '/ARRecoveryServices', icon: '💰', desc: 'Tailored to your organization\'s needs' },
    { name: 'RCM Audit Services', path: '/RCM', icon: '📋', desc: 'Comprehensive revenue cycle audits' },
    { name: 'Laboratory Billing', path: '/LaboratoryBillingServices', icon: '🔬', desc: 'Expert laboratory billing solutions' },
    { name: 'Hospital Billing', path: '/HospitalBillingServices', icon: '🏨', desc: 'Full-service hospital billing' },
    { name: 'Coverage Discovery', path: '/CoverageDiscovery', icon: '🔍', desc: 'Maximize insurance coverage' },
    { name: 'Imaging Center Billing', path: '/ImagingCenterBilling', icon: '📷', desc: 'Specialized imaging billing' },
    { name: 'Ambulatory Surgery', path: '/AmbulatorySurgeryBilling', icon: '⚕️', desc: 'Outpatient surgery billing' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Services', hasDropdown: true },
    { name: 'Specialities', path: '/Specialities' },
    { name: 'About Us', path: '/Companyoverview' },
    { name: 'Contact', path: '/Contact' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        id="main-navbar"
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2 bg-slate-900/75 backdrop-blur-2xl shadow-lg border-b border-white/10'
            : isHomePage
            ? 'py-4 bg-transparent'
            : 'py-3 bg-slate-900/95 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group" id="nav-logo">
              <img
                src={logo}
                className="h-12 lg:h-14 transition-all duration-300 group-hover:scale-105"
                alt="ThriveMed RCM Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onClick={toggleDropdown}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                        isScrolled
                          ? 'text-slate-200 hover:text-white hover:bg-white/10'
                          : isHomePage
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative group/link ${
                        location.pathname === link.path
                          ? isScrolled
                            ? 'text-teal-400 bg-white/10'
                            : 'text-white bg-white/15'
                          : isScrolled
                          ? 'text-slate-200 hover:text-white hover:bg-white/10'
                          : isHomePage
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-300 ${
                        location.pathname === link.path ? 'w-6' : 'w-0 group-hover/link:w-6'
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/RCM"
                id="nav-cta-demo"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Schedule a Demo</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Mobile Hamburger */}
              <button
                id="mobile-menu-toggle"
                onClick={toggleSideMenu}
                className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                  isScrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
                }`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {isSideMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Dropdown */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 transition-all duration-500 ${
          isDropdownOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 pt-4">
          <div className="bg-white/70 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
                Our Services
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsDropdownOpen(false)}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 transition-all duration-300"
                  >
                    <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                        {service.name}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-3 border-t border-slate-100">
              <Link
                to="/Services"
                onClick={() => setIsDropdownOpen(false)}
                className="text-sm font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 transition-colors"
              >
                View all services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown overlay */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isSideMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${
            isSideMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleSideMenu}
        />

        {/* Slide panel */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white/85 backdrop-blur-3xl border-l border-white/40 shadow-2xl transition-transform duration-500 ease-out ${
            isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <img src={logo} alt="ThriveMed RCM" className="h-10" />
              <button
                onClick={toggleSideMenu}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <Link to="/" onClick={toggleSideMenu} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-teal-50 hover:text-teal-700 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Home
              </Link>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-teal-50 hover:text-teal-700 transition-all"
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    Services
                  </span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${mobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-6 py-1 space-y-0.5">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={toggleSideMenu}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-all"
                      >
                        <span className="text-base">{service.icon}</span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/Specialities" onClick={toggleSideMenu} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-teal-50 hover:text-teal-700 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                Specialities
              </Link>

              <Link to="/Companyoverview" onClick={toggleSideMenu} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-teal-50 hover:text-teal-700 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                About Us
              </Link>

              <Link to="/Contact" onClick={toggleSideMenu} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-teal-50 hover:text-teal-700 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Contact
              </Link>
            </div>

            {/* CTA */}
            <div className="p-5 border-t border-slate-100">
              <Link
                to="/RCM"
                onClick={toggleSideMenu}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl"
              >
                Schedule a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
