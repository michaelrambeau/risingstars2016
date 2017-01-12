// ### Learning the fundamentals 📚
//
// The project number 2 in 2016 is a series of book by Kyle Simpson: {you-dont-know-js}.
//
// It's very thorough, a must-read if you want to know everything about prototype, generators, functional concepts etc...
//
// Its popularity tells a lot about JavaScript popularity in 2016.
//
// ### How to be awesome 😎
//
// The project number 3 is also about learning and documentation: The {awesome} list concept, created by Sindre Sorhus.
//
// The concept is very simple: gather the best links about a given topic in a simple document written in markdown language and stored on Github so that any one can contribute.
//
// It's not limited to web development, you will find there tons of useful resources about a large range of topics, including machine learning, games, the block chain...
//
// ### Mobile: the rise of React Native 📱
//

const all = `
### Overview

By checking the 10 hottest projects of the year, you can get a good overview of what was the web development landscape in 2016, since you will find:

* 2 UI frameworks: {vuejs} and {react}
* The leading solution to build desktop applications: {electron}
* A mobile framework: {react-native}
* The most famous CSS toolkit: {bootstrap}
* A state management library based on functional concepts: {redux}
* A powerful and flexible chart library: {d3}
* An IDE: {visual-studio-code} (developers love their every day tools!)
* JavaScript server-side with {nodejs} itself
* The main tool used to build front-end applications: {webpack}

It tells a lot about JavaScript ubiquity and versatility in 2016.

### And the 2016 winner is... 🏆

{vuejs} project got more than 25,000 stars on Github last year, it means 72 stars by day, it's more than any other framework, including React and Angular.

The [version 2](https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.lekly4sa8), that takes advantage of the Virtual DOM for performance, was released in October.

{vuejs} is used in production by big companies (including Alibaba, the biggest e-commerce company in China), so you can consider it as a safe choice.

There is already a quite mature eco-system around it, including a router ({vue-router}) and a state management library ({vuex}).

It seems that {vuejs} took the best of {react} (the component approach) and {angularjs} (templates are html code enhanced by the framework features).

`

const framework = `
This "Front-end framework" category is maybe the one that is responsible for what was called "the JavaScript fatigue" in 2016.
It seemed that every month a new contender made the buzz, pushing the pace of innovation...

We have already mentioned {vuejs} (number 1 overall).

{react} is number 2, no front-end developer can ignore React and its rich eco-system.

Angular project has been split into 2 repositories because Angular 2 is a full rewrite of Angular 1, even if some concepts remain the same.

* {angular-2} is written in TypeScript and takes advantage of ES6 to deliver a modern and thorough framework
* {angularjs} project is the branch 1.x, it's still used in many projects and will remain popular for a while.

{react} is so popular that it inspired a lot of other libraries that aim to take the best of React, without the fat, in order to improve both performance in the browser and building time.

* {inferno} was the most popular project in this category, it claims to be the fatest alternative to React
* {preact} is a nice alternative too and seems to be quite mature, with an eco-system that includes a boilerplate with offline capabilities, a router, a "compat" module to include easily existing React modules...
`

const nodejsframework = `
When you have to build a web application with node.js, {express} is often considered as the de-facto web server.
Its philosophy (a minimalistic core that you can extend using middleware packages) is familiar to most of node.js developers.

{koa} philosophy is closed to {express} but it's built using ES6 generators to avoid a problem sometimes called "The callback hell".

{feathers} is a solution to create a "service oriented" architecture, it's a good fit to create node.js microservices
 (by the way micro-service was an other buzz word in 2016)

{keystone} is one of the best solutions I know to get an admin client up and running, in order to manage the content coming from a MongoDB database.
The Admin UI is automatically generated from the models, has all CRUD actions and nice filters.
`

const mobile = `
JavaScript is so ubiquitous that you can build native mobile applications using technologies web developers already know (HTML. JavaScript, CSS).

We have seen that {react} is number 2, no front-end developer can ignore React and its rich eco-system. But what is more impressive is the rise of {react-native}.

With React Native, from the same code base, you can build iOS and Android real **native** mobile applications, using concepts familiar to React developers. To know more about building applications for both iOS and Android, read [this tutorial](http://makeitopen.com/).

Other solutions, based on Cordova, used to rely on Webview to render the screens and were not as efficient than a native solution.
It's a mobile developer dream came true !

{ionic} was a pionner with the concept of "hybrid" applications.
Under the hood, it's based on Cordova to access the mobile device features. It's very mature with a large eco-system.

{nativescript} aims for the same goal as {react-native} (build real mobile applications using web technologies). It comes in 2 flavors, NativeScript Core and NativeScript + Angular 2

A project to follow closely in 2017: [Weex](https://weex-project.io/), "a framework for building Mobile cross-platform UI" built on top of {vuejs}.
`

const testframework = `
The 2 more most popular testing framework are {jasmine} and {mocha} but 2 more recent projects got more traction in 2016: {ava} and {jest}.

{ava}, created by the prolific [Sindre Sorhus](https://github.com/sindresorhus) puts emphasize on performance (parallel test) and ES6.

{jest} got a lot of traction over the last weeks and is more and more used in the React community.
`

