import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import './github.css'
// import './index.css'
import getInitialState from './getInitialState'

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
