import React from 'react'

import Markdown from './Markdown'
import items from './items'
import intro from './comments/intro'

const Introduction = ({ entities }) => (
  <div className="container container-section">
    <div className="card-body small-card markdown-body card-introduction">
      <Markdown source={intro} entities={entities} />
      <hr />
      <h3>Table of contents</h3>
      <ol>
        {items.map((item, i) => (
          <li key={item.tag}>
            <a href={`#${item.tag}`}>
            {`${item.title}`}
            </a>
          </li>
        ))}
      </ol>
      <hr />
      <small>
        <p style={{marginTop: '1rem'}}>The following graphs compare the number of stars <b>added</b> on Github over the last 12 months.</p>
      </small>
    </div>
  </div>
)

export default Introduction
