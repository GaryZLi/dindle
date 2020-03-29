import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from "react-native";


export default class Match extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <View style={styles.container}>
        <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../components/picSrc/dindle.png')}></Image>
              </View>
          <Text style={styles.title}>It's a match!</Text>
          <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../components/picSrc/restaurant.png")}
        ></Image>
      </View>
      <View style={styles.descriptionBox}>
        <View style={styles.descriptionContainerOne}>
        <View style={styles.descriptionLineOne}>
          <Text style={styles.description}>Restaurant name</Text>
          <Text style={styles.description}>$$</Text>
        </View>
        </View>
        <View style={styles.descriptionContainerTwo}>
        <View style={styles.descriptionLineTwo}>
        <Text style={styles.description}>5 stars</Text>
          <Text style={styles.description}>5,000 reviews</Text>
        </View>
        </View>
        </View>
        
        <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>GET DIRECTIONS</Text>
                    </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5,
        marginTop: 50
      },
      logo: {
        width: 256,
        height: 70,
      },
    container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "95%"
  },
  imageContainer: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  image: {
    width: 300,
    height: 300
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:50,
    opacity: 0.9
  },
  description: {
    color: "black",
    fontSize: 16,
    textAlign: "left"
  },
  descriptionBox: {
      marginTop: 100,
    flex: 2,
    width:"75%",
    justifyContent: "center",
    alignSelf: "center"

  },
  descriptionContainerOne: {
    resizeMode: "contain",
    width: "100%"
  },
  descriptionLineOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionContainerTwo: {
    flex: 1,
    resizeMode: "contain",
    width: "100%"
  },
  descriptionLineTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    backgroundColor: 'maroon',
    paddingVertical: 15,
    width: "90%",
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 100,
},
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  yelpButton: {
      backgroundColor: 'pink',
      height: 20,
      width: 80,
  },
  yelpButtonText: {
      textAlign: 'center',
  },

});
