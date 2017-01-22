import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const Header = () => (
  <div id="header">
    <div className="container small-container">
      <a id="logo" href="http://bestof.js.org">bestof.js.org</a>
      <div className="language-menu" style={{ marginLeft: '2rem' }}>
        <Link to={prefixLink('/en/')}>English</Link> |
        <Link to={prefixLink('/jp/')}>日本語</Link>
      </div>
    </div>
  </div>
)

export default Header
