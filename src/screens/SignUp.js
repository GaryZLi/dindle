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

export default class SignUp extends Component {
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
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextcolor="black"
                    returnKeyType="next"
                    autoCorrect={false}
                    ref={"username"}
                    onSubmitEditing={() => this.refs.phonenum.focus()}
                  ></TextInput>
                </View>
                <View style={styles.inputBorder}>
                  <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextcolor="black"
                    returnKeyType="next"
                    keyboardType="phone-pad"
                    autoCorrect={false}
                    ref={"phonenum"}
                    onSubmitEditing={() => this.refs.password.focus()}
                  ></TextInput>
                </View>
                <View style={styles.inputBorder}>
                  <TextInput
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
                    style={styles.input}
                    placeholder="Confirm password"
                    placeholderTextcolor="black"
                    returnKeyType="next"
                    secureTextEntry
                    autoCorrect={false}
                    ref={"confirmpass"}
                  ></TextInput>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
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
  }
});
