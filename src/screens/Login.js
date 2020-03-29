import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        {/* <KeyboardAvoidingView behavior="padding" style={styles.container}> */}
        <KeyboardAwareScrollView style={{backgroundColor: 'white'}}
        resetScrollToCoords={{x:0,y:0}}
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
                <Text style={styles.title}>Welcome!</Text>
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.inputBorder}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter email"
                    placeholderTextcolor="black"
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoCorrect={false}
                    onSubmitEditing={()=>this.refs.txtPassword.focus()}>
                    </TextInput>
                    </View>
                    <View style={styles.inputBorder}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    placeholderTextcolor="black"
                    returnKeyType="go"
                    secureTextEntry
                    autoCorrect={false}
                    ref={"txtPassword"}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        {/* </KeyboardAvoidingView> */}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: "space-between",
    width: "95%"
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 256,
    height: 80,
  },
  title: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9
  },
  infoContainer: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
  },
  inputBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 40,
    marginBottom: 10
  },
  input: {
    height: 35,
    width: "100%",
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  buttonContainer: {
      backgroundColor: 'maroon',
      paddingVertical: 15
  },
  buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
  }
});
