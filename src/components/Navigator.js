import React from 'react';
import Landing from '../screens/Landing';
import Login from '../screens/Login';

export default class Navigator extends React.Component {
    constructor() {
        super();

        this.state = {
            screen: 'LandingScreen'
        }
    }

    changeScreen = (screen) => {
        this.setState({screen: screen})
    }

    render() {
        let screen;
        
        if (this.state.screen === 'LandingScreen') {
            screen = <Landing changeScreen={this.changeScreen}/>
        }
        else if (this.state.screen === 'LoginScreen') {
            screen = <Login changeScreen={this.changeScreen}/>
        }
        else if (this.state.screen === 'SignupScreen') {
            screen = <Signup changeScreen={this.changeScreen}/>
        }

        return (
            screen
        )
    }
}