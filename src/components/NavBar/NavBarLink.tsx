import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import './NavBar.css';

interface NavBarLinkProps {
  to: string;
}

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
