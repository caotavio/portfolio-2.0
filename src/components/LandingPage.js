import React from 'react';

function LandingPage() {
  return (
    <div className="flex flex-col px-1 justify-center w-full mx-auto h-screen sm:w-5/6 md:w-3/4 xl:w-1/2">
      <p className="text-base">Hello World! My name is</p>
      <div className="mt-2">
        <h1 className="tracking-wide text-4xl md:text-5xl">O<span className="text-red-700">tav</span>io Araujo.</h1>
        <h3 className="tracking-tight text-2xl md:text-4xl leading-tight mt-2">I build scalable and responsive websites and web applications.</h3>
      </div>
      <h2 className="text-lg text-justify leading-tight mt-6 lg:w-2/3">
        I am a Full Stack Web Developer from Brazil currently based in Ireland. I have a different story (to say the least), but <span
        className="text-red-700">IF</span> you want to cut to the chase just <a href="#">click here</a> and take a look at some of my projects... <span
        className="text-red-700">ELSE</span>, scroll down and get to know a bit more about me.
      </h2>
      <button className="mt-16 text-left">GET IN TOUCH</button>
    </div>
  )
}

export default LandingPage;
