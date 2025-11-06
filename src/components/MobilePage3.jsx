import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Swiper from "swiper/bundle";
import Page3Data from "/src/constants/Page3Data.js";
// import styles bundle
import "swiper/css/bundle";
import energyImg from "/src/assets/energy-img.png";
import secureImg from "/src/assets/secure.png";
import starImg from "/src/assets/star.png";
import statImg from "/src/assets/stat.png";

register();

const Slider = () => {
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

  const SwiperSlide = Page3Data.map(singleSlide =>(
    <div className="swiper-slide" key={singleSlide.id}>
      <div className="w-full px-5 mx-auto h-full">
      <div className="page-3-image-container w-full h-full">
        <img src={singleSlide.image} alt={singleSlide.title} className="sliderImageType2" />
      </div>
      <div className="sm-page-3-detailsType2 group">
        <h4 className="page-3-feature-title">{singleSlide.title}</h4>
        <h2 className="page-3-feature-subtitle">{singleSlide.subTitle}</h2>
        <p className="page-3-feature-description">{singleSlide.description}</p>
      </div>
      </div>
    </div>
  ))

  return (
    <>
      <div className="mobileSlider swiper bg-black/90% w-full max-h-[120vh] lg:max-h-[60vh] lg:min-h-[50vh] min-h-[70vh]" ref={swiperElRef}>
        <div className="swiper-wrapper w-full h-[95%]">
          <div className="swiper-slide">
            <div className="md:max-w-3/4 w-full px-5 mx-auto h-full">
              <div className="page-3-image-container w-full h-full">
                <img
                  src={energyImg}
                  alt="Green Lightning ball"
                  className="sliderImage"
                />
              </div>
              <div className="sm-page-3-details">
                <h4 className="page-3-feature-title">Predict & Earn</h4>
                <h2 className="page-3-feature-subtitle">
                  Supercharge Your Sports Experience with Fango!
                </h2>
                <p className="page-3-feature-description">
                  Get rewarded for your sports knowledge! Predict match outcomes
                  and score tokens with every correct guess.
                </p>
              </div>
            </div>
          </div>
          {SwiperSlide}
        </div>
        <div className="swiper-pagination rounded-4xl max-w-24 h-fit bg-[#baba] backdrop-filter backdrop-blur-md"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </>
  );
};

export default Slider;
