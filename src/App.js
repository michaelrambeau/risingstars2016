import React, { Component } from 'react'
import Bestof2016 from './bestof2016'
import Footer from './Footer'

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
        <div id="picture-block">
          <div className="container">
            <h1>The JavaScript Landscape in 2016</h1>
          </div>
        </div>
        <Bestof2016 state={state} />
        <Footer />
      </div>
    )
  }
}

export default App
