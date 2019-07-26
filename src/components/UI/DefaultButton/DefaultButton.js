import React from "react";
import { TouchableNativeFeedback, View, Text, StyleSheet } from "react-native";

const DefaultButton = props => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={[styles.button, props.style]}>
        <Text style={styles.text}> {props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default DefaultButton;

const styles = StyleSheet.create({
    button: {
        padding: 8,
        paddingHorizontal: 16,
        margin: 8,
        backgroundColor: 'teal',
        borderWidth: 1,
        borderColor: "white"
    },
    text: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold"
    }
});
