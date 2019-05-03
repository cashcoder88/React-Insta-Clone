import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    background: #6053C8;
    font-family: 'Anton', sans-serif;
    height: 1000px;
`


const H1Color = styled.h1`
    color: #F8AD54;
    font-size: 80px;
    
`;

const H2Color = styled.h2`
    color: #EFCF9C;
    font-size: 50px;
`
const ButtonStyle = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 20px;
    margin: 20px;
    padding: 10px;
    background: #EFCF9C;
    font-size: 20px;
`
const InputStyle = styled.input`
    width: 200px;
    height: 25px;
    border-radius: 20px;
    margin: 20px;
    padding: 10px;
    background: #F8AD54;
    font-size: 20px;
`

class LoginPage extends React.Component {
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
            <WrapperDiv>
                <div>
                    <H1Color>Welcome To My Instagram Clone</H1Color>
                    <H2Color>Please Login With Your Username and Password</H2Color>
                </div>
                <div className="input">
                    <InputStyle 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInput}
                    />
                    <InputStyle 
                    type="text" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                    />
                </div>
                <ButtonStyle onClick={this.handleLogin}>Login</ButtonStyle>
            </WrapperDiv>
        )
    }

}

export default LoginPage;
