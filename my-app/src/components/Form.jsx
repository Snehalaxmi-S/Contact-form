import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [data,setData] = useState({name: "", email: "", phone: "" , bill: "", subject: "", enquiry: ""})
    const handleChange = (e) => {
        const name = e.target.name;
        const value= e.target.value;
        setData({...data, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(data)
    }
  return (
    <form method='post' onSubmit={handleSubmit}>
        <h1>Post Your <span>Query Here</span></h1>
        <input type="text" name='name' id='' onChange={handleChange} value={data.name} placeholder='Enter name...'/>
        <input type="email" name='email' id='' onChange={handleChange} value={data.email} placeholder='Enter email...'/>
        <input type="text" name='phone' id='' onChange={handleChange} value={data.phone} placeholder='Enter phone number...'/>
        <input type="text" name='bill' id='' onChange={handleChange} value={data.bill} placeholder='Enter bill number...'/>
        <input type="text" name='subject' id='' onChange={handleChange} value={data.subject} placeholder='Enter the subject of enquiry...'/>
        <textarea name="enquiry" id="" cols="30" rows="10" onChange={handleChange} value={data.enquiry} placeholder='Enter the content of enquiry...'/>
        <button type='submit'>Send</button>
    </form>
  )
}

export default Form