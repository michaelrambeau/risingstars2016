import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import __intlEN from 'react-intl/locale-data/en'
import __intlJA from 'react-intl/locale-data/ja'
import App from '../App'
import getMessages from './getMessages'
import projects from './projects.json'
import getInitialState from './getInitialState'
import mapStateToProps from './mapStateToProps'
import packageJson from '../../package.json'

const url = packageJson.homepage

addLocaleData(__intlEN)
addLocaleData(__intlJA)

export default function (locale) {
  const messages = getMessages(locale)
  const state = getInitialState(projects)
  const props = mapStateToProps(state)
  const defaultUrl = packageJson.homepage
  const url = locale === 'en' ? defaultUrl : `${defaultUrl}/${locale}`
  class Main extends React.Component {
    render () {
      return (
        <IntlProvider
          locale={locale}
          messages={messages}
        >
          <App
            projects={props.projects}
            entities={state.entities.projects}
            url={url}
          />
        </IntlProvider>
      )
    }
  }
  return Main
}
