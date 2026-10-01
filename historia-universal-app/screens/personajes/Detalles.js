import React, { useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTema } from '../../context/ThemeContext';
import { useFavoritos } from '../../context/FavoritosContext';
import { imagenes } from '../../data/imagenes';
import ImagenPersonaje from '../../components/ImagenPersonaje';

export default function Detalles({ route, navigation }) {
  const { personaje } = route.params;
  const { colores } = useTema();
  const { esFavorito, alternarFavorito } = useFavoritos();
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ title: personaje.nombre });
  }, [navigation, personaje]);

  const datos = [
    { id: 'epoca', etiqueta: 'Época', valor: personaje.epoca },
    { id: 'lugar', etiqueta: 'Lugar', valor: personaje.lugar },
    { id: 'era', etiqueta: 'Edad histórica', valor: personaje.era },
    { id: 'tipo', etiqueta: 'Género', valor: personaje.tipo === 'mujer' ? 'Mujer' : 'Hombre' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colores.fondo }]}>
      <FlatList
        data={datos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={
          <View style={styles.cabecera}>
            <View style={{ alignItems: 'center' }}>
              <Pressable onPress={() => setModalVisible(true)}>
                <ImagenPersonaje source={imagenes[personaje.id]} nombre={personaje.nombre} style={styles.foto} />
                <Text style={[styles.hint, { color: colores.secundario }]}>Toca la foto para ampliarla</Text>
              </Pressable>

              <Pressable style={styles.corazonGrande} onPress={() => alternarFavorito(personaje.id)}>
                <Ionicons name={esFavorito(personaje.id) ? 'heart' : 'heart-outline'} size={28} color={colores.acento} />
                <Text style={{ color: colores.acento, marginLeft: 6, fontWeight: '600' }}>
                  {esFavorito(personaje.id) ? 'En favoritos' : 'Agregar a favoritos'}
                </Text>
              </Pressable>
            </View>

            <Text style={[styles.nombre, { color: colores.texto }]}>{personaje.nombre}</Text>
            <Text style={[styles.resumen, { color: colores.texto }]}>{personaje.resumen}</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={[styles.fila, { backgroundColor: colores.tarjeta }]}>
            <Text style={{ color: colores.secundario, fontWeight: '600' }}>{item.etiqueta}</Text>
            <Text style={{ color: colores.texto }}>{item.valor}</Text>
          </View>
        )}
        ListFooterComponent={
          <Pressable style={[styles.boton, { backgroundColor: colores.acento }]} onPress={() => navigation.navigate('Lista')}>
            <Text style={styles.botonTexto}>Volver a la lista</Text>
          </Pressable>
        }
      />

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={[styles.modal, { backgroundColor: colores.tarjeta }]}>
            <ImagenPersonaje source={imagenes[personaje.id]} nombre={personaje.nombre} style={styles.fotoGrande} />
            <Text style={[styles.modalNombre, { color: colores.texto }]}>{personaje.nombre}</Text>
            <Text style={{ color: colores.secundario }}>{personaje.epoca}</Text>
            <Pressable style={[styles.boton, { backgroundColor: colores.acento }]} onPress={() => setModalVisible(false)}>
              <Text style={styles.botonTexto}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cabecera: { alignItems: 'center', marginBottom: 16 },
  foto: { width: 180, height: 180, borderRadius: 90, alignSelf: 'center' },
  hint: { fontSize: 12, textAlign: 'center', marginTop: 6 },
  corazonGrande: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  nombre: { fontSize: 26, fontWeight: 'bold', marginTop: 12, textAlign: 'center' },
  resumen: { fontSize: 15, lineHeight: 22, marginTop: 10, textAlign: 'center' },
  fila: { flexDirection: 'row', justifyContent: 'space-between', padding: 14, borderRadius: 10, marginBottom: 8 },
  boton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, alignItems: 'center', marginTop: 16 },
  botonTexto: { color: '#fff', fontWeight: '600' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', padding: 24 },
  modal: { borderRadius: 16, padding: 20, alignItems: 'center' },
  fotoGrande: { width: 260, height: 260, borderRadius: 16, marginBottom: 12 },
  modalNombre: { fontSize: 20, fontWeight: 'bold' },
});