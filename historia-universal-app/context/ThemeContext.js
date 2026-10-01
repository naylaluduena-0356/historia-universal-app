import React, { createContext, useContext, useState } from 'react';

const temas = {
  claro: {
    fondo: '#ffe4ec',
    tarjeta: '#fff5f8',
    texto: '#4a1f30',
    secundario: '#a3546d',
    acento: '#e75480',
  },
  oscuro: {
    fondo: '#5c1a33',
    tarjeta: '#7a2745',
    texto: '#ffe4ec',
    secundario: '#f2b3c7',
    acento: '#ff8fb1',
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [modoOscuro, setModoOscuro] = useState(false);
  const colores = modoOscuro ? temas.oscuro : temas.claro;
  const alternarModo = () => setModoOscuro((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ modoOscuro, alternarModo, colores }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTema = () => useContext(ThemeContext);