const ide = `
About IDE ("Integrated development environment"), it's worth to mention that 2 of the most popular IDEs are open-source projects made with web technologies.

In our results, Microsoft leads the way with {visual-studio-code}.

It provides a nice integration with {typescript} and node.js.
Some developers mention improvement about development speed and thank to the "IntelliSense" feature (a mix of highlighting and autocomplete).
Saying "open source" and "Microsoft" in the same sentence is no more an oxymoron!

{atom}, pushed by Github and built with {electron} (like several other desktop applications, including the Slack desktop client) is not far behind {visual-studio-code}. A fun fact about Atom: its main language is CoffeeScript!
`

const compiler = `
We are talking here about compilers (or "transpilers") that generate JavaScript from any language (or any variation of JavaScript).
They transform the code into "standard JavaScript" code that the browser (or node.js) can execute.

For example compilers let developers write code using the latest version of JavaScript (ES6) without having to worry about browser support.

The most trendy transpiler was {typescript}, it brings to web developers the static types used by Java and C# developers.
The fact that {angular-2} uses TypeScript added even more traction.
There are pros and cons about using types in JavaScript, read these 2 article to make your own point of view:
* [You Might Not Need TypeScript](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b#.1pn05vlis)
* [TypeScript: the missing introduction](https://toddmotto.com/typescript-the-missing-introduction)

{babel}, along with Webpack, almost became a standard to compile ES6 code and templates used by libraries like React (JSX) in standard JavaScript. Initially created to compile ES6, it became a much more generic tool that can accomplish any code transformation, thank to a system of plugins.

During years {coffeescript} and its lean syntax, inspired by Python and Ruby syntax, was the most popular compiler but it was less more trendy in 2016, a lot of developers moved from CoffeeScript to ES6 with Babel.
`

const build = `
In 2016, it's difficult to imagine a web application without any kind of building process.

{webpack} is the main tool used to build a single-page application, it plays well with the React eco-system. The newly released version 2 comes with some promising enhancements (check this [introduction](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.7wyiawc0o))

{gulp} is a generic a task runner that can be used for any kind of automatic process, so it's not a direct contender of Webpack or Browserify, it can play well with webpack even if developers tend to use npm scripts instead.

{browserify}, because of its simplicity is usually loved by node.js developers. Basically it takes several node.js packages as an input and generates one single "build" file for the browser as an output. But it seems that a more opionated tool like {webpack} is a a better fit to web application workflows.

2 contenders to follow in 2017, that emphasize on performance and simplicity:
  * {rollup}
  * {fusejs}
`

const reacttemplate = `
React is a great UI library but using React and the modern web development workflow tools require a lot of condiguration.
So how to start creating a real-world application ?

It's the answer provided by the React "boilerplates" and other "starter kits"...

The well named {react-boilerplate} has everything you need, including {redux} and some nice offline features, taking advantage of the web workers technology. It let developers create what is called "Progressive Web Applications" (or "PWA").

Facebook addressed the need by providing a lighter approach called {create-react-app} that is a very convenient to start a new React project. Dan Abramov (the creator of Redux, working now for Facebook) did a great job, finding the right balance between simplicity and features.
`

const vdom = `
{react} is so popular that it inspired several other libraries that aim to take the best of React, without the fat, in order to improve both performance in the browser and building time.
* {inferno} was the most popular project in this category, it claims to be the fatest alternative to React
* {preact} is a nice alternative too and seems to be quite mature, with an eco-system that includes a boilerplate with offline capabilities, a router, a "compat" module to include easily existing React modules...
* {riotjs} strives for performance and simplicity but takes a totally different approach, it does not uses any JSX-like language but uses html templates instead.
`

const ssg = `
Static site generators (or "SSG") are tools that generate a bunch of .html, .css and JavaScript files that you can deploy on any simple web server (Apache or NGNX) without the fuss or a setting up a database or any web framework.
As {gatsby} site says:

> Build sites like it's 1995

Static web site are fast, robust and easy to maintain.

SSG are very popular because there are a lot of very good solutions to host static web site for free:

* [Github pages](https://pages.github.com/)
* [Gitlab pages](http://pages.gitlab.io/)
* [Netlify](https://www.netlify.com/)
* [Surge](https://surge.sh/)
* [Now static](https://zeit.co/blog/now-static)

About the 2 most trendy (built with JavaScript) SSG in 2016:

{hexo} is a thorough SSG, close to CMS systems like Wordpress, that can be used to build a blog for example.
It has a lot of features including an internationalization plugin.

The newcomer {gatsby} is a very interesting solution, it stands out from its condenders because it uses React eco system to generate static html files. The fact that you can combine React components, mardown files and server-side rendering makes it very powerful.
`

export default {
  all,
  framework,
  nodejsframework,
  reacttemplate,
  mobile,
  ide,
  compiler,
  build,
  testframework,
  vdom,
  ssg
}
