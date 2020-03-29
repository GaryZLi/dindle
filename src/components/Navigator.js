import React from 'react';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Loading from '../screens/Loading';
import Restaurants from '../screens/Restaurants';
import Match from '../screens/Match';

export default class Navigator extends React.Component {
    constructor() {
        super();

        this.state = {
            screen: 'LandingScreen',
            data: ''
        }

        this.changeScreen = this.changeScreen.bind(this);
    }

    changeScreen = (data) => {
        if (typeof(data) === 'string') {
            this.setState({screen: data})
        }
        else {
            console.log(data)
            this.setState(() => ({screen: data[0], data: data[1]}), console.log(''))
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
            screen = <Home changeScreen={this.changeScreen} user={this.state.data}/>
        }
        else if (this.state.screen === 'LoadingScreen') {
            screen = <Loading changeScreen={this.changeScreen} user={this.state.data}/>
        }
        else if (this.state.screen === 'RestaurantsScreen') {
            console.log(this.state.data)
            screen = <Restaurants changeScreen={this.changeScreen} user={this.state.data.user} host={this.state.data.host}/>
        }
        else if (this.state.screen === 'MatchedScreen') {
            console.log(this.state.data)
            screen = <Match changeScreen={this.changeScreen} data={this.state.data}/>
        }

        return (
            screen
        )
    }
}







