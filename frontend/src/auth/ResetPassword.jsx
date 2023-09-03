import React from 'react';
import api from '../api/reset_password'


const ResetPassword = () => {

  const sendRequest = async (e) =>{
    e.preventDefault();
    console.log('I like Titties')
    const response = await fetch('http://localhost:8000/api/rest-auth/password/reset/', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'email': e.target.email.value})
    })

    const data = await response.json();
    console.log('data', data)
    if(response.status === 200){
      console.log('Email sent')
    }
    else{
      alert('Haibo')
    }

  }

  return (
    <article className="reset-pwd">
        <h2>Reset Password</h2>
        <form action="" className="reset-form" onSubmit={sendRequest}>
            <label htmlFor="">
                Enter email: <input type="email" name='email'/>
            </label>
            <label htmlFor=""><input type="submit" className='reset-submit'/></label>
        </form>
        

    </article>
  )
}

export default ResetPassword
