import PropTypes from 'prop-types'

function User({name , surname,age,Islogdin ,friends,adress}) {

  if(!Islogdin){
    return <h1>giriş yapın</h1>
  }

  return (
    <>
      <h1>  
        {
            `${name} ${surname} ${age}`
        }
        </h1>
        <h2>{adress.title},{ adress.zip}</h2>
        {
         friends.map((friend) =>(
            
                <div key={friend.id}>
                    {
                        friend.name
                    }
                </div>
            
         ))
        }
    </>
  )
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    surname: PropTypes.string,
    age : PropTypes.number,
    Islogdin: PropTypes.bool,
    friends: PropTypes.array,
    adress: PropTypes.shape(
        {
            title:PropTypes.string,
            zip: PropTypes.number
        }
    )
}

User.defaultProp={
    Islogdin : "false"
}

export default User