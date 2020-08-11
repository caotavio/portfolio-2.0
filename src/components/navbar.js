import React, {useState, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, animateScroll as scroll } from "react-scroll";
import useViewport from '../custom-hooks/useViewport'


function Navbar() {
  const logo = '../images/logo.png';
  const [mobileMenu, setMobileMenu] = useState(false);
  const { width } = useViewport();
  const breakpoint = 640;

  const fade = useSpring({
    from: {opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: mobileMenu ? 1 : 0, transform: `translateX(${mobileMenu ? 0 : -100}%)` }
  });

  if (mobileMenu && width < breakpoint) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }

  return(
    <header className="py-4 sm:flex sm:justify-between sm:items-center lg:px-10">
      <div className="top-0 right-0 flex items-center justify-between px-6 py-5">
        <div className="w-16 sm:w-20 z-10 inset-y-0 left-0 flex items-center">
          <img src={logo} alt="logo"/>
        </div>
        {/* <button className={ mobileMenu ? 'hidden' : 'relative z-10 inset-0 bg-black w-full h-full opacity-50 cursor-default sm:hidden' } onClick={console.log("you clicked me")}></button> */}
        <div className="relative z-10 sm:hidden p-2" onClick={ () => setMobileMenu(!mobileMenu) }>
          <button type="button" className="block text-gray-200 focus:outline-none">
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 2h20v4H0V2zm0 8h20v2H0v-2zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <animated.div className={ mobileMenu ? 'absolute top-0 right-0 w-full flex justify-end h-screen sm:h-auto sm:opacity-100' : 'hidden sm:block'} style={mobileMenu ? fade : {opacity: 1}}>
        <div className="whitespace-no-wrap font-mono px-4 -mt-20 w-full bg-opacity-75 flex flex-col text-center justify-center items-center bg-blue-900 text-xl
                        sm:mt-0 sm:w-auto sm:text-right sm:flex-row sm:text-base sm:bg-opacity-0">
          <Link onClick={ () => setMobileMenu(false) }
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="cursor-pointer flex justify-center items-center text-white font-semibold py-2 px-4 w-4/5 sm:w-full bg-main hover:text-lightsaberlight"><span className="pr-1 text-lightsaberlight">I.</span> About</Link>
          <Link onClick={ () => setMobileMenu(false) }
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="cursor-pointer flex justify-center items-center text-white font-semibold py-2 px-4 mt-5 w-4/5 sm:w-full bg-main hover:text-lightsaberlight sm:mt-0 sm:ml-2"><span className="pr-1 text-lightsaberlight">II.</span> Experience</Link>
          <Link onClick={ () => setMobileMenu(false) }
                activeClass="active"
                to="featuredProjects"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="cursor-pointer flex justify-center items-center text-white font-semibold py-2 px-4 mt-5 w-4/5 sm:w-full bg-main hover:text-lightsaberlight sm:mt-0 sm:ml-2"><span className="pr-1 text-lightsaberlight">III.</span> Featured Work</Link>
          <Link onClick={ () => setMobileMenu(false) }
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="cursor-pointer flex justify-center items-center text-white font-semibold py-2 px-4 mt-5 w-4/5 sm:w-full bg-main hover:text-lightsaberlight sm:mt-0 sm:ml-2"><span className="pr-1 text-lightsaberlight">IV.</span> Projects</Link>
          <Link onClick={ () => setMobileMenu(false) }
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="cursor-pointer flex justify-center items-center text-white font-semibold py-2 px-4 mt-5 w-4/5 sm:w-full bg-main hover:text-lightsaberlight sm:mt-0 sm:ml-2"><span className="pr-1 text-lightsaberlight">V.</span> Contact</Link>
          <a className="mt-8 bg-main w-4/5 sm:w-full border-2 border-lightsaberlight rounded-sm sm:border-none flex justify-center items-center sm:mx-4 sm:mt-0" href="#">
            <button className="flex justify-center items-center font-bold tracking-wide uppercase text-lightsaberlight hover:text-main hover:bg-lightsaberlight sm:border-2 sm:border-lightsaberlight sm:rounded-sm px-2 py-1">
                <div className="flex items-center pr-2">
                  <svg className="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                </div>
                <p>Resume</p>
            </button>
          </a>
        </div>
      </animated.div>
    </header>
  )
}

export default Navbar;