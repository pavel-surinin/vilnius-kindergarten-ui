import React from 'react'
import propTypes from 'prop-types'
import {Button, FormGroup, FormControl, Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap'

export class NavigaTionBar extends React.Component {
  render(){
      return (
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Ieškoti darželio pagal pavadinimą" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
        </Navbar>
      )
  }
}
