import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/user'

const Login = ({useRegister, setL, flip, us}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logs = async (e) => {
        e.preventDefault();
        console.log('hello')
        const response = await fetch('http://localhost:8000/api/rest-auth/login/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'username': e.target.username.value,
                'password': e.target.password.value
            })
        })

        const data = await response.json();

        if(response.status === 200){
            setL(localStorage.setItem('allowed', JSON.stringify(data)));
            flip();
        } else{
            alert('invalid log in details.');
        }

        // setUsername('');
        // setPassword('');
        
    }

    useEffect(()=>{
        us()
        
    }, [])

   


  return (
    <article className="login">
        <h2>Login</h2>
        <form action="POST" className='login-form' onSubmit={logs}>
            <label htmlFor="username">
                Username: <input  
                            type="text" 
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
            </label>

            <label htmlFor="password">
                Password: <input
                            type="password" 
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
            </label>

            <div className="form-options">
                <input type="submit" name='submit' className='form-submit' />
                <Link to='/reset'>Forgot Password</Link>
            </div>
            <p>No account? <button onClick={useRegister}>Register</button></p>
        </form>
    </article>
  )
}

export default Login
