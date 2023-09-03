import React, {useContext, useState} from 'react'


const Register = ({useLogin}) => {

  // const {registerUser} = useContext(AuthContext);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e) =>{
    e.preventDefault();
    console.log('Like chicken licken spice')
    const response = await fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'first_name': e.target.firstname.value,
        'last_name': e.target.lastname.value,
        'email': e.target.email.value,
        'username': e.target.username.value,
        'password': e.target.password.value,
      })
    })

    if(response.status < 300){
      alert('Registration Complete. Log in!');
      useLogin();
    }
    else{
      console.log('error it seems')
      alert('Haibo comparade');
    }
  }


  return (
    <article className="register" >
      <h2>Register</h2>


      <form action="" className="register-form" onSubmit={registerUser}>
        <label htmlFor="firstname">First Name: 
            <input 
              type="text" 
              name='firstname'
              value={firstname}
              onChange={(e)=> setFirstname(e.target.value)}
            />
        </label>

        <label htmlFor="lastname">Last Name: 
              <input 
                type="text"
                name='lastname'
                value={lastname}
                onChange={(e)=> setLastname(e.target.value)}
              />
        </label>

        <label htmlFor="email">Email: 
              <input 
                type="email" 
                name='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
        </label>

        <label htmlFor="username">Username: 
              <input 
                type="text" 
                name='username'
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                />
        </label>

        <label htmlFor="password">Password: 
              <input 
                type="password" 
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
        </label>

        {/* <label htmlFor="password">Enter Password again: 
              <input 
                type="password" 
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
        </label> */}
        
        <label htmlFor="submit-form" ><input type="submit" className='submit-form'></input></label>
        <p>Already have an Account?
          <button onClick={useLogin}>Log in</button>
        </p>

      </form>
    </article>
  )
}

export default Register
