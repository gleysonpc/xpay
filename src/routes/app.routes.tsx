import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppTabs from './app.tabs.routes';

const AppStack = createNativeStackNavigator();

const AppRouts: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="App"
      component={AppTabs}
      options={{headerShown: false}}
    />
  </AppStack.Navigator>
);

export default AppRouts;
