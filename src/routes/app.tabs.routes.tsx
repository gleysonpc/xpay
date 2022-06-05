import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from 'styled-components';
// screens
import HomeScreen from '@screens/HomeScreen';
import BalancesScreen from '@screens/BalancesScreen';
import EarningsScreen from '@screens/EarningsScreen';
import SettingsScreen from '@screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const tabs = [
  {name: 'home', label: 'Home', icon: 'home', component: HomeScreen},
  {
    name: 'balances',
    label: 'Balanços',
    icon: 'file-document',
    component: BalancesScreen,
  },
  {
    name: 'earnings',
    label: 'Ganhos',
    icon: 'cash-plus',
    component: EarningsScreen,
  },
  {
    name: 'settings',
    label: 'Ajustes',
    icon: 'cog',
    component: SettingsScreen,
  },
];

export default function AppTabs() {
  const theme = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.MAIN,
        tabBarInactiveTintColor: theme.COLORS.TEXT_LIGHT,
        tabBarLabelStyle: {fontSize: theme.SIZES.SUBTITLES, fontWeight: 'bold'},
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerTitle: tab.label,
            tabBarLabel: tab.label,
            tabBarIcon: ({focused}) => (
              <Icon
                color={focused ? theme.COLORS.MAIN : theme.COLORS.TEXT_LIGHT}
                name={tab.icon}
                size={25}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
