import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Form = () => {

    const[form,setForm]=useState({
        name:'',
        rollno:'',
        collge:'',
        city:'',
        remark:'',
    })
    const navigate = useNavigate();

    const handleChange =(event)=>{
        const{name, value}= event.target;

        setForm((prevForm)=>({
            ...prevForm,
            [name]:value,
        }));
    };

    const handleForm =(e)=>{
        e.preventDefault();

        localStorage.setItem('formData', JSON.stringify(form));

        navigate('/data');
    }

    
  return (
    

    <div className='form-card'>
      <h1>Student Data</h1>
      <form action="" onSubmit={handleForm}>
        Student Name:
        <input type="text" value={form.name} name="name" id="" onChange={handleChange} /><br />
        Student RollNo:
        <input type="number" value={form.rollno} name="rollno" id="" onChange={handleChange}/><br />
        College Name:
        <input type="text" value={form.collge} name="collge" onChange={handleChange} /><br />
        City:
        <input type="text" name="city" value={form.city} id="" onChange={handleChange} /><br />
        Remark(option):
        <input type="text" value={form.remark} name="remark" id="" onChange={handleChange} /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
