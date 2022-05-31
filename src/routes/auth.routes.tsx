import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const AppStack = createNativeStackNavigator();

const AppRouts: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Dashboard"
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </AppStack.Navigator>
);

export default AppRouts;
