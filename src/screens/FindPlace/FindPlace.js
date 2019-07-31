import React, { Component } from "react";
import {
  Text,
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Animated
} from "react-native";
import { connect } from "react-redux";
import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(0.99),
    placesAnim: new Animated.Value(0)
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  placesLoadedHandler = () => {
    Animated.timing(this.state.placesAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start();
  };

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true
    }).start(() => {
      this.setState({ placesLoaded: true });
      this.placesLoadedHandler();
    });
  };

  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: "rnProjectPlaces.PlaceDetailScreen",
      title: selectedPlace.name,
      passProps: {
        selectedPlace: selectedPlace
      }
    });
  };

  render() {
    let content = (
      <Animated.View
        style={{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [8, 1]
              })
            }
          ]
        }}
      >
        <TouchableNativeFeedback onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find places</Text>
          </View>
        </TouchableNativeFeedback>
      </Animated.View>
    );
    if (this.state.placesLoaded) {
      content = (
        <Animated.View style={{ opacity: this.state.placesAnim }}>
          <PlaceList
            places={this.props.places}
            onItemSelected={this.itemSelectedHandler}
          />
        </Animated.View>
      );
    }
    return (
      <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButton: {
    borderColor: "orange",
    borderWidth: 3,
    borderRadius: 24,
    padding: 16
  },
  searchButtonText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 22
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
