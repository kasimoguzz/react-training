import {useState} from 'react'

function App() {

  const [name , setName] = useState("user")
  const [age , setAge] = useState(32)    
  const [friends , setFriends] = useState(["user1", "user2","user3"])
  const [adress, setAdress] = useState({title : "istanbul", zip: 3223})
  return (
    <>
    <h1>merhaba {name}</h1>
    <h2>{age}</h2>
    <button onClick={()=> setName("ahmet")}>change name</button>
    <button onClick={()=> setAge(21)}>change age</button>
    <hr />
    <h1>friends</h1>
    {friends.map((friend, i)=>(
      <div key={i}>{friend}</div>
    ))}
    <button onClick={()=> setFriends([...friends, "ayşe"])}>add new friend</button>


    <br />
    <hr />

    <h1>adress</h1>
    <div>
    <h3>{adress.title} {adress.zip}</h3>
    <br />
    <button onClick={()=> setAdress({...adress, title : "Ankara"})}>change adress</button>
    </div>
    </>
  )
}

export default App