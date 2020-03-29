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
<<<<<<< HEAD
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
=======
        <Image
          style={styles.image}
          source={require("../components/picSrc/restaurant.png")}
        ></Image>
      </View>
      <Text style={styles.name}>Restaurant Name</Text>
        <View style={styles.descriptionContainerOne}>
          <Text style={styles.description}>$$$</Text>
          <Text style={styles.description}>5 stars</Text>
          <Text style={styles.description}>5,000 reviews</Text>
        </View>
        
        <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>GET DIRECTIONS</Text>
                    </TouchableOpacity>
>>>>>>> 55fc1ec621323e28640dad3f3bc5ff6fd14cfa03
        </View>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 0.3,
        marginTop: "20%",
        marginBottom: "10%"
      },
      logo: {
        width: 256,
        height: 70,},
        container: {
            flex: 1,
            backgroundColor: "white",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%"
          },
          imageContainer: {
            marginTop: "10%",
            alignItems: "center",
            justifyContent: "center",
            flex: 4},

>>>>>>> 55fc1ec621323e28640dad3f3bc5ff6fd14cfa03
  image: {
    width: 300,
    height: 300
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
<<<<<<< HEAD
    marginTop: 50,
=======
>>>>>>> 55fc1ec621323e28640dad3f3bc5ff6fd14cfa03
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
<<<<<<< HEAD
    alignSelf: "center",
=======
    alignSelf: "center"
  },
  name: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
>>>>>>> 55fc1ec621323e28640dad3f3bc5ff6fd14cfa03
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
