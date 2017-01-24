import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const items = [
  { code: 'en', text: 'English' },
  { code: 'ja', text: '日本語' }
]

const Header = ({ language }) => (
  <div id="header">
    <div className="container small-container">
      <a id="logo" href="http://bestof.js.org">bestof.js.org</a>
      <div className="language-menu" style={{ marginLeft: '2rem' }}>
        {items.map(item => (
          <LanguageLink
            item={item}
            key={item.code}
            active={language === item.code}
          />
        ))}
      </div>
    </div>
  </div>
)

const LanguageLink = ({ item, active }) => {
  if (active) return (
    <span className="language-menu-item is-active">{item.text}</span>
  )
  return (
    <Link
      to={prefixLink(`/${item.code}/`)}
      className="language-menu-item"
    >
      {item.text}
    </Link>
  )
}

export default Header
