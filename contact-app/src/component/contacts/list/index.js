import {useState} from 'react'

function List({contacts}) {
  const [filterText,setFilterText]= useState("")
  const filtred = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
    item[key]
    .toString()
    .toLowerCase()
    .includes(filterText.toLowerCase())
  )
     
  })
  return (
    <div id='container'>
      <input placeholder='filter contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>
      <ul>
      
        {
          filtred.map((contact,i)=>(
            <li key={i}>
              <span>{contact.fullname} </span>
              <span>{contact.phone_number}</span>
            </li>
          ))
        }
      
      </ul>
    </div>
  )
}

export default List