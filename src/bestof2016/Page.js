import React from 'react'
import Markdown from './Markdown'
import graphFactory from './graphFactory'

import intro from './comments/intro'
import conclusion from './comments/conclusion'

const GraphPage = ({ projects, entities }) => {
  const factory = graphFactory({ projects, entities })
  const Graph = (props) => factory.createGraph(props)
  return (
    <div className="container" style={{ paddingTop: 88 }}>
      <h1 style={{ marginBottom: '2rem' }}>The JavaScript landscape in 2016</h1>
      <div className="card">
        <div className="card-body markdown-body" style={{ fontSize: '1.2rem' }}>
          <Markdown source={intro} entities={entities} />
          <small>
            <p style={{marginTop: '1rem'}}>The following graphs compare the number of stars <b>added</b> on Github over the last 12 months.</p>
          </small>
        </div>
      </div>
      <Graph
        tag={'all'}
        title={'Overall rankings'}
      />
      <Graph
        tag={'framework'}
        title={'Front-end frameworks'}
        count={15}
      />
      {false && <Graph
        tag={'vdom'}
        exclude={'react'}
        title={'3 light alternatives to React'}
        count={3}
      />}
      <Graph
        tag={'react-template'}
        title={'React boilerplates'}
      />
      <Graph
        tag={'compiler'}
        title={'Compilers'}
        count={3}
      />
      <Graph
        tag={'build'}
        title={'Build tools'}
      />
      <Graph
        tag={'test-framework'}
        title={'Testing frameworks'}
        count={5}
      />
      {false && <Graph tag={'chart'} />}
      {false && <Graph
        tag={'desktop'}
        title={'Desktop'}
        count={3}
      />}
      <Graph
        tag={'ide'}
        title={'IDE'}
        count={5}
      />
      <Graph
        tag={'ssg'}
        title={'Static Site Generators'}
        count={10}
      />
      {false && <div><h3>CSS</h3>
      <Graph
        tag={'css-lib'}
        title={'CSS Toolkits'}
      />
      <Graph
        tag={'css-tool'}
        title={'CSS preprocessors and tools'}
      /></div>}
      <div className="card">
        <div className="card-body markdown-body" style={{ fontSize: '1.2rem' }}>
          <Markdown source={conclusion} entities={entities} />
        </div>
      </div>
    </div>
  )
}

export default GraphPage
