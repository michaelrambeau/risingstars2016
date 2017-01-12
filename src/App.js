import React, { Component } from 'react'
import Bestof2016 from './bestof2016'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render () {
    const { state } = this.props
    // const title = 'The JavaScript Landscape in 2016';
    const title = '2016 JavaScript Rising Stars';
    return (
      <div id="app">
        <Header />
        <div id="picture-block">
          <div className="container">
            <h1>{title}</h1>
          </div>
        </div>
        <Bestof2016 state={state} />
        <Footer />
      </div>
    )
  }
}

export default App
