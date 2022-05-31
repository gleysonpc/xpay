import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import light from './theme/light';

import Routes from './routes';

import {AuthProvider} from './contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={light}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
