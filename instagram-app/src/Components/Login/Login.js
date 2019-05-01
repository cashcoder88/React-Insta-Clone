import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleLogin = e => {
        localStorage.setItem('user', this.state.username)
        window.location.reload();
    }


    render() {
        return (
            <div className="login-wrapper">
                <div className="welcome">
                    <h1>Welcome To My Instagram Clone</h1>
                    <h2>Please Login With Your Username and Password</h2>
                </div>
                <div className="username-input">
                    <input 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInput}
                    />
                </div>
                <div className="password-input">
                    <input 
                    type="text" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                    />
                </div>
                <button className="button" onClick={this.handleLogin}>Login</button>
            </div>
        )
    }

}

export default Login;
