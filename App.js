/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomEvents from './CustomEvents';
import Revenue from "./Revenue";
import Identity from "./Identity";
import DeepLinks from "./DeepLinks";
import Skan from "./Skan";
import {Singular, SingularConfig} from "singular-react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NotifService from './NotifService';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.notif = new NotifService(
            this.onRegister.bind(this),
            this.onNotif.bind(this),
            this.onAction.bind(this)
        );

        // This is to use for Singular to navigate to deeplink tab
        this.navigationRef = React.createRef();

        const config = new SingularConfig("realprodcorp1", "d38bfbce70b42a70fe920f425e73d123");

        config.withLoggingEnabled();
        config.withLogLevel(3);
        config.withPushNotificationLinkPath([["sng_link"]]);

        // Handling Singular links
        // This is important to add in order to get Singular Links to work
        config.withSingularLink(singularLinksParams => {
             this.deeplink = singularLinksParams.deeplink;
             this.passthrough = singularLinksParams.passthrough;
             this.isDeferred = singularLinksParams.isDeferred;
             this.urlParameters = singularLinksParams.urlParameters;
            // Add your code here to handle the deep link
            // When the app is opened using a deeplink, we open the deeplink tab
            this.navigationRef.current?.navigate("Deep Links");
        });

        // Enable use of SKAN for iOS14 tracking
        // Singular will call registerAppForAdNetworkAttribution for you
        config.skAdNetworkEnabled = true;

        // Use withCustomUserId if you want to have the custom user id on the first session
        // Once set, the Custom User Id will persist between runs until `Singular.unsetCustomUserId()` is called.
        config.withCustomUserId("test@email.com");

        // Enable manual conversion value updates
        // IMPORTANT: set as false (or just don't set - it defaults to false) to let Singular manage conversion values
        config.manualSkanConversionManagement = true;
        config.withConversionValuesUpdatedHandler((values) => {
            console.log('conversion values updated ' + values.conversionValue + ' coarse: '  + values.coarse + ' lock: ' + (values.lock ? 'true' : 'false'));
        });

        Singular.init(config);
    }

  onRegister(token) {
    this.setState({registerToken: token.token, fcmRegistered: true});
  }

  onNotif(notif) {
    Alert.alert(notif.title, notif.message);
  }

  onAction(notif) {
      Alert.alert(notif.title, notif.message);
  }

    render() {
    return (
            <View
               style={{
                 backgroundColor: Colors.black,
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
                 alignContent: 'center',
               }}>
               <Text> Push Notification!! </Text>
             </View>
              );
  }
}
