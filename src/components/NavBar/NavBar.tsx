import * as React from 'react';
import './NavBar.css';
import { NavLink } from '../NavLink/NavLink';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem } from 'reactstrap';
export class NavBar extends React.Component<{}, {isOpen: boolean}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }
  render() {
    return(
      <div>
        <Navbar color="faded" light={true} toggleable={true}>
          <NavbarToggler right={true} onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink to="/" title="Home"/>
              </NavItem>
              <NavItem>
                <NavLink to="/gardens" title="Gardens"/>
              </NavItem>
              <NavItem>
                <NavLink to="/test" title="Test"/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
// <div className="nav-bar">
// <NavLink title="Home" to="/"/>
// <NavLink title="Test" to="/test"/>
// <NavLink title="Gardens" to="/gardens"/>
// </div>
