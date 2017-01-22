import React from 'react'
import ReactMarkdown from 'react-markdown'
import { FormattedMessage } from 'react-intl'
import md from '../content/introduction'

const Text = ({ intl }) => {
  console.info('Text', intl);
  return (
    <div>
      <p>My Text!</p>
      <ReactMarkdown source={md[intl.locale].body} />
      <FormattedMessage
        id="introduction.explanation"
        defaultMessage={`
          We analyzed projects coming from {link},
        a curated list of the best projects related to the web platform.
        `}
        values={{ link: <a href="http://bestof.js.org/hof/">bestof.js.org</a> }}
      />
    </div>
  )
}

export default Text
