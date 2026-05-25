import React, { useEffect, useRef } from 'react';
import './Carousal.css';
import { useNavigate } from 'react-router-dom';
import mh5 from '../assets/mh5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Carousel() {
  let navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const SliderDom = carouselDom.querySelector('.carousel .list');
    const timeDom = carouselDom.querySelector('.carousel .time');

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);
    };

    nextDom.onclick = () => showSlider('next');
    prevDom.onclick = () => showSlider('prev');

    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
      nextDom.onclick = null;
      prevDom.onclick = null;
    };
  }, []);

  const handleContact = () => {
    navigate('/Contact');
  };

  const handleDemo = () => {
    navigate('/RCM');
  };

  return (
    <div ref={carouselRef} className="carousel w-full overflow-hidden" id="hero-carousel">
      <div className="list">
        <div className="item">
          <div className="back1"></div>
          <div className="content">
            <div className="author">ThriveMed RCM</div>
            <div className="title">We Take Care Of Your</div>
            <div className="topic">REVENUE</div>
            <div className="title" style={{ fontSize: '1.5rem', opacity: 0.85, marginTop: '0.5rem' }}>
              While You Focus On Your Patients.
            </div>
            <div className="buttons">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-600"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #059669, #2563eb)',
                  boxShadow: '0 4px 20px rgba(13, 148, 136, 0.4)',
                }}
                onClick={handleContact}
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleDemo}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                }}
              >
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Right decorative cards removed per user request */}
        </div>
      </div>

      <div className="arrows" style={{ display: 'none' }}>
        <button ref={prevRef} id="prev" aria-label="Previous slide">
          &#8592;
        </button>
        <button ref={nextRef} id="next" aria-label="Next slide">
          &#8594;
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
}
