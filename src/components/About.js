import React from 'react';

function About() {
  const ProfilePic = '../images/portfolio-photo1.jpg'; 

  return(
    <div id="about" className="text-gray-400 py-10 md:px-8 xl:px-1/5">
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div className="text-justify text-base md:text-lg lg:w-2/3 lg:pr-10 xl:pr-24">
          <h2 className="pb-5 text-2xl font-semibold text-lightsaberlight">I. About Me ----------</h2>
          <p>Greetings! I'm Otávio (Tav for some), a developer based in Ireland.</p>
          <p>
            I am a problem solver and self-motivated Web Developer skilled in building full Web Applications, that means I can work on both
            back and frontend.
          </p>
          <p>
            I've changed career paths 3 years ago from a busy Dental Surgeon and Orthodontist in Brazil to an avid coder and programming enthusiast.
            I started learning code as a challenge because I love learning new abilites. Well, sufice to say that it turned into a hobby, then it
            became a passion (as in I could not do anything else with my free time other than get in front of my laptop and build applications), so
            I've decided to start a more structured course in Web Development with JavaScript, Node.JS, HTML and CSS.
          </p>
          <p>
            A year later this passion took over my life and I had to make a big move... I quit in my job in Brazil and moved to Ireland to sharpen
            my English skills and also to be able to dedicate myself fully to coding and making a career out of it.
            I'm 31 now and it has been a beautiful journey so far. Since I moved here I was able to reach C1 (advanced) level in English and secured
            a job as a Full Stack Web Developer for a Digital Marketing company here in Ireland.
          </p>
          <p>
            With a lot of hard work I am now capable of creating web apps and websites using a few languages other than JavaScript (they are
            listed below). My main focus now is to keep coding and honing my skills not only at the company I work in, but with personal projects.
          </p>
        </div>
        <div className="relative flex justify-center mt-10 sm:mt-24 lg:mt-64 pb-11/12 w-full sm:pb-2/3 sm:w-3/4 md:w-3/5 lg:w-2/5 shadow-lg">
          <img src={ProfilePic} className="rounded-md absolute mx-auto w-4/5 xl:w-full object-cover" alt="Profile-pic"/>
        </div>
      </div>
    </div>
  )
}

export default About;