import React from 'react'
import team from '../utils/teamMembers'

const Section = ({ language }) => (
  <section className="TranslatorSection">
    <div className="container small-container">
      {language === 'ja' ? <TeamMemberList /> : (
        <div style={{ textAlign: 'center' }}>
          <p>
            This article is also available in <a href="/ja/">Japanese</a>.
          </p>
          <p>
            <a href="/ja/">日本語はこちら</a>です。
          </p>
        </div>
      )}
    </div>
  </section>
)

const TeamMemberList = () => {
  const translators = team.filter(member => member.role === 'translation')
  const author = team.find(member => member.role === 'author')
  return (
    <div>
      <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
        <img src="/img/ja/rising-stars.png" className="img-responsive" alt="Rising Stars 2016" />
      </div>
      <TranslatorBlock translators={translators} />
      <AuthorBlock author={author} />
    </div>
  )
}

const AuthorBlock = ({ author }) => (
  <div style={{ marginTop: '2rem' }}>
    <p className="member-list-header" style={{ marginTop: '1rem' }}>
      <a href="/">Original version</a>
    </p>
    <div className="translator-list">
      <TeamMember member={author} key={author.name} />
    </div>
  </div>
)

const TranslatorBlock = ({ translators }) => (
  <div>
    <p className="member-list-header">
    Japanese translation
    </p>
    <div className="translator-list">
      {translators.map(translator => (
        <TeamMember member={translator} key={translator.name} />
      ))}
    </div>
  </div>
)

const TeamMember = ({ member }) => (
  <div className="translator-list-item">
    <a href={member.url} >
      <img src={member.avatar} width="75" height="75" />
    </a>
    <div className="translator-item-body">
      <a href={member.url} className="translator-name">
        {member.name}
      </a>
      <div className="translator-bio">
        {member.bio1}
        {member.bio2 && <div>{member.bio2}</div>}
      </div>
    </div>
  </div>
)

export default Section
