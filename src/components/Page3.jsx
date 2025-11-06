import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
import energyImg from "/src/assets/energy-img.png";
import Slider from '/src/components/MobilePage3.jsx'

import Page3Data from "/src/constants/Page3Data.js";
gsap.registerPlugin(ScrollTrigger,SplitText);

const singleFeatureComponent = Page3Data.map((singleFeature) => (
  <div
    key={singleFeature.id}
    className="page-3-single-feature-container-type-2"
  >
    <div className="page-3-details-container-type-2">
      <h4 className="page-3-feature-title">{singleFeature.title}</h4>
      <h2 className="page-3-feature-subtitle">{singleFeature.subTitle}</h2>
      <p className="page-3-feature-description">{singleFeature.description}</p>
    </div>
    <img
      src={singleFeature.image}
      alt={singleFeature.title}
      className="page-3-type-2-images"
    />
  </div>
));

const Page3 = () => {
  useGSAP(() => {
    const singleFeatureType2 = document.querySelectorAll(
      ".page-3-single-feature-container-type-2"
    );

    const tl = gsap.timeline();
    const description = document.querySelectorAll('.page-3-feature-description')
    
    description.forEach(para=>{
      const paraSplit = new SplitText(para,{type: 'chars, lines'})
      gsap.from(paraSplit.lines,{
      opacity: 0,
      yPercent: 20,      
      duration: 1,
      ease: 'expo.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: para,
        start: 'top 80%',
        // scrub: true,       
      }
      
    })
    })


    singleFeatureType2.forEach((feature) => {
      const imageType2 = feature.querySelector("img");
      gsap.to(imageType2, {
        opacity: 1,
        y: -100,
        duration: 0.1,
        ease: "power3.inOut",
        yoyo: true,
        repeat: 1,
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
          end: "bottom 110%",
          scrub: 1,
        },
      });
    });

    gsap.from(".page-3-single-feature-container img", {
      y: 400,
      opacity: 1,
      duration: 2,
      ease: "power3.inOut",
      // yoyo: true,
      scrollTrigger: {
        trigger: ".page-3-single-feature-container",
        // markers: true,
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
      },
    });
    gsap.to(".page-3-single-feature-container img", {
      opacity: "0",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".page-3-single-feature-container",
        start: "top 0%",
        end: "bottom 120%",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <section id="all-features-container" className="hidden xl:block pt-[5%] h-full w-full font-grosteque 2xl:px-[var(--lg-scr-horizontal-space)] caret-transparent">
        <div className="page-3-single-feature-container flex items-start  relative min-h-[150vh] px-[2.5%]">
          <div className="page-3-details-container">
            <h4 className="page-3-feature-title">Predict & Earn</h4>
            <h2 className="page-3-feature-subtitle">
              Supercharge Your Sports Experience with Fango!
            </h2>
            <p className="page-3-feature-description">
              Get rewarded for your sports knowledge! Predict match outcomes and score tokens with every correct guess.
            </p>
          </div>
          <img
            src={energyImg}
            alt="Lightning Ball image"
            className="first-icon w-1/2 h-[500px] object-cover sticky top-[15%] -mt-[5%] right-0"
          />
        </div>
        {singleFeatureComponent}
      </section>
      <Slider className='mt-[5%]'></Slider>
    </>
  );
};

export default Page3;
