import AdvisorsData from '/src/constants/advisorsConstants.js'

const singleAdvisor = AdvisorsData.map(({id,advisorName,title,advisorLogo})=>(
    <div key={id} className='w-52 h-20 flex flex-col cursor-pointer group items-center'>
        <img src={advisorLogo} alt={`Advisor ${id}`} className='mb-4' />
        <h4 className='text-2xl text-white'>{title}</h4>
        <h3 className='text-light-dark-para'><a href="#" className='group-hover:text-light-green text-lg font-medium'>{advisorName}</a></h3>
    </div>
))

const Advisors = ()=>{
    return(
        <div className='text-center w-full 2xl:px-[var(--lg-scr-horizontal-space)]'>
            <h2>Advisors</h2>
            <div id="allAdvisors" className='w-full min-h-[70vh] md:min-h-[45vh] xl:min-h-[70vh] mt-[-7%] mb-10 xl:mb-0 grid grid-cols-2 xl:flex-nowrap py-10 xl:py-0 md:flex items-center justify-around'>
                {singleAdvisor}
            </div>
        </div>
    )
}
export default Advisors;