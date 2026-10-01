import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, Pressable, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { personajes, eras } from '../../data/data';
import { imagenes } from '../../data/imagenes';
import { useTema } from '../../context/ThemeContext';
import { useFavoritos } from '../../context/FavoritosContext';
import ImagenPersonaje from '../../components/ImagenPersonaje';

const generos = [
  { label: 'Todos', valor: 'todos' },
  { label: 'Hombres', valor: 'hombre' },
  { label: 'Mujeres', valor: 'mujer' },
];

function Chip({ label, activo, onPress }) {
  const { colores } = useTema();
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, { backgroundColor: activo ? colores.acento : colores.fondo }]}
    >
      <Text style={{ color: activo ? '#fff' : colores.texto }}>{label}</Text>
    </Pressable>
  );
}

export default function Lista({ navigation }) {
  const { colores } = useTema();
  const { esFavorito, alternarFavorito } = useFavoritos();
  const [era, setEra] = useState('Todas');
  const [genero, setGenero] = useState('todos');
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const filtrados = useMemo(
    () =>
      personajes.filter(
        (p) =>
          (era === 'Todas' || p.era === era) &&
          (genero === 'todos' || p.tipo === genero) &&
          (!soloFavoritos || esFavorito(p.id))
      ),
    [era, genero, soloFavoritos, esFavorito]
  );

  return (
    <View style={[styles.container, { backgroundColor: colores.fondo }]}>
      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={{ color: colores.secundario }}>{filtrados.length} personajes</Text>
            <Pressable style={[styles.botonFiltro, { backgroundColor: colores.acento }]} onPress={() => setModalVisible(true)}>
              <Text style={styles.botonTexto}>Filtrar</Text>
            </Pressable>
          </View>
        }
        ListEmptyComponent={
          <Text style={{ color: colores.texto, textAlign: 'center' }}>No hay personajes con esos filtros.</Text>
        }
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, { backgroundColor: colores.tarjeta }]}
            onPress={() => navigation.navigate('Detalles', { personaje: item })}
          >
            <ImagenPersonaje source={imagenes[item.id]} nombre={item.nombre} style={styles.foto} />
            <View style={styles.info}>
              <Text style={[styles.nombre, { color: colores.texto }]}>{item.nombre}</Text>
              <Text style={{ color: colores.secundario }}>{item.epoca}</Text>
              <Text style={{ color: colores.acento }}>{item.lugar}</Text>
            </View>
            <Pressable
              style={styles.corazon}
              onPress={() => alternarFavorito(item.id)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name={esFavorito(item.id) ? 'heart' : 'heart-outline'} size={24} color={colores.acento} />
            </Pressable>
          </Pressable>
        )}
      />

      <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={[styles.modal, { backgroundColor: colores.tarjeta }]}>
            <Text style={[styles.modalTitulo, { color: colores.texto }]}>Época</Text>
            <FlatList
              horizontal
              data={eras}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Chip label={item} activo={era === item} onPress={() => setEra(item)} />
              )}
            />

            <Text style={[styles.modalTitulo, { color: colores.texto }]}>Género</Text>
            <FlatList
              horizontal
              data={generos}
              keyExtractor={(item) => item.valor}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Chip label={item.label} activo={genero === item.valor} onPress={() => setGenero(item.valor)} />
              )}
            />

            <Text style={[styles.modalTitulo, { color: colores.texto }]}>Favoritos</Text>
            <Chip label="Solo favoritos" activo={soloFavoritos} onPress={() => setSoloFavoritos((v) => !v)} />

            <Pressable
              style={[styles.botonFiltro, { backgroundColor: colores.acento, marginTop: 16 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.botonTexto}>Ver {filtrados.length} resultados</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  card: { flexDirection: 'row', alignItems: 'center', borderRadius: 12, padding: 10, marginBottom: 12, elevation: 3 },
  foto: { width: 80, height: 80, borderRadius: 40 },
  info: { flex: 1, marginLeft: 14, justifyContent: 'center' },
  nombre: { fontSize: 17, fontWeight: '600' },
  corazon: { padding: 4 },
  botonFiltro: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  botonTexto: { color: '#fff', fontWeight: '600', textAlign: 'center' },
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  modal: { padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  modalTitulo: { fontSize: 18, fontWeight: '600', marginBottom: 8, marginTop: 8 },
  chip: { paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20, marginRight: 8, marginBottom: 8 },
});