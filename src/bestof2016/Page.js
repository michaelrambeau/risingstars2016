import React from 'react'

import graphFactory from './graphFactory'
import packageJson from '../../package.json'
import items from './items'
import Introduction from './Introduction'
import Conclusion from './Conclusion'

const GraphPage = ({ projects, entities }) => {
  const factory = graphFactory({ projects, entities })
  const Graph = (props) => factory.createGraph(props)
  const url = packageJson.homepage
  return (
    <div>
      <Introduction
        entities={entities}
        url={url}
      />
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
      <Conclusion
        entities={entities}
        url={url}
      />
    </div>
  )
}

export default GraphPage
