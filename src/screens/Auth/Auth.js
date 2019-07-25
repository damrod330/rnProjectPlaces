import React, { Component } from "react";
import { Text, View, Button} from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';

export default class AuthScreen extends Component {
  loginHandler = () => {startMainTabs()};

  render() {
    return (
      <View>
        <Text>Auth AuthScreen</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}
