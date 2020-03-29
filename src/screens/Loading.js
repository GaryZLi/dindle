import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';

import AnimatedEllipsis from 'react-native-animated-ellipsis';

export default class Loading extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return <View>
            <StatusBar barStyle="dark-content"></StatusBar>
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../components/picSrc/dindle.png')}></Image>
                <Text style={styles.title}>Loading</Text>
                <AnimatedEllipsis></AnimatedEllipsis>
              </View>
              </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
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
    buttonContainer: {
        backgroundColor: 'maroon',
        paddingVertical: 15,
        width: "90%",
        marginTop: 15
    },
    buttonContainer2: {
        backgroundColor: 'white',
        borderColor: 'maroon',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingVertical: 15,
        width: "90%",
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonText2: {
        color: 'maroon',
        textAlign: 'center',
        fontWeight: 'bold'
    },
}
);  