import React from 'react';

const withAuthenticate = PassedInComp => 
class extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <PassedInComp />
        )
    }
}

export default withAuthenticate;