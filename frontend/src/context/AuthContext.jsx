import React from "react";
import { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';
// import {useHistory} from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [loading, setLoading] = useState(true);

    // const history = useHistory();


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

        if(response.status === 200){
            setAuthTokens(data);
            localStorage.setItem('authTokens', JSON.stringify(data));
            setUser(jwt_decode(data.access))
            
        }else{
            alert('Haibo Motho');
        }
    }


    const logOff = () =>{
        setUser(null);
        localStorage.removeItem('authTokens')
        setAuthTokens(null)
    }

    const updateUser = async () =>{
        let response = await fetch('http://localhost:8000/api/tokens/token/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh': authTokens.refresh})
            
        })
        const data = await response.json()

        if(body.status === 200){
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else{
            logOff()
        }
    }

    let contextData = {
        user:user,
        setUser:setUser,
        logOff:logOff,
        setAuthTokens: setAuthTokens,
        loginUser:loginUser,
        registerUser:registerUser
    }

    useEffect(()=>{

        const fourMinutes = 1000 * 60 * 4;
        const interval = setInterval(() =>{
            if(authTokens){
                updateUser();
            }
        }, fourMinutes)
        return () => clearInterval(interval);

    }, [authTokens, loading])
    return (
        <AuthContext.Provider value= {contextData}>
            {children}

        </AuthContext.Provider>
    )
}