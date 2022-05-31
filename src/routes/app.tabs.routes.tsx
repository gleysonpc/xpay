import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/ProfileScreen';
import Settings from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
