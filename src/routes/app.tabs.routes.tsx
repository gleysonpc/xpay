import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Profile from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Feather';
import {ThemeContext} from 'styled-components';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const theme = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.MAIN,
        tabBarInactiveTintColor: theme.COLORS.TEXT_LIGHT,
        tabBarLabelStyle: {fontSize: theme.SIZES.SUBTITLES, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? theme.COLORS.MAIN : theme.COLORS.TEXT_LIGHT}
              name="user"
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? theme.COLORS.MAIN : theme.COLORS.TEXT_LIGHT}
              name="settings"
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
