import React from 'react'
import Markdown from './Markdown'
import conclusion from './comments/conclusion'
import Social from './Social'

const Conclusion = ({ entities }) => (
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
        <hr />
        <div>
          {true && <p style={{ textAlign: 'center' }}>Spread the word!</p>}
          <Social
            url={'http://bestof.js.org/2016/'}
            text={'Check the JavaScript landscape in 2016'}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Conclusion
