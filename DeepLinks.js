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
    Text
} from 'react-native';
import {Singular, SingularConfig} from 'singular-react-native';
import Utils from "./Utils";

export default class DeepLinks extends Component {

  constructor(props) {
    super(props)

    this.state = {
      deeplink: 'default',
      passthrough: 'default',
      isDeferred:  'default'
    }
  }

  FindFunEvent(test) {
    this.setState({apiKey: test})
    console.log(test);
  }

  _handlePress() {
    alert(this.state.apiKey);
  }

  render() {
    return (
        <>
          <View style={Utils.styles.viewContainer}>
            <TextInput
                style={Utils.styles.container}
                value="Deeplink"
            />
            <TextInput
                style={Utils.styles.deeplinkContainer}
                value={this.state.deeplink}
            />
            <TextInput
                style={Utils.styles.container}
                value="Passthrough"
            />

            <TextInput
                style={Utils.styles.deeplinkContainer}
                value={this.state.passthrough}
            />
            <TextInput
                style={Utils.styles.container}
                value="Is Deferred"
            />
            <TextInput
                style={Utils.styles.deeplinkContainer}
                value={this.state.isDeferred}
            />
          </View>
        </>
    );
  };
}
