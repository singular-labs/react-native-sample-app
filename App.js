/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import {
  RESULTS,
  requestNotifications,
} from 'react-native-permissions';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

const Tab = createBottomTabNavigator();
export const isIos = () => Platform.OS === 'ios';
export const isAndroid = () => Platform.OS === 'android';
//export const getPlatformVersion = () => Number(Platform.Version);

export default class App extends React.Component {
    constructor(props) {
        super(props);

        firebase.initializeApp();

   if(isIos() || isAndroid()) {
        this.requestUserPermission();
   }

messaging().onNotificationOpenedApp((notification) => {
  console.log('Background Notification', JSON.stringify(notification));
  // Handle Your notification here
});
        this.getFcmToken();

        const unsubscribe = messaging().onMessage(async remoteMessage => {
                console.log('Message handled in the foreground!', JSON.stringify(remoteMessage));
            });

    const test = messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
    });

        // This is to use for Singular to navigate to deeplink tab
//        this.navigationRef = React.createRef();

//        const config = new SingularConfig("<API_KEY>", "<API_SECRET>");
//
//        config.withLoggingEnabled();
//
//        config.withLogLevel(3);
//
//
//        // Handling Singular links
//        // This is important to add in order to get Singular Links to work
//        config.withSingularLink(singularLinksParams => {
//             this.deeplink = singularLinksParams.deeplink;
//             this.passthrough = singularLinksParams.passthrough;
//             this.isDeferred = singularLinksParams.isDeferred;
//             this.urlParameters = singularLinksParams.urlParameters;
//            // Add your code here to handle the deep link
//            // When the app is opened using a deeplink, we open the deeplink tab
//            this.navigationRef.current?.navigate("Deep Links");
//        });
//
//        // Enable use of SKAN for iOS14 tracking
//        // Singular will call registerAppForAdNetworkAttribution for you
//        config.skAdNetworkEnabled = true;
//
//        // Use withCustomUserId if you want to have the custom user id on the first session
//        // Once set, the Custom User Id will persist between runs until `Singular.unsetCustomUserId()` is called.
//        config.withCustomUserId("test@email.com");
//
//        // Enable manual conversion value updates
//        // IMPORTANT: set as false (or just don't set - it defaults to false) to let Singular manage conversion values
//        config.manualSkanConversionManagement = true;
//        config.withConversionValuesUpdatedHandler((values) => {
//            console.log('conversion values updated ' + values.conversionValue + ' coarse: '  + values.coarse + ' lock: ' + (values.lock ? 'true' : 'false'));
//        });
//
//        Singular.init(config);
    }


    async requestUserPermission() {
            const authStatus = await messaging().requestPermission();
            const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

            if (enabled) {
                console.log('Authorization status:', authStatus);
            }
        }

        async getFcmToken() {
          const token = await messaging().getToken();
          console.log('FCM Token:', token);
        }

    render() {
    return (
            <NavigationContainer ref={this.navigationRef}>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                if (route.name === 'Custom Events') {
                                    return <Ionicons name='pencil' size={size} color={color} />
                                } else if (route.name === 'Revenue') {
                                    return <FontAwesome name='dollar' size={size} color={color} />
                                } else if (route.name === 'Identity') {
                                    return <Ionicons name='person' size={size} color={color} />
                                } else if (route.name === 'Deep Links') {
                                    return <FontAwesome name='link' size={size} color={color} />
                                }else if (route.name === 'SKAN') {
                                    return <FontAwesome name='line-chart' size={size} color={color} />
                                }
                            },
                        })}

                        tabBarOptions={{
                            activeTintColor: '#007AFF',
                            inactiveTintColor: 'gray',
                        }}
                    >
                    <Tab.Screen name="Custom Events" component={CustomEvents} />
                    <Tab.Screen name="Revenue" component={Revenue} />
                    <Tab.Screen name="Identity" component={Identity} />
                        <Tab.Screen name="Deep Links">
                            {props => <DeepLinks {...props} deeplink={this.deeplink} passthrough={this.passthrough} isDeferred={this.isDeferred} urlParameters={this.urlParameters}/>}
                        </Tab.Screen>
                    <Tab.Screen name="SKAN" component={Skan} />
                    </Tab.Navigator>
        </NavigationContainer>
    );
  };
}
