import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'

import Page from './Page'

class App extends React.Component {
  render () {
    const { intl } = this.props
    const title = intl.formatMessage({ id: 'page.title' })
    const description = intl.formatMessage({ id: 'page.description' })
    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { property: 'og:type', content: 'article' },
            { property: 'og:image', content: `/img/${intl.locale}/rising-stars.png` }
          ]}
          htmlAttributes={{ lang: intl.locale }}
        />
        <Page {...this.props} />
      </div>
    )
  }
}

export default injectIntl(App)
