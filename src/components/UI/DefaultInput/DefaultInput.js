import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => {
  console.log(props.valid);
  return (
    <TextInput
      {...props}
      underlineColorAndroid="transparent"
      style={[
        styles.input,
        props.style,
        !props.valid && props.touched ? styles.invalid : null
      ]}
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
  },
  invalid: {
    backgroundColor: "#f9c0c0",
    borderColor: "red"
  }
});
