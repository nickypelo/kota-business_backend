import React from "react";
import { createContext, useState, useEffect } from "react";
// import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[authTokens, setAuthTokens] = useState(null);

    const registerUser = async (e) =>{
        e.preventDefault()

        const response = await fetch('http://localhost:8000/api/customers/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'customer_name': e.target.firstName.value,
                'customer_surname': e.target.lastName.value,
                'customer_email': e.target.email.value,
                'customer_username': e.target.username.value,
                'customer_pwd': e.target.password.value
            })
        })

        let data = await response.json()
        console.log('We registered this youngling');
        console.log('data', data)
    }
    

    const loginUser = async (e) =>{
        e.preventDefault();
        console.log('form done did it')
        let response = await fetch('http://localhost:8000/api/tokens/token/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username': e.target.username.value, 'password':e.target.password.value})
        })

        let data = await response.json()
        console.log('data', data)

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access));
        }else{
            alert('Haibo Motho');
        }
    }

    let contextData = {
        loginUser:loginUser,
        registerUser:registerUser
    }

    return (
        <AuthContext.Provider value= {contextData}>
            {children}

        </AuthContext.Provider>
    )
}