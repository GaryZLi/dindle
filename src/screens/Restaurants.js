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

import CardStack, { Card } from 'react-native-card-stack-swiper';

class RestaurantContent extends Component {
    render(){
        return (<View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../components/picSrc/restaurant.png")}
        ></Image>
        <View style={styles.descriptionContainerOne}>
        <View style={styles.descriptionLineOne}>
          <Text style={styles.description}>Restaurant name</Text>
          <Text style={styles.description}>$$</Text>
        </View>
        </View>
        <View style={styles.descriptionContainerTwo}>
        <View style={styles.descriptionLineTwo}>
          <Text style={styles.description}>5 stars</Text>
          <TouchableOpacity style={styles.yelpButton}>
            <Text style={styles.yelpButtonText}>Link to Yelp</Text>
          </TouchableOpacity>
        </View>
        </View> 
      </View>);
    }
}

export default class Restaurants extends Component {
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
          <Text style={styles.title}>Restaurants</Text>

          <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}>
              {/* TODO: need to include onSwipedLeft and onSwipedRight for each card generated
              basically action that is done when a card is swiped left or right */}
    <Card style={[styles.card, styles.card1]}>
                  <RestaurantContent></RestaurantContent>
        </Card>
    <Card style={[styles.card, styles.card2]}>
    <RestaurantContent></RestaurantContent>
        </Card>
    <Card style={[styles.card, styles.card1]}>
    <RestaurantContent></RestaurantContent>
        </Card>
  </CardStack>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    content:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      card:{
        width: 320,
        height: 470,
        backgroundColor: '#ffa79c',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity:0.5,
      },
      card1: {
        backgroundColor: '#ffa79c',
      },
      card2: {
        backgroundColor: '#ffa79c',
      },
      label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
      }, 
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5,
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
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
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
    marginTop: 80,
    opacity: 0.9
  },
  description: {
    color: "black",
    fontSize: 16,
    textAlign: "left"
  },
  descriptionContainerOne: {
      marginTop: 20,
    flex: 0.5,
    resizeMode: "contain",
    width: "60%"
  },
  descriptionLineOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionContainerTwo: {
    flex: 1,
    resizeMode: "contain",
    width: "60%"
  },
  descriptionLineTwo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    backgroundColor: "maroon",
    height: 80,
    width: 80,
    paddingVertical: 15,
    borderRadius: 30
  },
  buttonText: {
    paddingTop: 15,
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
  thumbsUp: {
      height:20,
      width:20,
  }
});
