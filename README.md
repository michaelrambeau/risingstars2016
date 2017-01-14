![image](https://cloud.githubusercontent.com/assets/5546996/21958450/fceccf32-daf1-11e6-8913-a0fce9c4e7bf.png)

# 2016 JavaScript Rising Stars

A complete overview of the JavaScript landscape in 2016: trends about front-end and node.js frameworks, tooling, IDE, Static site generators...

This is a React application created from [Create React App](https://github.com/facebookincubator/create-react-app).

I added a server-side rendering script to generate a static html page, without shipping React and the library used to generate the SVG charts.

Hosted on Github pages to able to use the [js.org](https://js.org/) domain.

## Commands

Start the development server:

```
npm start
```

Create the build (`/build` folder)

```
npm run build
```

Server-side rendering (generate the `/docs` folder by a script from my own)

```
npm run ssr
```

Image compression, assuming that the image was created inside a `design` folder


```
npm run img
```
