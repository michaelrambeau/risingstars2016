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
This *Front-end Frameworks* category is maybe the one that is responsible for what was called [the JavaScript fatigue](https://medium.freecodecamp.com/javascript-fatigue-fatigue-66ffb619f6ce#.soeh5g56p) in 2016.
It seemed that every month a new contender made the buzz, pushing the pace of innovation!

To be exact, 2 kinds of projects are mixed in the category:

* Full frameworks that include all features to create a modern web application (routing, data fetching, state management). {angularjs}, {angular-2}, {ember} or {aurelia} are in this category.
* Lighter solutions that focus on the UI layer, like {react}, {vuejs}, {inferno}...

We have already mentioned {vuejs} (number 1 overall), let's see the other contenders.

#### React and its contenders

{react} is number 2, no front-end developer can ignore React and its rich eco-system.

{react} is so popular that it inspired a lot of other libraries that aim to take the best of React, without the fat, in order to improve both performance in the browser and building time.

* {inferno} was the most popular project in this category, it claims to be the fatest alternative to React
* {preact} is a nice alternative too and seems to be quite mature, with an eco-system that includes a boilerplate with offline capabilities, a router, a "compat" module to include easily existing React modules...

#### Angular 1 and 2

Angular project has been split into 2 repositories because Angular 2 is a full rewrite of Angular 1, even if some concepts remain the same.

* {angular-2} is written in TypeScript and takes advantage of ES6 to deliver a modern and thorough framework
* {angularjs} project is the branch 1.x, it's still used in many projects and will remain popular for a while.

It's worth to mention that {ember}, despite its large eco-system and its community is not in the top 10.

So it seems that, rather than opting for full frameworks with all features "out of the box", developers in 2016 flavored ligher approaches and prefer to compose their own solution "à la carte".
`

const nodejsframework = `
In 2016 it has never been easier to create and deploy a node.js application with solutions like:

* [Now](https://zeit.co/now)
* [Webtask.io](https://webtask.io/)
* [Stdlib](https://stdlib.com/)

Projects like [Gomix](https://gomix.com) even lowered the barrier to the node.js world, making easy to anyone to **write** and **share** node.js code in a few clicks, right from the browser.

So if you have to build a web application, which framework to choose?

#### {express}

When you build a web application with node.js, {express} is often considered as the de-facto web server.
Its philosophy (a minimalistic core that you can extend using middleware packages) is familiar to most of node.js developers.

#### {koa}

{koa} philosophy is close to {express} but it's built using ES6 generators to avoid a problem sometimes called *[ Callback Hell](https://www.sitepoint.com/saved-from-callback-hell/)*.

#### {feathers}

{feathers} is a very flexible solution to create a "service oriented" architecture, it's a good fit to create node.js microservices.

#### {keystone}

{keystone} is one of the best solutions I know to get an admin client up and running, in order to manage the content coming from a MongoDB database.
The Admin UI is automatically generated from the models, has all CRUD actions and nice filters.

#### {sails}

{sails} is a full MVC framework, very inspired by Ruby on Rails (hence the name **S**ails!). It has been around for a long time. It can play with any kind of database, SQL or no-SQL.

#### {loopback}

{loopback} is an other mature framework with a lot of features built-in, including authentication with token and connectors to any kind of database.

The killer feature is the **API explorer** feature that let developers check all API end-points in an intuitive way, with the ability to check any user's token.
It's definitevely a good choice if you have to build an API.
`

const mobile = `
JavaScript is so ubiquitous that you can build native mobile applications using technologies web developers already know (HTML. JavaScript, CSS).

#### {react-native}

With React Native, from the same code base, you can build iOS and Android real **native** mobile applications, using concepts familiar to React developers. To know more about building applications for both iOS and Android, read [this tutorial](http://makeitopen.com/).

Other solutions, based on Cordova, used to rely on Webview to render the screens and were not as efficient than a native solution.
"Write Once Run Everywhere"... this is a developer's dream came true!

#### {ionic}

{ionic} was a pionner with the concept of "hybrid" applications.
Under the hood, it's based on Cordova to access the mobile device features. It's very mature with a large eco-system.

#### {nativescript}

{nativescript} aims for the same goal as {react-native} (build real mobile applications using web technologies). It comes in 2 flavors, NativeScript Core and NativeScript + Angular 2

#### Looking forward

A project to follow closely in 2017: [Weex](https://weex-project.io/), *a framework for building Mobile cross-platform UI* built on top of {vuejs}.
`

const testframework = `
The 2 most famous testing framework are {jasmine} and {mocha} but 2 more recent projects got more traction in 2016: {ava} and {jest}.

#### {ava}

{ava}, created by the prolific [Sindre Sorhus](https://github.com/sindresorhus) puts emphasize on performance (parallel test) and ES6. AVA's syntax is close to standard test frameworks like {tape} and {node-tap}.

#### {jest}

{jest}, an other Facebook project, got a lot of traction over the last weeks. It's well-known in the React community, more and more people are moving to Jest (read [this story](https://medium.com/@kentcdodds/migrating-to-jest-881f75366e7e#.z9x53j1ea) for example) and it may become the most popular testing framework in 2017.

Jest has good mocking abilities built-in, whereas other testing frameworks usually rely on libraries like {sinonjs}.
`

const ide = `
About IDE (*Integrated Development Environment*), it's worth to mention that 2 of the most popular IDEs are open-source projects made with web technologies.

#### {visual-studio-code}

In our results, Microsoft leads the way with {visual-studio-code}.

It provides a nice integration with {typescript} and node.js.
Some developers mention improvement about development speed and thank to the *IntelliSense* feature (a mix of highlighting and autocomplete).

Saying "open source" and "Microsoft" in the same sentence is no more an oxymoron!

#### {atom}

{atom}, pushed by Github and built with {electron} (like several other desktop applications, including the Slack desktop client) is not far behind {visual-studio-code}. An interesting fact about Atom: its main language is CoffeeScript!
`

const compiler = `
We are talking here about compilers (or "transpilers") that generate JavaScript from any language (or any variation of JavaScript).
They transform the code into "standard JavaScript" code that the browser (or node.js) can execute.

For example compilers let developers write code using the latest version of JavaScript (ES6) without having to worry about browser support.

#### {typescript}

The most trendy transpiler was {typescript}, it brings to web developers the static types used by Java and C# developers.
The fact that {angular-2} uses TypeScript added even more traction.
There are pros and cons about using types in JavaScript, read these 2 article to make your own point of view:
* [You Might Not Need TypeScript](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b#.1pn05vlis)
* [TypeScript: the missing introduction](https://toddmotto.com/typescript-the-missing-introduction)

#### {babel}

{babel}, along with Webpack, almost became a standard to compile ES6 code and templates used by libraries like React (JSX) in standard JavaScript. Initially created to compile ES6, it became a much more generic tool that can accomplish any code transformation, thank to a system of plugins.

#### {flow}

{flow} is not a compiler, it's a static type checker used to "annotate" the JavaScript code.
Basically using Flow inside a code base means adding comments to describe expected types (read more about using Flow to write modules [here](http://javascriptplayground.com/blog/2017/01/npm-flowjs-javascript/)).

It's used inside the code source of Facebook projects. Since Facebook became one of the major actors of the open source world (with projects like {react}, {react-native}, {flux}, {immutable}, {jest}...), that means a lot.

#### {coffeescript}

During years {coffeescript} and its lean syntax, inspired by Python and Ruby syntax, was the most popular compiler but it was less more trendy in 2016, a lot of developers moved from CoffeeScript to ES6 with Babel.
`

const build = `
In 2016, it's difficult to imagine a web application without any kind of building process.
You usually need a building process to compile templates and optimize assets in order to ship your web application in production.

#### {webpack}

{webpack} is the main tool used to build a single-page application, it plays well with the React eco-system. The newly released version 2 comes with some promising enhancements (check this [introduction](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.7wyiawc0o))

#### {gulp}

{gulp} is a generic a task runner that can be used for any kind of automatic process involving the file system, so it's not a direct contender of Webpack or Browserify.

Like {grunt}, Gulp works by aggregation: you can ask it to minify and concatenate a list of assets but it does not deal with modular JavaScript by itself, as {webpack} or {browserify} do.

Nevertheless it can play well with webpack even if developers tend to use npm scripts instead.

#### {browserify}

{browserify}, because of its simplicity is usually loved by node.js developers.

Basically it takes several node.js packages as an input and generates one single "build" file for the browser as an output. But it seems that a more opionated tool like {webpack} is a a better fit to web application workflows.

2 contenders to follow in 2017, that emphasize on performance and simplicity:
  * {rollup}
  * {fusejs}
`

const reacttemplate = `
React is a great UI library but using React and the modern web development workflow tools require a lot of condiguration.
So how to start creating a real-world application ?

It's the answer provided by the React "boilerplates" and other "starter kits"...

#### {react-boilerplate}

The well named {react-boilerplate} has everything you need, including {redux} and some nice offline features, taking advantage of the web workers technology.

It let developers create what is called *Progressive Web Applications* (or *PWA*): web application that run offline, using a technology called Service Worker, read [this article](https://ponyfoo.com/articles/progressive-app-serviceworker) from Nicolás Bevacqua.

#### {create-react-app}

Facebook addressed the need by providing a lighter approach called {create-react-app} that is a very convenient to start a new React project.

[Dan Abramov](https://github.com/gaearon) (the creator of Redux, working now for Facebook) did a great job, finding the right balance between simplicity and features. For example there is mo fancy styling solution (just plain CSS), no server-side rendering, but everything is well packaged and the developer experience is really good.

The main difference with its contenders is that if you use {create-react-app}, it becomes a dependency of your project, all the magic is hidden and what you see is only **your** application code. You can upgrade the dependency at any time, it's not just a starting point.

#### {nextjs}

{nextjs}, created by the busy folks from [Zeit](https://zeit.co/), has a server-side rendering feaure that can be used to create *universal* applications (or *isomorphic* applications, as we used to say in 2015), that is to say applications that run more or less with the same code client AND server-side.

`

const vdom = `
{react} is so popular that it inspired several other libraries that aim to take the best of React, without the fat, in order to improve both performance in the browser and building time.
* {inferno} was the most popular project in this category, it claims to be the fatest alternative to React
* {preact} is a nice alternative too and seems to be quite mature, with an eco-system that includes a boilerplate with offline capabilities, a router, a *compat* module to include easily existing React modules...
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

#### {hexo}

In 2016, the most popular SSG built with node.js was {hexo}. It's a thorough SSG, close to CMS systems like Wordpress, that can be used to build a blog for example.
It has a lot of features including an internationalization plugin.

#### {gatsby}

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
