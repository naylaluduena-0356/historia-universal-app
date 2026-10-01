import React, { useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { useTema } from '../context/ThemeContext';

export default function ImagenPersonaje({ source, nombre, style }) {
  const { colores } = useTema();
  const [error, setError] = useState(false);

  // Si la imagen no carga, se muestra la inicial del nombre
  if (!source || error) {
    return (
      <View style={[styles.respaldo, { backgroundColor: colores.acento }, style]}>
        <Text style={styles.inicial}>{nombre?.charAt(0)}</Text>
      </View>
    );
  }

  return (
    <Image
      source={source}
      style={style}
      resizeMode="cover"
      onError={() => setError(true)}
    />
  );
}

const styles = StyleSheet.create({
  respaldo: { justifyContent: 'center', alignItems: 'center' },
  inicial: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
});