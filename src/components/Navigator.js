import React from 'react';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

export default class Navigator extends React.Component {
    constructor() {
        super();

        this.state = {
            screen: 'LandingScreen',
            user: ''
        }

        this.changeScreen = this.changeScreen.bind(this);
    }

    changeScreen = (data) => {
        if (typeof(data) === 'string') {
            this.setState({screen: data})
        }
        else {
            this.setState({screen: 'LandingScreen', user: data[1]})
        }

        console.log(this.state)
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
            screen = <SignUp changeScreen={this.changeScreen}/>
        }

        return (
            screen
        )
    }
}