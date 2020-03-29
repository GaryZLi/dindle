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

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
          <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <KeyboardAwareScrollView style={{backgroundColor: 'white'}}
        resetScrollToCoords={{x:0,y:0}}
        contentContainerStyle={styles.container}
        scrollEnabled={true}>
                      <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            {/* TODO: insert first name and username of logged in user */}
            <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../components/picSrc/dindle.png')}></Image>
                <Text style={styles.title}>Welcome, First Name!</Text>
              </View>
            <View style={styles.subcontainer}>
            <Text style={styles.title}>Your username is: username123</Text>
            <Text style={styles.title}>Enter a city name if you want to host!</Text>
            <View style={styles.inputBorder}>
                <TextInput
                  style={styles.input}
                  placeholderTextcolor="black"
                  returnKeyType="go"
                  autoCorrect={false}
                ></TextInput>
              </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>HOST A SESSION</Text>
              </TouchableOpacity>
            <Text style={styles.title}> OR </Text>
            <Text style={styles.subtitle}> Enter a host's username! </Text>
              <View style={styles.inputBorder}>
                <TextInput
                  style={styles.input}
                  placeholderTextcolor="black"
                  returnKeyType="go"
                  autoCorrect={false}
                ></TextInput>
              </View>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>CONNECT</Text>
              </TouchableOpacity>
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
    marginBottom: 10

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
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 5
  }
});
