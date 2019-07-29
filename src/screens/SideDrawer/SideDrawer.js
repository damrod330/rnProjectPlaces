import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class SideDrawer extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            width: Dimensions.get("window").width * 0.8,
            height: Dimensions.get("window").height
          }
        ]}
      >
        <TouchableNativeFeedback>
          <View style={styles.item}>
            <Icon
              name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
              size={40}
              color="#999"
              style={styles.itemIcon}
            />
            <Text> Sign out </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    backgroundColor: "white"
  },
  item: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#eee",
    alignItems: "center"
  },
  itemIcon: {
    marginRight: 10
  }
});
