import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => {
  return (
    <TextInput
      {...props}
      underlineColorAndroid="transparent"
      style={[styles.input, props.style]}
    />
  );
};

export default DefaultInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: "black",
    backgroundColor: "#edefef",
    borderWidth: 1,
    borderColor: "teal",
    borderRadius: 16,
    padding: 6,
    paddingHorizontal: 16,
    marginVertical: 8
  }
});
