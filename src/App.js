import { DefaultLayout } from './layout/DefaultLayout'
import { Entry } from './page/entry/Entry.page'
import './App.css'
import { Dashboard } from './page/dashboard/Dashboard.page'
import { AddTicket } from './page/new-ticket/AddTicket.page'

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  )
}

export default App
