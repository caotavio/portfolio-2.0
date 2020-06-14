import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.generated.css';

import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const Background = '../images/i-hungry-3.png';

  return (
    <>
    {/* NAVBAR */}
    <Navbar />

    <main className="px-6 flex-grow">
      <section> {/* LANDING Container  */}
        <div className="flex flex-col bg-white px-1 justify-center w-full mx-auto h-screen sm:w-5/6 md:w-3/4 xl:w-1/2">
          <p className="text-base">Hello World! My name is</p>
          <div className="text-3xl mt-1">
            <h1 className="">O<span className="text-red-700">tav</span>io Carvalho.</h1>
            <h3 className="tracking-tight leading-none">I build scalable and responsive websites and web applications.</h3>
          </div>
          <h2 className="text-lg text-justify leading-none mt-5 lg:w-2/3">
            I am a Full Stack Web Developer from Brazil currently based in Ireland. I have a different story (to say the least), but <span
            className="text-red-700">IF</span> you want to cut to the chase just scroll down and take a look at some of my projects... <span
            className="text-red-700">ELSE</span>, <a href="#">click here</a> and get to know a bit more about me.
          </h2>
          <button className="mt-5">GET IN TOUCH</button>
        </div>
      </section>
      
      <section>  {/* FEATURED Projects Container  */}
        <div className="justify-center bg-pink-900 py-10 lg:px-20 xl:px-32">
          <h2 className="text-center bg-pink-500">Featured Projects</h2>

          <div className="justify-center bg-pink-500">

            <div className="bg-pink-300 pt-10 sm:flex sm:items-center sm:justify-center">
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

            <div className="bg-pink-300 pt-10 sm:flex sm:flex-row-reverse sm:items-center sm:justify-center">
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

            <div className="bg-pink-300 pt-10 sm:flex sm:items-center sm:justify-center">
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
        <div className="flex flex-col items-center justify-center py-10 bg-purple-800 ">
          <h2 className="bg-purple-300 ">Projects showcasing specific skillsets</h2>

          <div className="mt-5 sm:grid sm:grid-cols-2 xl:grid-cols-3 items-center justify-center sm:flex sm:flex-wrap">

            <div className="block py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2 bg-purple-400">
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
            <div className="block py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2 bg-purple-400">
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
            <div className="block py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2 bg-purple-400">
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
            <div className="block py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2 bg-purple-400">
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