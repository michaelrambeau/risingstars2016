import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import svg from './bestofjs.svg'

const items = [
  { code: 'en', text: 'English' },
  { code: 'zh', text: '中文' },
  { code: 'ja', text: '日本語' }
]

const Header = ({ language }) => (
  <div id="header">
    <div className="container small-container">
      <div className="header-layout">
        <a id="logo" href="http://bestof.js.org">
          <img src={svg} width="160" alt="bestof.js.org logo" />
        </a>
        <div className="language-menu">
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
