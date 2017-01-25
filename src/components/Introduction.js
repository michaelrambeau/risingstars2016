import React from 'react'
import { FormattedMessage } from 'react-intl'

import Markdown from './Markdown'
import items from '../categories'
import Social from './Social'
import md from '../../i18n/introduction'

const Introduction = ({ entities, url, intl }) => (
  <div className="container container-section small-container">
    <div className="small-card markdown-body card-introduction">
      <Markdown source={md[intl.locale].body} entities={entities} />
      <hr />
      <h3>
        <FormattedMessage
          id="introduction.table_of_contents"
        />
      </h3>
      <ol>
        {items.map((item, i) => {
          const key = item.tag.replace(/-/, '')
          return (
            <li key={item.tag}>
              <a href={`#${item.tag}`}>
                <FormattedMessage id={`categories.${key}`} />
              </a>
            </li>
          )
        })}
      </ol>
      <hr />
      <div>
        <Social
          url={url}
          text={intl.formatMessage({ id: 'social.text' })}
        />
      </div>
      <hr />
      <small>
        <p style={{marginTop: '1rem'}}>
          <FormattedMessage
            id="introduction.explanation"
            defaultMessage={`
              We analyzed projects coming from {link},
            a curated list of the best projects related to the web platform.
            `}
            values={{ link: <a href="http://bestof.js.org/hof/">bestof.js.org</a> }}
          />
        </p>
      </small>
    </div>
  </div>
)

export default Introduction
