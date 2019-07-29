import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import DefaultButton from "../UI/DefaultButton/DefaultButton";
import imagePlaceholder from "../../assets/beautiful-place.jpg";

export default class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={imagePlaceholder} style={styles.previewImage} />
        </View>
        <DefaultButton title="Pick Image" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  placeholder: {
    borderWidth: 1,
    width: "80%",
    height: 150,
    borderColor: "black",
    backgroundColor: "#eee"
  }
});
