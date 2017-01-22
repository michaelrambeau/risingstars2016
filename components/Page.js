import React from 'react'
import Header from '../src/Header'
import Footer from '../src/Footer'
import Introduction from '../src/bestof2016/Introduction'
import Conclusion from '../src/bestof2016/Conclusion'
import { FormattedMessage } from 'react-intl'
import graphFactory from '../src/bestof2016/graphFactory'
import items from '../src/bestof2016/items'

class Page extends React.Component {
  render () {
    const { entities, url, projects, intl } = this.props
    // console.info('Render Page', entities);
    const locale = intl.locale
    const factory = graphFactory({ projects, entities, locale })
    const Graph = (props) => factory.createGraph(props)
    return (
      <div>
        <Header />
        <div id="picture-block">
          <div className="container">
            <h1>
              <FormattedMessage id="header.title" />
            </h1>
          </div>
        </div>
        <Introduction
          entities={entities}
          url={url}
          intl={intl}
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
        <Footer />
      </div>
    )
  }
}

export default Page
