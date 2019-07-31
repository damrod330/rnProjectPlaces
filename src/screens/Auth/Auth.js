import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import backgroundImage from "../../assets/background.jpg";
import DefaultButton from "../../components/UI/DefaultButton/DefaultButton";
import validate from "../../utility/validation";
import { connect } from "react-redux";
import { tryAuth } from "../../store/actions/index";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    authMode: "login",
    controls: {
      email: {
        value: "",
        isValid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        isValid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        isValid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false
      }
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { authMode: prevState.authMode === "login" ? "signup" : "login" };
    });
  };

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    this.props.onLogin(authData);
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value,
            isValid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  };

  render() {
    let headingText = null;
    let confirmPasswordControl = null;
    if (this.state.viewMode === "portrait") {
      headingText = (
        <HeadingText>
          {this.state.authMode === "login" ? "Please Log In" : "Please Sign Up"}
        </HeadingText>
      );
    }
    if (this.state.authMode === "signup") {
      confirmPasswordControl = (
        <View
          style={
            this.state.viewMode === "portrait"
              ? styles.portraitPasswordWrapper
              : styles.landscapePasswordWrapper
          }
        >
          <DefaultInput
            placeholder="Confirm Password"
            value={this.state.controls.confirmPassword.value}
            onChangeText={val => this.updateInputState("confirmPassword", val)}
            valid={this.state.controls.confirmPassword.isValid}
            touched={this.state.controls.confirmPassword.touched}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      );
    }
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            {headingText}
            <View style={styles.inputContainer}>
              <DefaultInput
                placeholder="Your E-Mail Address"
                style={styles.input}
                value={this.state.controls.email.value}
                onChangeText={val => this.updateInputState("email", val)}
                valid={this.state.controls.email.isValid}
                touched={this.state.controls.email.touched}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <View
                style={
                  this.state.viewMode === "portrait" ||
                  this.state.authMode === "login"
                    ? styles.portraitPasswordContainer
                    : styles.landscapePasswordContainer
                }
              >
                <View
                  style={
                    this.state.viewMode === "portrait" ||
                    this.state.authMode === "login"
                      ? styles.portraitPasswordWrapper
                      : styles.landscapePasswordWrapper
                  }
                >
                  <DefaultInput
                    placeholder="Password"
                    value={this.state.controls.password.value}
                    onChangeText={val => this.updateInputState("password", val)}
                    valid={this.state.controls.password.isValid}
                    touched={this.state.controls.password.touched}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {confirmPasswordControl}
              </View>
            </View>
            <View style={styles.buttonGroup}>
              <DefaultButton
                title={
                  this.state.authMode === "signup"
                    ? "Switch to Login"
                    : "Switch to Sign Up"
                }
                style={{
                  backgroundColor: "#4eccae",
                  color: "white",
                  fontWeight: "bold"
                }}
                onPress={() => this.switchAuthModeHandler()}
              />
              <DefaultButton
                title="Submit"
                onPress={this.loginHandler}
                disabled={
                  (this.state.authMode === "signup" &&
                    !this.state.controls.confirmPassword.isValid) ||
                  !this.state.controls.email.isValid ||
                  !this.state.controls.password.isValid
                }
              />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row"
  },
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
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: authData => dispatch(tryAuth(authData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthScreen);
