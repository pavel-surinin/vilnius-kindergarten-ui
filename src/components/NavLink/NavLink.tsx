import * as React from 'react';
// import { Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavLink.css';
interface NavLinkProps {
  to: string;
  title: string;
}

export class NavLink extends React.Component<NavLinkProps, {}> {
  render() {
    const {to, title} = this.props;
    return (
        <Route
          exact={to === '/' ? true : false}
          path={to}
          children={({match}) => (
            // <div className={`nav-link ${match && 'link-active'}`}>
            <div className={`fade-enter ${match && 'fade-enter-active'}`}>
              <Link to={to}>
                {title}
              </Link>
            </div>
          )}
        />
    );
  }
}
