import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.generated.css';

import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  return (
    <>
    {/* NAVBAR */}
    <Navbar />

    <main className="px-6">
      
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
      
      <section>  FEATURED Projects Container 
        <div className="flex items-center justify-center bg-pink-500 py-10 featProjectsContainer">

          <div className="bg-pink-300 rounded-md">
            <img src="../images/i-hungry-3.png" className="w-full h-64 sm:h-auto rounded-md shadow-xl" alt="i-Hungry"/>
            <div className="p-6">
              <h3>
                i-Hungry
              </h3>
              <p className="pt-4 text-base text-gray-700 leading-normal text-justify">
                  It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
              </p>
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
                <div className="flex">
                  <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
                  <img src={logo} className="App-logo h-12 w-1/2" alt="logo" />
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