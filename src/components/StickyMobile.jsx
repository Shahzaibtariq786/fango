import stickyImg from '/src/assets/stickyMobileBg.png'
import mobile1 from '/src/assets/singleMobilesImages/mobile-1.png'
import mobile2 from '/src/assets/singleMobilesImages/mobile-2.png'
import mobile3 from '/src/assets/singleMobilesImages/mobile-3.png'
import twoArrowsBg from '/src/assets/shapesBackgroundImages/arrow-both-sides-bg.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const StickyMobile = () => {

    useGSAP(()=>{
        const stickyHeading = document.querySelector('.stickyTitle')
        const mainContainer = document.querySelector('#stickyMobileMain')

        gsap.to(stickyHeading,{
            color: 'black',
            ease: 'power1.inOut',
            duration: 1,
            scrollTrigger:{
                trigger: mainContainer,
                start: '40% top',
                end: '50% bottom',
                scrub: 1,
            }
        })

    })

  return (
    <>
      <div className={`w-full xl:min-h-[100vh] min-h-[fit-content]`} id='stickyMobileMain'>
        <div className={`stickyMobileContainer bg-white xl:bg-transparent xl:sticky top-5 xl:mt-[-30%] w-full min-h-[60vh] pt-12 xl:pt-0 xl:min-h-dvh flex flex-col justify-between xl:justify-around`}>
            <div className='max-w-[600px] text-center mx-auto xl:h-[80%] h-full'>
          <h4>Fango App</h4>
          <h2 className='stickyTitle hidden xl:block'>Engage-to-earn features</h2>
          <h2 className='stickyTitle text-black xl:hidden'>Engage-to-earn features</h2>
          <p className='text-light-dark-para'>
            Elevating Fan Engagement through blockchain technology via Fargo's
            unique Earn to Engage and SocialFi model.
          </p>
        </div>
        <div className='flex center justify-center w-full min-h-[300px]'>
          <img src={`${mobile1}`} className='xl:h-[270px]  xl:w-[130px] h-[200px] w-[100px]  object-cover' alt="Static News Mobile" />
          <img src={`${mobile2}`} className='xl:h-[270px]  xl:w-[130px] h-[200px] w-[100px]  scale-120 mx-5 object-cover' alt="Static Matches Mobile" />
          <img src={`${mobile3}`} className='xl:h-[270px]  xl:w-[130px] h-[200px] w-[100px]  object-cover' alt="Static Video Mobile" />
        </div>
        {/* background Image */}
        <img src={stickyImg} alt="stars on two sides" className='absolute w-full h-full object-cover' />
        </div>
        <div className='bg-white hidden xl:block w-full min-h-dvh'>

        </div>
      </div>
      <div className=' w-full  mt-[-15%] xl:mt-0 flex flex-col items-center justify-end min-h-[50vh] xl:min-h-[90vh] relative bg-white'>
        <img src={twoArrowsBg} alt="Arrow Icons on left and right" className='absolute -top-16 z-10 left-0 2xl:left-[10%] w-full 2xl:w-[80%] h-full object-cover' />
        <div className='max-w-[80%] xl:max-w-[800px] text-center min-h-84 '>
          <h4 className='text-md'>Engage-2-Earn Model</h4>
          <h2 className='text-black'>Unlock Rewards with Fango's
Engage-to-Earn Model!</h2>
          <p className='text-light-dark-para'>
            At Fango, we believe that engaging with your favorite sports should be rewarding in more ways than one. That's where our innovative Engage-to-Earn model comes in, designed to make your sports experience even more exciting.
          </p>
        </div>
      </div>

    </>
  );
};

export default StickyMobile;

 /* .page-id-1136 selector .elementor-post_title{
        max-height: 25px !important;
    } */