import featurBoxBg from '/src/assets/diamond-bg.png'
import longBg from '/src/assets/feature-long-bg.png'
import longShadow from '/src/assets/long_shadow.png'
import landscapeBg from '/src/assets/live-score-bg.png'
import liveScoreImage from '/src/assets/live-scores-mobile.png'
import newsImage from '/src/assets/News-and-update-mobile.png'
import higlightsImage from '/src/assets/instant-highlights-mobile.png'
import playerAndTeamStats from '/src/assets/player-and-team-stats-mobile.png'
import predictionAndRewardsImage from '/src/assets/prediction-and-rewards-ronaldo-score.png'

const CardsData = [
  { 
    cardTitle: 'Live Scores',
    cardDescription: 'Stay updated with real-time scores from your favorite sports leagues and tournaments.',
    cardImage:(<img className='landScapeImage' src={liveScoreImage} alt='Live Scores Image'></img>),
    cardShadow: (<img src={longShadow} alt='shadow' className='bottomShadow'></img>),
    cardStyle:`landScapeContainer p-8 group rounded-4xl shadow-xl min-h-[200px] sm:col-span-4 lg:col-span-2 col-span-3 row-span-2 sm:row-span-1`,
    cardIcon: (  
    <a href="" className="svg-container">
        <svg
          className="svg-starter"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.453 4.16705C5.38624 4.09893 5.30671 4.04464 5.21896 4.00726C5.13121 3.96989 5.03695 3.95018 4.94158 3.94925C4.8462 3.94832 4.75158 3.9662 4.66311 4.00185C4.57465 4.03751 4.49408 4.09024 4.426 4.15705C3.65618 4.92279 3.04549 5.83331 2.62912 6.83612C2.21275 7.83894 1.99894 8.91423 2 10C1.99887 11.1276 2.22943 12.2433 2.67737 13.278C3.12531 14.3127 3.78108 15.2443 4.604 16.015C4.74252 16.1431 4.9255 16.2121 5.11408 16.2074C5.30265 16.2028 5.48199 16.1248 5.614 15.99C5.93 15.674 5.891 15.171 5.587 14.88C4.9265 14.2506 4.40089 13.4934 4.04212 12.6545C3.68335 11.8156 3.49891 10.9125 3.5 10C3.5 8.15405 4.241 6.48005 5.443 5.26205C5.733 4.96705 5.763 4.47705 5.453 4.16705ZM7.214 5.93005C7.0823 5.79454 6.90225 5.71676 6.71331 5.71376C6.52437 5.71076 6.34194 5.78278 6.206 5.91405C5.66482 6.4479 5.23527 7.08411 4.94238 7.7856C4.64949 8.4871 4.49911 9.23986 4.5 10C4.5 11.692 5.23 13.213 6.393 14.265C6.53038 14.3862 6.70909 14.4498 6.89211 14.4427C7.07512 14.4357 7.24839 14.3584 7.376 14.227C7.704 13.899 7.643 13.383 7.335 13.093C6.91295 12.6961 6.57675 12.2168 6.34714 11.6848C6.11753 11.1529 5.99938 10.5795 6 10C6 8.85005 6.457 7.80605 7.2 7.04005C7.486 6.74605 7.533 6.24805 7.214 5.93005ZM12.786 5.92905C12.9177 5.79354 13.0978 5.71576 13.2867 5.71276C13.4756 5.70976 13.6581 5.78178 13.794 5.91305C14.3353 6.44702 14.7649 7.08339 15.0578 7.78506C15.3507 8.48674 15.501 9.2397 15.5 10C15.5 11.692 14.77 13.213 13.607 14.265C13.4696 14.3862 13.2909 14.4498 13.1079 14.4427C12.9249 14.4357 12.7516 14.3584 12.624 14.227C12.296 13.899 12.357 13.383 12.665 13.093C13.0871 12.6961 13.4233 12.2168 13.6529 11.6848C13.8825 11.1529 14.0006 10.5795 14 10C14 8.85005 13.543 7.80605 12.8 7.04005C12.514 6.74605 12.467 6.24705 12.786 5.92905ZM14.547 4.16705C14.6138 4.09893 14.6933 4.04464 14.781 4.00726C14.8688 3.96989 14.9631 3.95018 15.0584 3.94925C15.1538 3.94832 15.2484 3.9662 15.3369 4.00185C15.4254 4.03751 15.5059 4.09024 15.574 4.15705C16.3438 4.92279 16.9545 5.83331 17.3709 6.83612C17.7873 7.83894 18.0011 8.91423 18 10C18.0011 11.1276 17.7706 12.2433 17.3226 13.278C16.8747 14.3127 16.2189 15.2443 15.396 16.015C15.2575 16.1431 15.0745 16.2121 14.8859 16.2074C14.6974 16.2028 14.518 16.1248 14.386 15.99C14.07 15.674 14.109 15.171 14.414 14.88C15.0743 14.2505 15.5997 13.4933 15.9583 12.6544C16.3169 11.8154 16.5012 10.9124 16.5 10C16.5 8.15405 15.759 6.48005 14.557 5.26205C14.267 4.96705 14.237 4.47705 14.547 4.16705ZM10 8.50005C9.60218 8.50005 9.22065 8.65808 8.93934 8.93939C8.65804 9.22069 8.5 9.60222 8.5 10C8.5 10.3979 8.65804 10.7794 8.93934 11.0607C9.22065 11.342 9.60218 11.5 10 11.5C10.3978 11.5 10.7794 11.342 11.0607 11.0607C11.342 10.7794 11.5 10.3979 11.5 10C11.5 9.60222 11.342 9.22069 11.0607 8.93939C10.7794 8.65808 10.3978 8.50005 10 8.50005Z" />
        </svg>
      </a>
    ),bgImage:(
      <img className='feature-bg-image' src={landscapeBg} alt="" />
    )
  },
  
  { 
    cardTitle: 'Fixtures',
    cardDescription: 'Access, with ease, schedules for upcoming matches and events.',
    cardStyle:"featureBoxContainer p-8 group rounded-4xl shadow-xl min-h-[200px] col-span-3 sm:col-span-2 lg:col-span-1 ",
    cardShadow: (<img src={longShadow} alt='shadow' className='bottomShadow'></img>),
    cardIcon: (
      <a href="#" className="svg-type-2-container">
        <svg
          className="svg-type-2-starter"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3333 7.66667H12.3411M12.3333 12.3333C14.9107 12.3333 17 10.244 17 7.66667C17 5.08934 14.9107 3 12.3333 3C9.756 3 7.66667 5.08934 7.66667 7.66667C7.66667 7.87953 7.68092 8.08906 7.70852 8.29436C7.75392 8.63203 7.77661 8.80086 7.76133 8.90768C7.74542 9.01895 7.72516 9.07891 7.67031 9.17703C7.61767 9.27122 7.52489 9.364 7.33933 9.54956L3.36449 13.5244C3.22997 13.6589 3.16271 13.7262 3.11461 13.8047C3.07197 13.8743 3.04054 13.9501 3.02149 14.0295C3 14.119 3 14.2141 3 14.4044V15.7556C3 16.1912 3 16.409 3.08477 16.5753C3.15934 16.7217 3.27833 16.8407 3.42467 16.9152C3.59105 17 3.80885 17 4.24444 17H5.59565C5.78588 17 5.881 17 5.97051 16.9785C6.04988 16.9595 6.12574 16.928 6.19533 16.8854C6.27382 16.8373 6.34108 16.77 6.4756 16.6355L10.4504 12.6607C10.636 12.4751 10.7288 12.3823 10.823 12.3297C10.9211 12.2748 10.981 12.2546 11.0923 12.2387C11.1991 12.2234 11.368 12.2461 11.7056 12.2915C11.9109 12.3191 12.1205 12.3333 12.3333 12.3333Z"
            stroke-width="1.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    ),bgImage:(
      <img className='feature-bg-image' src={featurBoxBg} alt="" />
    )
  },
  { 
    cardTitle: 'Player & Team Stats',
    cardDescription: 'Dive deep into player and team statistics, including performance metrics and historical data.',
    cardShadow: (<img src={longShadow} alt='shadow' className='bottomShadow'></img>),
    cardImage:(<img className='feature-card-img featureLongImage xl:w-[85%]' src={playerAndTeamStats} alt='Player & Team Stats'></img>),
    cardStyle:
      "featureLongContainer group p-8 rounded-4xl shadow-xl sm:row-span-4 row-span-2 col-span-3 lg:row-span-2 min-h-[200px] sm:col-span-2 lg:col-span-1 ",
      bgImage:( 
        <img className='feature-bg-image' src={longBg} alt="" />
      )
  },
  { 
    cardTitle: 'News & Updates',
    cardDescription: 'Get the latest news, articles, and updates from the world of sports.',
    cardImage:(<img className='feature-card-img landScapeImage' src={newsImage} alt='News & Updates'></img>),
    cardShadow: (<img src={longShadow} alt='shadow' className='bottomShadow'></img>),
    cardStyle:
      "landScapeContainer p-8 group rounded-4xl shadow-xl min-h-[200px] col-span-3 sm:col-span-2 lg:col-span-2 sm:row-span-4 lg:row-span-1",
    cardIcon: (
      <a href="#" className="svg-type-2-container">
        <svg
          className="svg-type-2-starter"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6667 11.6667V5.00004M11.6667 11.6667L16.7517 14.5725C16.8277 14.616 16.9137 14.6388 17.0013 14.6386C17.0888 14.6383 17.1748 14.6151 17.2506 14.5713C17.3263 14.5274 17.3892 14.4644 17.433 14.3886C17.4768 14.3127 17.4999 14.2268 17.5 14.1392V2.52754C17.5 2.43992 17.477 2.35383 17.4333 2.27789C17.3896 2.20195 17.3267 2.13883 17.2509 2.09486C17.1751 2.05089 17.0891 2.02761 17.0015 2.02735C16.9139 2.02708 16.8277 2.04985 16.7517 2.09337L11.6667 5.00004M11.6667 11.6667H5.83333M11.6667 5.00004H5.83333C4.94928 5.00004 4.10143 5.35123 3.47631 5.97635C2.85119 6.60147 2.5 7.44932 2.5 8.33337C2.5 9.21743 2.85119 10.0653 3.47631 10.6904C4.10143 11.3155 4.94928 11.6667 5.83333 11.6667M5.83333 11.6667L6.46417 16.0834C6.52999 16.5131 6.76273 16.8995 7.11182 17.1585C7.46091 17.4176 7.89814 17.5284 8.32849 17.467C8.75884 17.4055 9.14754 17.1766 9.41013 16.8302C9.67271 16.4837 9.78796 16.0477 9.73083 15.6167L9.16667 11.6667H5.83333Z"
            stroke-width="1.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    ),bgImage:(
      <img className='feature-bg-image' src={landscapeBg} alt="" />
    )
  },
  { 
    cardTitle: 'Personalized Content',
    cardDescription: 'Receive tailored content recommendations based on your preferences, favorite teams, and leagues.',
    cardStyle:"featureBoxContainer p-8 group rounded-4xl shadow-xl min-h-[250px] col-span-3 sm:row-span-1 lg:row-span-1 sm:col-span-2 lg:col-span-1",
    cardShadow: (<img src={longShadow} alt='shadow' className='bottomShadow'></img>),
    cardIcon: (
      <a href="#" className="svg-type-2-container">
        <svg
          className="svg-type-2-starter"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M12 5.33379L10.6667 12.0005M21.3333 5.33379L20 12.0005M28 12.0005H4M10.4 26.6671H21.6C23.8402 26.6671 24.9603 26.6671 25.816 26.2311C26.5686 25.8477 27.1805 25.2357 27.564 24.4831C28 23.6274 28 22.5073 28 20.2671V11.7338C28 9.49358 28 8.37347 27.564 7.51782C27.1805 6.76518 26.5686 6.15325 25.816 5.76976C24.9603 5.33379 23.8402 5.33379 21.6 5.33379H10.4C8.15979 5.33379 7.03969 5.33379 6.18404 5.76976C5.43139 6.15325 4.81947 6.76518 4.43597 7.51782C4 8.37347 4 9.49358 4 11.7338V20.2671C4 22.5073 4 23.6274 4.43597 24.4831C4.81947 25.2357 5.43139 25.8477 6.18404 26.2311C7.03969 26.6671 8.15979 26.6671 10.4 26.6671ZM20 19.3338L13.3333 23.3338V15.3338L20 19.3338Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    ),bgImage:(
      <img className='feature-bg-image' src={featurBoxBg} alt="" />
    )
  },
  { 
    cardTitle: 'Prediction & Rewards',
    cardDescription: 'Enjoy instant access to highlights from Saudi Pro League matches, including goals, key plays, and memorable moments.',
        cardShadow: (<img src={longShadow} alt='shadow' className='bottomShadow'></img>),
    cardImage: (<img className='feature-card-img featureLongImage -translate-x-[4%] xl:w-[85%]' src={predictionAndRewardsImage} alt='Prediction & Rewards'></img>),
    cardStyle:
      "featureLongContainer group p-8 rounded-4xl shadow-xl min-h-[200px] sm:row-span-1 lg:row-span-2 col-span-3 sm:col-span-4 lg:col-span-1",
      bgImage:(
        <img className='feature-bg-image' src={longBg} alt="" />
      )
  },
  { 
    cardTitle: 'Instant Highlights',
    cardDescription: 'Enjoy instant access to highlights from Saudi Pro League matches, including goals, key plays, and memorable moments.',
        cardShadow: (<img src={longShadow} alt='shadow' className='bottomShadow'></img>),
    cardImage: (<img className='feature-card-img landScapeImage' src={higlightsImage} alt='Prediction & Rewards'></img>),
    cardStyle:
      "landScapeContainer p-8 group rounded-4xl shadow-xl min-h-[200px] col-span-3 sm:col-span-4 lg:col-span-2",
    cardIcon: (
      <a href="" className="svg-type-2-container">
        <svg
          className="svg-type-2-starter"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M12 4.68286C7.33923 6.33021 4 10.7752 4 16C4 22.6275 9.37258 28 16 28C22.6274 28 28 22.6275 28 16C28 10.7752 24.6608 6.33021 20 4.68286"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    ),bgImage:(
      <img className='feature-bg-image' src={landscapeBg} alt="" />
    )
  },
  
];
export default CardsData;




