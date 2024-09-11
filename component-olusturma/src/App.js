import Header from './component/Header'
import User from './component/User'


const friends = [
  {
    id: 1,
    name: "mehmet"
  },
  {
    id: 2,
    name: "ahmet"
  },
  {
    id: 3,
    name: "ayşe"
  },
  {
    id: 4,
    name: "fatma"
  }
]

function App(){
  return(
    <>
    
    <User 
    name="deneme" 
    surname="yapıyorum" 
    age={2} 
    Islogdin={true} 
    friends={friends}
    adress={
      {
        title:'istanbul',
        zip:1212
      }
    }
    />
    </>
  )
}

export default App;