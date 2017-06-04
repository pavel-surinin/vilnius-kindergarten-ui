import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<App name='react'/>, document.getElementById("app"));
