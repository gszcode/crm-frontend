import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <Link to={`/ticket/${ticket.id}`}>
                <td>{ticket.subject}</td>
              </Link>
              <td>{ticket.status}</td>
              <td>{ticket.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              Not ticket show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired
}
