import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground
} from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import backgroundImage from "../../assets/background.jpg";
import DefaultButton from "../../components/UI/DefaultButton/DefaultButton";

export default class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <HeadingText>Please Log In</HeadingText>
          <DefaultButton title="Switch to Login" style={{backgroundColor: "#4eccae", color: "white",fontWeight:"bold"}} onPress={()=>{alert("test")}}/>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your E-Mail Address"
              style={styles.input}
            />
            <DefaultInput placeholder="Password" />
            <DefaultInput placeholder="Confirm Password" />
          </View>
          <DefaultButton
            title="Login"
            onPress={this.loginHandler}
            backgroundColor="red"
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee"
  }
});
