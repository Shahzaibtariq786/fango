import AddPerson from '/src/assets/UseCaseImages/add-person.png'
import Person from '/src/assets/UseCaseImages/person.png'
import Star from '/src/assets/UseCaseImages/star-img.png'

export default [
    {
        title: 'Predictions',
        description: 'Wager (meaning Stake/Staking) Fango Tokens/Goals/Points to make predictions on match outcomes and earn rewards for correct predictions.',
        isOpen: true,
        image: AddPerson,
    },
    {
        title: 'The Fango Stadium',
        description: 'Participate in community activities, challenges, and events to earn Fango Tokens/Goals/Points and unlock exclusive perks.',
        isOpen: false,
        image: Person,
    },
    {
        title: 'Rewards Redemption',
        description: 'Redeem Fango Tokens/Goals/Points for a wide range of rewards, including merchandise, ultimate sports experiences, and special offers from Fango partners.',
        isOpen: false,
        image: Star,
    },
]