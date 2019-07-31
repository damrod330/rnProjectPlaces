import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";

const DefaultButton = props => {
  const content = (
    <View
      style={[
        styles.button,
        props.style,
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text style={[styles.text, props.disabled ? styles.disabledText : null]}>
        {props.title}
      </Text>
    </View>
  );
  if (props.disabled) {
    return content;
  }
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
    );
  }
};

export default DefaultButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    paddingHorizontal: 16,
    margin: 8,
    backgroundColor: "teal",
    borderWidth: 1,
    borderColor: "white"
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  },
  disabled: {
    backgroundColor: "#aaa",
    borderColor: "#ddd"
  },
  disabledText: {
    color: "#ddd"
  }
});
