# Create react application

To create react application we will use:

- NPM (node package manager) as a package manager [documentaiton](https://docs.npmjs.com/files/package.json)

NPM is configured in package.json, that must be on the root folder of your project. For now we need few blocks:
- - dependencies: all modules that our app uses
- - devDependencies: modules, that we use in development, like bundlers, test libs, linters ....
- - scripts: scrpits that we can run to bundle, test or else

- Webpack as code bundler [documentaion](https://webpack.github.io/docs/configuration.html)
We will use ES6 in our code, that is not supported by browsers, here webpack will help us and transpile code into JavaScript.
Webpack config must be in source folder of our project, that is webpack.config.js
For now we will modify only moulde.loaders object in webpack config.
