import React from 'react'
import { Form , redirect , useNavigation } from 'react-router-dom'
import axios from "axios"
import {toast} from 'react-toastify'


const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';
                        
export const action = async ({request})=>{  
const formData = await request.formData() // FormData object, which holds the submitted form fields as key-value pairs
const data = Object.fromEntries(formData) // convert it into a JavaScript object
//console.log(data);
try {
  const response = await axios.post(newsletterUrl, data)
  toast.success(response.data.msg)
  return redirect('/');  
} catch (error) {
  toast.error(error?.response?.data?.msg)
  console.log(error);
  return error;
}
}

const NewsLetter = () => {
 const navigation = useNavigation() 
 const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className='form' method='POST' >
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>our news letter</h4>
      {/* name */}
      <div className='form-row' >
        <label htmlFor="name" className='form-label' >name</label>
        <input type="text" className='form-input' name='name' id='name' required />
      </div>
      {/* lastname */}
      <div className='form-row' >
        <label htmlFor="lastname" className='form-label' >last name</label>
        <input type="text" className='form-input' name='lastName' id='name' required />
      </div>
      {/* email */}
      <div className='form-row' >
        <label htmlFor="email" className='form-label' >email</label>
        <input type="email" className='form-input' name='email' id='email' required defaultValue="test@test.com" />
      </div>
      <button type='submit' className='btn btn-block' style={{ marginTop: '0.5rem' }} disabled={isSubmitting}   
      >{isSubmitting ? 'submitting' : 'submit'}</button>
    </Form>
  )
}

export default NewsLetter