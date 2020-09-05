import React, {useState, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, animateScroll as scroll, animateScroll } from "react-scroll";
import useViewport from '../custom-hooks/useViewport'
import useScroll from '../custom-hooks/useScroll';
import ScrollTopButton from './icons/ScrollTopButton';


function Navbar() {
  const logo = '../images/logo.png';
  const [mobileMenu, setMobileMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const { width } = useViewport();
  const breakpoint = 768;
  const scrollShadow = useScroll();
  const scrollTop = () => animateScroll.scrollToTop();

  const fade = useSpring({
    from: {opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: mobileMenu ? 1 : 0, transform: `translateX(${mobileMenu ? 0 : -100}%)` }
  });

  if (mobileMenu && width < breakpoint) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return(
    <>
    <header id="nav" className="sticky top-0 z-10 py-4 md:py-5 bg-main md:flex md:justify-between md:items-center sm:px-2 md:px-4 lg:px-10">
      <div className="flex items-center justify-between px-5">
        <div className="w-16 sm:w-20 z-10 inset-y-0 left-0 flex items-center">
          <img src={logo} alt="logo"/>
        </div>
        <div className="menu-wrap relative flex items-center justify-center z-10 md:hidden p-2">
          <input type="checkbox" checked={checked} onClick={ () => {setMobileMenu(!mobileMenu); setChecked(!checked) } } className="toggler absolute z-20 cursor-pointer w-8 h-8 opacity-0"/>
          <div className="hamburger z-10 w-10 h-8 flex items-center justify-center">
            <div className="saber relative w-6 h-saber rounded-md bg-white flex items-center justify-center"></div>
          </div>
        </div>
      </div>
      <animated.div className={ mobileMenu ? 'absolute top-0 right-0 w-full flex justify-end h-screen md:h-auto md:opacity-100' : 'hidden md:block'} style={mobileMenu ? fade : {opacity: 1}}>
        <div className="font-mono text-gray-400 px-4 -mt-20 w-full bg-opacity-99 flex flex-col text-center justify-center items-center bg-deep text-xl
                        md:mt-auto md:w-auto md:text-right md:flex-row md:text-base md:bg-opacity-0">
          <Link onClick={ () => {setMobileMenu(false); setChecked(false) }}
                activeClass="active text-lightsaberlight"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="whitespace-no-wrap rounded-sm cursor-pointer flex justify-center items-baseline font-semibold py-2 px-4 w-4/5 md:w-full bg-tardis md:bg-main hover:text-lightsaberlight transition ease-in duration-500"><span className="pr-1 text-base md:text-sm text-lightsaberlight">I.</span> About</Link>
          <Link onClick={ () => {setMobileMenu(false); setChecked(false) } }
                activeClass="active text-lightsaberlight"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="whitespace-no-wrap rounded-sm cursor-pointer flex justify-center items-baseline font-semibold py-2 px-4 mt-5 w-4/5 md:w-full bg-tardis md:bg-main hover:text-lightsaberlight transition ease-in duration-500 md:mt-0 md:ml-2"><span className="pr-1 text-base md:text-sm text-lightsaberlight">II.</span> Experience</Link>
          <Link onClick={ () => {setMobileMenu(false); setChecked(false) } }
                activeClass="active text-lightsaberlight"
                to="featuredProjects"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="whitespace-no-wrap rounded-sm cursor-pointer flex justify-center items-baseline font-semibold py-2 px-4 mt-5 w-4/5 md:w-full bg-tardis md:bg-main hover:text-lightsaberlight transition ease-in duration-500 md:mt-0 md:ml-2"><span className="pr-1 text-base md:text-sm text-lightsaberlight">III.</span> Featured Work</Link>
          <Link onClick={ () => {setMobileMenu(false); setChecked(false) } }
                activeClass="active text-lightsaberlight"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="whitespace-no-wrap rounded-sm cursor-pointer flex justify-center items-baseline font-semibold py-2 px-4 mt-5 w-4/5 md:w-full bg-tardis md:bg-main hover:text-lightsaberlight transition ease-in duration-500 md:mt-0 md:ml-2"><span className="pr-1 text-base md:text-sm text-lightsaberlight">IV.</span> Projects</Link>
          <Link onClick={ () => {setMobileMenu(false); setChecked(false) } }
                activeClass="active text-lightsaberlight"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                className="whitespace-no-wrap rounded-sm cursor-pointer flex justify-center items-baseline font-semibold py-2 px-4 mt-5 w-4/5 md:w-full bg-tardis md:bg-main hover:text-lightsaberlight transition ease-in duration-500 md:mt-0 md:ml-2"><span className="pr-1 text-base md:text-sm text-lightsaberlight">V.</span> Contact</Link>
          <a className="mt-8 bg-tardis md:bg-main w-4/5 md:w-full border border-lightsaberlight rounded-sm md:border-none flex justify-center items-center md:mx-4 md:mt-0" href="#">
            <button className="text-lg md:text-sm flex justify-center items-center font-semibold tracking-wide uppercase md:text-lightsaberlight hover:text-main hover:bg-lightsaberlight md:border md:border-lightsaberlight md:rounded-sm px-2 py-3 md:py-1 transition ease-in duration-300">
                <div className="flex items-center pr-2">
                  <svg className="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                </div>
                <p>Resume</p>
            </button>
          </a>
        </div>
      </animated.div>
    </header>
    <div onClick={() => {scrollTop(); setMobileMenu(false); setChecked(false)}} className="fixed z-10 bottom-0 right-0 p-5">
      <ScrollTopButton />
    </div>
    </>
  )
}

export default Navbar;