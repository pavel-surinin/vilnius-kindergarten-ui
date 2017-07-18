import * as React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header title="ReactHeader" />
        <NavBar/>
        <div className="app-content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
