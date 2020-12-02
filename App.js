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
import {Singular, SingularConfig} from "singular-react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.deeplink = "test";

        this.customnavigatior = React.createRef();
        const config = new SingularConfig("", "");
        config.withSingularLink(singularLinksParams => {
            const deeplink = singularLinksParams.deeplink;
            const passthrough = singularLinksParams.passthrough;
            const isDeferred = singularLinksParams.isDeferred;
            // Add your code here to handle the deep link

        });
        Singular.init(config);
    }

    componentDidMount() {
        if (this.deeplink) {
            this.customnavigatior.navigate("Deep_Links");
        }
    }

    render() {
    return (
            <NavigationContainer ref={this.customnavigatior}>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                if (route.name === 'Custom Events') {
                                    return <Ionicons name='pencil' size={size} color={color} />
                                } else if (route.name === 'Revenue') {
                                    return <FontAwesome name='dollar' size={size} color={color} />
                                } else if (route.name === 'Identity') {
                                    return <Ionicons name='person' size={size} color={color} />
                                } else if (route.name === 'Deep_Links') {
                                    return <FontAwesome name='link' size={size} color={color} />
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
                        <Tab.Screen name="Deep_Links">
                            {props => <DeepLinks {...props} apiKey="hey there testing" />}
                        </Tab.Screen>
                    </Tab.Navigator>
        </NavigationContainer>
    );
  }
}
