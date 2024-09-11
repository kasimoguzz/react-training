import {useState,useCallback} from 'react'
import './App.css';
import Header from './components/Header';

function App() {
  const [number ,setNumber] = useState(0)

  const increment = useCallback(()=>{
    setNumber((prevState)=> prevState + 1)
  },[])
  
  return (
    <div className="App">
    
     <Header increment={increment} />
     <hr />
     {
      number  
     }
     <br />
     <br />
    
    </div>
  );
}

export default App;
