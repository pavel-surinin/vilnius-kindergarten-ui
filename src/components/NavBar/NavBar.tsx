import * as React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
  render() {
    return(
      <div className="nav-bar">
        <Link to="test">Test Link</Link>
      </div>
    );
  }
}
