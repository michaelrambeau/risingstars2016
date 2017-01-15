import React from 'react'

import Description from './Description'
// import Delta from '../common/utils/Delta'
// import Stars from '../common/utils/Stars'
// import TagLabel from '../tags/TagLabelCompact'
import ProjectAvatar from '../ProjectAvatar'
import Stars from '../Stars'

const ProjectTableView = ({ title, comment, icon, projects, showStars, showDelta = true, deltaFilter = 'yearly' }) => (
  <div className="project-table">
    {projects.map((project, i) => (
      <ProjectTableView.Row
        key={project.slug}
        project={project}
        showStars={showStars}
        showDelta={showDelta}
        deltaFilter={deltaFilter}
        index={i + 1}
      />
    ))}
  </div>
)

ProjectTableView.Row = ({ project, showStars, showDelta, deltaFilter, showDescription = true, index }) => {
  const url = project.url || project.repository
  return (
    <div className="project-table-row">
      <a className="link" href={url}>
        <div className="avatar-section">
          {false && <div className="project-table-rank">{index}</div>}
          <ProjectAvatar project={project} size={50} />
          <div className="project-title">
            <span className="project-table-rank">#{index}</span>
            <span>{project.name}</span>
          </div>
            {showDelta && project.deltas.length > 0 && (
              <div className="delta">
                <Stars value={project.stats.yearly} decimals={1} />
              </div>
            )}
        </div>
        {true && <div className="description-section">
          <Description text={project.description} />
        </div>}
      </a>
    </div>
  )
}

export default ProjectTableView
