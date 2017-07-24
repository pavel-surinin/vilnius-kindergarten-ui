import * as React from 'react';
import { Route } from 'react-router-dom';
import { ContentComponent } from './components/ContentComponent/ContentComponent';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Garden } from './components/Garden/Garden';
import './App.css';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header title="ReactHeader" />
        <NavBar/>
        <div className="app-content">
          <Route exact={true} path="/" render={() => <p>home</p>}/>
          <Route path="/test" render={() => <p>test</p>}/>
          <Route path="/gardens" exact={true} component={ContentComponent}/>
          <Route path="/gardens/:id" component={Garden}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
