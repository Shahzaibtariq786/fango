import utilitiesData from '/src/constants/utilitiesConstants.js'
import roundCardBg from '/src/assets/howDoesItWorkImages/roundCardBg.png'

const singleUtilityCard = utilitiesData.map(({id, icon: Icon ,description,title})=>(
    <div className={`group relative overflow-hidden min-w-[400px] min-h-76 rounded-4xl p-8`} key={id}>
      <div className="roundCardIconContainer relative z-10">
        <div className="roundIconContainer">
        <Icon className="w-8 h-8 [&>*]:group-hover:stroke-black group-hover:stroke-black"/>          
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
))

const Utilities = ()=>{
    return(
         <div id="utilities" className="min-h-dvh bg-black w-full pt-15 px-8 2xl:px-[var(--lg-scr-horizontal-space)]">
      <h4 className="text-center">Fango Token</h4>
      <h2 className="mb-10 text-center">Utilities</h2>
      <div className="allRoundCardsContainer min-h-[50vh] flex flex-col xl:flex-row gap-6 justify-center items-center">
        {singleUtilityCard}
      </div>
    </div>
    )
}
export default Utilities;