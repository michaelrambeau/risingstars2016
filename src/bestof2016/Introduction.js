import React from 'react'

import Markdown from './Markdown'
import items from './items'
import intro from './comments/intro'
import Social from './Social'

const Introduction = ({ entities, url }) => (
  <div className="container container-section small-container">
    <div className="small-card markdown-body card-introduction">
      <Markdown source={intro} entities={entities} />
      <hr />
      <h3>Table of Contents</h3>
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
      <div>
        <Social
          url={url}
          text={'Check the JavaScript landscape in 2016'}
        />
      </div>
      <hr />
      <small>
        <p style={{marginTop: '1rem'}}>
        The following graphs compare the number of stars <b>added</b> on Github over the last 12 months.<br />
        We analyzed projects coming from <a href="http://bestof.js.org/">bestof.js.org</a>, a curated list of the best projects related to the web platform.
        </p>
      </small>
    </div>
  </div>
)

export default Introduction
