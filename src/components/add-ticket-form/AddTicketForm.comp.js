import { Form, Jumbotron, Button, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './add-ticket-form.style.css'

export function AddTicketForm({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError
}) {
  return (
    <Jumbotron className="mt-3 add-new-ticket p-4 bg-light">
      <h1 className="text-center">Add New Ticket</h1>
      <hr />
      <Form onSubmit={handleOnSubmit} autoComplete="off">
        <Form.Group className="my-4" as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              onChange={handleOnChange}
              value={formData.subject}
              placeholder="Subject"
              required
              // minLength="3"
              maxLength="100"
            />
            <Form.Text className="text-danger">
              {formDataError.subject && 'Subject is required!'}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group className="my-4" as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              onChange={handleOnChange}
              value={formData.issueDate}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="my-4" as={Row}>
          <Form.Label column sm={3}>
            Password
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              name="detail"
              rows="5"
              onChange={handleOnChange}
              value={formData.detail}
              required
            />
          </Col>
        </Form.Group>

        <Button type="submit" className="my-2 w-100" variant="dark">
          Login
        </Button>
      </Form>
    </Jumbotron>
  )
}

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired
}
