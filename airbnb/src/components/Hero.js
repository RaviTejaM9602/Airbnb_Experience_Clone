import React from "react";
import hero from '../images/hero.png';

export default function Hero(){
  return ( <section>
           <img src={hero} alt="hero-image"/>
           <h1>Online Experiences</h1>
           <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
           </p>
         </section>)
}