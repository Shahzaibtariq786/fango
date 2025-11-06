import CardsData from "/src/components/CardsData.jsx";

const SingleCard = CardsData.map((card, i) => (
    <div key={i} className={`${card.cardStyle} card-container`}>
        {card.cardIcon && card.cardIcon}
        {card.bgImage && card.bgImage}
        {card.cardImage && card.cardImage}
        {card.cardShadow && card.cardShadow}
        <div className="feature-card-details">
          <h2 className="normalHeading mb-2.5">{card.cardTitle}</h2>
          <p className="para-text">{card.cardDescription}</p>
        </div>
    </div>
))
const Cards = () => {
    
  return (
    <section id="all-cards-container" className="p-5 sm:p-10 mt-[10%] sm:mt-[30%] lg:mt-0 lg:p-10 z-20 2xl:px-[var(--lg-scr-horizontal-space)]">
      <div className="font-grosteque py-10 pb-15 z-20 relative">
        <span className="text-light-green block py-4 font-bold">Features</span>
        <h2 className="text-white text-5xl font-extrabold">App Details</h2>
      </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-x-4 gap-y-6 min-h-[300dvh] sm:max-xl:min-h-[180dvh] xl:min-h-[240dvh]">
      {SingleCard}
    </div>
    </section>
  );
};

export default Cards;
