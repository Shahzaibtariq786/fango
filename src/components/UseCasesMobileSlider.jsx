import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Swiper from "swiper/bundle";
import accordionsData from "../constants/accordionsData";
// import styles bundle
import "swiper/css/bundle";
import GreenBg from "/src/assets/UseCaseImages/use-cases-icons-bg.png"


register();

const UseCaseSlider = () => {
  const swiperElRef = useRef(null);
useEffect(() => {
    if (swiperElRef.current) {
      new Swiper(swiperElRef.current, {
        slidesPerView: 1,
        direction: "horizontal",
        speed: '500',
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          // draggable: 'true',
        },
         mousewheel: {
         forceToAxis: true,
  },
      });
    }
  }, []);
// Make sure to check the index.css files in case u have to fix any styles. Some of the slides styles have been fixed there.
  const SwiperSlide = accordionsData.map((singleSlide, index) =>(
    <div className="swiper-slide" key={index}>
      <div className="w-full px-10 mx-auto h-full">
      <div id={`slide-${index}`} className="page-3-image-container use-case-mobile w-full h-full">
        <img src={singleSlide.image} alt={singleSlide.title} className="" />
      </div>
      <div className="group text-center min-md:-mt-[10%] min-xl:-mt-0">
        <h4 className="text-2xl text-light-green">{singleSlide.title}</h4>
        <p className="text-center text-lg text-light-dark-para">{singleSlide.description}</p>
      </div>
      </div>
    </div>
  ))

  return (
    <>
      <div className="mobileSlider  swiper bg-[url('/src/assets/UseCaseImages/use-cases-icons-bg.png')] bg-no-repeat bg-cover w-full max-h-[120vh] lg:max-h-[60vh] lg:min-h-[50vh] min-h-[70vh]" ref={swiperElRef}>
        <div id="mobile-use-case" className={`swiper-wrapper w-full h-[95%] `}>
          {SwiperSlide}
        </div>
        <div className="swiper-pagination rounded-4xl max-w-24 h-fit bg-[#baba] backdrop-filter backdrop-blur-md"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </>
  );
};

export default UseCaseSlider;
