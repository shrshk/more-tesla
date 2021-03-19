import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TestPageContainer } from '../resource/test/view/test.container';

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
                component={Feed}
                options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons icon="home" color={color} size={size} />
          }
        }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons icon="bell" color={color} size={size} />
          ),
        }}
            />
            <Tab.Screen
                name="Profile"
                component={TestPageContainer}
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