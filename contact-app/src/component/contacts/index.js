import React from 'react'
import List from './list'
import Form from './form'
import {useState,useEffect} from 'react'
function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname:"user",
      phone_number: 3232323
    },
    {
      fullname:"adada",
      phone_number: 3232323
    },
    {
      fullname:"usadader",
      phone_number: 3232323
    }
  ])
  useEffect(()=>{
    console.log(contacts);
    
  },[contacts])
  return (
    <div>
        <List contacts={contacts} />
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts