import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = ({useRegister}) => {

    const {loginUser} = useContext(AuthContext);


  return (
    <article className="login">
        <h2>Login</h2>
        <form action="" className='login-form' onSubmit={loginUser}>
            <label htmlFor="">
                Username: <input type="text" name='username'/>
            </label>

            <label htmlFor="">
                Password: <input type="password" name='password'/>
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
