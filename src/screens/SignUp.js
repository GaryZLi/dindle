import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  StatusBar,
  Keyboard
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import firebase from 'firebase';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPass: '',
      error: false,
      errorMsg: ''
    }
  }

  submit = () => {
    console.log("clicked")
    this.setState({error: false, errorMsg: ''})

    // for (let item in this.state) {
    //   if (item != 'error') {
    //     if (this.state[item] === '') {
    //       if (item === 'firstName') {
    //         item = 'Missing First Name!';
    //       }
    //       else if (item === 'lastName') {
    //         item = 'Missing Last Name!';
    //       }
    //       else if (item === 'email') {
    //         item = 'Missing Email!';
    //       }
    //       else if (item === 'username') {
    //         item = 'Missing username!';
    //       }
    //       else if (item === 'password') {
    //         item = 'Missing password!';
    //       }
    //       else {
    //         item = 'Please confirm password!';
    //       }
    //       return this.setState(() => ({error: true, errorMsg: item}));
    //     }
    //   }
    // }

    // if (this.state.password !== this.state.confirmPass) {
    //   return this.setState(() => ({error: true, errorMsg: 'Password does not match!'}));
    // }

    firebase.database().ref('users')
    .once('value', snapshot => {
      if (snapshot.child(this.state.username).exists()) {
        return this.setState(() => ({error: true, errorMsg: 'Username is chosen!'}));
      }
      else {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
          firebase.database().ref('profile')
          .set({
            [res.user.uid]: {
            'firstName': this.state.firstName[0].toUpperCase() + this.state.firstName.slice(1),
            'lastName': this.state.lastName,
            'username': this.state.username
          }})
          .then(() => {
            const data = {
              firstName: this.state.firstName,
              username: this.state.username
            }
            this.props.changeScreen(['HomeScreen', data])
          })
        })
        .catch(err => this.setState({error: true, errorMsg: err.code}))

        firebase.database().ref('users')
        .update({[this.state.username]: ''})
        .catch(err => this.setState(() => ({error: true, errorMsg: err.code})));
      }
    })
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <KeyboardAwareScrollView
          style={{ backgroundColor: "white" }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
        >
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              <Text style={styles.title}>Create a Dindle account!</Text>
              <View style={styles.textEntryFields}>
                <View style={styles.inputBorder}>
                  <TextInput
                    value={this.state.firstName}
                    onChangeText={text => this.setState({firstName: text})}
                    style={styles.input}
                    placeholder="First name"
                    placeholderTextcolor="black"
                    returnKeyType="next"
                    autoCorrect={false}
                    onSubmitEditing={() => this.refs.lastName.focus()}
                  ></TextInput>
                </View>
                <View style={styles.inputBorder}>
                  <TextInput
                    value={this.state.lastName}
                    onChangeText={text => this.setState({lastName: text})}
                    style={styles.input}
                    placeholder="Last name"
                    placeholderTextcolor="black"
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={"lastName"}
                    onSubmitEditing={() => this.refs.email.focus()}
                  ></TextInput>
                </View>
                <View style={styles.inputBorder}>
                  <TextInput
                    value={this.state.email}
                    onChangeText={text => this.setState({email: text})}
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextcolor="black"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCorrect={false}
                    ref={"email"}
                    onSubmitEditing={() => this.refs.username.focus()}
                  ></TextInput>
                </View>
                <View style={styles.inputBorder}>
                  <TextInput                    
                    value={this.state.username}
                    onChangeText={text => this.setState({username: text})}
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextcolor="black"
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={"username"}
                    onSubmitEditing={() => this.refs.password.focus()}
                  ></TextInput>
                </View>
                <View style={styles.inputBorder}>
                  <TextInput
                    value={this.state.password}
                    onChangeText={text => this.setState({password: text})}
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextcolor="black"
                    secureTextEntry
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={"password"}
                    onSubmitEditing={() => this.refs.confirmpass.focus()}
                  ></TextInput>
                </View>
                <View style={styles.inputBorder}>
                  <TextInput
                    value={this.state.confirmPass}
                    onChangeText={text => this.setState({confirmPass: text})}
                    style={styles.input}
                    placeholder="Confirm password"
                    placeholderTextcolor="black"
                    returnKeyType="next"
                    secureTextEntry
                    autoCorrect={false}
                    ref={"confirmpass"}
                    onSubmitEditing={() => this.submit()}
                  ></TextInput>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText} onPress={() => this.submit()}>SUBMIT</Text>
                </TouchableOpacity>
                {this.state.error && <Text style={styles.errorText}>{this.state.errorMsg}</Text>}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
    width: "95%"
  },
  textEntryFields: {
    flex: 6,
    alignSelf: "center",
    alignContent: "center",
    width: "95%"
  },
  title: {
    flex: 1,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    opacity: 0.9
  },
  buttonContainer: {
    backgroundColor: "maroon",
    paddingVertical: 15,
    width: "90%",
    marginTop: 15,
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  inputBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
    height: 40,
    marginBottom: 10
  },
  input: {
    height: 35,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 5
  },
  errorText: {
    color: 'red',
    textAlign: "center",
  }
});
