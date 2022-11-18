import { Form, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

export function SearchForm({ handleOnChange, str }) {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column ms="2">
          Search:{' '}
        </Form.Label>
        <Col ms="10">
          <Form.Control
            name="searchStr"
            onChange={handleOnChange}
            value={str}
            placeholder="Search..."
          />
        </Col>
      </Form.Group>
    </Form>
  )
}

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired
}
