import React from 'react';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Loading from '../screens/Loading';
import Restaurants from '../screens/Restaurants';

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
            this.setState(() => ({screen: data[0], user: data[1]}), console.log(''))
        }
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
        else if (this.state.screen === 'HomeScreen') {
            screen = <Home changeScreen={this.changeScreen} user={this.state.user}/>
        }
        else if (this.state.screen === 'LoadingScreen') {
            screen = <Loading changeScreen={this.changeScreen} user={this.state.user}/>
        }
        else if (this.state.screen === 'RestaurantsScreen') {
            screen = <Restaurants changeScreen={this.changeScreen} user={this.state.user}/>
        }

        return (
            screen
        )
    }
}