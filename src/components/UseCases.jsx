import EagleIcon from "/src/assets/owl-logo.svg";
import Plus from "/src/assets/plus.svg?react";
import Minus from "/src/assets/minus.svg?react";
import AddPerson from "/src/assets/UseCaseImages/add-person.png";
import Star from "/src/assets/UseCaseImages/star-img.png";
import Person from "/src/assets/UseCaseImages/person.png";
import GreenBg from "/src/assets/UseCaseImages/use-cases-icons-bg.png";
import Accordion from "./Accordion";
import { useState } from "react";
import accordionsData from "../constants/accordionsData";
import UseCaseSlider from "./UseCasesMobileSlider";

const UseCases = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle open/close
  };

  /*     const [AccordionOn, isSetAccordionOn] = React.useState(true);
    const [activeIndex , setActiveIndex] = React.useState(0); */

  /*    const  handleClick = (index, AccordionState) =>{
        setActiveIndex(activeIndex === index ? null : index)
        
       
    } */
  const images = [AddPerson, AddPerson, Person, Star];

  /* const singleAccordion = accordionsData.map((accordion,index)=>(
    <div className="single-accordion w-full h-max" key={index}>
                    <details className='w-full min-h-[80px] my-2 mx-2 bg-black px-4 py-4' open={false}>
                        <summary onClick={ (e)=> {e.preventDefault(); handleClick(index, AccordionOn)} } className='markers:content-[""] w-full cursor-pointer flex items-center justify-between'>
                            <span className="accordion-title font-bold text-2xl">{accordion.title}</span>
                            <span className="accordion-icon">{activeIndex === index ? (<Minus className="w-6 h-6"/>)  : (<Plus className="w-6 h-6"/>) }</span>
                        </summary>
                        <p className="accordion-content">
                            {accordion.description}
                        </p>
                    </details>
                </div>
))
 */

  return (
    <>
      <div className="min-h-dvh w-full relative  overflow-hidden 2xl:px-[var(--lg-scr-horizontal-space)]">
        <div className="w-full min-h-max flex justify-center items-center">
          <div className="min-w-15 max-w-fit mx-auto">
            <img src={EagleIcon} alt="Eagle Logo" className="ml-5 mb-6 mt-10" />
            <h4>Use Cases</h4>
          </div>
        </div>
        <h2 className="max-w-[80%] mx-auto text-center mb-10 xl:mb-0 text-4xl leading-10 xl:text-6xl xl:leading-14">
          Explore real-world applications of the Fango Token across the Fango
          platform
        </h2>
        {/* Desktop UseCases Component */}

        <div className={`w-full h-full min-h-[80vh] hidden  xl:flex px-10`}>
          <div className={` w-[35%] h-full min-h-[50vh] pt-10 space-y-5`}>
            <Accordion
              key={1}
              isOpen={openIndex === 1}
              onToggle={() => toggleAccordion(1)}
              title="Predictions"
              description="Wager (meaning Stake/Staking) Fango Tokens/Goals/Points to make predictions on match outcomes and earn rewards for correct predictions."
            />

            <Accordion
              key={2}
              isOpen={openIndex === 2}
              onToggle={() => toggleAccordion(2)}
              title="The Fango Stadium"
              description="Participate in community activities, challenges, and events to earn Fango Tokens/Goals/Points and unlock exclusive perks."
            />
            <Accordion
              key={3}
              isOpen={openIndex === 3}
              onToggle={() => toggleAccordion(3)}
              title="Rewards Redemption"
              description="Redeem Fango Tokens/Goals/Points for a wide range of rewards, including merchandise, ultimate sports experiences, and special offers from Fango partners."
            />
          </div>
          <div className={`h-full min-h-dvh w-[70%] relative `}>
            {openIndex !== null && (
              <div
                className={`accordionSingleSideImageContainer  z-[2] bg-[url("/src/assets/UseCaseImages/use-cases-icons-bg.png")]  bg-no-repeat bg-center bg-cover relative  min-w-[600px] min-h-[80vh] before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-full before:h-full before:bg-black/50 before:z-[1] before:-translate-x-1/2`}
              >
                <img
                  src={images[openIndex]}
                  alt={`Accordion ${openIndex + 1} illustration`}
                  className="w-fit h-fit max-w-[300px] z-[3] max-h-[300px] object-cover  absolute top-[20%] left-[40%] -translate-x-[50%"
                />
              </div>
            )}
          </div>
        </div>
        {/* Desktop UseCases Compoenent Ends Here! */}
        {/* Mobile UseCases Compoenent */}
        <UseCaseSlider />
        {/* Mobile UseCases Compoenent Ends Here */}
      </div>
    </>
  );
};

export default UseCases;
