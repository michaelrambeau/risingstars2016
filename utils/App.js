import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
// import { FormattedMessage } from 'react-intl'

import Page from '../components/Page'

class App extends React.Component {
  render () {
    const { intl } = this.props
    console.log('Rendering <App>', intl)
    return (
      <div>
        <Helmet
          title={'Rising Stars EN'}
        />
        <Page {...this.props} />
      </div>
    )
  }
}

export default injectIntl(App)
