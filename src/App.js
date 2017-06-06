import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/style.css'

class App extends React.Component{
  render () {
    return (
      <div>Hello, {this.props.name}!</div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string,
};

ReactDOM.render(<App name='reactas'/>, document.getElementById("app"));
