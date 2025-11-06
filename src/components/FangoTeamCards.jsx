import roundCardBg from '/src/assets/howDoesItWorkImages/roundCardBg.png'
import TeamMemberData from '/src/constants/fangoTeamCardsConstants.js'
import LinkedIn from '/src/assets/SocialMediaIcons/linkedin.svg?react'


const SingleMember = TeamMemberData.map(({id,memberLogo,description,title,})=>(
    <div className={`group relative overflow-hidden  min-w-[400px] min-h-82 rounded-4xl p-8`} key={id}>
      <div className="roundCardIconContainer relative z-10">
        <div className="w-full flex items-center justify-between">
            <a href="#">
        <img src={memberLogo} alt={`${title} Team Member`} className='w-16 h-16' />
            </a>
          <div/>
          <a href="#">
        <LinkedIn className='w-6 h-6 group-hover:[&>*]:fill-dark-green cursor-pointer'/>          
          </a>
        </div>
      </div>
      <div className="roundCardDetailContainer relative z-10">
        <h2 className="mediumTitle text-4xl md:text-3xl xl:py-2 text-white font-extrabold">
          {title}
        </h2>
        <p className="text-light-dark-para transition-all duration-300 ease-linear xl:my-0 leading-6 text-md group-hover:text-light-green">{description}</p>
      </div>
      <img
        src={roundCardBg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
      />
    </div>
))


const FangoTeamCards = ()=>{
    return(
        <div className='w-full min-h-[50vh] p-8 2xl:px-[var(--lg-scr-horizontal-space)]'>
            <h2 className='text-center'>Fango Team</h2>
                    <div className="allRoundCardsContainer py-14 min-h-[50vh] flex flex-col xl:flex-row gap-6 justify-center items-center">
        {SingleMember}
      </div>
        </div>
    )
}

export default FangoTeamCards;