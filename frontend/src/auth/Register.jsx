import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'


const Register = ({useLogin}) => {

  const {registerUser} = useContext(AuthContext);

  return (
    <article className="register" >
      <form action="" className="register-form" onSubmit={registerUser}>
        <label htmlFor="">First Name: <input type="text" name='firstName'/></label>
        <label htmlFor="">Last Name: <input type="text" name='lastName'/></label>
        <label htmlFor="">Email: <input type="email" name='email'/></label>
        <label htmlFor="">Username: <input type="text" name='username'/></label>
        <label htmlFor="">Password: <input type="password" name='password'/></label>
        <label htmlFor=""><input type="submit" /></label>
        <p>Already have an Account?
          <button onClick={useLogin}>Log in</button>
        </p>

      </form>
    </article>
  )
}

export default Register
