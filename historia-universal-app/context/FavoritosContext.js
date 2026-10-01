import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CLAVE = '@favoritos_historia';
const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);
  const [cargado, setCargado] = useState(false);

  // Cargar favoritos guardados al abrir la app
  useEffect(() => {
    AsyncStorage.getItem(CLAVE)
      .then((valor) => {
        if (valor) setFavoritos(JSON.parse(valor));
      })
      .finally(() => setCargado(true));
  }, []);

  // Guardar cada vez que cambian
  useEffect(() => {
    if (cargado) {
      AsyncStorage.setItem(CLAVE, JSON.stringify(favoritos)).catch(() => {});
    }
  }, [favoritos, cargado]);

  const esFavorito = (id) => favoritos.includes(id);

  const alternarFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, esFavorito, alternarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export const useFavoritos = () => useContext(FavoritosContext);