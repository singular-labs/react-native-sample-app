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
  Image
} from 'react-native';
import {Singular, SingularConfig} from 'singular-react-native';
import Utils from './Utils';

export default class CustomEvents extends Component {

  constructor(props) {
    super(props)

    this.state = {
      eventName: '',
    }
  }

  sendEvent() {
    const eventName = this.state.eventName;

    if (Utils.isNullOrEmpty(eventName)) {
      alert("Please enter a valid event name");
      return;
    }

    // Singular.skanUpdateConversionValue applies to iOS only
    // Set Conversion Value manually (when using manualSkanConversionManagement=true)
    // Note that conversion values may only increase, so only the first call will update it
    // Check out Singular Document for adding SKAN support https://support.singular.net/hc/en-us/articles/360049022091
    Singular.skanUpdateConversionValue(7);

    Singular.event(eventName);
    alert("Event sent");
  }

  sendEventWithAttributes() {
    const eventName = this.state.eventName;

    if (Utils.isNullOrEmpty(eventName)) {
      alert("Please enter a valid event name");
      return;
    }

    // Singular.skanUpdateConversionValue applies to iOS only
    // Set Conversion Value manually (when using manualSkanConversionManagement=true)
    // Note that conversion values may only increase, so only the first call will update it
    // Check out Singular Document for adding SKAN support https://support.singular.net/hc/en-us/articles/360049022091
    Singular.skanUpdateConversionValue(3);

    // Reporting a simple event with custom attributes to pass with the event
    Singular.eventWithArgs(eventName,{"value1":"key1", "value2":"key2"});
    alert("Event sent");
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
                placeholder="Event Name"
                onChangeText={(text) => this.setState({eventName: text})}
                value={this.state.eventName}
            />
            <View style={Utils.styles.buttonContainer}>
            <Button title="Custom Event"
                onPress={() => this.sendEvent()}
            />
            </View>
            <View style={Utils.styles.buttonContainer}>
            <Button
                title="Custom Event With Attributes"
                onPress={() => this.sendEventWithAttributes()}
            />
          </View>
          </View>
        </>
    );
  };
}
