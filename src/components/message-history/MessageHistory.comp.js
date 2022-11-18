import PropTypes from 'prop-types'
import './message-history.style.css'

export function MessageHistory({ msg }) {
  if (!msg) return null
  return msg.map((item, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send  text-secondary">
        <div className="senderM">{item.messageBy}</div>
        <div className="dateM">{item.date}</div>
      </div>
      <div className="message">{item.message}</div>
    </div>
  ))
}

MessageHistory.propTypes = {
  msg: PropTypes.object.isRequired
}
