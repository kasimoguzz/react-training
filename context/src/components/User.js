import {useContext ,useState} from 'react'


import UserContext from '../context/UserContext'
function User() {
    const [loading, setLoading] = useState(false)
    const {user, setUser} = useContext(UserContext)

    const handleLogin = ()=>{
        setLoading(true)
        setTimeout(()=>{
            setUser({ id:1, username:"unkown" , bio:"lorem ipsum" })
            setLoading(false)
        },1500)

    }   

    const handleLogout = ()=>{
        setUser(null)
    }
    
    
  return (
    <div>
        {
            !user && (<button onClick={handleLogin}>{loading ? "...loading" : "login"}</button>)
        }
        <br />
        {
            JSON.stringify(user)
        }
        <br />
        {
            user && (<button onClick={handleLogout}>logout</button>)
        }
    </div>
  )
}

export default User