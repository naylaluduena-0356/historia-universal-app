import React, { useState } from 'react';
import { View, Text, Pressable, Modal, StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { personajes } from '../../data/data';
import { ubicaciones } from '../../data/ubicaciones';
import { imagenes } from '../../data/imagenes';
import { useTema } from '../../context/ThemeContext';
import ImagenPersonaje from '../../components/ImagenPersonaje';

export default function MapaScreen({ navigation }) {
  const { colores, modoOscuro } = useTema();
  const [seleccionado, setSeleccionado] = useState(null);

  const conUbicacion = personajes.filter((p) => ubicaciones[p.id]);

  if (Platform.OS === 'web') {
    return (
      <View style={[styles.webAviso, { backgroundColor: colores.fondo }]}>
        <Text style={{ color: colores.texto, textAlign: 'center' }}>
          El mapa solo está disponible en la app móvil (Expo Go), no en la versión web.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{ latitude: 30, longitude: 20, latitudeDelta: 90, longitudeDelta: 90 }}
        userInterfaceStyle={modoOscuro ? 'dark' : 'light'}
      >
        {conUbicacion.map((p) => (
          <Marker
            key={p.id}
            coordinate={{ latitude: ubicaciones[p.id].lat, longitude: ubicaciones[p.id].lng }}
            pinColor={p.tipo === 'mujer' ? '#e75480' : '#8a4fb3'}
            title={p.nombre}
            description={ubicaciones[p.id].lugar}
            onPress={() => setSeleccionado(p)}
          />
        ))}
      </MapView>

      <Modal visible={seleccionado !== null} transparent animationType="slide" onRequestClose={() => setSeleccionado(null)}>
        <View style={styles.overlay}>
          <View style={[styles.modal, { backgroundColor: colores.tarjeta }]}>
            {seleccionado && (
              <>
                <View style={styles.fila}>
                  <ImagenPersonaje source={imagenes[seleccionado.id]} nombre={seleccionado.nombre} style={styles.foto} />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={[styles.nombre, { color: colores.texto }]}>{seleccionado.nombre}</Text>
                    <Text style={{ color: colores.secundario }}>{ubicaciones[seleccionado.id].lugar}</Text>
                    <Text style={{ color: colores.acento }}>{seleccionado.epoca}</Text>
                  </View>
                </View>

                <View style={styles.botones}>
                  <Pressable
                    style={[styles.boton, { backgroundColor: colores.acento }]}
                    onPress={() => {
                      setSeleccionado(null);
                      navigation.navigate('Personajes', { screen: 'Detalles', params: { personaje: seleccionado } });
                    }}
                  >
                    <Text style={styles.botonTexto}>Ver ficha</Text>
                  </Pressable>
                  <Pressable style={[styles.boton, { backgroundColor: colores.secundario }]} onPress={() => setSeleccionado(null)}>
                    <Text style={styles.botonTexto}>Cerrar</Text>
                  </Pressable>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  webAviso: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' },
  modal: { padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  fila: { flexDirection: 'row', alignItems: 'center' },
  foto: { width: 64, height: 64, borderRadius: 32 },
  nombre: { fontSize: 17, fontWeight: '600' },
  botones: { flexDirection: 'row', marginTop: 16, gap: 10 },
  boton: { flex: 1, padding: 10, borderRadius: 8, alignItems: 'center' },
  botonTexto: { color: '#fff', fontWeight: '600' },
});