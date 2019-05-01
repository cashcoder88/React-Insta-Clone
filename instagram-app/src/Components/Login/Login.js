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
