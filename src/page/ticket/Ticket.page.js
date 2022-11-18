import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket'
import { useEffect, useState } from 'react'

const ticket = tickets[0]

export function Ticket() {
  const [message, setMessage] = useState('')

  useEffect(() => {}, [message])

  const handleOnChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    alert('Form submited!!')
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Ticket Oponed: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-dark">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <MessageHistory msg={ticket.history} />
      </Row>
      <hr />

      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  )
}
