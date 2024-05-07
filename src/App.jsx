import './App.css'
import {updateSLADate} from './Repository.js'

function App() {
  return (
    <>      
      <button onClick={updateSLADate}>Update SLA</button>
    </>
  )
}

export default App
