import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function LandingPage() {
  return (
    <div className="flex flex-col animate-fadeIn px-1 justify-center -mt-16 w-full mx-auto h-screen sm:-mt-10 sm:w-5/6 md:w-3/4 xl:w-1/2">
      <p className="text-sm sm:text-base text-gray-500 font-semibold tracking-wide">Hello there! I'm</p>
      <div className="mt-2">
        <h1 className="tracking-wide text-gray-300 text-3xl sm:text-6xl md:whitespace-no-wrap">O<span className="text-lightsaberlight">tav</span>io Araujo.</h1>
        <h2 className="tracking-tight text-gray-400 text-xl sm:text-3xl leading-tight mt-2">I build scalable and responsive websites and web applications.</h2>
      </div>
      <h3 className="text-base md:text-lg text-gray-500 text-justify leading-tight mt-10 lg:w-2/3">
        I am a Full Stack Web Developer with a passion for writing clean and maintainable code. <span className="font-mono text-lightsaberlight font-semibold">IF</span> you want to take a look at some
        of my projects <Link activeClass="active" to="featuredProjects" spy={true} smooth={true} offset={0} duration={700} className="cursor-pointer font-bold hover:text-lightsaberlight transition ease-in duration-300">click here</Link>... <span className="font-mono text-lightsaberlight font-semibold">ELSE</span>, scroll down and get to know a bit more about me.
      </h3>
      <a className=" cursor-default" href="mailto:otavio.araujodev@gmail.com?subject=Greetings%20from&body=Hello%20there%20Otavio">
        <button className="text-sm lg:text-base whitespace-no-wrap overflow-hidden mx-auto w-2/3 sm:w-1/5 mt-10 text-center py-2 sm:py-3 font-semibold tracking-wider sm:tracking-wide xl:tracking-wider text-lightsaberlight hover:bg-lightsaberlight hover:text-main border rounded-sm border-lightsaberlight transition ease-in duration-300">GET IN TOUCH</button>
      </a>
    </div>
  )
}

export default LandingPage;
