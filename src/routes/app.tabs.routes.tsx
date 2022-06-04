import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Profile from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import BalancesScreen from '../screens/BalancesScreen';
import Settings from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Feather';
import {ThemeContext} from 'styled-components';

const Tab = createBottomTabNavigator();

const tabLabels = {
  HOME: {name: 'home', label: 'Home'},
  BALANCES: {name: 'balances', label: 'Balanços'},
  SETTINGS: {name: 'settings', label: 'Ajustes'},
  PROFILE: {name: 'profile', label: 'Perfil'},
};

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
        name={tabLabels.HOME.name}
        component={HomeScreen}
        options={{
          headerTitle: tabLabels.HOME.label,
          tabBarLabel: tabLabels.HOME.label,
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
        name={tabLabels.BALANCES.name}
        component={BalancesScreen}
        options={{
          headerTitle: tabLabels.BALANCES.label,
          tabBarLabel: tabLabels.BALANCES.label,
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? theme.COLORS.MAIN : theme.COLORS.TEXT_LIGHT}
              name="file-text"
              size={25}
            />
          ),
        }}
      />

      <Tab.Screen
        name={tabLabels.SETTINGS.name}
        component={Settings}
        options={{
          headerTitle: tabLabels.SETTINGS.label,
          tabBarLabel: tabLabels.SETTINGS.label,
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
