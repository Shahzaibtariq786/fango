import { useState } from 'react'

import './App.css'
import Cards from '/src/components/Cards.jsx'
import Header from '/src/components/Header.jsx'
import Hero from '/src/components/Hero.jsx'
import Features from '/src/components/Page3.jsx'
import StickyMobiles from '/src/components/StickyMobile.jsx'
import Backers from '/src/components/Backers.jsx'
import Advisors from '/src/components/Advisors.jsx'
import TeamMembers from '/src/components/FangoTeamCards.jsx'
import FangoPoints from '/src/components/FangoPoints.jsx'
import FangoUtilities from '/src/components/Utilities.jsx'
import UseCases from '/src/components/UseCases.jsx'
import HowDoesItWorksRoundedCards from '/src/components/howDoesItWorks/HowDoesItWork.jsx'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
export default function App(){
  return(
    <>
    <Header></Header>
    <Hero></Hero>
    <Cards></Cards> 
    <Features />
    <StickyMobiles />
    <HowDoesItWorksRoundedCards />
    <Backers/>
    <Advisors/>
    <TeamMembers/>
    <FangoPoints/>
    <FangoUtilities/>
    <UseCases/>
    <Timeline/>
    <Footer/>
    </>
  )
}