function getFullPage (appHtml) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>The JavaScript landscape in 2016</title>
    <meta name="description" content="bestof.js.org is a place where front-end engineers and node.js developers can find the best components to build amazing web applications.">
    <meta content="Best of JavaScript" property="og:title">
    <meta content="A place to find the best components to build amazing applications: JavaScript client and server side, html, CSS..." property="og:description">
    <meta content="http://bestof.js.org/images/logo2.png" property="og:image">

    <meta name="mobile-web-app-capable" content="yes">
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" type="image/png" href="images/app-icon-192.png" sizes="192x192">
    <meta name="theme-color" content="#e65100">

    <!-- added for Github pages -->
    <link rel="shortcut icon" href="/favicon.ico">
    <link href="main.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
  </head>
  <body>
    <div id="root">${appHtml}</div>
  </body>
</html>`
}

module.exports = getFullPage
