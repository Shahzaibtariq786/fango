import LongBottomShadow from "/src/assets/long_shadow.png";
import HeroBg from "/src/assets/Herobackground.png";
import HeroMobileBg from "/src/assets/Heromobilebackground.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  useGSAP(() => {

    const heading = document.querySelector('.heroTitle')

    const headingAnimation = new SplitText(heading,{type: 'words, lines'})

    gsap.from(headingAnimation.words,{
      y: 10,
      opacity: 0,
      duration: 1,
      ease: 'expo.inOut',
      stagger: 0.2,
    })

    const allBtn = document.querySelectorAll(".btnTextAnimate");
    allBtn.forEach(btn=>{
      btn.addEventListener("mouseenter", () => {
      const buttonUpperText = btn.querySelector(".btnUpperText");
      const btnUpperText = new SplitText(buttonUpperText, {
        type: "words,lines",
      });
      const buttonLowerText = btn.querySelector(".btnLowerText");
      const btnLowerText = new SplitText(buttonLowerText, {
        type: "words,lines",
      });
      gsap.to(btnUpperText.words, {
        yPercent: 20,
        opacity: 0,
        duration: 0.5,
        ease: "expo.inOut",
        stagger: 0.1,
      });
      gsap.from(btnLowerText.words, {
        yPercent: 20,
        opacity: 0,
        duration: 0.5,
        ease: "expo.inOut",
        stagger: 0.1,
      });
    });
    btn.addEventListener("mouseleave", () => {
      const buttonUpperText = btn.querySelector(".btnUpperText");
      const btnUpperText = new SplitText(buttonUpperText, {
        type: "words,lines",
      });
      const buttonLowerText = btn.querySelector(".btnLowerText");
      const btnLowerText = new SplitText(buttonLowerText, {
        type: "words,lines",
      });

 gsap.from(btnUpperText.words, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "expo.inOut", 
        stagger: 0.1,
      });

 gsap.from(btnLowerText.words, {
        yPercent: -20,
        opacity: 0,
        duration: 0.5,
        ease: "expo.inOut",
        stagger: 0.1,
      });
    });
    })

    
  });

  return (
    <div
      id="hero"
      className="min-h-dvh relative w-full text-white px-5 sm:px-10 py-16 font-grosteque 2xl:px-[var(--lg-scr-horizontal-space)]"
    >
      <img
        className="z-10 hidden xl:block absolute top-1/12 left-0 lg:left-[5%] h-full lg:w-[95%] object-cover"
        src={HeroBg}
        alt="News Higlights Updates Mobile together"
      />
      <img
        className="z-10 hidden xl:block absolute -bottom-[15%] left-0 lg:left-[5%] lg:w-[95%] object-cover"
        src={LongBottomShadow}
        alt="Long Bottom Shadow"
      />
      <img
        className="z-10 xl:hidden absolute top-1/2 lg:top-2/6 xl:top-2/3 left-0 xl:left-[5%] h-[70%] sm:h-3/4 w-full object-contain sm:object-cover"
        src={HeroMobileBg}
        alt="Notifications Updates mobiles together"
      />
      <div id="hero-title" className="w-full z-20 relative">
        <h1 className="heroTitle lg:w-4/6 sm:w-full xl:text-nowrap leading-15 sm:leading-22 text-5xl sm:text-[5rem] font-extrabold font-grosteque">
          Get Front-Row Access to <span className="xl:block hidden xl:absolute"><br /></span> Sports Magic!
           </h1>
      </div>
      <div id="hero-btn-container" className="relative z-20 py-15 space-x-8">
        <button className="btnTextAnimate px-4 py-4 sm:px-6 group text-black font-semibold text-xl rounded-4xl bg-light-green cursor-pointer border-light-green border-[1px]">
       <span className="btnUpperText btnTextBlockType1">Join waitlist</span>
          <span className="opacity-0">Join waitlist</span>
          <span className="btnLowerText btnTextBlockType1">
            Join waitlist
          </span>
          <span className="ml-4 rounded-4xl bg-black stroke-white relative py-[8px] px-[20px]">
            <svg
              className=" transition-all duration-200 ease-linear w-5 h-5 absolute top-1/2 left-1/2 -translate-[50%] group-hover:-translate-x-[20%] group-hover:-translate-y-[70%]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 15.8333L15.8333 5M15.8333 5V15.4M15.8333 5H5.43333"
                strokeWidth="1.42857"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        <button className="sm:px-6 btnTextAnimate overflow-hidden px-4 py-4 group text-light-green font-semibold text-xl rounded-4xl bg-none border-light-green/30 hover:border-light-green transition-colors duration-200 ease-linear border-[1px] cursor-pointer relative">
          <span className="btnUpperText btnTextBlock">Join Token Sale</span>
          <span className="opacity-0">Join Token Sale</span>
          <span className="btnLowerText btnTextBlock">
            Join Token Sale
          </span>
        </button>
      </div>
      <div
        id="heroFeatureIconsContainer"
        className="relative sm:py-6 z-20 w-full  lg:w-[45%] sm:w-3/4 flex flex-wrap items-center gap-4"
      >
        <div className="featureContainer featureContainerType1">
          <a href="" className="heroFeatureIconLink">
            <svg
              className="heroIcon"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.453 4.16705C5.38624 4.09893 5.30671 4.04464 5.21896 4.00726C5.13121 3.96989 5.03695 3.95018 4.94158 3.94925C4.8462 3.94832 4.75158 3.9662 4.66311 4.00185C4.57465 4.03751 4.49408 4.09024 4.426 4.15705C3.65618 4.92279 3.04549 5.83331 2.62912 6.83612C2.21275 7.83894 1.99894 8.91423 2 10C1.99887 11.1276 2.22943 12.2433 2.67737 13.278C3.12531 14.3127 3.78108 15.2443 4.604 16.015C4.74252 16.1431 4.9255 16.2121 5.11408 16.2074C5.30265 16.2028 5.48199 16.1248 5.614 15.99C5.93 15.674 5.891 15.171 5.587 14.88C4.9265 14.2506 4.40089 13.4934 4.04212 12.6545C3.68335 11.8156 3.49891 10.9125 3.5 10C3.5 8.15405 4.241 6.48005 5.443 5.26205C5.733 4.96705 5.763 4.47705 5.453 4.16705ZM7.214 5.93005C7.0823 5.79454 6.90225 5.71676 6.71331 5.71376C6.52437 5.71076 6.34194 5.78278 6.206 5.91405C5.66482 6.4479 5.23527 7.08411 4.94238 7.7856C4.64949 8.4871 4.49911 9.23986 4.5 10C4.5 11.692 5.23 13.213 6.393 14.265C6.53038 14.3862 6.70909 14.4498 6.89211 14.4427C7.07512 14.4357 7.24839 14.3584 7.376 14.227C7.704 13.899 7.643 13.383 7.335 13.093C6.91295 12.6961 6.57675 12.2168 6.34714 11.6848C6.11753 11.1529 5.99938 10.5795 6 10C6 8.85005 6.457 7.80605 7.2 7.04005C7.486 6.74605 7.533 6.24805 7.214 5.93005ZM12.786 5.92905C12.9177 5.79354 13.0978 5.71576 13.2867 5.71276C13.4756 5.70976 13.6581 5.78178 13.794 5.91305C14.3353 6.44702 14.7649 7.08339 15.0578 7.78506C15.3507 8.48674 15.501 9.2397 15.5 10C15.5 11.692 14.77 13.213 13.607 14.265C13.4696 14.3862 13.2909 14.4498 13.1079 14.4427C12.9249 14.4357 12.7516 14.3584 12.624 14.227C12.296 13.899 12.357 13.383 12.665 13.093C13.0871 12.6961 13.4233 12.2168 13.6529 11.6848C13.8825 11.1529 14.0006 10.5795 14 10C14 8.85005 13.543 7.80605 12.8 7.04005C12.514 6.74605 12.467 6.24705 12.786 5.92905ZM14.547 4.16705C14.6138 4.09893 14.6933 4.04464 14.781 4.00726C14.8688 3.96989 14.9631 3.95018 15.0584 3.94925C15.1538 3.94832 15.2484 3.9662 15.3369 4.00185C15.4254 4.03751 15.5059 4.09024 15.574 4.15705C16.3438 4.92279 16.9545 5.83331 17.3709 6.83612C17.7873 7.83894 18.0011 8.91423 18 10C18.0011 11.1276 17.7706 12.2433 17.3226 13.278C16.8747 14.3127 16.2189 15.2443 15.396 16.015C15.2575 16.1431 15.0745 16.2121 14.8859 16.2074C14.6974 16.2028 14.518 16.1248 14.386 15.99C14.07 15.674 14.109 15.171 14.414 14.88C15.0743 14.2505 15.5997 13.4933 15.9583 12.6544C16.3169 11.8154 16.5012 10.9124 16.5 10C16.5 8.15405 15.759 6.48005 14.557 5.26205C14.267 4.96705 14.237 4.47705 14.547 4.16705ZM10 8.50005C9.60218 8.50005 9.22065 8.65808 8.93934 8.93939C8.65804 9.22069 8.5 9.60222 8.5 10C8.5 10.3979 8.65804 10.7794 8.93934 11.0607C9.22065 11.342 9.60218 11.5 10 11.5C10.3978 11.5 10.7794 11.342 11.0607 11.0607C11.342 10.7794 11.5 10.3979 11.5 10C11.5 9.60222 11.342 9.22069 11.0607 8.93939C10.7794 8.65808 10.3978 8.50005 10 8.50005Z" />
            </svg>
          </a>
          <span className="inline-block text-[16px]">Live Scores</span>
        </div>
        <div className="featureContainer featureContainerType2">
          <a href="#" className="heroFeatureIconLink">
            <svg
              className="heroIcon"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3333 7.66667H12.3411M12.3333 12.3333C14.9107 12.3333 17 10.244 17 7.66667C17 5.08934 14.9107 3 12.3333 3C9.756 3 7.66667 5.08934 7.66667 7.66667C7.66667 7.87953 7.68092 8.08906 7.70852 8.29436C7.75392 8.63203 7.77661 8.80086 7.76133 8.90768C7.74542 9.01895 7.72516 9.07891 7.67031 9.17703C7.61767 9.27122 7.52489 9.364 7.33933 9.54956L3.36449 13.5244C3.22997 13.6589 3.16271 13.7262 3.11461 13.8047C3.07197 13.8743 3.04054 13.9501 3.02149 14.0295C3 14.119 3 14.2141 3 14.4044V15.7556C3 16.1912 3 16.409 3.08477 16.5753C3.15934 16.7217 3.27833 16.8407 3.42467 16.9152C3.59105 17 3.80885 17 4.24444 17H5.59565C5.78588 17 5.881 17 5.97051 16.9785C6.04988 16.9595 6.12574 16.928 6.19533 16.8854C6.27382 16.8373 6.34108 16.77 6.4756 16.6355L10.4504 12.6607C10.636 12.4751 10.7288 12.3823 10.823 12.3297C10.9211 12.2748 10.981 12.2546 11.0923 12.2387C11.1991 12.2234 11.368 12.2461 11.7056 12.2915C11.9109 12.3191 12.1205 12.3333 12.3333 12.3333Z"
                strokeWidth="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <span className="inline-block text-[16px]">Fixtures</span>
        </div>
        <div className="featureContainer featureContainerType2">
          <a href="#" className="heroFeatureIconLink">
            <svg
              className="heroIcon"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 11.6667V5.00004M11.6667 11.6667L16.7517 14.5725C16.8277 14.616 16.9137 14.6388 17.0013 14.6386C17.0888 14.6383 17.1748 14.6151 17.2506 14.5713C17.3263 14.5274 17.3892 14.4644 17.433 14.3886C17.4768 14.3127 17.4999 14.2268 17.5 14.1392V2.52754C17.5 2.43992 17.477 2.35383 17.4333 2.27789C17.3896 2.20195 17.3267 2.13883 17.2509 2.09486C17.1751 2.05089 17.0891 2.02761 17.0015 2.02735C16.9139 2.02708 16.8277 2.04985 16.7517 2.09337L11.6667 5.00004M11.6667 11.6667H5.83333M11.6667 5.00004H5.83333C4.94928 5.00004 4.10143 5.35123 3.47631 5.97635C2.85119 6.60147 2.5 7.44932 2.5 8.33337C2.5 9.21743 2.85119 10.0653 3.47631 10.6904C4.10143 11.3155 4.94928 11.6667 5.83333 11.6667M5.83333 11.6667L6.46417 16.0834C6.52999 16.5131 6.76273 16.8995 7.11182 17.1585C7.46091 17.4176 7.89814 17.5284 8.32849 17.467C8.75884 17.4055 9.14754 17.1766 9.41013 16.8302C9.67271 16.4837 9.78796 16.0477 9.73083 15.6167L9.16667 11.6667H5.83333Z"
                strokeWidth="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          <span className="inline-block text-[16px]">News and Updates</span>
        </div>
        <div className="featureContainer featureContainerType2">
          <a href="#" className="heroFeatureIconLink">
            <svg
              id="playerStatisticsIcon"
              className="heroIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3327 5.83333C13.3327 7.67428 11.8403 9.16667 9.99935 9.16667C8.1584 9.16667 6.66602 7.67428 6.66602 5.83333C6.66602 3.99238 8.1584 2.5 9.99935 2.5C11.8403 2.5 13.3327 3.99238 13.3327 5.83333Z"
                strokeWidth="1.21622"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99935 11.6667C6.77769 11.6667 4.16602 14.2783 4.16602 17.5H15.8327C15.8327 14.2783 13.221 11.6667 9.99935 11.6667Z"
                strokeWidth="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <span className="inline-block text-[16px]">Live Scores</span>
        </div>
        <div className="featureContainer featureContainerType2">
          <a href="#" className="heroFeatureIconLink">
            <svg
              className="featureIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.8333 16.6667V15C10.8333 12.6989 8.96785 10.8334 6.66667 10.8334C4.36548 10.8334 2.5 12.6989 2.5 15V16.6667H10.8333ZM10.8333 16.6667H17.5V15.8334C17.5 13.3788 15.6345 11.6667 13.3333 11.6667C12.1556 11.6667 11.0919 12.1879 10.3341 13.026M9.16667 5.83337C9.16667 7.21409 8.04738 8.33337 6.66667 8.33337C5.28595 8.33337 4.16667 7.21409 4.16667 5.83337C4.16667 4.45266 5.28595 3.33337 6.66667 3.33337C8.04738 3.33337 9.16667 4.45266 9.16667 5.83337ZM15 7.50004C15 8.42052 14.2538 9.16671 13.3333 9.16671C12.4129 9.16671 11.6667 8.42052 11.6667 7.50004C11.6667 6.57957 12.4129 5.83337 13.3333 5.83337C14.2538 5.83337 15 6.57957 15 7.50004Z"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <span className="inline-block text-[16px]">Live Scores</span>
        </div>
        <div className="featureContainer featureContainerType2">
          <a href="#" className="featureIconLink">
            <svg
              className="heroIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.37052 3.47825C9.56342 2.92332 9.65986 2.64586 9.80248 2.56896C9.92591 2.5024 10.0745 2.5024 10.198 2.56896C10.3406 2.64586 10.437 2.92332 10.6299 3.47825L11.9052 7.14691C11.9601 7.30485 11.9875 7.38382 12.037 7.44263C12.0807 7.49458 12.1364 7.53507 12.1993 7.56057C12.2705 7.58944 12.3541 7.59115 12.5213 7.59455L16.4045 7.67369C16.9918 7.68566 17.2855 7.69164 17.4027 7.80352C17.5042 7.90034 17.5501 8.0417 17.5249 8.17966C17.4959 8.33906 17.2618 8.51653 16.7936 8.87146L13.6986 11.218C13.5654 11.319 13.4987 11.3695 13.4581 11.4347C13.4222 11.4923 13.4009 11.5578 13.3961 11.6255C13.3906 11.7022 13.4148 11.7822 13.4633 11.9423L14.588 15.6598C14.7581 16.2221 14.8432 16.5033 14.773 16.6494C14.7122 16.7757 14.592 16.8631 14.453 16.8818C14.2924 16.9034 14.0513 16.7357 13.5691 16.4001L10.381 14.1816C10.2438 14.0861 10.1751 14.0384 10.1006 14.0199C10.0347 14.0035 9.96579 14.0035 9.8999 14.0199C9.82532 14.0384 9.75669 14.0861 9.61944 14.1816L6.43138 16.4001C5.94915 16.7357 5.70803 16.9034 5.54745 16.8818C5.40847 16.8631 5.28823 16.7757 5.22749 16.6494C5.1573 16.5033 5.24237 16.2221 5.41249 15.6598L6.5372 11.9423C6.58562 11.7822 6.60983 11.7022 6.60438 11.6255C6.59956 11.5578 6.57828 11.4923 6.54237 11.4347C6.50172 11.3695 6.4351 11.319 6.30186 11.218L3.20682 8.87146C2.73866 8.51653 2.50458 8.33906 2.47551 8.17966C2.45036 8.0417 2.49629 7.90034 2.59773 7.80352C2.71494 7.69164 3.00863 7.68566 3.596 7.67369L7.47917 7.59455C7.64634 7.59115 7.72993 7.58944 7.80115 7.56057C7.86406 7.53507 7.91979 7.49458 7.96348 7.44263C8.01295 7.38382 8.0404 7.30485 8.0953 7.14691L9.37052 3.47825Z"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          <span className="inline-block text-[16px]">Live Scores</span>
        </div>
        <div className="featureContainer featureContainerType1">
          <a href="#" className="featureIconLink">
            <svg
              className="heroIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M4.14148 6.15244L9.08942 3.77813C9.37375 3.64169 9.68509 3.57086 10.0005 3.57086C10.3158 3.57086 10.6272 3.64169 10.9115 3.77813L15.8594 6.15244C16.0362 6.23719 16.1854 6.37026 16.2898 6.53624C16.3942 6.70223 16.4494 6.89436 16.4492 7.09043V7.67434C16.4491 9.35633 16.0258 11.0113 15.2183 12.4867C14.4108 13.9622 13.2451 15.2108 11.8284 16.1175L10.6723 16.8573C10.4717 16.9857 10.2386 17.0539 10.0005 17.0539C9.76233 17.0539 9.52918 16.9857 9.32861 16.8573L8.17253 16.1187C6.75568 15.2119 5.5898 13.9631 4.78229 12.4874C3.97477 11.0117 3.55159 9.35653 3.55172 7.67434V7.09043C3.55172 6.69061 3.78152 6.32597 4.14148 6.15244ZM8.3273 2.19291L3.38053 4.56722C2.90504 4.79547 2.50373 5.15344 2.22285 5.59987C1.94196 6.04629 1.79295 6.563 1.79297 7.09043V7.67434C1.79287 9.6515 2.29027 11.5969 3.23937 13.3314C4.18846 15.0659 5.55873 16.5336 7.22398 17.5995L8.38006 18.3382C8.86377 18.6479 9.4261 18.8125 10.0005 18.8125C10.5748 18.8125 11.1371 18.6479 11.6208 18.3382L12.7769 17.5995C14.4422 16.5336 15.8124 15.0659 16.7615 13.3314C17.7106 11.5969 18.208 9.6515 18.2079 7.67434V7.09043C18.2079 6.01408 17.5912 5.0327 16.6204 4.56722L11.6724 2.19291C11.1506 1.9425 10.5792 1.8125 10.0005 1.8125C9.42167 1.8125 8.84911 1.9425 8.3273 2.19291ZM10.5515 12.3292C10.4651 12.4097 10.3958 12.5067 10.3478 12.6146C10.2997 12.7225 10.2739 12.8389 10.2718 12.957C10.2697 13.0751 10.2914 13.1924 10.3356 13.3019C10.3799 13.4114 10.4457 13.5108 10.5292 13.5943C10.6127 13.6778 10.7122 13.7437 10.8217 13.7879C10.9312 13.8321 11.0485 13.8538 11.1665 13.8518C11.2846 13.8497 11.401 13.8238 11.5089 13.7758C11.6168 13.7277 11.7139 13.6584 11.7944 13.572C12.4686 12.899 13.1052 11.9328 13.5719 10.9984C14.0245 10.0932 14.3973 9.06023 14.3973 8.26059C14.3973 8.02736 14.3047 7.80369 14.1398 7.63878C13.9748 7.47386 13.7512 7.38121 13.5179 7.38121C13.2847 7.38121 13.0611 7.47386 12.8961 7.63878C12.7312 7.80369 12.6386 8.02736 12.6386 8.26059C12.6386 8.63344 12.4252 9.35922 11.9984 10.2128C11.5857 11.0371 11.0498 11.8297 10.5515 12.3292Z"
              />
            </svg>
          </a>

          <span className="inline-block text-[16px]">Live Scores</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
