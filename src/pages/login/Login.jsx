import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export const Login = () => {
    const [email, setEmail] = useState('');  // The email and password state variables are created using the useState() hook, and their initial values are set to an empty string.
    const [password, setPassword] = useState('');
    const { isFetching, dispatch } = useContext(AuthContext);  // The isFetching and dispatch properties are extracted from the context using the useContext() hook, and the AuthContext object is passed as an argument.

    const handleLogin = (e) => {
        e.preventDefault();  // The handleLogin() function takes in an event as an argument and calls the preventDefault() method on the event to prevent the default form submission behavior.
        login({ email, password }, dispatch);  // The login() function is called with an object containing the email and password as the first argument and the dispatch function as the second argument.
    };

    return (
        <div className='login'>
            <form className='loginForm'>
                <input 
                    type='text' 
                    placeholder='Enter your email...' 
                    className='loginInput' 
                    onChange={(e) => setEmail(e.target.value)}
                />  {/* The input elements for the email and password are created with the type set to "text" and "password", respectively. The placeholder attribute is set to "Enter your email..." and "Enter your password...", respectively. The className attribute is set to "loginInput". The onChange attribute is set to a function that takes in an event as an argument and calls the setEmail() and setPassword() functions with the event target value as the argument. */}
                <input 
                    type='password' 
                    placeholder='Enter your password...' 
                    className='loginInput' 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginButton' onClick={handleLogin} disabled={isFetching}>Login</button>
            </form>
        </div>
    );
};
