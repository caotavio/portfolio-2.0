import React from 'react';
import logo from '../logo.svg';
import ProjectsData from '../data/projects.json'

function Projects() {
  return(
    <div id="projects" className="flex flex-col items-center justify-center py-10">
      <h2 className= "text-2xl font-semibold">------- IV. Projects showcasing specific skillsets -------</h2>
      {/* <div className="mt-10 sm:grid sm:grid-cols-2 xl:grid-cols-3 items-center justify-center sm:flex sm:flex-wrap"> */}
      <div className="mt-10 sm:flex sm:flex-wrap justify-center px-1/12 md:px-1/6 lg:px-1/5 xl:px-1/4">
        {ProjectsData.map((projectDetail) => {
          return (
            // <div key={projectDetail.id} className="flex py-2 w-full max-w-xs md:max-w-sm xl:max-w-xs sm:px-2">
            <div key={projectDetail.id} className="flex sm:w-1/2 xl:w-1/3 py-2 sm:px-2">
              <div className="flex flex-col w-full p-6 bg-gray-100 rounded-lg shadow-xl">
                <div className="flex justify-between">
                  <img src={logo} className="App-logo h-12" alt="logo" />
                  <img src={logo} className="App-logo h-12" alt="logo" />
                </div>
                <div className="pt-6 flex-1">
                  <h3 className="text-lg font-semibold text-blue-700 leading-tight">
                    {projectDetail.name}
                  </h3>
                  <p className="pt-4 text-sm text-gray-700 leading-normal text-justify">
                    {projectDetail.description}
                  </p>
                </div>
                <div className="pt-6">
                  <ul className="flex text-center">
                    {projectDetail.technologies.map((tech, index) => {
                      return (
                        <li key={index} className="text-sm font-semibold tracking-wide text-gray-700 leading-normal flex-1">{tech}</li>
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