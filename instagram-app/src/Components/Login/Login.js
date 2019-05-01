import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
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

}

export default Login;
