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
  Text,
    Image
} from 'react-native';

import {Singular, SingularConfig} from 'singular-react-native';
import Utils from './Utils';
import {Picker} from '@react-native-picker/picker';

export default class Revenue extends Component {

  constructor(props) {
    super(props)

    this.state = {
      eventName: '',
      currency: '',
      revenue: ''
    }
  }

  sendRevenueEvent() {
    const eventName = this.state.eventName;
    const currency = this.state.currency;
    const revenue = this.getRevenue();

    if (Utils.isEmpty(eventName)) {
      alert("Please enter a valid event name");
      return;
    }
    if (Utils.isEmpty(currency)) {
      alert("Please enter a valid currency");
      return;
    }
    if(revenue <= 0){
      alert("Revenue can't be zero or empty");
      return;
    }
     Singular.customRevenue(eventName,currency,revenue);
     alert("Revenue event sent");
  }

  sendRevenueEventWithArgs() {
    const eventName = this.state.eventName;
    const currency = this.state.currency;
    const revenue = this.getRevenue();

    if (Utils.isEmpty(eventName)) {
      alert("Please enter a valid event name");
      return;
    }
    if (Utils.isEmpty(currency)) {
      alert("Please enter a valid currency");
      return;
    }
    if(revenue <= 0){
      alert("Revenue can't be zero or empty");
      return;
    }
     Singular.customRevenueWithArgs(eventName,currency,revenue,{"value1":"key1", "value2":"key2"})
     alert("Revenue event sent");
  }

  getRevenue() {
    if (Utils.isEmpty(this.state.revenue)) {
      return 0;
    }
    return Number(this.state.revenue);
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
                placeholder="Revenue Event Name"
                onChangeText={(text) => this.setState({eventName: text})}
                value={this.state.eventName}
            />
            <TextInput
                style={Utils.styles.container}
                placeholder="Currency"
                onChangeText={(text) => this.setState({currency: text})}
                value={this.state.currency}
            />
            <TextInput
                style={Utils.styles.container}
                placeholder="Revenue"
                onChangeText={(text) => this.setState({revenue: text})}
                value={this.state.revenue}
            />

            <View style={Utils.styles.buttonContainer}>
            <Button
                title="Revenue Event"
                onPress={() => this.sendRevenueEvent()}
            />
            </View>
            <View style={Utils.styles.buttonContainer}>
            <Button
                title="Revenue Event With Attributes"
                onPress={() => this.sendRevenueEventWithArgs()}
            />
            </View>
          </View>
        </>
    );
  };
}
