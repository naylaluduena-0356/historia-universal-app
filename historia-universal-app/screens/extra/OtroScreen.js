import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, Modal, StyleSheet } from 'react-native';
import { personajes } from '../../data/data';
import { imagenes } from '../../data/imagenes';
import { useTema } from '../../context/ThemeContext';
import ImagenPersonaje from '../../components/ImagenPersonaje';

const mezclar = (lista) => [...lista].sort(() => Math.random() - 0.5);

function nuevaPregunta() {
  const correcto = personajes[Math.floor(Math.random() * personajes.length)];
  const otros = mezclar(personajes.filter((p) => p.id !== correcto.id)).slice(0, 3);
  return { correcto, opciones: mezclar([correcto, ...otros]) };
}

export default function OtroScreen() {
  const { colores } = useTema();
  const [pregunta, setPregunta] = useState(nuevaPregunta);
  const [aciertos, setAciertos] = useState(0);
  const [total, setTotal] = useState(0);
  const [respuesta, setRespuesta] = useState(null);

  const acerto = respuesta && respuesta.id === pregunta.correcto.id;

  const elegir = (opcion) => {
    setRespuesta(opcion);
    setTotal((t) => t + 1);
    if (opcion.id === pregunta.correcto.id) setAciertos((a) => a + 1);
  };

  const siguiente = () => {
    setRespuesta(null);
    setPregunta(nuevaPregunta());
  };

  const reiniciar = () => {
    setAciertos(0);
    setTotal(0);
    setRespuesta(null);
    setPregunta(nuevaPregunta());
  };

  return (
    <View style={[styles.container, { backgroundColor: colores.fondo }]}>
      <FlatList
        data={pregunta.opciones}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={
          <View>
            <View style={styles.marcador}>
              <Text style={{ color: colores.texto, fontWeight: '600' }}>Aciertos: {aciertos} / {total}</Text>
              <Pressable onPress={reiniciar}>
                <Text style={{ color: colores.acento, fontWeight: '600' }}>Reiniciar</Text>
              </Pressable>
            </View>

            <View style={[styles.pista, { backgroundColor: colores.tarjeta }]}>
              <Text style={[styles.pistaTitulo, { color: colores.acento }]}>¿Quién soy?</Text>
              <Text style={{ color: colores.texto, fontSize: 16, lineHeight: 23 }}>{pregunta.correcto.resumen}</Text>
              <Text style={{ color: colores.secundario, marginTop: 10 }}>
                {pregunta.correcto.era} · {pregunta.correcto.lugar}
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable style={[styles.opcion, { backgroundColor: colores.tarjeta }]} onPress={() => elegir(item)}>
            <Text style={{ color: colores.texto, fontSize: 16 }}>{item.nombre}</Text>
          </Pressable>
        )}
      />

      <Modal visible={respuesta !== null} transparent animationType="fade" onRequestClose={siguiente}>
        <View style={styles.overlay}>
          <View style={[styles.modal, { backgroundColor: colores.tarjeta }]}>
            <Text style={[styles.resultado, { color: colores.acento }]}>{acerto ? '¡Correcto!' : 'Casi...'}</Text>
            <ImagenPersonaje source={imagenes[pregunta.correcto.id]} nombre={pregunta.correcto.nombre} style={styles.foto} />
            <Text style={[styles.nombre, { color: colores.texto }]}>{pregunta.correcto.nombre}</Text>
            <Text style={{ color: colores.secundario }}>{pregunta.correcto.epoca}</Text>
            <Pressable style={[styles.boton, { backgroundColor: colores.acento }]} onPress={siguiente}>
              <Text style={styles.botonTexto}>Siguiente pregunta</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  marcador: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 },
  pista: { borderRadius: 14, padding: 18, marginBottom: 18, elevation: 3 },
  pistaTitulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  opcion: { padding: 16, borderRadius: 12, marginBottom: 10, elevation: 2 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', padding: 28 },
  modal: { borderRadius: 16, padding: 20, alignItems: 'center' },
  resultado: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  foto: { width: 140, height: 140, borderRadius: 70, marginBottom: 10 },
  nombre: { fontSize: 20, fontWeight: 'bold' },
  boton: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, marginTop: 16 },
  botonTexto: { color: '#fff', fontWeight: '600' },
});