import * as React from 'react';
import './NavBar.css';
import { NavBarLink } from './NavBarLink';
export class NavBar extends React.Component {
  render() {
    return(
      <div className="nav-bar">
        <NavBarLink to="/">home</NavBarLink>
        <NavBarLink to="/gardens">gardens</NavBarLink>
        <NavBarLink to="/contacts">contacts</NavBarLink>
        <NavBarLink to="/chocolate/white">white chocolate</NavBarLink>
        <NavBarLink to="/chocolate/black">black chocolate</NavBarLink>
      </div>
    );
  }
}
