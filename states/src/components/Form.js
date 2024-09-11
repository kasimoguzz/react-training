import React, { useState } from 'react'

function Form() {

    const [form, setForm] = useState({name: "", surname : ""})


    const changeForm = (e) =>{

        setForm({...form , [e.target.name]: e.target.value})
    }
  return (
    <>

    <div>
        name : <br />
        <input name='name' value={form.name} onChange={changeForm} />
        <br />
        surname : <br />
        <input name='surname' value={form.surname} onChange={changeForm}  />
        <br />
        {form.name} {form.surname}
    </div>

    </>
  )
}

export default Form