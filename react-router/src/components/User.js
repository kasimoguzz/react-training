import {useParams , Link} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'


function User() {
const {id} = useParams()
const [loading, setLoading] = useState(true)
const [users, setUsers] = useState({})
useEffect(()=>{
axios(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res)=> setUsers(res.data))
.finally(()=> setLoading(false))
},[id])

 
  return (
    <div>
        {loading && <div>...loading</div>}
        <code>
           {  JSON.stringify({users}) }
        </code>
        <br />
        <br />
        <Link to={`/users/${parseInt(id) + 1}`}>next user ({parseInt(id) + 1})</Link>
    </div>
  )
}

export default User