/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
    Image
} from 'react-native';
import {Singular, SingularConfig} from 'singular-react-native';
import Utils from "./Utils";

export default class Identity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customUserId: '',
    }
  }

  setCustomUserId() {
    const customUserId = this.state.customUserId;
    if (Utils.isEmpty(customUserId)) {
      alert("Please enter a valid Custom User Id");
      return;
    }

    // Once set, the Custom User Id will persist between runs until `Singular.unsetCustomUserId()` is called.
    // This can also be called before SDK init if you want the first session to include the Custom User Id.
    Singular.setCustomUserId(customUserId);
    Alert.alert("Custom User Id set to:",customUserId);
  }

  unsetCustomUserId() {
    Singular.unsetCustomUserId();
    alert("Custom User Id unset");
  }

  render() {
    return (
        <>
          <View style={Utils.styles.viewContainer}>
            <Image source={require('./singular_full_logo.png')}
                   style={Utils.styles.image}
            />
            <TextInput
                style={Utils.styles.container}
                placeholder="Custom User Id"
                onChangeText={(text) => this.setState({customUserId: text})}
                value={this.state.customUserId}
            />
            <Button
                title="Set Custom User Id"
                onPress={() => this.setCustomUserId()}
            />
            <Button
                title="Unset Custom User Id"
                onPress={() => this.unsetCustomUserId()}
            />
          </View>
        </>
    );
  };
}
