import React from 'react';
import {View, Text, Button} from 'react-native';

import firebase from 'firebase';

export default class Test extends React.Component {
    constructor() {
        super();

        this.state = {
            user: '',
            error: false,
            errorMsg: ''
        }
    }

    signup = (username, firstName, lastName) => {    

        const ref = firebase.database().ref('users');

        ref.once('value', snapshot => {
            if (snapshot.child(username).exists()) {
                console.log('username chosen!')
            }
            else {
                firebase.auth().createUserWithEmailAndPassword('ok@gmail.com', 'password')
                .then(res => {
                    ref.set({
                        [res.user.uid]: {
                            firstName: firstName,
                            lastName: lastName,
                            username: username
                        }
                    })
                    .then(() => {
                        const user = {
                            'firstName': firstName,
                            'lastName': lastName,
                            'username': username
                        }
                        this.setState({user: user});
                    })
                    .catch(err => this.setState({error: true, errorMsg: err.code}))
                    
                })
                .catch(err => this.setState({error: true, errorMsg: err.code}, () => console.log("chosen")));
            }
        })
    }

    // async sleep() {
    //     await setTimeout(()=>{}, 3000)

    //     console.log("heeeee")
    // }

    signin = () => {
        const ref = firebase.database().ref('users');

        this.sleep()
        console.log("kkkk")
        // firebase.auth().signInWithEmailAndPassword('ok@gmail.com', 'password')
        // .then(res => {
        //     firebase.database().ref('users/' + res.user.uid)
        //     .once('value')
        //     .then(res => this.setState({user: res}))
        //     .catch(err => this.setState({error: true, errorMsg: err.code}));
        // })
        // .catch(err => this.setState({error: true, errorMsg: err.code}));
    }

    create = () => {
        const ref = firebase.database().ref('connections');
        ref.set({aznkidgl: {
            users: ['Jang', 'Agnes'],
            restaurants: ['A', 'B', 'etc...'],
            chosen: {}
        }})
    }

    render() {

        return (
            <View>
                <Text>

                    HI
                </Text>
                <Button title='singup' onPress={() => this.signup('user1', 'agnes', 'egg')}/>
                <Button title='signin' onPress={() => this.signin()}/>                
                <Button title='create' onPress={() => this.create()}/>
            </View>
        )
    }
}
