import React, { useEffect } from 'react'
import Contactform from '../components/Contactform';
import tickk from '../assets/subservices/tickk.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RCM() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const metricsData = [
    {
      title: "Days in Accounts Receivable (A/R Days)",
      desc: "Measure of the average time it takes to get paid. Lower days mean healthier cash flows.",
      standardName: "MGMA Standard",
      standardVal: "< 35 Days",
      thriveVal: "28 Days",
      industryVal: "50 Days",
      bars: [
        { name: "ThriveMed Performance", val: 28, max: 60, color: "from-teal-400 to-emerald-500", text: "28 Days (Excellent)" },
        { name: "MGMA Target", val: 35, max: 60, color: "from-blue-400 to-blue-600", text: "< 35 Days (Standard)" },
        { name: "Industry Average", val: 50, max: 60, color: "from-rose-400 to-rose-600", text: "50 Days (Lagging)" }
      ]
    },
    {
      title: "Accounts Receivable Aging (Over 120 Days)",
      desc: "Percentage of claims unpaid after 4 months. Unresolved claims risk becoming written-off bad debts.",
      standardName: "MGMA Standard",
      standardVal: "< 12%",
      thriveVal: "6.0%",
      industryVal: "25.0%",
      bars: [
        { name: "ThriveMed Performance", val: 6, max: 30, color: "from-teal-400 to-emerald-500", text: "6% (Highly Efficient)" },
        { name: "MGMA Target", val: 12, max: 30, color: "from-blue-400 to-blue-600", text: "< 12% (Standard)" },
        { name: "Industry Average", val: 25, max: 30, color: "from-rose-400 to-rose-600", text: "25% (Risk Area)" }
      ]
    },
    {
      title: "Clean Claim Rate (First-Pass Acceptance)",
      desc: "Percentage of claims accepted by payers on the very first submission without rejections.",
      standardName: "International Target",
      standardVal: "90% - 95%",
      thriveVal: "98.2%",
      industryVal: "75.0%",
      bars: [
        { name: "ThriveMed Performance", val: 98.2, max: 100, color: "from-teal-400 to-emerald-500", text: "98.2%" },
        { name: "MGMA Target", val: 90.0, max: 100, color: "from-blue-400 to-blue-600", text: "90.0%" },
        { name: "Industry Average", val: 75.0, max: 100, color: "from-rose-400 to-rose-600", text: "75.0%" }
      ]
    },
    {
      title: "Net Collection Rate (NCR)",
      desc: "Percentage of total collectable revenue actually recovered after payer contractual write-offs.",
      standardName: "MGMA Standard",
      standardVal: "95% - 99%",
      thriveVal: "99.2%",
      industryVal: "92.0%",
      bars: [
        { name: "ThriveMed Performance", val: 99.2, max: 100, color: "from-teal-400 to-emerald-500", text: "99.2%" },
        { name: "MGMA Target", val: 95.0, max: 100, color: "from-blue-400 to-blue-600", text: "95.0%" },
        { name: "Industry Average", val: 92.0, max: 100, color: "from-rose-400 to-rose-600", text: "92.0%" }
      ]
    }
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            RCM Auditing & Analytics
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            International <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">RCM Standards</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            Compare key industry performance metrics from MGMA & international billing organizations against typical benchmarks and ThriveMed’s verified results.
          </p>
        </div>

        {/* Dashboard Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {metricsData.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-extrabold text-lg sm:text-xl text-slate-800 dark:text-slate-200" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {metric.title}
                  </h3>
                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/30 dark:border-slate-700/30 flex-shrink-0 ml-2">
                    {metric.standardVal}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {metric.desc}
                </p>
              </div>

              {/* Graphical Representation */}
              <div className="mt-6 space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {metric.bars.map((bar, barIdx) => {
                  const percentage = (bar.val / bar.max) * 100;
                  return (
                    <div key={barIdx} className="space-y-1">
                      <div className="flex justify-between items-center text-xs font-semibold text-slate-600 dark:text-slate-400">
                        <span>{bar.name}</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{bar.text}</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800/50 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${bar.color} h-full rounded-full`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Section 3: Contact & Demo Split */}
        <div 
          className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 sm:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          data-aos="fade-up"
        >
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Synergize Your Revenue Cycle: Schedule a Demo
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Partner with ThriveMed today. Let us perform an audit of your billing systems and demonstrate how we can eliminate inefficiencies and speed up reimbursements.
            </p>
            <div className="space-y-3">
              {[
                "Verify your patient's insurance eligibility prior to or at the time of service.",
                "Gain real-time insights into your financials, driving enhanced efficiency and growth.",
                "Stay on top of your claims with comprehensive tracking and detailed audits.",
                "Reduce denials, efficiently handle appeals, and maximize reimbursements."
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <img src={tickk} className="w-3.5 h-3.5 object-contain" alt="" />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 w-full">
            <Contactform />
          </div>
        </div>

      </div>
    </div>
  )
}
