import React from 'react'

import graphFactory from './graphFactory'
// import ProjectIconWall from './ProjectIconWall'
// import BgPicture from './BgPicture'
// <ProjectIconWall projects={projects.all} />
// <BgPicture projects={projects.all} />
import items from './items'
import Introduction from './Introduction'
import Conclusion from './Conclusion'

const GraphPage = ({ projects, entities }) => {
  const factory = graphFactory({ projects, entities })
  const Graph = (props) => factory.createGraph(props)
  return (
    <div>
      <Introduction entities={entities} />
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
      <Conclusion entities={entities} />
    </div>
  )
}

export default GraphPage
