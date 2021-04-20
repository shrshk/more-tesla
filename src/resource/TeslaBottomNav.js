import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TeslaVoice } from './tesla-voice-example/tesla-voice.component.js';
import { TeslaVoiceBuild } from './tesla-voice-example/tesla-voice-build.component.js';
import { TeslaSpeak } from './tesla-voice-example/tesla-speak.component.js';

function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function TeslaBottomNav() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
        >
            <Tab.Screen
                name="Feed"
                component={TeslaVoice}
                options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons icon="home" color={color} size={size} />
          }
        }}
            />
            <Tab.Screen
                name="Notifications"
                component={TeslaSpeak}
                options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons icon="bell" color={color} size={size} />
          ),
        }}
            />
            <Tab.Screen
                name="Profile"
                component={TeslaVoiceBuild}
                options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons icon="account" color={color} size={size} />
          ),
        }}
            />
        </Tab.Navigator>
    );
}

export default TeslaBottomNav;