/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

    messaging().onNotificationOpenedApp((notification) => {
      console.log('handle Background Notification', JSON.stringify(notification));
    });

    messaging().onMessage(async remoteMessage => {
      console.log('tapasya Message handled in the foreground!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('tapasya Message handled in the background!', remoteMessage);
    });

AppRegistry.registerComponent(appName, () => App);
