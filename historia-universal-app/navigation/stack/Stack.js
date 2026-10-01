import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Lista from '../../screens/personajes/Lista';
import Detalles from '../../screens/personajes/Detalles';
import { useTema } from '../../context/ThemeContext';

const Stack = createNativeStackNavigator();

export default function StackPersonajes() {
  const { colores } = useTema();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colores.acento },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Lista"
        component={Lista}
        options={({ navigation }) => ({
          title: 'Personajes',
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={26}
              color="#fff"
              style={{ marginRight: 14 }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          ),
        })}
      />
      <Stack.Screen name="Detalles" component={Detalles} />
    </Stack.Navigator>
  );
}