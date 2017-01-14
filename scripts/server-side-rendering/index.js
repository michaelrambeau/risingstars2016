// `npm run build-html` entry script
// Get project data from a static json file and build `docs/index.html` file

// import fetch from 'node-fetch'
import fs from 'fs-extra'
import path from 'path'
import { renderToString } from 'react-dom/server'
import React from 'react'

import getFullPage from './getFullPage'
import getInitialState from '../../src/getInitialState'
import App from '../../src/App'
process.env.NODE_ENV = 'production'
// const url = 'https://bestofjs-api-dev.firebaseapp.com/projects.json'
import projects from '../../public/projects.json'
import manifest from '../../build/asset-manifest.json'

const rootFolder = 'docs'

Promise.resolve(projects)
// fetch(url)
  // .then(response => {
  //   console.log('Got the response from', url)
  //   return response.json()
  // })
  .then(json => {
    console.log('Got JSON', Object.keys(json))

    console.log('Start server side rendering, using data from', json.projects.length, 'projects')
    const state = getInitialState(json)
    const html = renderApp(state)
    return writeHtml(
      getFullPage(html),
      'index.html'
    )
  })
  .then(data => copyCss())
  .then(data => copyImage('favicon.ico'))
  .then(data => copyImage('img/logos-bg.png'))
  .then(data => copyImage('img/rising-stars.png'))
  .then(data => copyImage('img/star.svg'))
  .catch(err => console.error('Unexpected error during server-side rendering', err))

function renderApp (state) {
  const element = React.createElement(App, {
    state
  })
  const html = renderToString(element)
  return html
}

function writeHtml (html, filename) {
  const filepath = path.resolve(process.cwd(), rootFolder, filename)
  return new Promise((resolve, reject) => {
    fs.outputFile(filepath, html, (err, data) => {
      if (err) return reject(err)
      console.log(`${filename} file created!`, html.length)
      resolve(html)
    })
  })
}

// Copy the mainXXXX.css file created by the `build` process, from `build` to `www` folder
function copyCss () {
  const filename = manifest['main.css']
  if (!filename) throw new Error('Unable to read CSS filename from the manifest file!')
  const source = path.resolve(process.cwd(), 'build', filename)
  const destination = path.resolve(process.cwd(), rootFolder, 'main.css')
  return new Promise((resolve, reject) => {
    fs.copy(source, destination, (err, data) => {
      if (err) return reject(err)
      console.log(`${destination} CSS file copied!`)
      resolve(data)
    })
  })
}

// Copy the image file (used by the CSS file) from `build` to `www` folder
function copyImage (filename) {
  const source = path.resolve(process.cwd(), 'build', filename)
  const destination = path.resolve(process.cwd(), rootFolder, filename)
  return new Promise((resolve, reject) => {
    fs.copy(source, destination, (err, data) => {
      if (err) return reject(err)
      console.log(`${destination} image file copied!`)
      resolve(data)
    })
  })
}
