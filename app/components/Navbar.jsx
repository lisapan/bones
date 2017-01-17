'use strict'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, Breadcrumb, Row, FormGroup, FormControl,
         NavDropdown, MenuItem, Glyphicon, Button, Col, Grid, InputGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout as logOutUser } from '../reducers/action-creators/auth'

const LoginSignup = (props) => {
  return (
    <NavDropdown
      noCaret
      eventKey={3}
      title="Account"
      id={props.collapse ? 'login-dropdown-collapse' : 'login-dropdown'}
      className="navbar-login">
      <LinkContainer to={{pathname: '/account/login'}}>
        <MenuItem eventKey={3.1}>Login / Signup</MenuItem>
      </LinkContainer>
      <MenuItem eventKey={3.2}>Order Status</MenuItem>
    </NavDropdown>
  )
}

LoginSignup.propTypes = {
  collapse: PropTypes.bool.isRequired
}

const Logout = (props) => {
  const name = Object.keys(props.auth).length ? null : (props.auth.name || props.auth.email)

  return (
    <NavDropdown
      href="#"
      noCaret eventKey={3}
      title={`Hi, ${name}! `}
      id={props.collapse ? 'logout-dropdown-collapse' : 'logout-dropdown'}
      className="navbar-login">
      <MenuItem eventKey={3.1}>Account</MenuItem>
      <MenuItem eventKey={3.1}>Order Status</MenuItem>
      <MenuItem eventKey={3.1}>Wishlist</MenuItem>
      <LinkContainer to={{pathname: '/'}}>
        <MenuItem eventKey={3.1} onClick={this.props.logout}>
          Logout
        </MenuItem>
      </LinkContainer>
    </NavDropdown>
  )
}

Logout.propTypes = {
  collapse: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired
}

const NavBar = (props) => {
  return (
    <Navbar>
      <Row className="black-bar">
        <h4>Made in the USA - Sweatshop Free</h4>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Navbar.Header>
            <Navbar.Brand>
              <Nav>
                <Col xs={12} sm={12} md={6} lg={6} className="logo">
                  <Link to="/">Animal Apparel<sup>®</sup></Link>
                </Col>
                <Col xsHidden={true} md={6} lg={6}
                  className="breadcrumb-nav">
                  <Nav pullRight={true}>
                    <Breadcrumb>
                      <Breadcrumb.Item href="/products/women" className="navbar-categories">
                        Women
                      </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products/men" className="navbar-categories">
                          Men
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products/kids" className="navbar-categories">
                          Kids
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products/pets" className="navbar-categories">
                          Pets
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/products/sale" className="navbar-categories">
                          Sale
                        </Breadcrumb.Item>
                    </Breadcrumb>
                  </Nav>
                </Col>
              </Nav>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} mdHidden={true} lgHidden={true} className="lower-nav-collapse">
          <Navbar.Collapse>
            <Nav id="lower-nav-collapse">
              { props.auth.user ? <Logout collapse={true}/> : <LoginSignup collapse={true}/> }
              <NavDropdown
                title={<Glyphicon glyph="shopping-cart" />}
                noCaret eventKey={2} href="#" id="cart-dropdown-collapse">
                <LinkContainer to={{ pathname: '/cart' }}>
                  <MenuItem eventKey={2.1}>Your Cart is empty.</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <Navbar.Form id="search-collapse">
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Button>
                      <Button type="submit">Search</Button>
                    </InputGroup.Button>
                    <FormControl type="text" placeholder="Filter by Style# or Keyword" />
                  </InputGroup>
                </FormGroup>
              </Navbar.Form>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
      <Row className="lower-nav">
        <Col md={12} lg={12} xsHidden={true} smHidden={true} id="lower-nav">
          <Nav pullRight={true}>
            { Object.keys(props.auth).length ? <Logout collapse={false}/> : <LoginSignup collapse={false}/> }
            <NavDropdown
              title={<Glyphicon glyph="shopping-cart" />}
              noCaret eventKey={2} href="#" id="cart-dropdown">
              <LinkContainer to={{ pathname: '/cart' }}>
                <MenuItem eventKey={2.1}>Your Cart is empty.</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <Navbar.Form pullRight={true} id="search">
              <FormGroup>
                <InputGroup>
                  <InputGroup.Button>
                    <Button type="submit">Search</Button>
                  </InputGroup.Button>
                  <FormControl type="text" placeholder="Filter by Style# or Keyword" />
                </InputGroup>
              </FormGroup>
            </Navbar.Form>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  )
}

const mapState = ({auth}) => ({auth});
// // equivalent to:
// const mapState = state => {
//   return {
//     currentUser: state.currentUser
//   };
// };

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logOutUser());
    // browserHistory.push('/'); // removed to demo logout instant re-render
  }
});

export default connect(mapState, mapDispatch)(NavBar);
