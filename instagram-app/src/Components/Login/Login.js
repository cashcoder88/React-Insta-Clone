import React from 'react';

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="username-input">
                <input 
                type="text" 
                placeholder="Username"
                />
            </div>
            <div className="password-input">
                <input 
                type="text" 
                placeholder="Password"
                />
            </div>
            <button className="button">Login</button>
        </div>
    )
}

export default Login;
