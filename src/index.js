import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import getInitialState from './getInitialState'

// We import all css files from index.js, avoiding the recommended way to import css from components
// because of the server-side-rendering script we added to `create-react-app`
import './css/github.css'
import './css/index.css'
import './css/App.css'
import './css/ProjectTable.css'
import './css/social.css'
import './css/Picture.css'

function fetchData () {
  const url = 'https://bestofjs-api-dev.firebaseapp.com/projects.json'
  return window.fetch(url)
    .then(r => r.json())
}

fetchData()
  .then(json => {
    const state = getInitialState(json)
    render(state)
  })

function render (state) {
  ReactDOM.render(
    <App state={state} />,
    document.getElementById('root')
  )
}
