import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  pass
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={handleOnSubmit} autoComplete="off">
            <Form.Group>
              <Form.Label className="my-3">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={pass}
                placeholder="Enter Password"
                required
              />
            </Form.Group>

            <Button className="my-2" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a onClick={() => formSwitcher('reset')} href="#!">
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  )
}

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired
}
