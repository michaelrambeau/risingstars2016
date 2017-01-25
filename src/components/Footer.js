import React from 'react'
import { config } from 'config'

const Footer = ({ language }) => (
  <div id="footer">
    <div className="container">
      {language === 'ja' ? <Translators /> : (
        <p>This article is also available in <a href="/ja/">Japanese</a>.</p>
      )}
      <p>
        <a href="http://bestof.js.org">bestof.js.org</a> is a project created by <a href="http://michaelrambeau.com/">Michael Rambeau</a>, from Osaka, Japan.
      </p>
    </div>
  </div>
)

export default Footer

const Translators = () => {
  const translators = config.translators
  console.log(translators)
  return (
    <div>
      <p>Translated in Japanese by:</p>
      {translators.map(translator => (
        <Translator translator={translator} key={translator.name} />
      ))}
    </div>
  )
}

const Translator = ({ translator }) => (
  <div>
    <a href={translator.url}>
      {translator.name}
    </a>
  </div>
)
