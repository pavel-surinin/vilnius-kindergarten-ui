# ReactWednesdays #3 - Routing

For routing in react we will use react-router v4 library. [Documentation](https://reacttraining.com/react-router/web/guides/philosophy)
to start we need to install it in our project

`npm install --save react-router-dom`

`npm install --save-dev @types/react-router-dom`

For routing we will use `<BrowserRouter>`[(docs)](https://reacttraining.com/react-router/web/api/BrowserRouter) 
component. It will define scope where it will be active.

Lets define the routing scope:
```
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
```

Now we are good to use routing in our components.

Let's go to navbar and create some links. `<Link>`[(docs)](https://reacttraining.com/react-router/web/api/Link) 
component lets push paths to browser history.

```
export class NavBar extends React.Component {
  render() {
    return(
      <div className="nav-bar">
        <Link to="/home">home</Link>
        <Link to="/gardens">gardens</Link>
        <Link to="/contacts">contacts</Link>
      </div>
    );
  }
}
```
Now we have links to navigate in our web app.
To make decision based on route use `<Route>` [(docs)](https://reacttraining.com/react-router/web/api/Route) component. 
Add routes in `<App>` component to match paths we defined in navbar links.
```
<div className="app-content">
    <Route exact={true} path="/" render={() => <p>home</p>}/>
    <Route path="/gardens" render={() => <p>gardens</p>}/>
    <Route path="/contacts" render={() => <p>contacts</p>}/>
</div>
```
For path `/gardens` we want `<ContentComponent>` to be used.
```
<Route
  path="/gardens"
  component={() => {
    return <ContentComponent kindergartens={[]} />; 
    } 
  }
/>
```
Now let's make custom navigation button component:

```
export class NavBarLink extends React.Component<NavBarLinkProps, {}> {
  render() {
    const {to} = this.props;
    return (
      <Route
        exact={to === '/' || false}
        children={({location}) => {
          return (
            <div className={`nav-bar-link ${location.pathname === to && 'active'}`}>
              <Link to={to}>{this.props.children}</Link>
            </div>
          );
        }}
      />
    );
  }
}
```
Component `<Route>` has property `children` where you can pass components to be wrapped with router context.
`children` comes from `RouteComponentProps<any>` interface :
```
interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}
```
To have params in path simply needs to add param name after `:` in `<Route>` component
```
<Route
  path="/chocolate/:type"
  component={Chocolate}
/>
```
Then `<Chocolate/>` component will have `RouteComponentProps`, and could use them to make decisions based on 
route params.
