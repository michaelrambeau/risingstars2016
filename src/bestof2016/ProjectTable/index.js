import React from 'react'

import Description from './Description'
// import Delta from '../common/utils/Delta'
// import Stars from '../common/utils/Stars'
// import TagLabel from '../tags/TagLabelCompact'
import ProjectAvatar from '../ProjectAvatar'
import Stars from '../Stars'

const ProjectTableView = ({ title, comment, icon, projects, showStars, showDelta = true, deltaFilter = 'yearly' }) => (
  <div className="project-table">
    {projects.map(project => (
      <ProjectTableView.Row
        key={project.slug}
        project={project}
        showStars={showStars}
        showDelta={showDelta}
        deltaFilter={deltaFilter}
      />
    ))}
  </div>
)

ProjectTableView.Row = ({ project, showStars, showDelta, deltaFilter, showDescription = true }) => (
  <div className="project-table-row">
    <a className="link" href={`http://bestof.js.org/projects/${project.slug}`}>
      <div className="avatar-section">
        <ProjectAvatar project={project} size={50} />
        <div className="project-title">{project.name}</div>
          {showDelta && project.deltas.length > 0 && (
            <div className="delta">
              <Stars value={project.stats.yearly} decimals={1} />
            </div>
          )}
      </div>
    </a>
  </div>
)

export default ProjectTableView
