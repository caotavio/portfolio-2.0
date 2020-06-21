import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.generated.css';

import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const Background = '../images/i-hungry-3.png';
  const ProfilePic = '../images/profile.jpg';

  return (
    <>
    {/* NAVBAR */}
    <Navbar />

    <main className="px-6 flex-grow text-white">
      <section> {/* LANDING Container  */}
        <div className="flex flex-col px-1 justify-center w-full mx-auto h-screen sm:w-5/6 md:w-3/4 xl:w-1/2">
          <p className="text-base">Hello World! My name is</p>
          <div className="mt-2">
            <h1 className="tracking-wide text-4xl md:text-5xl">O<span className="text-red-700">tav</span>io Carvalho.</h1>
            <h3 className="tracking-tight text-2xl md:text-4xl leading-tight mt-2">I build scalable and responsive websites and web applications.</h3>
          </div>
          <h2 className="text-lg text-justify leading-tight mt-6 lg:w-2/3">
            I am a Full Stack Web Developer from Brazil currently based in Ireland. I have a different story (to say the least), but <span
            className="text-red-700">IF</span> you want to cut to the chase just <a href="#">click here</a> and take a look at some of my projects... <span
            className="text-red-700">ELSE</span>, scroll down and get to know a bit more about me.
          </h2>
          <button className="mt-16 text-left">GET IN TOUCH</button>
        </div>
      </section>

      <section> {/* ABOUT ME */}
        <div className="py-10 lg:px-64 xl:px-1/5">
          <h2 className="text-2xl font-semibold">I. About Me ----------</h2>
          <div className="flex flex-col lg:flex-row mt-10">
            <div className="my-auto lg:w-2/3 lg:pr-10 xl:pr-24">
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
                a job as as a Full Stack Web Developer for a Digital Marketing company here in Ireland.
              </p>
              <p>
                With a lot of hard work I am now capable of creating web apps and websites using a few languages other than JavaScript (they are
                listed below). My main focus now is to keep coding and honing my skills not only at the company I work in, but with personal projects.
              </p>
            </div>
            <div className="relative mt-10 lg:mt-0 pb-3/4 sm:w-full sm:pb-1/2 lg:w-1/3">
                <img src={ProfilePic} className="absolute w-full h-full object-contain rounded-md shadow-md" alt="Profile-pic"/>
            </div>
          </div>
        </div>
      </section>

      <section> {/* SKILLS LANGUAGES AND TECHNOLOGIES */}
        <div className="bg-green-300 py-10 lg:px-64 xl:px-1/4">
          <h2 className="bg-green-400 text-2xl font-semibold">II. Work and Technologies -------</h2>
          <div className="flex mt-10 bg-green-500">
          <p>Vertical menus for the techs and languages</p>
          <p>actual techs and languages</p>
          </div>
        </div>
      </section>
      
      <section>  {/* FEATURED Projects Container  */}
        <div className="justify-center py-10 lg:px-20 xl:px-32">
          <h2 className="text-center text-2xl font-semibold">------- III. Featured Projects -------</h2>

          <div className="justify-center mt-10">

            <div className="sm:flex sm:items-center sm:justify-center">
              <div className="relative pb-3/4 sm:pb-1/2 lg:pb-1/3 sm:w-full">
                <img src={Background} className="absolute w-full h-full object-cover rounded-md shadow-md" alt="i-Hungry"/>
              </div>
              <div className="relative px-3 -mt-8 sm:mt-0 sm:p-0 sm:-ml-20 sm:w-full sm:items-center">              
                <div className="py-2 px-4 bg-gray-800 rounded-md shadow-xl">
                  <h3 className="font-semibold">i-Hungry</h3>
                  <div className="mt-4">
                    <p className="text-base text-gray-700 leading-tight text-justify">
                      It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                    </p>
                  </div>
                  <div className="mt-2">
                    <ul className="flex">
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        TypeScript
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Angular
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Node.js
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Express
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-1">
                    <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
                    <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 sm:flex sm:flex-row-reverse sm:items-center sm:justify-center">
              <div className="relative pb-3/4 sm:pb-1/2 lg:pb-1/3 sm:w-full">
                <img src={Background} className="absolute w-full h-full object-cover rounded-md shadow-md" alt="i-Hungry"/>
              </div>
              <div className="relative px-3 -mt-8 sm:mt-0 sm:p-0 sm:-mr-20 sm:w-full sm:items-center">              
                <div className="py-2 px-4 bg-gray-800 rounded-md shadow-xl">
                  <h3 className="font-semibold">i-Hungry</h3>
                  <div className="mt-4">
                    <p className="text-base text-gray-700 leading-tight text-justify">
                      It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                    </p>
                  </div>
                  <div className="mt-2">
                    <ul className="flex">
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        TypeScript
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Angular
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Node.js
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Express
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-1">
                    <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
                    <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 sm:flex sm:items-center sm:justify-center">
              <div className="relative pb-3/4 sm:pb-1/2 lg:pb-1/3 sm:w-full">
                <img src={Background} className="absolute w-full h-full object-cover rounded-md shadow-md" alt="i-Hungry"/>
              </div>
              <div className="relative px-3 -mt-8 sm:mt-0 sm:p-0 sm:-ml-20 sm:w-full sm:items-center">              
                <div className="py-2 px-4 bg-gray-800 rounded-md shadow-xl">
                  <h3 className="font-semibold">i-Hungry</h3>
                  <div className="mt-4">
                    <p className="text-base text-gray-700 leading-tight text-justify">
                      It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                    </p>
                  </div>
                  <div className="mt-2">
                    <ul className="flex">
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        TypeScript
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Angular
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Node.js
                      </li>
                      <li className="text-base text-gray-700 leading-normal flex-1">
                        Express
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-1">
                    <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
                    <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section> {/* PROJECTS Container */}
        <div className="flex flex-col items-center justify-center py-10">
          <h2 className= "text-2xl font-semibold">------- IV. Projects showcasing specific skillsets -------</h2>

          <div className="mt-10 sm:grid sm:grid-cols-2 xl:grid-cols-3 items-center justify-center sm:flex sm:flex-wrap">

            <div className="block py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2">
              <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-xl">
                <div className="flex justify-between">
                  <img src={logo} className="App-logo h-12" alt="logo" />
                  <img src={logo} className="App-logo h-12" alt="logo" />
                </div>
                <div className="pt-6 flex-grow">
                  <h3 className="text-lg font-semibold text-blue-700 leading-tight">
                    i-Hungry Angular Fullstack App
                  </h3>
                  <p className="pt-4 text-sm text-gray-700 leading-normal text-justify">
                    An i-Food type web application on which you can choose between restaurants, visualize their menu and reviews about them and add items to a cart. It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                  </p>
                </div>
                <div className="pt-6">
                  <ul className="flex text-center">
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      TypeScript
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Angular
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Node.js
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Express
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="block py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2">
              <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-xl">
                <div className="flex justify-between">
                  <img src={logo} className="App-logo h-12" alt="logo" />
                  <img src={logo} className="App-logo h-12" alt="logo" />
                </div>
                <div className="pt-6 flex-grow">
                  <h3 className="text-lg font-semibold text-blue-700 leading-tight">
                    i-Hungry Angular Fullstack App
                  </h3>
                  <p className="pt-4 text-sm text-gray-700 leading-normal text-justify">
                    An i-Food type web application on which you can choose between restaurants, visualize their menu and reviews about them and add items to a cart. It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                  </p>
                </div>
                <div className="pt-6">
                  <ul className="flex text-center">
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      TypeScript
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Angular
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Node.js
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Express
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="block py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2">
              <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-xl">
                <div className="flex justify-between">
                  <img src={logo} className="App-logo h-12" alt="logo" />
                  <img src={logo} className="App-logo h-12" alt="logo" />
                </div>
                <div className="pt-6 flex-grow">
                  <h3 className="text-lg font-semibold text-blue-700 leading-tight">
                    i-Hungry Angular Fullstack App
                  </h3>
                  <p className="pt-4 text-sm text-gray-700 leading-normal text-justify">
                    An i-Food type web application on which you can choose between restaurants, visualize their menu and reviews about them and add items to a cart. It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                  </p>
                </div>
                <div className="pt-6">
                  <ul className="flex text-center">
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      TypeScript
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Angular
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Node.js
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Express
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="block py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2">
              <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-xl">
                <div className="flex justify-between">
                  <img src={logo} className="App-logo h-12" alt="logo" />
                  <img src={logo} className="App-logo h-12" alt="logo" />
                </div>
                <div className="pt-6 flex-grow">
                  <h3 className="text-lg font-semibold text-blue-700 leading-tight">
                    i-Hungry Angular Fullstack App
                  </h3>
                  <p className="pt-4 text-sm text-gray-700 leading-normal text-justify">
                    An i-Food type web application on which you can choose between restaurants, visualize their menu and reviews about them and add items to a cart. It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                  </p>
                </div>
                <div className="pt-6">
                  <ul className="flex text-center">
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      TypeScript
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Angular
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Node.js
                    </li>
                    <li className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">
                      Express
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section> {/* CONTACT ME - (WHAT'S NEXT?)*/}
        <div className="mx-auto w-full py-10 sm:w-3/4 lg:w-2/5">
          <h2 className="text-2xl text-center font-semibold">------- V. Get In Touch -------</h2>
          <div className="flex flex-col mt-10 text-center">
            <p classname>I bet that was a lot of info to take in huh? If you have any questions, want to show me new opportunities or even have a virtual coffee
              about web development or nerdy stuff just send me an email and I will get back to you asap. May the Force be with you.
            </p>
            <button className="mt-10 justify-center">Say "Hello There"</button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}

