import {useState,useEffect} from 'react'

function User() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((e)=> console.log(e))
        .finally(()=> setIsloading(false))
        
        
    },[])

  return (
   
    <div>
        <h1>Users</h1>
        {isLoading && <div>...loading</div>}

        {users.map((user)=>(
            <div key={user.id}>{user.name}</div>
        ))}
    </div>
  )
}

export default User