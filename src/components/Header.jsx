import Logo from '/src/assets/Logo.svg'
import React from 'react'
import MobileNav from '/src/components/MobileNav.jsx'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

const Header = () => {
    const [burgerIcon, setburgerIcon] = React.useState(false)

    function toogleIcon(){
        setburgerIcon(preValue => !preValue)
    }

    useGSAP(()=>{

      const Header = document.querySelector('header')
      const tl = gsap.timeline()
      const menuItems = document.querySelectorAll('nav a')


      tl.from(menuItems,{
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.inOut'
      })
        tl.from('.headerSocialIcons',{
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: 'expo.inOut'
      })
      gsap.to(Header,{
        minHeight: '10vh',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0,0,0,0.5)',
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger:{
          trigger: 'body',
          start: '1% top',
          end: '2% top',
          scrub: 2,
        }
      })
     
    })
  return (
    <header className='w-full z-[1000] min-h-[15vh] back bg-black flex items-center justify-between px-6 lg:px-0 lg:justify-around sticky top-0 2xl:px-[var(--lg-scr-horizontal-space)]'>
      <div className='w-1/4 z-[200]'>
        <img src={Logo} alt="Fango App Logo" />
      </div>
      <nav className='space-x-8 w-1/2 pl-5 hidden lg:block'>
        <a href="#" className='headerLinks'>$FANGO</a>
        <a href="#" className='headerLinks'>The App</a>
        <a href="#" className='headerLinks'>About Us</a>
        <a href="#" className='headerLinks'>Contact Us</a>
      </nav>
      <div className='space-x-5 hidden lg:block'>
        <a className="headerSocialIcons" href="">
          <svg className="socialIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            
          >
            <path d="M6.82943 1.66602H13.8294C16.4961 1.66602 18.6628 3.83268 18.6628 6.49935V13.4993C18.6628 14.7812 18.1535 16.0106 17.2471 16.917C16.3407 17.8235 15.1113 18.3327 13.8294 18.3327H6.82943C4.16276 18.3327 1.99609 16.166 1.99609 13.4993V6.49935C1.99609 5.21747 2.50532 3.98809 3.41174 3.08167C4.31817 2.17524 5.54755 1.66602 6.82943 1.66602ZM6.66276 3.33268C5.86711 3.33268 5.10405 3.64875 4.54144 4.21136C3.97883 4.77397 3.66276 5.53703 3.66276 6.33268V13.666C3.66276 15.3243 5.00443 16.666 6.66276 16.666H13.9961C14.7917 16.666 15.5548 16.3499 16.1174 15.7873C16.68 15.2247 16.9961 14.4617 16.9961 13.666V6.33268C16.9961 4.67435 15.6544 3.33268 13.9961 3.33268H6.66276ZM14.7044 4.58268C14.9807 4.58268 15.2456 4.69243 15.441 4.88778C15.6363 5.08313 15.7461 5.34808 15.7461 5.62435C15.7461 5.90062 15.6363 6.16557 15.441 6.36092C15.2456 6.55627 14.9807 6.66602 14.7044 6.66602C14.4282 6.66602 14.1632 6.55627 13.9679 6.36092C13.7725 6.16557 13.6628 5.90062 13.6628 5.62435C13.6628 5.34808 13.7725 5.08313 13.9679 4.88778C14.1632 4.69243 14.4282 4.58268 14.7044 4.58268ZM10.3294 5.83268C11.4345 5.83268 12.4943 6.27167 13.2757 7.05307C14.0571 7.83447 14.4961 8.89428 14.4961 9.99935C14.4961 11.1044 14.0571 12.1642 13.2757 12.9456C12.4943 13.727 11.4345 14.166 10.3294 14.166C9.22436 14.166 8.16455 13.727 7.38315 12.9456C6.60175 12.1642 6.16276 11.1044 6.16276 9.99935C6.16276 8.89428 6.60175 7.83447 7.38315 7.05307C8.16455 6.27167 9.22436 5.83268 10.3294 5.83268ZM10.3294 7.49935C9.66639 7.49935 9.0305 7.76274 8.56166 8.23158C8.09282 8.70042 7.82943 9.33631 7.82943 9.99935C7.82943 10.6624 8.09282 11.2983 8.56166 11.7671C9.0305 12.236 9.66639 12.4993 10.3294 12.4993C10.9925 12.4993 11.6284 12.236 12.0972 11.7671C12.566 11.2983 12.8294 10.6624 12.8294 9.99935C12.8294 9.33631 12.566 8.70042 12.0972 8.23158C11.6284 7.76274 10.9925 7.49935 10.3294 7.49935Z" />
          </svg>
        </a>
        <a href="" className="headerSocialIcons">
          <svg className="socialIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
           
          >
            <path
              d="M17.5901 3.04562C17.5901 3.04562 19.2089 2.41437 19.074 3.9474C19.0291 4.57866 18.6244 6.78804 18.3096 9.17779L17.2303 16.2568C17.2303 16.2568 17.1404 17.2939 16.3309 17.4742C15.5215 17.6546 14.3074 16.843 14.0825 16.6626C13.9026 16.5274 10.7099 14.4983 9.58561 13.5064C9.27082 13.2358 8.91107 12.6947 9.63057 12.0635L14.3523 7.55458C14.8919 7.0135 15.4316 5.75099 13.1831 7.28404L6.88749 11.5675C6.88749 11.5675 6.16799 12.0184 4.81895 11.6126L1.89596 10.7108C1.89596 10.7108 0.816702 10.0345 2.66043 9.35812C7.15732 7.23891 12.6885 5.07462 17.5901 3.04562Z"
             
            />
          </svg>
        </a>
        <a href="" className="headerSocialIcons">
          <svg className="socialIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
          >
            <g clip-path="url(#clip0_2115_12884)">
              <path
                d="M10.2174 7.72392L16.2885 0.666626H14.8497L9.57839 6.79423L5.36797 0.666626H0.511719L6.87865 9.93277L0.511719 17.3333H1.95052L7.51745 10.8623L11.9638 17.3333H16.8201L10.2171 7.72392H10.2174ZM8.24688 10.0143L7.60169 9.09163L2.46888 1.7497H4.67878L8.82083 7.67496L9.46589 8.59762L14.8504 16.2994H12.6408L8.24688 10.0147V10.0143Z"
                
              />
            </g>
            <defs>
              <clipPath id="clip0_2115_12884">
                <rect
                  width="16.6667"
                  height="16.6667"
                 
                  transform="translate(0.333984 0.666626)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="" className="headerSocialIcons">
          <svg className="socialIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
         
          >
            <path
              d="M5.78255 4.16652C5.78233 4.60855 5.60652 5.03239 5.29381 5.34479C4.98109 5.6572 4.55708 5.83258 4.11505 5.83236C3.67302 5.83214 3.24919 5.65633 2.93678 5.34361C2.62438 5.0309 2.449 4.60688 2.44922 4.16486C2.44944 3.72283 2.62525 3.29899 2.93796 2.98659C3.25068 2.67419 3.67469 2.4988 4.11672 2.49902C4.55875 2.49924 4.98258 2.67505 5.29499 2.98777C5.60739 3.30049 5.78277 3.7245 5.78255 4.16652ZM5.83255 7.06652H2.49922V17.4999H5.83255V7.06652ZM11.0992 7.06652H7.78255V17.4999H11.0659V12.0249C11.0659 8.97486 15.0409 8.69152 15.0409 12.0249V17.4999H18.3326V10.8915C18.3326 5.74986 12.4492 5.94152 11.0659 8.46652L11.0992 7.06652Z"
           
            />
          </svg>
        </a>
      </div>
      <div className='z-[200] lg:hidden'>
        <button onClick={toogleIcon} className='text-3xl cursor-pointer'>{burgerIcon ? '⛌' : '☰'}</button>
      </div>
    {burgerIcon ? <MobileNav btnState={burgerIcon}></MobileNav> : ''}
    </header>
  );
};

export default Header;
