import {useState, useEffect} from "react";
import List from './List'
import Form from './Form'

import "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "deneme",
      phone_number: "1234"
    },{
      fullname: "deneme",
      phone_number: "1234"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return <div id="container">
    <h1>Contacts</h1>
    <List contacts={contacts} />
    <Form addContact={setContacts} contacts={contacts} />
  </div>;
}

export default Contacts;
