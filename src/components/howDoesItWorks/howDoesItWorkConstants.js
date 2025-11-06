import ArcheryIcon from '/src/assets/howDoesItWorkImages/archery.svg?react'
import PredictIcon from '/src/assets/howDoesItWorkImages/predict.svg?react'
import StarIcon from "/src/assets/howDoesItWorkImages/star.svg?react";
import roundCardBg from '/src/assets/howDoesItWorkImages/roundCardBg.png'

export default [
    {   id: 1,
        title: 'Predict & Win',
        description: `Put your sports knowledge to the test by predicting match outcomes, player performances, and more. The more accurate your predictions, the more rewards you'll earn!`,
        icon: PredictIcon,
        color: ' [&>*]:group-hover:fill-black fill-ligth-green',
        roundCardBg: roundCardBg,
    },
    {   id: 2,
        title: 'Mini-Games & Challenges',
        description: `Take on fun and interactive mini-games and challenges within the app. Whether it's trivia quizzes, skill-based challenges, or virtual competitions, there's always something new to try and rewards to earn.`,
        icon: ArcheryIcon,
        color: ' [&>*]:group-hover:fill-black fill-ligth-green',
        roundCardBg: roundCardBg,
    },
    {   id: 3,
        title: 'Personalized Incentives',
        description: `Receive personalized incentives and rewards tailored to your preferences, interests, and activity level within the app. The more you engage, the more rewarding your experience becomes!`,
        icon: StarIcon,
        color: '[&>*]:group-hover:stroke-black group-hover:stroke-black',
        roundCardBg: roundCardBg,
    },
]