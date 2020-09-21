import React from 'react';
import FeaturedProjectsData from '../data/featuredProjects.json'
import GithubButton from './icons/GithubButton';
import ExternalLinkButton from './icons/ExternalLinkButton';

function FeaturedProjects() {

  return(
    <div id="featuredProjects" className="justify-center py-32 lg:px-20 xl:px-32">
      <h2 className="divider-center text-center text-lg sm:text-2xl font-semibold text-lightsaberlight">III. Featured Projects</h2>

      <div className="justify-center mt-10">

        {FeaturedProjectsData.map((projectDetail) => {
          return (
            <div key={projectDetail.id} className="py-12 sm:flex sm:items-center sm:justify-center">
              <div className="relative pb-3/4 sm:pb-1/2 lg:pb-2/5 sm:w-full">
                <img src={projectDetail.image_url} className="absolute w-full h-full object-cover rounded-md shadow-md" alt="i-Hungry"/>
              </div>
              <div className="relative px-3 -mt-8 sm:mt-0 sm:p-0 sm:-ml-20 sm:w-2/3 sm:items-center">              
                <div className="py-6 px-4 bg-tardis text-gray-500 rounded-md shadow-xl">
                  <h3 className="font-semibold text-lg font-mono text-lightsaberlight">{projectDetail.name}</h3>
                  <div className="mt-4">
                    <p className="text-lg leading-tight text-justify">
                    {projectDetail.description}
                    </p>
                  </div>
                  <div className="mt-2">
                    <ul className="flex font-mono flex-wrap">
                      {projectDetail.technologies.map((tech, index) => {
                        return (
                          <li key={index} className="text-base mr-4">
                            {tech}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="font-mono flex justify-end mt-6">
                    <p className="mr-2">Live link:</p>
                    <button>
                      <a className="text-lightsaberlight hover:text-matrix" href={projectDetail.live_link}>
                        <ExternalLinkButton />
                      </a>
                    </button>
                    <p className="mr-2">Github Repo:</p>
                    <button>
                      <a className="text-lightsaberlight hover:text-matrix" href={projectDetail.github_link}>
                        <GithubButton />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedProjects;