import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import InicioScreen from '../screens/inicio/InicioScreen';
import OtroScreen from '../screens/extra/OtroScreen';
import MapaScreen from '../screens/mapa/MapaScreen';
import StackPersonajes from './stack/Stack';
import { useTema } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const iconos = {
  Inicio: 'home',
  Personajes: 'people',
  Quiz: 'help-circle',
  Mapa: 'map',
};

export default function MainTab() {
  const { colores } = useTema();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: { backgroundColor: colores.acento },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={26}
            color="#fff"
            style={{ marginLeft: 14 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        ),
        tabBarActiveTintColor: colores.acento,
        tabBarInactiveTintColor: colores.secundario,
        tabBarStyle: { backgroundColor: colores.tarjeta },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={iconos[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen
        name="Personajes"
        component={StackPersonajes}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Quiz" component={OtroScreen} />
      <Tab.Screen
        name="Mapa"
        component={MapaScreen}
        options={{ title: 'Mapa histórico' }}
      />
    </Tab.Navigator>
  );
}