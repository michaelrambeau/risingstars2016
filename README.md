![image](https://cloud.githubusercontent.com/assets/5546996/21958450/fceccf32-daf1-11e6-8913-a0fce9c4e7bf.png)

# 2016 JavaScript Rising Stars

A complete overview of the JavaScript landscape in 2016: trends about front-end and node.js frameworks, tooling, IDE, Static site generators...

Mentioned in [JavaScript Weekly](http://javascriptweekly.com/issues/318) newsletter

> Some interesting analysis of the JavaScript ecosystem based on GitHub star count growth in the past year for areas like frameworks, build tools, and testing frameworks.

[![image](https://cloud.githubusercontent.com/assets/5546996/22129924/4f5876ce-deec-11e6-810a-a0b012fe465c.png)](http://javascriptweekly.com/issues/318)

## Technical overview

This is an application created using:

* [Gatsby](https://github.com/gatsbyjs/gatsby)
* [Victory](http://formidable.com/open-source/victory/): a library to create SVG charts with React
* [React Intl](https://github.com/yahoo/react-intl)

It's hosted on Github Pages using the [js.org](https://js.org/) domain.

File system:

* `src`: the application source code (React components)
* `build`: default production build created by `npm run build` (not committed to Git)
* `docs`: custom production build, created by `deploy` script, the final assets served by Github Pages

## Commands

Start the development server:

```
npm start
```

Create the build (`/public` folder)

```
npm run build
```

Deploy to Github pages (generate the `/docs` folder)

```
npm run deploy
```
