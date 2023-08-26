import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = ({access}) => {

    let {loginUser} = useContext(AuthContext);

  return (
    <article className="login">
        <form action="" className='login-form' onSubmit={loginUser}>
            <label htmlFor="">
                Username: <input type="text" name='username'/>
            </label>

            <label htmlFor="">
                Password: <input type="password" name='password'/>
            </label>

            <div className="form-options">
                <a href="">Forgot Password</a>
                <input type="submit" name='submit' className='form-submit' />
            </div>
            <p>No account? <a href="">Register</a></p>
        </form>
    </article>
  )
}

export default Login
