import React from 'react'
import ProjectAvatar from '../ProjectAvatar'
import './style.css'

const excluded = [
  'axios', 'typescript', 'animatecss', 'react-boilerplate',
  'angularjs', 'airbnb-style-guide', 'awesome', 'material-ui'
]

const Wall = ({ projects }) => {
  const niceProjects = projects
    .filter(project => !excluded.includes(project.slug))
    .slice(0, 25)
  return (
    <div id="wall">
      <div className="text">2016 JavaScript Rising Stars</div>
      <div className="icon-wall-grid">
        {niceProjects.map(project => (
          <div key={project.slug}>
            <ProjectAvatar project={project} size={75} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wall
