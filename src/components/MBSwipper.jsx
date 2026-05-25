import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import precise from '../assets/iconsswiper/precise.PNG'
import convenient from '../assets/iconsswiper/convenient.PNG'
import ingenious from '../assets/iconsswiper/ingenious.PNG'
import reasonable from '../assets/iconsswiper/reasonable.PNG'
import innovatuve from '../assets/iconsswiper/innovatuve.PNG'
export default function MBSwipper() {
  const slides = [
    {
      title: "Reasonable",
      description: "We provide designs to fit any financial strategy. Thrivemed System uses the cloud to operate, saving your money. No compelling motive exists to invest money in servers.",
      icon: reasonable,
      imgSrc: "https://heartlandrcm.com/wp-content/uploads/2023/08/doctor-patient-handshake-5835367.jpg",
    },
    {
      title: "Precise",
      description: "The Thrivemed System is easy to use and doesn't require any training. Information about patients and organizations are easily accessible because of its attractive interface.",
      icon: precise,
      imgSrc: "https://heartlandrcm.com/wp-content/uploads/2023/06/closeup-hands-business-meeting.jpg",
    },
    {
      title: "Ingenious",
      description: "Take ownership of your trainings. Progressively introduce tolerable improvements. Run provides a breakdown of all of your financial assets.",
      icon: ingenious,
      imgSrc: "https://heartlandrcm.com/wp-content/uploads/2023/08/doctor-tomograph-study-1228627.jpg",
    },
    {
      title: "Convenient",
      description: "Be careful where you receive your training. While seeing a patient, update your records with HeartlandRCM System Mobile to avoid returning to a PC.",
      icon: convenient,
      imgSrc: "https://heartlandrcm.com/wp-content/uploads/2023/08/doctor-patient-handshake-5835367.jpg",
    },
    {
      title: "Innovative",
      description: "It leverage advanced technology and streamlined processes to optimize revenue cycles, improve financial performance in healthcare organizations.",
      icon: innovatuve,
      imgSrc: "https://heartlandrcm.com/wp-content/uploads/2023/06/bookkeeping-accounting-taxes-615384.jpg",
    },
    {
      title: "Transparent",
      description: "Transparent medical billing services openly communicate treatment costs, provide clear information, and foster collaboration to enhance patient satisfaction.",
      icon: reasonable,
      imgSrc: "https://heartlandrcm.com/wp-content/uploads/2023/08/doctor-tomograph-study-1228627.jpg",
    },
  ];
  return (
    <section className="w-full py-8 ">
      <div className="text-center mb-6 ">
        <h2 className="mb-10 m-auto sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-lg lg:text-3xl  font-bold bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent">Outsource Medical Billing Services for Enhanced Revenue and Stress-Free Operations</h2>
      </div>
         <div className=' m-auto sm:max-w-xl sm:text-xl md:max-w-full md:text-xl lg:max-w-screen-xl lg:text-3xl  '>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // breakpoints={{
          //   640: { slidesPerView: 2 },
          //   768: { slidesPerView: 2 },
          //   1024: { slidesPerView: 2 },
          // }}
          breakpoints={{
            360: { slidesPerView: 1, spaceBetween: 20 },
            375: { slidesPerView: 1, spaceBetween: 20 },
            390: { slidesPerView: 1, spaceBetween: 20 },
            412: { slidesPerView: 1, spaceBetween: 20 },
            414: { slidesPerView: 1, spaceBetween: 20 },
            430: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
            1536: { slidesPerView: 3, spaceBetween: 10 },
            2000: { slidesPerView: 3, spaceBetween: 5 },
            2700: { slidesPerView: 3, spaceBetween: 5 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        // navigation={true}
        // pagination={{ clickable: true }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className=" p-2">

              {/* <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"> */}
                <div
                  class="group border relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8  ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-8 left-8 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10 mx-auto max-w-md">
                    
                     <img src={slide.icon} className="fill-white w-16 h-16 m-left" alt={slide.title} />
                     <div
                      class="space-y-6 lg:text-2xl pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <p className='font-bold text-2xl'>{slide.title}</p>
                    </div>
                    <div
                      class="space-y-6 lg:text-xl pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <p>{slide.description}</p>
                    </div>
                   
                  </div>
                </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
