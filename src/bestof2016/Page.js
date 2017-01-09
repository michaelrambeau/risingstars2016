import React from 'react'

import Markdown from './Markdown'
import graphFactory from './graphFactory'
import ProjectIconWall from './ProjectIconWall'
import items from './items'
import intro from './comments/intro'
import conclusion from './comments/conclusion'
import Social from './Social'

const GraphPage = ({ projects, entities }) => {
  const factory = graphFactory({ projects, entities })
  const Graph = (props) => factory.createGraph(props)
  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>The JavaScript landscape in 2016</h1>
      <div className="split-card">

        <div className="card">
          <div className="card-body markdown-body" style={{ fontSize: '1.2rem' }}>
            <Markdown source={intro} entities={entities} />
            <hr />
            <h3>Table of contents</h3>
            <ol>
              {items.map((item, i) => (
                <li key={item.tag}>
                  <a href={`#${item.tag}`}>
                    {`${item.title}`}
                  </a>
                </li>
              ))}
            </ol>
            <hr />
            <small>
              <p style={{marginTop: '1rem'}}>The following graphs compare the number of stars <b>added</b> on Github over the last 12 months.</p>
            </small>
          </div>
        </div>
        <div>
          <ProjectIconWall projects={projects['all']} />
        </div>
      </div>
      {items.map((item, i) => (
        <Graph
          key={item.tag}
          tag={item.tag}
          number={i + 1}
          title={item.title}
          excluded={item.excluded}
          count={item.count}
        />
      ))}
      <div className="split-card">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">
              Conclusion
            </div>
          </div>
          <div className="card-body markdown-body" style={{ fontSize: '1.2rem' }}>
          <Markdown source={conclusion} entities={entities} />
          </div>
        </div>
        <div>
          <Social url={''} text={''} />
        </div>
      </div>
    </div>
  )
}

export default GraphPage
