import { DefaultLayout } from './layout/DefaultLayout'
import { Entry } from './page/entry/Entry.page'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>// Dashboard</DefaultLayout>
    </div>
  )
}

export default App
