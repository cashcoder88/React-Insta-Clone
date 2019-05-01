import React from 'react';

const withAuthenticate = PostsPage => LoginPage =>
class extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }
    componentDidMount() {
        if(!localStorage.getItem('user')) {
            this.setState({ loggedIn: false})
        } else {
            this.setState({ loggedIn: true})
        }
    }

        render() {
            if (this.state.loggedIn) return <PostsPage />;
            if (this.state.loggedIn === false) return <LoginPage />
    }
}

export default withAuthenticate;