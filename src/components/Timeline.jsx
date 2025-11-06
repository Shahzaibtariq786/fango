import React from 'react'
import DashBorder from '/src/assets/shapesBackgroundImages/road_map_border.png'
const Timeline = () => {
  return (
    <div className='w-full min-h-dvh md:min-h-[70vh] xl:min-h-dvh  py-14 max-sm:bg-[#05080a] 2xl:px-[var(--lg-scr-horizontal-space)]'>
        <h4 className='text-center'>ROADMAP</h4>
        <h2 className='text-center'>Fango Timeline</h2>
        <div className='TimeLineContainer px-10 relative w-full min-h-[50vh] flex flex-wrap md:flex-nowrap max-xl:items-start items-center justify-around sm:max-xl:mt-6'>
            <img src={DashBorder} alt="Dash Border" className='absolute hidden xl:block top-[2.8vw] sm:max-xl:top-[4%] z-[1] left-0 w-full h-auto' />
            <div id="dash-line" className='h-[95%] w-1 absolute border-l-2 border-light-dark border-dashed top-[5%] left-[5%] md:hidden'></div>
            <div>
                <h2 className='TimeLineQuestion'>Q1</h2>
                <ul>
                    <li>Conceptualization and Research</li>
                    <li>Finalize the tokenomics model </li>
                    <li>Conduct market research and competitor analysis</li>
                    <li>Define the utility and use cases of Fango Token (FNGO)</li>
                </ul>
            </div>
            <div>
                <h2 className='TimeLineQuestion'>Q2</h2>
                <ul>
                    <li>Build and expand the Fango community</li>
                    <li>Launch community forums and channels </li>
                    <li>Airdrop and bounty campaigns conceptualisation</li>
                    <li>Compliance: Engage legal experts</li>
                </ul>
            </div>
            <div>
                <h2 className='TimeLineQuestion'>Q3</h2>
                <ul>
                    <li>Launch $FNGO</li>
                    <li>Engage with KOLs to promote $FNGO </li>
                    <li>User Acquisition Campaigns</li>
                    <li>Exchange Listings</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Timeline;