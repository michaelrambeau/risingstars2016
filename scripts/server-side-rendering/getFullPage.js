const title = '2016 JavaScript Rising Stars'
const description = 'A complete overview of the JavaScript landscape in 2016: trends about front-end and node.js frameworks, tooling, IDE, Static site generators...'

function getFullPage (appHtml) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta content="${title}" property="og:title">
    <meta content="${description}" property="og:description">
    <meta content="/img/rising-stars.png" property="og:image">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#e65100">
    <!-- added for Github pages -->
    <link rel="shortcut icon" href="/favicon.ico">
    <link href="main.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,500" rel="stylesheet">
  </head>
  <body>
    <div id="root">${appHtml}</div>
    ${getAnalytics()}
  </body>
</html>`
}

// Analytics script
function getAnalytics () {
  return (`<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-44563970-2', 'auto');
  ga('send', 'pageview');
</script>
`)
}

module.exports = getFullPage
