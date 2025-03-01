import React, { useState } from 'react';
import '../App.css';
import { createUser } from '../services/auth';
import {AuthPage} from '../services/authPage';

export const Signup = () => {

  const [stateSignup, setStateSignup] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setStateSignup((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(stateSignup);
    console.log(stateSignup.email, stateSignup.password);
    createUser(stateSignup.email, stateSignup.password);
  };

  return(
    <div>
      <form onSubmit={handleSubmit} action="/" method="POST" className="signUpForm">
        <div>
          <div>
            <AuthPage/>
          </div>
          <p className="motto">O registrarse con:</p>
          <input 
            type="text"
            name="email" 
            placeholder="Correo electrónico" 
            value={stateSignup.email} 
            className="inputButton" 
            onChange={handleInputChange}
            required ></input>
          <input 
            type="password"
            name="password"
            placeholder="Contraseña"
            value={stateSignup.password}
            onChange={handleInputChange}
            className="inputButton" 
            required></input>
          <div id= "errorMessage"></div>
        </div>
        <button type="submit" className="signUpButton">Regístrate</button>
        
        <p className="motto">¿Tienes una cuenta?<a href="/signin" className="login" style={styles.color}>Inicia sesión</a></p>
      </form>
    </div>
  )
}

let styles = {
  color: {
    color: '#173083',
  },
}