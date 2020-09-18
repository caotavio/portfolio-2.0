import React, {useState} from 'react';
import SkillsData from '../data/skills.json';
import Coding from './icons/Coding'

function Skills() {
  const [activeTab, setActiveTab] = useState(SkillsData[0]);

  return(
    <div id="skills" className="pt-32 sm:pt-64 lg:px-32">
      <h2 className="text-center text-2xl font-semibold text-lightsaberlight">II. Technologies and Work -------</h2>
      {/* <div className="flex sm:justify-center sm:items-center mt-10 sm:p-10"> */}
        <div className="flex flex-col sm:p-20 sm:justify-center">
          <div className="flex flex-col items-start sm:flex-row sm:justify-center sm:items-center pt-10">
            {SkillsData.map(skillsDetail => {
              return (
                <button key={skillsDetail.id} onClick={() => setActiveTab(SkillsData[skillsDetail.id])}
                        className={activeTab.id === skillsDetail.id ? 'focus:outline-none border-b-2 text-xl font-semibold border-lightsaberlight text-lightsaberlight mx-4 py-2 whitespace-no-wrap' : 'focus:outline-none border-b mx-4 p-2 whitespace-no-wrap opacity-50 hover:opacity-100 hover:text-lightsaberlight transition ease-in duration-300'}>
                  {skillsDetail.title}
                </button>
              )
            })}
          </div>
          <div className="flex flex-col justify-center items-center px-10 pt-10 text-lg sm:text-xl">
            <ul className={activeTab.content.length > 4 ? 'sm:grid sm:grid-cols-2 sm:col-gap-10' : ''}>
              {activeTab.content.map(content => {
                return (
                  <li className='skills-list py-2 pr-6'>{content}</li>
                )
              })}
            </ul>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}
export default Skills;
