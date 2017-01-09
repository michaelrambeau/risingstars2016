import React from 'react'
import ProjectAvatar from '../ProjectAvatar'

const excluded = ['axios', 'typescript', 'animatecss', 'react-boilerplate', 'angularjs']

const Wall = ({ projects }) => {
  const niceProjects = projects
    .filter(project => !excluded.includes(project.slug))
    .slice(0, 25)
  return (
    <div className="icon-wall-grid">
      {niceProjects.map(project => (
        <div key={project.slug}>
          <ProjectAvatar project={project} size={75} />
        </div>
      ))}
    </div>
  )
}

export default Wall
