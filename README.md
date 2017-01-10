# Best of JavaScript 2016

This is the repository of the article called "The JavaScript landscape in 2016".

This is a React application created from [Create React App](https://github.com/facebookincubator/create-react-app).

## Commands

Start the development server:

```
npm start
```

Create the build (`/build` folder)

```
npm run build
```

Server-side rendering (generate the `/www` folder by a script from my own)

```
npm run ssr
```

Image compression, assuming that the image was created inside a `design` folder


```
imagemin design/project-logos-5x5.png > public/2016/project-logos-5x5.png
```

## Deploy to github pages (the production version)

From this repo, copy `/www/2016` folder to `/2016` folder in `gh-pages` branch of `bestofjs`.

Check the result: http://bestof.js.org/2016/


## Introduction

We created [bestof.js.org](http://bestof.js.org/) to gather the most popular open-source projects about the web platform and node.js: frameworks, libraries, css toolkits... but also documentation and learning tools.

Let's see **by the numbers** which projects got traction in 2016.

In 2015, React was the king and Redux won by storm the battle of Flux implementations.
Who are the 2016 winners ?
