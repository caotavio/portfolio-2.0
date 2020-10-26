import React from 'react';
import ProjectsData from '../data/projects.json';
import Coding from './icons/Coding';
import ExternalLinkButton from './icons/ExternalLinkButton';
import GithubButton from './icons/GithubButton';

function Projects() {

  return(
    <div id="projects" className="flex flex-col items-center justify-center text-gray-500">
      <h2 className="divider-center w-full text-lg sm:text-2xl font-semibold text-lightsaberlight mt-24">IV. Other Projects</h2>
      {/* <div className="mt-10 sm:grid sm:grid-cols-2 xl:grid-cols-3 items-center justify-center sm:flex sm:flex-wrap"> */}
      <div className="mt-10 py-12 sm:flex sm:flex-wrap justify-center px-1/12 lg:px-1/6 xl:px-1/5">
        {ProjectsData.map((projectDetail) => {
          return (
            // <div key={projectDetail.id} className="flex py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2">
            <div key={projectDetail.id} className="flex sm:w-1/2 xl:w-1/3 py-2 sm:px-2 transform hover:scale-105 transition ease-out duration-300">
              <div className="flex flex-col w-full p-6 bg-tardis rounded-lg shadow-xl">
                <div className="flex justify-end align-middle">
                  <button>
                    <a className="text-lightsaberlight hover:text-matrix" href={projectDetail.live_link} target="_blank" rel="noopener">
                      <ExternalLinkButton />
                    </a>
                  </button>
                  <button>
                    <a className="text-lightsaberlight hover:text-matrix" href={projectDetail.github_link} target="_blank" rel="noopener">
                      <GithubButton />
                    </a>
                  </button>
                </div>
                <div className="pt-8 flex-1">
                  <div className="flex items-center">
                    <div>
                      <Coding />
                    </div>                   
                    <div>
                      <h3 className="block text-lg font-mono font-semibold text-lightsaberlight leading-tight">
                        {projectDetail.name}
                      </h3>                   
                    </div> 
                  </div>
                  <p className="pt-4 text-base leading-normal">
                    {projectDetail.description}
                  </p>
                </div>
                <div className="mt-8">
                  <ul className="flex font-mono flex-wrap">
                    {projectDetail.technologies.map((tech, index) => {
                      return (
                        <li key={index} className="text-sm font-semibold tracking-wide leading-normal mr-3">{tech}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects;