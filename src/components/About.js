import React from 'react';
import ProfilePic from '../assets/images/portfolio-photo1.jpg';

function About() {

  return(
    <div id="about" className="text-gray-400 md:px-8 xl:px-1/5">
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div className="text-justify text-base md:text-lg lg:w-2/3 lg:pr-10 xl:pr-24">
          <h2 className="divider pb-5 text-lg sm:text-2xl text-center font-semibold text-lightsaberlight">I. About Me</h2>
          <p>Greetings! I'm Otávio (Tav for some), a developer currently living in Toronto, Canada.</p>
          <p>
            I'm a problem solver and self-motivated Web Developer skilled in <span className="font-semibold text-lightsaberlight">building full Web Applications</span>,
            which means I can work on both the back and frontend.
          </p>
          <p>
          I changed career paths 3 years ago from a busy Dental Surgeon and Orthodontist in Brazil to an avid coder and programming enthusiast. I started learning code as a
          personal challenge. Well, this hobby became a passion (as in I couldn't do anything else with my free time other than code), so I decided to start a more structured
          course in Web Development with <span className="font-semibold text-lightsaberlight">JavaScript</span>, <span className="font-semibold text-lightsaberlight">Node.JS</span>, <span className="font-semibold text-lightsaberlight">HTML</span> and <span className="font-semibold text-lightsaberlight">CSS</span>.
          </p>
          <p>
          A year later, I decided to quit my job in Brazil and moved to Ireland to sharpen my English skills and also to be able to dedicate myself fully to coding and pursue
          a career in it. I'm 32 now, and it has been a beautiful journey so far. Since I moved to Ireland, I reached C2 (proficient) level in English and secured a job as a <span className="font-semibold text-lightsaberlight">Full Stack Web Developer</span> for a Digital Marketing agency.
          </p>
          <p>
          Now, in this next chapter, I am a student at Cambrian College for Mobile Application Development in Toronto. Furthermore, with my previous experience, I can create web apps and websites using JavaScript and <span className="font-semibold text-lightsaberlight">TypeScript</span>, with <span className="font-semibold
          text-lightsaberlight">React</span> and <span className="font-semibold text-lightsaberlight">Angular</span> among other technologies listed below. This portfolio
          itself was built from scratch using <span className="font-semibold text-lightsaberlight">React and Tailwind</span>, which is a highly customizable utility-first
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