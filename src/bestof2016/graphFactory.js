import React from 'react'
import Graph from './Graph'
// const Graph = () => <div>Graph</div>
import Markdown from './Markdown'
import comments from './comments'
import ProjectTable from './ProjectTable'

function graphFactory ({ projects, entities }) {
  return {
    createGraph ({ tag, number, title, Comment, excluded = [], count = 10, children }) {
      const graphProjects = projects[tag]
        .filter(project => !excluded.includes(project.slug))
        .slice(0, count)
      const key = tag.replace(/-/, '')
      const comment = comments[key] || '(Under construction)'
      const height = Math.max(count * 15 + 100, 150)
      return (
        <section className="container container-section">
          <a name={tag}></a>
          <div className="card">
            <div className="card-header">
              {false && <div className="card-header-number">#{number}</div>}
              <div className="card-header-title">
                <span className="card-header-number">#{number}</span>
                {' '}
                {title}
              </div>
            </div>
            <div className="split-body">
              <div className="card-body">
                <Graph projects={graphProjects} sortOrder={'yearly'} width={350} height={height} />
                <ProjectTable projects={graphProjects.slice(0, 10)} />
              </div>
              <div className="card-comment markdown-body">
                <Markdown source={comment} entities={entities} />
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default graphFactory
