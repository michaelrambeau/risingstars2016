import React from 'react'
import Markdown from './Markdown'
import conclusion from './comments/conclusion'
import Social from './Social'

const Conclusion = ({ entities, url }) => (
  <div className="container small-container">
    <div className="small-card card-conclusion">
      <div className="small-card-header">
        <div className="tag-card-header-text">
          <span className="tag-card-number">#</span>
          <span>Conclusion</span>
        </div>
      </div>
      <div className="markdown-body">
        <Markdown source={conclusion} entities={entities} />
        <div className="conclusion-share-buttons">
          {false && <p style={{ textAlign: 'center' }}>Spread the word!</p>}
          <Social
            url={url}
            text={'Check the JavaScript landscape in 2016'}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Conclusion
