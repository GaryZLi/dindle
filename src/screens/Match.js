import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from "react-native";


export default class Match extends Component {
  getDirection = () => {
    const lat = this.props.data.latitude;
    const long = this.props.data.longitude;
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${long}`;
    const label = 'Custom Label';
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url); 
  }

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
              source={{ uri: this.props.data.imageUrl }}
            ></Image>
          </View>
          <View style={styles.descriptionBox}>
            <Text style={styles.description}>{this.props.data.name}</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.getDirection()}>
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
    marginTop: 50,
    opacity: 0.9
  },
  description: {
    color: "black",
    fontSize: 30,
    textAlign: 'center',
  },
  descriptionBox: {
    marginTop: 100,
    flex: 2,
    width: "75%",
    justifyContent: "center",
    alignSelf: "center",
  },
  descriptionContainerOne: {
    marginTop: 10,
    flex: 1,
    resizeMode: "contain",
    flexDirection: "row",
    alignSelf: 'flex-start',
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 10,
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
