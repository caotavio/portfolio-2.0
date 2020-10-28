import React from 'react';
import ProfilePic from '../assets/images/portfolio-photo1.jpg';

function About() {

  return(
    <div id="about" className="text-gray-400 md:px-8 xl:px-1/5">
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div className="text-justify text-base md:text-lg lg:w-2/3 lg:pr-10 xl:pr-24">
          <h2 className="divider pb-5 text-lg sm:text-2xl text-center font-semibold text-lightsaberlight">I. About Me</h2>
          <p>Greetings! I'm Otávio (Tav for some), a developer based in Ireland.</p>
          <p>
            I'm a problem solver and self-motivated Web Developer skilled in building full Web Applications, that means I can work on both
            back and frontend.
          </p>
          <p>
            I've changed career paths 3 years ago from a busy Dental Surgeon and Orthodontist in Brazil to an avid coder and programming enthusiast.
            I started learning code as a personal challenge. Well, this hobby, became a passion (as in I couldn't do anything else with my free time
            other than code), so I decided to start a more structured course in Web Development with JavaScript, Node.JS, HTML and CSS.
          </p>
          <p>
            A year later I had to make a big move... I quit in my job in Brazil and moved to Ireland to sharpen my English skills and also to be able
            to dedicate myself fully to coding and making a career out of it. I'm 31 now and it has been a beautiful journey so far. Since I moved here
            I was able to reach C2 (proficient) level in English and secured a job as a Full Stack Web Developer for a Digital Marketing company.
          </p>
          <p>
            Now I am capable of creating web apps and websites using not only JavaScript, but also TypeScript, Node.js, C#, React and Angular among other
            technologies listed below. This portfolio itself was made from scratch using React and Tailwind, which is a highly customizable utility-first
            CSS framework.
          </p>
        </div>
        <div className="relative flex justify-center mt-10 sm:mt-24 lg:mt-64 pb-11/12 w-full sm:pb-2/3 sm:w-3/4 md:w-3/5 lg:w-2/5">
          <img src={ProfilePic} className="shadow-2xl rounded-md absolute mx-auto w-4/5 xl:w-full object-cover" alt="Profile-pic"/>
        </div>
      </div>
    </div>
  )
}

export default About;