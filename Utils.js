/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from "react-native";

const Utils = {
    isEmpty:function(value){
        return value ? value.trim().length == 0 : true;
    },
    styles:StyleSheet.create({
        container: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 15,
            padding: 10
        },
        viewContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        deeplinkContainer: {
            height: 40,
            marginTop: 10,
            padding: 10,
            fontSize: 15,
            color: 'gray'
        }
    })
}

export default Utils;
