import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import DefaultButton from "../../components/UI/DefaultButton/DefaultButton";

export default class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <DefaultButton title="Locate me" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    width: "80%",
    height: 150,
    borderColor: "black",
    backgroundColor: "#eee"
  }
});
