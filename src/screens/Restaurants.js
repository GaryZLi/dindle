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

import CardStack, { Card } from "react-native-card-stack-swiper";
import firebase from 'firebase';

class RestaurantContent extends Component {
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: this.props.imageUrl}}
          ></Image>
        </View>
        <Text style={styles.name}>{this.props.name}</Text>
        <View style={styles.descriptionContainerOne}>
          <Text style={styles.description}>{this.props.user}</Text>
          <Text style={styles.description}>{this.props.price}</Text>
          <Text style={styles.description}>{this.props.stars} stars</Text>
          <Text style={styles.description}>{this.props.reviewCount} reviews</Text>
          <TouchableOpacity style={styles.yelpButton}>
            <Text style={styles.yelpButtonText}>Link to Yelp?</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.descriptionContainerTwo}>
          <Text style={styles.description}>{this.props.stars} stars</Text>
          <Text style={styles.description}>{this.props.reviewCount} reviews</Text>
          <TouchableOpacity style={styles.yelpButton}>
            <Text style={styles.yelpButtonText}>Link to Yelp?</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

export default class Restaurants extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      restaurants: {}
    }
  }

  componentDidMount() {
    firebase.database().ref('connections/' + this.props.user)
    .once('value')
    .then(res => this.setState(() => ({restaurants: res.toJSON().restaurants})));
  }

  render() {
    let restaurantCard = Object.keys(this.state.restaurants).map((data, id) => {
      return (
        <Card style={[styles.card, styles.card1]}>
          <RestaurantContent key={id} name={this.state.restaurants[data].name} reviewCount={this.state.restaurants[data].reviewCount} imageUrl={this.state.restaurants[data].imageUrl} price={this.state.restaurants[data].price} stars={this.state.restaurants[data].rating} ></RestaurantContent>
        </Card>
      )
    })

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../components/picSrc/dindle.png")}
          ></Image>
        </View>

        <View style={styles.cardContainer}>

          <CardStack
            style={styles.content}
            ref={swiper => {
              this.swiper = swiper;
            }}
          >
            {/* TODO: need to include onSwipedLeft and onSwipedRight for each card generated
              basically action that is done when a card is swiped left or right */}
            
            {restaurantCard}
            {/* <Card style={[styles.card, styles.card2]}>
              <RestaurantContent></RestaurantContent>
            </Card>
            <Card style={[styles.card, styles.card1]}>
              <RestaurantContent user={this.props.user}></RestaurantContent>
            </Card> */}
          </CardStack>
          <View style={styles.intro}>
        <Text style={styles.title}>Restaurants</Text>
        <Text style={styles.subtitle}>Swipe right for yes and swipe left for no!</Text>
        </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    intro: {
        backgroundColor: "#ffdac2",
        height: "15%",
        width: "90%",
        alignSelf: 'center',
        borderRadius: 40,
        marginTop: "15%"
    },
    cardContainer: {
        flex: 7,
        height: "90%",
        marginBottom: "20%"

    },
  content: {
    // flex: 6,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",

  },
  card: {
    width: "95%",
    height: "120%",
    backgroundColor: "#ffa79c",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    alignSelf: 'center',

  },
  card1: {
    backgroundColor: "#ffa79c"
  },
  card2: {
    backgroundColor: "#ffa79c"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
    marginTop: "20%"
  },
  logo: {
    width: 256,
    height: 70
  },
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
    flex: 4
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 0.9
  },
  description: {
    color: "black",
    fontSize: 16,
    textAlign: "left"
  },
  subtitle: {
    color: "black",
    fontSize: 16,
    textAlign: "center"
  },
  name: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
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
  descriptionContainerTwo: {
    flex: 1,
    resizeMode: "contain",
    flexDirection: "row",
    alignSelf: 'flex-start',
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 10
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
    backgroundColor: "pink",
    height: 20,
    width: 80
  },
  yelpButtonText: {
    textAlign: "center"
  }
});
