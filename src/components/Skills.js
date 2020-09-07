import React, {useState} from 'react';
import SkillsData from '../data/skills.json';


function Skills() {
  const [activeTab, setActiveTab] = useState(SkillsData[0]);

  return(
    <div id="skills" className="py-64 lg:px-64 xl:px-1/4">
      <h2 className="text-center text-2xl font-semibold text-lightsaberlight">II. Work and Technologies -------</h2>
      <div className="flex justify-center items-center mt-10 border rounded-md p-10">
        <div className="flex border rounded p-20">
          <div className="flex flex-col justify-evenly px-5">
            {SkillsData.map(skillsDetail => {
              return (
                <button key={skillsDetail.id} onClick={() => setActiveTab(SkillsData[skillsDetail.id])} active={activeTab === skillsDetail.id}>
                  {skillsDetail.title}
                </button>
              )
            })}
          </div>
          <div className="flex flex-col px-5">
            <ul>
              {activeTab.content.map(content => {
                return (
                  <li>{content}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills;
