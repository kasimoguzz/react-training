import {useState ,useEffect} from 'react'

function Form({addContacts ,contacts}) {
  const initalForm = { fullname : "", phone_number : "" }
  const [form, setForm] = useState(initalForm)

  const changeInput = (e)=>{
    
    setForm({...form , [e.target.name]: e.target.value})
  }

  useEffect(()=>{
    setForm(initalForm)
  },[contacts])

  const onSubmit = (e)=>{
    e.preventDefault();
    
    
    if(form.fullname === "" || form.phone_number ===""){

      return false;
    }
    addContacts([...contacts, form])
    
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="fullname" value={form.fullname} placeholder='fullname' onChange={changeInput} />
      </div>
      <div>
      <input name="phone_number" value={form.phone_number} placeholder='phone number' onChange={changeInput} />
      </div>
      <div>
      <button>add</button>
      </div>
    </form>
  )
}

export default Form