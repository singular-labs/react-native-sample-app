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

  showPopover() {
    return (
        <>
          Keyboard.dismiss;

          <Picker
              selectedValue='testing'
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({currency: itemValue})
              }>
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="GBP" value="GBP" />
            <Picker.Item label="ILS" value="ILS" />
            <Picker.Item label="INR" value="INR" />
            <Picker.Item label="JPY" value="JPY" />
            <Picker.Item label="KRW" value="KRW" />
            <Picker.Item label="USD" value="USD" />
          </Picker>
          </>
    )
  }

  render() {
    return (
        <>
          <View style={Utils.styles.viewContainer}>
            <TextInput
                style={Utils.styles.container}
                placeholder="Revenue Event Name"
                onChangeText={(text) => this.setState({eventName: text})}
                value={this.state.eventName}
            />
            <TextInput
                style={Utils.styles.container}
                placeholder="Currency"
                onChangeText={this.showPopover}
                value={this.state.currency}
            />
            <TextInput
                style={Utils.styles.container}
                placeholder="Revenue"
                onChangeText={(text) => this.setState({revenue: text})}
                value={this.state.revenue}
            />

            <Button
                title="Revenue Event"
                onPress={() => this.sendRevenueEvent()}
            />
            <Button
                title="Revenue Event With Attributes"
                onPress={() => this.sendRevenueEventWithArgs()}
            />
          </View>
        </>
    );
  };
}
