import 'react-native-gesture-handler'; // siempre la primera línea
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from './context/ThemeContext';
import { FavoritosProvider } from './context/FavoritosContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <FavoritosProvider>
          <NavigationContainer>
            <StatusBar style="light" />
            <AppNavigator />
          </NavigationContainer>
        </FavoritosProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}