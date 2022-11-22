import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export const Header = () => {
  const history = useHistory()

  const logMeOut = () => {
    history.push('/')
  }

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
      <Navbar.Brand>
        <img
          src={logo}
          alt="logo"
          width="50px"
          br-50
          className="rounded-circle"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-nanbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            style={{
              margin: '0 5px',
              color: '#fff',
              textDecoration: 'none'
            }}
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            style={{
              margin: '0 5px',
              color: '#fff',
              textDecoration: 'none'
            }}
            to="/tickets"
          >
            Tickets
          </Link>
          <Link
            onClick={logMeOut}
            style={{
              margin: '0 5px',
              color: '#fff',
              textDecoration: 'none'
            }}
          >
            Logout
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
