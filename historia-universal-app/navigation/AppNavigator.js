import React from 'react';
import { View, Text, Pressable, Switch, FlatList, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import MainTab from './MainTab';
import { useTema } from '../context/ThemeContext';

const Drawer = createDrawerNavigator();

const opciones = [
  { pantalla: 'Inicio', texto: 'Inicio', icono: 'home' },
  { pantalla: 'Personajes', texto: 'Personajes', icono: 'people' },
  { pantalla: 'Quiz', texto: 'Quiz: ¿Quién soy?', icono: 'help-circle' },
  { pantalla: 'Mapa', texto: 'Mapa histórico', icono: 'map' },
];

function MenuLateral({ navigation }) {
  const { colores, modoOscuro, alternarModo } = useTema();
  const insets = useSafeAreaInsets();

  const ir = (pantalla) => {
    navigation.navigate('Historia', { screen: pantalla });
    navigation.closeDrawer();
  };

  return (
    <FlatList
      style={{ backgroundColor: colores.fondo }}
      contentContainerStyle={[styles.menu, { paddingTop: insets.top + 20 }]}
      data={opciones}
      keyExtractor={(item) => item.pantalla}
      ListHeaderComponent={
        <Text style={[styles.titulo, { color: colores.texto }]}>Historia Universal</Text>
      }
      renderItem={({ item }) => (
        <Pressable style={[styles.item, { backgroundColor: colores.tarjeta }]} onPress={() => ir(item.pantalla)}>
          <Ionicons name={item.icono} size={22} color={colores.acento} />
          <Text style={[styles.itemTexto, { color: colores.texto }]}>{item.texto}</Text>
        </Pressable>
      )}
      ListFooterComponent={
        <View style={[styles.modo, { backgroundColor: colores.tarjeta }]}>
          <Ionicons name={modoOscuro ? 'moon' : 'sunny'} size={22} color={colores.acento} />
          <Text style={[styles.itemTexto, { color: colores.texto, flex: 1 }]}>
            {modoOscuro ? 'Modo oscuro' : 'Modo claro'}
          </Text>
          <Switch value={modoOscuro} onValueChange={alternarModo} trackColor={{ false: '#f4b6c8', true: colores.acento }} thumbColor="#fff" />
        </View>
      }
    />
  );
}

export default function AppNavigator() {
  const { colores } = useTema();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuLateral {...props} />}
      screenOptions={{ headerShown: false, drawerStyle: { backgroundColor: colores.fondo, width: 290 } }}
    >
      <Drawer.Screen name="Historia" component={MainTab} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menu: { paddingHorizontal: 16, flexGrow: 1 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 12, marginBottom: 10 },
  itemTexto: { fontSize: 16, marginLeft: 12 },
  modo: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 12, marginTop: 20 },
});