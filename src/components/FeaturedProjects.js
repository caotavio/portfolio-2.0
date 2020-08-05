import React from 'react';
import GithubButton from './GithubButton'
import ExternalLinkButton from './ExternalLinkButton';

function FeaturedProjects() {
  const Background = '../images/i-hungry-3.png';

  return(
    <div id="featuredProjects" className="justify-center py-32 lg:px-20 xl:px-32">
      <h2 className="text-center text-2xl font-semibold text-lightsaberlight">------- III. Featured Projects -------</h2>

      <div className="justify-center mt-10">

        <div className="py-12 sm:flex sm:items-center sm:justify-center">
          <div className="relative pb-3/4 sm:pb-1/2 lg:pb-2/5 sm:w-full">
            <img src={Background} className="absolute w-full h-full object-cover rounded-md shadow-md" alt="i-Hungry"/>
          </div>
          <div className="relative px-3 -mt-8 sm:mt-0 sm:p-0 sm:-ml-20 sm:w-2/3 sm:items-center">              
            <div className="py-6 px-4 bg-tardis3 text-gray-500 rounded-md shadow-xl">
              <h3 className="font-semibold text-lg font-mono text-lightsaberlight">i-Hungry</h3>
              <div className="mt-4">
                <p className="text-lg leading-tight text-justify">
                  It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                </p>
              </div>
              <div className="mt-2">
                <ul className="flex font-mono flex-wrap">
                  <li className="text-base mr-4">
                    TypeScript
                  </li>
                  <li className="text-base mr-4">
                    Angular
                  </li>
                  <li className="text-base mr-4">
                    Node.js
                  </li>
                  <li className="text-base mr-4">
                    Express
                  </li>
                </ul>
              </div>
              <div className="font-mono flex justify-end mt-6">
                <p className="mr-2">Live link:</p>
                <ExternalLinkButton />
                <p className="mr-2">Github Repo:</p>
                <GithubButton />
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 sm:flex sm:items-center sm:justify-center">
          <div className="opacity-75 hover:opacity-100 relative pb-3/4 sm:pb-1/2 lg:pb-1/3 sm:w-full">
            <img src={Background} className="absolute w-full h-full object-cover rounded-md shadow-md" alt="i-Hungry"/>
          </div>
          <div className="relative px-3 -mt-8 sm:mt-0 sm:p-0 sm:-ml-20 sm:w-full sm:items-center">              
            <div className="p-4 bg-tardis3 text-gray-500 rounded-md shadow-xl">
              <h3 className="font-semibold text-lg font-mono text-lightsaberlight">i-Hungry</h3>
              <div className="mt-2">
                <p className="text-base leading-tight text-justify">
                  It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                </p>
              </div>
              <div className="mt-4">
                <ul className="flex font-mono flex-wrap">
                  <li className="text-base mr-4">
                    TypeScript
                  </li>
                  <li className="text-base mr-4">
                    Angular
                  </li>
                  <li className="text-base mr-4">
                    Node.js
                  </li>
                  <li className="text-base mr-4">
                    Express
                  </li>
                </ul>
              </div>
              <div className="flex justify-end mt-4">
                <ExternalLinkButton />
                <GithubButton />
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 sm:flex sm:items-center sm:justify-center">
          <div className="relative pb-3/4 sm:pb-1/2 lg:pb-1/3 sm:w-full">
            <img src={Background} className="absolute w-full h-full object-cover rounded-md shadow-md" alt="i-Hungry"/>
          </div>
          <div className="relative px-3 -mt-8 sm:mt-0 sm:p-0 sm:-ml-20 sm:w-full sm:items-center">              
            <div className="p-4 bg-tardis3 text-gray-500 rounded-md shadow-xl">
              <h3 className="font-semibold text-lg font-mono text-lightsaberlight">i-Hungry</h3>
              <div className="mt-2">
                <p className="text-base leading-tight text-justify">
                  It features a login that uses JSON Web Token that allows the user to enter a form to complete the order and rate it at the end.
                </p>
              </div>
              <div className="mt-4">
                <ul className="flex font-mono flex-wrap">
                  <li className="text-base mr-4">
                    TypeScript
                  </li>
                  <li className="text-base mr-4">
                    Angular
                  </li>
                  <li className="text-base mr-4">
                    Node.js
                  </li>
                  <li className="text-base mr-4">
                    Express
                  </li>
                </ul>
              </div>
              <div className="flex justify-end mt-2">
                <ExternalLinkButton />
                <GithubButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects;