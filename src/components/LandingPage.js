import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function LandingPage() {
  return (
    <div className="flex flex-col px-1 justify-center -mt-20 w-full mx-auto h-screen sm:w-5/6 md:w-3/4 xl:w-1/2">
      <p className="text-base uppercase text-gray-500 font-semibold tracking-wide">Hello World! My name is</p>
      <div className="mt-4">
        <h1 className="tracking-wide text-gray-400 text-5xl md:text-6xl">O<span className="text-lightsaberlight">tav</span>io Araujo.</h1>
        <h2 className="tracking-tight text-gray-200 text-2xl md:text-4xl leading-tight mt-2">I build scalable and responsive websites and web applications.</h2>
      </div>
      <h3 className="text-lg text-gray-500 text-justify leading-tight mt-10 lg:w-2/3">
        I am a Full Stack Web Developer from Brazil currently based in Ireland. I have a different story (to say the least), but <span
        className="font-mono text-lightsaberlight font-semibold">IF</span> you want to cut to the chase just <Link activeClass="active" to="featuredProjects" spy={true}
        smooth={true} offset={0} duration={700} className="cursor-pointer font-semibold hover:text-lightsaberlight">click here</Link> and take a look at some
        of my projects... <span className="font-mono text-lightsaberlight font-semibold">ELSE</span>, scroll down and get to know a bit more about me.
      </h3>
      <button className="w-1/2 sm:w-1/5 mt-16 text-center py-3 font-semibold tracking-wider text-lightsaberlight hover:bg-lightsaberlight hover:text-main border-2 rounded-sm border-lightsaberlight">GET IN TOUCH</button>
    </div>
  )
}

export default LandingPage;
