import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { shortText } from '../../utils/validation'

const initialFormData = {
  subject: '',
  issueDate: null,
  detail: ''
}

const initialFormError = {
  subject: false,
  issueDate: false,
  detail: false
}

export function AddTicket() {
  const [formData, setFormData] = useState(initialFormData)
  const [formDataError, setFormDataError] = useState(initialFormError)
  useEffect(() => {}, [formData, formDataError])

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    setFormDataError(initialFormError)

    const isSubjectValid = shortText(formData.subject)

    setFormDataError({
      ...initialFormError,
      subject: !isSubjectValid
    })

    console.log('Form submit request received', formData)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formData={formData}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  )
}
