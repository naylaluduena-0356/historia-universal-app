import React, { useState, useMemo } from 'react';
import { FlatList, View, Text, Pressable, Modal, StyleSheet } from 'react-native';
import { useTema } from '../../context/ThemeContext';
import { getEfemerideDeHoy } from '../../data/efemerides';

const DESTACADOS = [
  { id: '1', titulo: 'Conquistadores', info: 'Figuras como Alejandro Magno expandieron imperios enteros en pocos años.' },
  { id: '2', titulo: 'Emperadores', info: 'Qin Shi Huang unificó China y comenzó la Gran Muralla.' },
  { id: '3', titulo: 'Mujeres de la historia', info: 'Reinas, científicas y líderes que marcaron su época.' },
];

const formatoFecha = (fecha) =>
  fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });

export default function InicioScreen() {
  const { colores } = useTema();
  const [seleccionado, setSeleccionado] = useState(null);
  const [verEfemeride, setVerEfemeride] = useState(false);

  const hoy = useMemo(() => new Date(), []);
  const { entrada, esDeHoy } = useMemo(() => getEfemerideDeHoy(hoy), [hoy]);

  return (
    <View style={[styles.container, { backgroundColor: colores.fondo }]}>
      <FlatList
        data={DESTACADOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={
          <View style={{ marginBottom: 16 }}>
            <Text style={[styles.titulo, { color: colores.texto }]}>Historia Universal</Text>
            <Text style={{ color: colores.secundario, fontSize: 16, marginBottom: 18 }}>
              Toca una categoría para saber más
            </Text>

            <Pressable
              style={[styles.efemeride, { backgroundColor: colores.acento }]}
              onPress={() => setVerEfemeride(true)}
            >
              <Text style={styles.efemerideEtiqueta}>
                {esDeHoy ? `Un día como hoy, ${formatoFecha(hoy)}` : 'Efeméride'}
              </Text>
              <Text style={styles.efemerideNombre}>{entrada.nombre}</Text>
              <Text style={styles.efemerideTipo}>
                {entrada.tipo} · {entrada.año < 0 ? `${-entrada.año} a.C.` : entrada.año}
              </Text>
              <Text style={styles.efemerideToque}>Toca para leer más</Text>
            </Pressable>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, { backgroundColor: colores.tarjeta }]}
            onPress={() => setSeleccionado(item)}
          >
            <Text style={[styles.cardTitulo, { color: colores.acento }]}>{item.titulo}</Text>
          </Pressable>
        )}
      />

      <Modal visible={seleccionado !== null} transparent animationType="fade" onRequestClose={() => setSeleccionado(null)}>
        <View style={styles.overlay}>
          <View style={[styles.modal, { backgroundColor: colores.tarjeta }]}>
            <Text style={[styles.cardTitulo, { color: colores.acento }]}>{seleccionado?.titulo}</Text>
            <Text style={{ color: colores.texto, marginVertical: 12 }}>{seleccionado?.info}</Text>
            <Pressable style={[styles.boton, { backgroundColor: colores.acento }]} onPress={() => setSeleccionado(null)}>
              <Text style={styles.botonTexto}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal visible={verEfemeride} transparent animationType="slide" onRequestClose={() => setVerEfemeride(false)}>
        <View style={styles.overlay}>
          <View style={[styles.modal, { backgroundColor: colores.tarjeta }]}>
            <Text style={[styles.efemerideEtiquetaModal, { color: colores.secundario }]}>
              {entrada.tipo} · {entrada.lugar}
            </Text>
            <Text style={[styles.modalNombre, { color: colores.texto }]}>{entrada.nombre}</Text>
            <Text style={{ color: colores.texto, lineHeight: 22, marginVertical: 10 }}>{entrada.resumen}</Text>
            <View style={[styles.dato, { backgroundColor: colores.fondo }]}>
              <Text style={{ color: colores.acento, fontWeight: '600', marginBottom: 4 }}>Dato curioso</Text>
              <Text style={{ color: colores.texto }}>{entrada.dato}</Text>
            </View>
            <Pressable style={[styles.boton, { backgroundColor: colores.acento }]} onPress={() => setVerEfemeride(false)}>
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
  titulo: { fontSize: 32, fontWeight: 'bold' },
  card: { borderRadius: 12, padding: 18, marginBottom: 12, elevation: 3 },
  cardTitulo: { fontSize: 18, fontWeight: '600' },
  efemeride: { borderRadius: 14, padding: 18, elevation: 4 },
  efemerideEtiqueta: { color: '#fff', opacity: 0.85, fontSize: 13, marginBottom: 4 },
  efemerideNombre: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  efemerideTipo: { color: '#fff', opacity: 0.9, marginTop: 2 },
  efemerideToque: { color: '#fff', opacity: 0.75, fontSize: 12, marginTop: 10 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 24 },
  modal: { borderRadius: 14, padding: 20 },
  boton: { padding: 10, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  botonTexto: { color: '#fff', fontWeight: '600' },
  efemerideEtiquetaModal: { fontSize: 13, marginBottom: 4 },
  modalNombre: { fontSize: 24, fontWeight: 'bold' },
  dato: { borderRadius: 10, padding: 12, marginTop: 6, marginBottom: 6 },
});