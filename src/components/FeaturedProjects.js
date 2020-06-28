import React from 'react';
import logo from '../logo.svg';

function FeaturedProjects() {
  const Background = '../images/i-hungry-3.png';

  return(
    <div id="featuredProjects" className="justify-center py-10 lg:px-20 xl:px-32">
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
  )
}

export default FeaturedProjects;