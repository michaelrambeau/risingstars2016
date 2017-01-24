import React from 'react'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string
    }
  },
  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <meta content="/img/rising-stars.png" property="og:image" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#e65100" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          {css}
          <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500" rel="stylesheet" />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {true && <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />}
        </body>
      </html>
    )
  }
})
