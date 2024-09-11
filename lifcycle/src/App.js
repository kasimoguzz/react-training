import Counter from './component/Counter'
import {useState} from 'react'

function App() {
  const [visible, setIsvisible] = useState(true)
  return (
    <div>
      {visible && <Counter />}

      <br />
      <button onClick={()=> setIsvisible(!visible)}>toggle counter</button>
    </div>
  )
}

export default App