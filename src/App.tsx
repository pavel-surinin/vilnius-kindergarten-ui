import * as React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header title="ReactHeader" />
        <NavBar/>
        <div className="app-content">
            <Route path="test" component={Header}/>
          {/*this.props.children*/}
        </div>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
