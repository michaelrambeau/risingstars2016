import React from 'react'
import { FormattedMessage } from 'react-intl'

import Graph from './Graph'
// const Graph = () => <div>Graph</div>
import Markdown from './Markdown'
import comments from '../../i18n/categories'
import ProjectTable from './ProjectTable'

function graphFactory ({ projects, entities, locale }) {
  return {
    createGraph ({ tag, number, excluded = [], count = 10, children }) {
      const graphProjects = projects[tag]
        .filter(project => !excluded.includes(project.slug))
        .slice(0, count)
      const key = tag.replace(/-/, '')
      const comment = comments[key][locale].body || 'No content!'
      const height = Math.max(count * 15 + 100, 150)
      return (
        <section className="section">
          <div className="container">
            <a name={tag}></a>
            <div className="tag-card">
              <div className="tag-card-inner">
                <div className="tag-card-header">
                  <div className="tag-card-header-text">
                    <span className="tag-card-number">#{number}</span>
                    <FormattedMessage id={`categories.${key}`} />
                  </div>
                </div>
                <div className="tag-card-body">
                  <div className="tag-card-column-1">
                    <Graph projects={graphProjects} sortOrder={'yearly'} width={350} height={height} />
                    <ProjectTable projects={graphProjects.slice(0, 10)} />
                  </div>
                  <div className="tag-card-column-2">
                    <div className="tag-card-comments markdown-body">
                      <Markdown source={comment} entities={entities} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default graphFactory
