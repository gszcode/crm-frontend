import { Entry } from './page/entry/Entry.page'
import { Dashboard } from './page/dashboard/Dashboard.page'
import { AddTicket } from './page/new-ticket/AddTicket.page'
import { TicketLists } from './page/ticket-listing/TicketLists.page'
import { Ticket } from './page/ticket/Ticket.page'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './components/private-route/PrivateRoute.comp'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets">
            <TicketLists />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>

          <Route path="*">
            <h1>404 Page not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
