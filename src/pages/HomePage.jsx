import React from 'react';

import Hero from "newComponents/Home/Hero.jsx";
import Concerns from 'newComponents/Home/Concerns';
import Features from 'newComponents/Home/Features';
import KeyAspects from 'newComponents/Home/KeyAspects';
import CoursePlans from 'newComponents/Home/CoursePlans';
import Tutor from 'newComponents/Home/Tutor';
import StartJourneyHero from 'newComponents/Home/StartJourney';
import TrialLesson from "newComponents/Home/TrialLesson.jsx";
import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";
import SEO from 'Seo.jsx';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

export default function HomePage(props){
  
  return (
      <AnimationRevealPage>
        <SEO language = {props.language} url=""/>
        <Header language = {props.language} />
        <Hero language = {props.language}/>
        <Features language = {props.language}/>
        {/* <Concerns language = {props.language}/> */}
        <KeyAspects language = {props.language}/>
        <CoursePlans language = {props.language}/>
        <Tutor language = {props.language}/>
        <TrialLesson language = {props.language}/>
        
        {/* <TestimonialComponent language = {props.language} isHome={true}/> */}
        <Footer language = {props.language}/>
      </AnimationRevealPage>
  );
}
