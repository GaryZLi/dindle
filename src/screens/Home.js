import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import firebase from 'firebase';

import apiKey from '../Yelp';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      state: '',
      hostName: '',
      error: false,
      errorMsg: ''
    }

    this.config = {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      params: {}
    }
  }

  host = () => {
    if (this.city === '' && this.state.state === '') {
      return this.setState(() => ({error: true, errorMsg: 'Please fill both city and state!'}))
    }

    console.log("hosting")

    this.config['params'] = {
      term: 'restaurants',
      open_now: true,
      // location: 'oakland, ca',
      location: this.state.city + ', ' + this.state.state,
      limit: 30
    }

    axios.get("https://api.yelp.com/v3/businesses/search", this.config)
    .then(res => {
      let data = []

      for (let restaurant in res.data.businesses) {
        const temp = {
          name: res.data.businesses[restaurant].name,
          rating: res.data.businesses[restaurant].rating,
          price: res.data.businesses[restaurant].price,
          reviewCount: res.data.businesses[restaurant].review_count,
          longitude: res.data.businesses[restaurant].coordinates.longitude,
          latitude: res.data.businesses[restaurant].coordinates.latitude,
          imageUrl: res.data.businesses[restaurant].image_url,
          url: res.data.businesses[restaurant].url,
        };

        if (temp.longitude !== undefined && temp.latitude !== undefined && temp.name !== undefined && temp.reviewCount !== undefined && temp.rating !== undefined && temp.price !== undefined) {
          data.push(temp)
        }
      }

      firebase.database().ref('connections/' + this.props.user.userName.toLowerCase())
      .set({
        restaurants: data,
        users: {[this.props.user.userName]: this.props.user.userName}
      })
      .then(this.props.changeScreen(['LoadingScreen', this.props.user.userName]))
      .catch(err => this.setState({error: true, errorMsg: err.code}))
    }) 
    .catch((error) => this.setState({error: true, errorMsg: error.code}))
  }

  connect = () => {
    this.setState((prev) => ({hostName: prev.hostName.toLowerCase()}))

    if (this.state.hostName === this.props.user.userName) {
      return this.setState(() => ({error: true, errorMsg: "Cannot connect to own session!"}))
    }
    else if (this.state.hostName === '') {
      return this.setState(() => ({error: true, errorMsg: "Please enter the host's username!"}))
    }
    

    firebase.database().ref('connections')
    .once('value', snapshot => {
      if (snapshot.child(this.state.hostName).exists()) {
        firebase.database().ref('connections/' + this.state.hostName + '/' + 'users')
        .update({[this.props.user.userName]: this.props.user.userName})
        .then(this.props.changeScreen(['RestaurantsScreen', {user: this.props.user.userName, host: this.state.hostName, location: "connect"}]))
      }
      else {
        this.setState({error: true, errorMsg: 'This host has not started a session yet!'})
      }
    })
  }

  render() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content"></StatusBar>
          <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}>
            <TouchableWithoutFeedback
              style={styles.container}
              onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <View style={styles.logoContainer}>
                  <Image
                    style={styles.logo}
                    source={require('../components/picSrc/dindle.png')}></Image>
                  <Text style={styles.title}>Welcome, {this.props.user.firstName}!</Text>
                </View>
                <View style={styles.subcontainer}>
                  <Text style={styles.title}>Your username is: {this.props.user.userName}</Text>
                  <Text style={styles.title}>Enter a city and state to eat in!</Text>
                  <View style={styles.inputBorder}>
                    <TextInput
                      value={this.state.city}
                      onChangeText={text => this.setState({city: text})}
                      style={styles.input}
                      placeholder="City"
                      placeholderTextcolor="black"
                      returnKeyType="next"
                      autoCorrect={false}
                      onSubmitEditing={() => this.refs.state.focus()}
                    ></TextInput>
                  </View>
                  <View style={styles.inputBorder}>
                    <TextInput
                      value={this.state.state}
                      onChangeText={text => this.setState({state: text})}                    
                      style={styles.input}
                      placeholder="State"
                      placeholderTextcolor="black"
                      returnKeyType="next"
                      autoCorrect={false}
                      onSubmitEditing={() => this.host()}
                      ref={"state"}>
                    </TextInput>
                  </View>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => this.host()}>
                    <Text style={styles.buttonText}>HOST A SESSION</Text>
                  </TouchableOpacity>
                  <Text style={styles.title}> ---OR--- </Text>
                  <Text style={styles.subtitle}> Enter a host's username! </Text>
                  <View style={styles.inputBorder}>
                    <TextInput
                      value={this.state.value}
                      onChangeText={text => this.setState({hostName: text})}
                      style={styles.input}
                      placeholderTextcolor="black"
                      returnKeyType="go"
                      autoCorrect={false}
                      onSubmitEditing={() => this.connect()}
                    ></TextInput>
                  </View>
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => this.connect()}>CONNECT</Text>
                  </TouchableOpacity>
                  {this.state.error && <Text style={styles.errorText}>{this.state.errorMsg}</Text>}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignSelf: "center",
    width: "100%"
  },
  subcontainer: {
    flex: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 100
  },
  logo: {
    width: 256,
    height: 80,
  },
  title: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9,
    marginBottom: 5
  },
  subtitle: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9,
    marginBottom: 5
  },
  buttonContainer: {
    backgroundColor: "maroon",
    paddingVertical: 15,
    width: "90%",
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 40
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
    marginBottom: 10,
  },
  input: {
    height: 35,
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
  errorText: {
    color: 'red',
    textAlign: "center",
  }
});