export default App;


          {/* 
          <div className="flex flex-col max-w-xs mx-3 p-6 bg-gray-100 rounded-lg shadow-xl">
            <div className="flex">
              <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
              <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
            </div>
            <div className="pt-6 flex-grow">
              <h3 className="text-xl font-semibold text-blue-700 leading-tight">
                i-Hungry Angular Fullstack App
              </h3>
              <p className="pt-4 text-base text-gray-700 leading-normal text-justify">
                It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
              </p>
            </div>
            <div className="pt-6">
              <ul className="flex">
                <li className="text-base font-semibold text-gray-700 leading-normal flex-1">
                  TypeScript
                </li>
                <li className="text-base font-semibold text-gray-700 leading-normal flex-1">
                  Angular
                </li>
                <li className="text-base font-semibold text-gray-700 leading-normal flex-1">
                  Node.js
                </li>
                <li className="text-base font-semibold text-gray-700 leading-normal flex-1">
                  Express
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col max-w-xs mx-3 p-6 bg-gray-100 rounded-lg shadow-xl">
            <div className="flex">
              <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
              <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
            </div>
            <div className="pt-6 flex-grow max-w">
              <h3 className="text-xl font-semibold text-blue-700 leading-tight">
                i-Hungry Angular Fullstack App
              </h3>
              <p className="pt-4 text-base text-gray-700 leading-normal text-justify">
                It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end. An i-Food type web application on which you can choose between restaurants, visualize their menu and reviews about them and add items to a cart. It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
              </p>
            </div>
            <div className="pt-6">
              <ul className="flex">
                <li className="text-base font-semibold  text-gray-700 leading-normal flex-1">
                  TypeScript
                </li>
                <li className="text-base font-semibold  text-gray-700 leading-normal flex-1">
                  Angular
                </li>
                <li className="text-base font-semibold  text-gray-700 leading-normal flex-1">
                  Node.js
                </li>
                <li className="text-base font-semibold  text-gray-700 leading-normal flex-1">
                  Express
                </li>
              </ul>
            </div>
          </div>
          */}


              {/* DROPDOWN MENU */}
    {/* <div className=" bg-orange-300 p-10">
      <button className="block h-16 w-16 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
        <img src="../images/profile.jpg" className="h-full w-full object-cover" alt="avatar" />
      </button>
      <div className="w-48 mt-1 py-2 shadow-xl bg-white rounded">
        <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Abous</a>
        <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Experience</a>
        <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Work</a>
        <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Contact</a>
        <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Curriculum</a>
      </div>
    </div> */}