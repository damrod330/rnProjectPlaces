import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.placeInput}
          value={this.placeName}
          placeholder="An awsome place"
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          title="Add place"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  placeInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
