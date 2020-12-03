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
            borderColor: 'gray',
            borderWidth: 1,
            height: 40,
            marginTop:10,
            width:280,
            textAlign:'center'
        },
        viewContainer: {
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
        },
        buttonContainer: {
            backgroundColor: '#FFFFFF',
            padding: 10,
            width:300,
        },
        deeplinkContainer: {
            height: 40,
            marginTop: 10,
            padding: 10,
            fontSize: 15,
            color: 'gray',
        },
        deeplinkTextContainer: {
            height: 40,
            marginTop: 10,
            padding: 10,
            fontSize: 20,
        },
        image:{
            width: 280,
            height: 116,
            alignItems: 'center',
            resizeMode:'contain',
            marginTop: 50,
        }
    })
}

export default Utils;
