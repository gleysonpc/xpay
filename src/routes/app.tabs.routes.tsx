import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/ProfileScreen';
import Settings from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <Icon color={color} name="user" size={30} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="settings" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
