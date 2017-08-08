import * as React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, RouteComponentProps } from 'react-router-dom';
import { ContentComponent } from './components/ContentComponent/ContentComponent';

interface ChocolateProps extends RouteComponentProps<{type: string}> {

}

class Chocolate extends React.Component<ChocolateProps, {}> {
  render() {
    return (
      <div style={{background : this.props.match.params.type}}>
        yo
      </div>);
  }
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header title="ReactHeader" />
        <div className="app-content">
          <Route exact={true} path="/" render={() => <p>home</p>}/>
          <Route path="/contacts" render={() => <p>contacts</p>}/>
          <Route
            path="/chocolate/:type"
            component={Chocolate}
          />
          <Route
            path="/gardens"
            component={() => {
              return <ContentComponent kindergartens={[]} />; } }
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
