# Create react application

##To create react application we will use:

- NPM (node package manager) as a package manager [documentaiton](https://docs.npmjs.com/files/package.json)
NPM is configured in package.json, that must be on the root folder of your project. For now we need few blocks:
  - dependencies: all modules that our app uses
  - devDependencies: modules, that we use in development, like bundlers, test libs, linters ....
  - scripts: scrpits that we can run to bundle, test or else

- Webpack as code bundler [documentaion](https://webpack.github.io/docs/configuration.html)
We will use ES6 in our code, that is not supported by browsers, here webpack will help us and transpile code into JavaScript.
Webpack config must be in source folder of our project, that is webpack.config.js
For now we will modify only moulde.loaders object in webpack config.

# Components

React components can be "functional" or "extending React.Component"
[documentation](https://facebook.github.io/react/docs/components-and-props.html)

## Functional Component
Functional component it is JavaScript function with JSX or without it in return. It is mostly used for rendering simple components when you don't need React lifecycle hooks.
~~~~
export function FunctionalHeader({name}) {
  const name = `mr. ${name}`
  return (
    <div style={styles.header}>
      <h3>Hello,
        <span>
          {name}!
        </span>
      </h3>
    </div>
  )
}
~~~~

## React Component
React component sis used when you need lifecycle hooks. [documentation](https://facebook.github.io/react/docs/react-component.html)
~~~~
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : `mr. ${props.name}`}
  }
  render(){
      return (
          <h3>Hello,
            <span>{this.state.name}</span>
            !
          </h3>
      )
  }
}
~~~~

## JSX
JSX is syntax in JavaScript, where you can write "xml like" code [documentaiton](https://facebook.github.io/react/docs/jsx-in-depth.html)
```
<h3>Hello,
  <span>{this.state.name}</span>
  !
</h3>
```
Main rules in JSX:
- we must have all our code wrapped in some jsx tag, in this case it is <h3>
- all injection like functions - {showMyName()}, variables - {name} or just some logic - {3 + this.props.numer} in jsx must be in curly braces
