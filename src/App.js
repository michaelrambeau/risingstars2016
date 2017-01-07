import React, { Component } from 'react'
import './App.css'
import Bestof2016 from './bestof2016'

class App extends Component {
  render () {
    const { state } = this.props
    return (
      <div id="app">
        <div id="header">
          <div className="container">
            <a id="logo" href="http://bestof.js.org">bestof.js.org</a>
          </div>
        </div>
        <Bestof2016 state={state} />
      </div>
    )
  }
}

export default App
