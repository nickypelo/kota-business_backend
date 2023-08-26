import React, { useContext } from "react";
import '../styles/media.css';
import AuthContext from "../context/AuthContext";

const Contact = () =>{

    let {name} = useContext(AuthContext)

    return(
        <div>
            <h1>Call me maybe</h1> 
            <h2>Hello ok</h2>
            {/* <h3>It is I {name}</h3> */}
        </div>
    )
}

export default Contact;