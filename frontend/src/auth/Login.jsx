import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = ({useRegister}) => {

    const {loginUser} = useContext(AuthContext);


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
            <p>No account? <button onClick={useRegister}>Register</button></p>
        </form>
    </article>
  )
}

export default Login
