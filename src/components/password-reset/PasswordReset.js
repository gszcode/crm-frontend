import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit} autoComplete="off">
            <Form.Group>
              <Form.Label className="my-3">Reset Password</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter Email"
                required
              />
            </Form.Group>

            <Button className="my-3" type="submit">
              Reset Password
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a onClick={() => formSwitcher('login')} href="#!">
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  )
}

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
}
