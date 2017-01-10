import React from 'react'
import Markdown from './Markdown'
import conclusion from './comments/conclusion'
import Social from './Social'

const Conclusion = ({ entities }) => (
  <div className="container container-section" style={{ marginBottom: 0 }}>
    <div className="card small-card">
      <div className="card-header">
        <div className="card-header-title">
          Conclusion
        </div>
      </div>
      <div className="card-body markdown-body">
        <Markdown source={conclusion} entities={entities} />
        <hr />
        <div>
          <Social url={'xxx'} text={'yyy'} />
        </div>
      </div>
    </div>
  </div>
)

export default Conclusion
