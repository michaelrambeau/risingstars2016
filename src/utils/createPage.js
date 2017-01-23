import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import __intlEN from 'react-intl/locale-data/en'
import __intlJA from 'react-intl/locale-data/ja'
import App from '../App'
import getMessages from './getMessages'
import projects from './projects.json'
import getInitialState from './getInitialState'
import mapStateToProps from './mapStateToProps'

addLocaleData(__intlEN)
addLocaleData(__intlJA)

export default function (locale) {
  const messages = getMessages(locale)
  const state = getInitialState(projects)
  const props = mapStateToProps(state)
  class Main extends React.Component {
    render () {
      return (
        <IntlProvider
          locale={locale}
          messages={messages}
        >
          <App projects={props.projects} entities={state.entities.projects} />
        </IntlProvider>
      )
    }
  }
  return Main
}
