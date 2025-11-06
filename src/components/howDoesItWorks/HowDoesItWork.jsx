import roundCardData from "/src/components/howDoesItWorks/howDoesItWorkConstants.js";

const singleRoundCard = roundCardData.map(({id, title, description, icon: Icon, roundCardBg, color,}) => (
    <div className={`group relative overflow-hidden min-w-[400px] min-h-82 rounded-4xl p-8`} key={id}>
      <div className="roundCardIconContainer relative z-10">
        <div className="roundIconContainer">
        <Icon className={`w-8 h-8 ${color}`}/>          
          <div/>
        </div>
      </div>
      <div className="roundCardDetailContainer relative z-10">
        <h2 className="mediumTitle text-4xl md:text-3xl xl:py-2 text-white font-extrabold">
          {title}
        </h2>
        <p className="text-light-dark-para xl:my-0">{description}</p>
      </div>
      <img
        src={roundCardBg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
      />
    </div>
  ));

const HowDoesItWork = () => {  
  return (
    <div id="how-does-it-works-container" className="min-h-dvh bg-black w-full pt-15 px-8 2xl:px-[var(--lg-scr-horizontal-space)]">
      <h4 className="text-center xl:text-start">Function</h4>
      <h2 className="mb-10 text-center xl:text-start">How Does It work?</h2>
      <div className="allRoundCardsContainer min-h-[50vh] flex flex-col xl:flex-row gap-6 justify-center items-center">
        {singleRoundCard}
      </div>
    </div>
  );
};

export default HowDoesItWork;
