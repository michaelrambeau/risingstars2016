import React from 'react'
import Graph from './Graph'
// const Graph = () => <div>Graph</div>
import Markdown from './Markdown'
import comments from './comments'

function graphFactory ({ projects, entities }) {
  return {
    createGraph ({ tag, title, Comment, exclude, count = 10, children }) {
      const graphProjects = projects[tag]
        .filter(project => project.slug !== exclude)
        .slice(0, count)
      const key = tag.replace(/-/, '')
      const comment = comments[key] || '(Under construction)'
      return (
        <div>
          <a name={tag}></a>
          <div className="card">
            <div className="card-header" style={{ fontSize: '1.5rem' }}>
              {title}
            </div>
            <div className="card-body">
              <Graph projects={graphProjects} sortOrder={'yearly'} />
            </div>
            <div className="card-comment markdown-body">
              <Markdown source={comment} entities={entities} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default graphFactory
