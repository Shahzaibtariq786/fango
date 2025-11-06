import FuelingBg from '/src/assets/fuelingTheFutureBg.png'

const FangoPoints = () => {
  return (
    <div className={`w-full min-h-[80vh] md:min-h-[60vh] xl:min-h-[100vh] xl:flex-row xl:items-center relative px-10 pb-0 overflow-hidden 2xl:px-[var(--lg-scr-horizontal-space)]`}>
      <div className='w-full xl:w-[50%] max-h-96 mt-[85%] md:mt-[50%] text-center xl:text-start xl:mt-[10%] xl:h-auto'>
        <h4>Fango Points</h4>
        <h2>Fueling the Future of Sports Engagement</h2>
        <p className='text-light-dark-para text-[22px] leading-7'>
          Welcome to the heart of Fango's ecosystem - the Fango Token. Designed
          to revolutionize the way fans engage with sports, $FNGO is the key to
          unlocking a world of rewards, incentives, and ultimate sports
          experiences. $FNGO is reshaping the sports industry and empowering
          fans like never before.
        </p>
      </div>
     
      <div className='xl:w-[90%] w-full xl:h-[90%] h-full absolute right-0 top-[-30%] xl:right-[-30%] xl:top-[5%]'> 
        <img src={FuelingBg} alt="Fango Fueling" className='w-[90%] h-full object-cover' />
      </div>
    </div>
  );
};

export default FangoPoints;