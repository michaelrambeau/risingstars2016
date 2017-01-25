import React from 'react'
import { FormattedMessage } from 'react-intl'

import Markdown from './Markdown'
import md from '../../i18n/conclusion'
import Social from './Social'

const Conclusion = ({ entities, url, intl }) => (
  <div className="container small-container">
    <div className="small-card card-conclusion">
      <div className="small-card-header">
        <div className="tag-card-header-text">
          <span className="tag-card-number">#</span>
          <FormattedMessage id='conclusion' />
        </div>
      </div>
      <div className="markdown-body">
        <Markdown source={md[intl.locale].body} entities={entities} />
        <div className="conclusion-share-buttons">
          <Social
            url={url}
            text={intl.formatMessage({ id: 'social.text' })}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Conclusion
