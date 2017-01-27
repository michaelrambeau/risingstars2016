import React from 'react'
import { config } from 'config' // eslint-disable-line

const Section = ({ language }) => (
  <section className="TranslatorSection">
    <div className="container small-container">
      {language === 'ja' ? <TranslatorList /> : (
        <p style={{ textAlign: 'center' }}>
          This article is also available in <a href="/ja/">Japanese</a>.
        </p>
      )}
    </div>
  </section>
)

const TranslatorList = () => {
  const translators = config.translators
  return (
    <div>
      <p style={{ marginTop: 0, textAlign: 'center', fontSize: '1.25rem' }}>
        Translated in Japanese by:
      </p>
      <div className="translator-list">
        {translators.map(translator => (
          <Translator translator={translator} key={translator.name} />
        ))}
      </div>
    </div>
  )
}

const Translator = ({ translator }) => (
  <a className="translator-list-item" href={translator.url}>
    <img src={translator.avatar} width="75" height="75" />
    <div className="translator-item-body">
      <div className="translator-name">{translator.name}</div>
      <div className="translator-bio">
      {translator.bio1}
      {translator.bio2 && <div>{translator.bio2}</div>}
      </div>
    </div>
  </a>
)

export default Section
