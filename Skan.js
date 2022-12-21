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

export default class Skan extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fine: '32',
      coarse: '1',

    }
  }



  updateConversionValue() {
    const fine = this.state.fine;

    if (isNaN(parseInt(fine))) {
      alert("Please enter an integer fine value");
      return;
    }

    Singular.skanUpdateConversionValue(parseInt(fine));
    alert("Conversion value updated");
  }

  updateConversionValueSkan4() {
    const fine = this.state.fine;
    const coarse = this.state.coarse;

    if (isNaN(parseInt(fine))) {
      alert("Please enter an integer fine value");
      return;
    }

    if (isNaN(parseInt(fine))) {
      alert("Please enter an integer coarse value");
      return;
    }

    Singular.skanUpdateConversionValues(parseInt(fine), parseInt(coarse), false);
    alert("Conversion value updated");
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
                placeholder="Fine value"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({fine: text})}
                value={this.state.fine}
            />
            <TextInput
                style={Utils.styles.container}
                placeholder="Coarse value"
                keyboardType='numeric'
                onChangeText={(text) => this.setState({coarse: text})}
                value={this.state.coarse}
            />
            <View style={Utils.styles.buttonContainer}>
            <Button title="Update Conversion Value"
                onPress={() => this.updateConversionValue()}
            />
            </View>
            <View style={Utils.styles.buttonContainer}>
            <Button
                title="Update Conversion Value (SKAN4)"
                onPress={() => this.updateConversionValueSkan4()}
            />
          </View>
          </View>
        </>
    );
  };
}
