import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { connect } from "react-redux";
import { addPlace } from "../../store/actions/index";
import DefaultButton from "../../components/UI/DefaultButton/DefaultButton";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import imagePlaceholder from "../../assets/beautiful-place.jpg";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";

class SharePlaceScreen extends Component {

  static navigatorStyle = {
    navBarButtonColor: "orange"
  }

  state = {
    placeName: ""
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName);
    }
  };
  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <HeadingText>Share a Place with us!</HeadingText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <DefaultButton title="Share the Place!" onPress={this.placeAddedHandler} />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    alignItems: "center"
  }
});
