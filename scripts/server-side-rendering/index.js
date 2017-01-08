// `npm run build-html` entry script
// Get project data from a static json file and build `www/index.html` file

import fetch from 'node-fetch'
import fs from 'fs-extra'
import path from 'path'
import { renderToString } from 'react-dom/server'
import React from 'react'

import getFullPage from './getFullPage'
import getInitialState from '../../src/getInitialState'
import App from '../../src/App'
process.env.NODE_ENV = 'production'
const url = 'https://bestofjs-api-dev.firebaseapp.com/projects.json'

fetch(url)
  .then(response => {
    console.log('Got the response from', url)
    return response.json()
  })
  .then(json => {
    console.log('Got JSON', Object.keys(json))

    console.log('Start server side rendering, using data from', json.projects.length, 'projects')
    const state = getInitialState(json)
    const html = renderApp(state)
    write(
      getFullPage(html),
      'index.html'
    )
  })
  .catch(err => console.error('Unexpected error during server-side rendering', err))

function renderApp (state) {
  const element = React.createElement(App, {
    state
  })
  const html = renderToString(element)
  return html
}

function write (html, filename) {
  const filepath = path.resolve(process.cwd(), 'www', filename)
  return new Promise((resolve, reject) => {
    fs.outputFile(filepath, html, (err, data) => {
      if (err) return reject(err)
      console.log(`${filename} file created!`, html.length)
      resolve(html)
    })
  })
}
