import React, {useState, useEffect} from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { Link, animateScroll as scroll, animateScroll } from "react-scroll";
import useViewport from '../custom-hooks/useViewport'
import useScroll from '../custom-hooks/useScroll';
import ScrollTopButton from './icons/ScrollTopButton';
import Logo from './icons/Logo';

const romanNumerals = ["I", "II", "III", "IV", "V"];
const scrollTo = ["about", "skills", "featuredProjects", "projects", "contact"];
const menuItems = ["About", "Skills", "Featured Work", "Projects", "Contact"];
const config = { mass: 5, tension: 1000, friction: 100 };

function Navbar() {
  // const logo = '../images/logo.png';
  const [mobileMenu, setMobileMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const { width } = useViewport();
  const breakpoint = 1024;
  const scrollShadow = useScroll();
  const scrollTop = () => animateScroll.scrollToTop();
  
  const fade = useSpring({
    from: {opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: mobileMenu ? 1 : 0, transform: mobileMenu ? 'translateX(0%)' : 'translateX(-100%)' }
  });

  const trail = useTrail(menuItems.length, {
    config,
    from: {opacity: 0, transform: 'translate3d(20px, -20px, 0)' },
    to: {opacity: 1, transform: 'translate3d(0px, 0px, 0)' }
  });

  const resumeAnimation = useSpring({
    delay: 1600,
    from: {opacity: 0, transform: 'translate3d(20px,-20px,0)' },
    to: {opacity: 1, transform: 'translate3d(0,0px,0)' }
  });

  if (mobileMenu && width < breakpoint) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return(
    <>
    <header id="nav" className="sticky top-0 z-10 py-4 lg:py-5 bg-main lg:flex lg:justify-between lg:items-center sm:px-2 md:px-4 lg:px-10">
      <div className="flex items-center justify-between px-5">
        <div onClick={() => {scrollTop(); setMobileMenu(false); setChecked(false)}} className="w-16 sm:w-20 z-10 inset-y-0 left-0 flex items-center">
          <Logo />
          {/* <img src={logo} alt="logo"/> */}
        </div>
        <div className="menu-wrap relative flex items-center justify-center z-10 lg:hidden p-2">
          <input type="checkbox" checked={checked} onClick={ () => {setMobileMenu(!mobileMenu); setChecked(!checked) } } className="toggler absolute z-20 cursor-pointer w-8 h-8 opacity-0"/>
          <div className="hamburger z-10 w-10 h-8 flex items-center justify-center animate-fadeIn">
            <div className="saber relative w-6 h-saber rounded-md bg-white flex items-center justify-center"></div>
          </div>
        </div>
      </div>
      <animated.div className={ mobileMenu ? 'absolute top-0 right-0 w-full flex justify-end h-screen lg:h-auto lg:opacity-100' : 'hidden lg:block'} style={mobileMenu ? fade : {opacity: 1}}>
        <div className="font-mono text-gray-400 px-4 -mt-20 w-full bg-opacity-99 flex flex-col text-center justify-center items-center bg-deep text-xl
                        lg:mt-auto lg:w-auto lg:text-right lg:flex-row lg:text-base lg:bg-opacity-0">
          {trail.map((props, index) => (
            <animated.div
              key={menuItems[index]}
              className="whitespace-no-wrap rounded-sm cursor-pointer flex justify-center items-baseline font-semibold py-2 px-4 w-4/5 mt-5 lg:mt-0 lg:w-full bg-tardis lg:bg-main hover:text-lightsaberlight transition ease-in duration-300"
              style={props}
            >
              <Link onClick={ () => {setMobileMenu(false); setChecked(false) }}
                activeClass="active text-lightsaberlight"
                to={scrollTo[index]}
                spy={true}
                smooth='easeOutQuad'
                offset={0}
                duration={700}
                className="w-full"><span className="pr-1 text-base lg:text-sm text-lightsaberlight">{romanNumerals[index]}.</span> {menuItems[index]}</Link>
            </animated.div>
          ))}
          <animated.a className="mt-8 bg-tardis lg:bg-main w-4/5 lg:w-full border border-lightsaberlight rounded-sm lg:border-none flex justify-center items-center lg:mx-4 lg:mt-0" href="https://www.dropbox.com/s/6uonwrup6njwvxx/Otavio-Araujo-CV-2020.pdf?dl=1" style={resumeAnimation}>
            <button className="text-lg lg:text-sm flex justify-center items-center font-semibold tracking-wide uppercase lg:text-lightsaberlight hover:text-main hover:bg-lightsaberlight lg:border lg:border-lightsaberlight lg:rounded-sm px-2 py-3 lg:py-1 transition ease-in duration-300">
                <div className="flex items-center pr-2">
                  <svg className="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                </div>
                <p>Resume</p>
            </button>
          </animated.a>
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