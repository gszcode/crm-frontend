import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export function UpdateTicket({ msg, handleOnChange, handleOnSubmit }) {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text className="d-block">
        Please reply your message here or update the ticket
      </Form.Text>
      <Form.Control
        onChange={handleOnChange}
        value={msg}
        as="textarea"
        row="5"
        name="detail"
      />

      <div className="text-right my-3">
        <Button variant="dark" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  )
}

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
}
