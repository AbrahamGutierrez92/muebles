import React from 'react';
import {hero} from "../data";
import Stats from "../components/Stats";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;

  return <section className="h-full max-h-[850px] w-full bg-hero bg-right lg:bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28">

    <div className="container mx-auto text-center">
      <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]">{title}</h1>

      <h2 className="mb-[30px] max-w-[627px] mx-auto lg:mb-[64px] lg:text-xl">{subtitle}</h2>

      <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]" >{buttonText}</button>

      <div className="-top-[70px] relative">
        <Stats/>
      </div>

    </div>

  </section>;
};

export default Hero;
