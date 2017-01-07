import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel, VictoryTheme } from 'victory'
import numeral from 'numeral'

const styles = {
  chart: {
    padding: {
      top: 16,
      left: 16,
      bottom: 64,
      right: 100
    }
  },
  axis: {
    axis: { stroke: 'black', strokeWidth: 1 },
    ticks: {
      size: (tick) => 10,
      stroke: 'black',
      strokeWidth: 1
    },
    // tickLabels: {
    //   fill: 'black',
    //   fontFamily: 'inherit'
    // }
  }
}

function getGraphData (projects, sortOrder) {
  const count = projects.length
  const data = projects
    .filter(project => project.stats[sortOrder] > 0)
    .map((project, i) => {
      return {
        url: project.url,
        label: project.name,
        color: project.color,
        x: count - i,
        y: project.stats[sortOrder]
      }
    })
  return data
}

function formatDelta (delta) {
  // return `+${delta}☆`
  return `${numeral(delta).format('0a')}☆`
}

const MyBarLabel = (props) => {
  const url = props.datum.url
  return (
    <a href={url} target="_blank">
      <VictoryLabel {...props} />
    </a>
  )
}

const Graph = ({ projects, sortOrder }) => {
  return (
    <div>
      <VictoryChart
        domainPadding={20}
        padding={styles.chart.padding}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          style={styles.axis}
          label={`by number of Github stars added in 2016`}
          axisLabelComponent={<VictoryLabel dy={3} />}
          tickFormat={formatDelta}
        />
        <VictoryAxis
          dependentAxis
          tickCount={5}
          tickFormat={x => ''}
        />
        <VictoryBar
          data={getGraphData(projects, sortOrder)}
          horizontal
          label={project => project.label}
          labelComponent={<MyBarLabel />}
          style={{
            data: {
              fill: project => project.color
            },
            labels: {
              fill: project => project.color,
              cursor: 'pointer'
            }
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default Graph
