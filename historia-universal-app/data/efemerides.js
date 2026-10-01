// Cada entrada tiene mes (1-12) y dia (1-31)
export const efemerides = [
  { mes: 1, dia: 15, nombre: 'Martin Luther King Jr.', tipo: 'Nacimiento', año: 1929,
    lugar: 'Atlanta, Estados Unidos',
    resumen: 'Pastor y activista que lideró el movimiento por los derechos civiles con la desobediencia civil no violenta.',
    dato: 'Su discurso "I Have a Dream" (1963) es uno de los más citados de la historia.' },
  { mes: 1, dia: 27, nombre: 'Wolfgang Amadeus Mozart', tipo: 'Nacimiento', año: 1756,
    lugar: 'Salzburgo, Austria',
    resumen: 'Compositor prodigio que escribió su primera obra a los 5 años y más de 600 piezas en su corta vida.',
    dato: 'Murió a los 35 años sin terminar su Réquiem.' },
  { mes: 2, dia: 15, nombre: 'Galileo Galilei', tipo: 'Nacimiento', año: 1564,
    lugar: 'Pisa, Italia',
    resumen: 'Astrónomo y físico que defendió el modelo heliocéntrico y mejoró el telescopio para observar el cielo.',
    dato: 'Fue juzgado por la Inquisición y obligado a retractarse públicamente en 1633.' },
  { mes: 3, dia: 14, nombre: 'Albert Einstein', tipo: 'Nacimiento', año: 1879,
    lugar: 'Ulm, Alemania',
    resumen: 'Ya está en tu lista principal. Nació un 14 de marzo en Ulm.',
    dato: 'El 14 de marzo también se celebra el Día Internacional de las Matemáticas (Día de Pi).' },
  { mes: 3, dia: 15, nombre: 'Julio César', tipo: 'Muerte', año: -44,
    lugar: 'Roma',
    resumen: 'En los idus de marzo fue asesinado por un grupo de senadores, entre ellos Bruto, en el Senado romano.',
    dato: 'La frase "Tú también, Bruto" es en realidad una versión popularizada por Shakespeare.' },
  { mes: 4, dia: 15, nombre: 'Leonardo da Vinci', tipo: 'Nacimiento', año: 1452,
    lugar: 'Vinci, Italia',
    resumen: 'También está en tu lista. Un 15 de abril nació el artista e inventor más versátil del Renacimiento.',
    dato: 'Escribía sus notas al revés, de derecha a izquierda, quizá para dificultar que las copiaran.' },
  { mes: 5, dia: 8, nombre: 'Harry S. Truman', tipo: 'Nacimiento', año: 1884,
    lugar: 'Missouri, Estados Unidos',
    resumen: 'Presidente de EE. UU. que autorizó el uso de bombas atómicas sobre Hiroshima y Nagasaki en 1945.',
    dato: 'Fue el último presidente de EE. UU. sin título universitario.' },
  { mes: 5, dia: 19, nombre: 'Ho Chi Minh', tipo: 'Nacimiento', año: 1890,
    lugar: 'Nghệ An, Vietnam',
    resumen: 'Líder revolucionario que proclamó la independencia de Vietnam y luchó contra el dominio francés y luego estadounidense.',
    dato: 'Vivió muchos años en el exilio, trabajando incluso como cocinero en Londres y París.' },
  { mes: 6, dia: 5, nombre: 'Adam Smith', tipo: 'Nacimiento', año: 1723,
    lugar: 'Kirkcaldy, Escocia',
    resumen: 'Economista considerado el padre de la economía moderna con su obra "La riqueza de las naciones" (1776).',
    dato: 'Acuñó la idea de la "mano invisible" del mercado.' },
  { mes: 6, dia: 18, nombre: 'Napoleón Bonaparte', tipo: 'Derrota', año: 1815,
    lugar: 'Waterloo, Bélgica',
    resumen: 'Ya está en tu lista. Un 18 de junio sufrió su derrota final en la batalla de Waterloo.',
    dato: 'Tras la derrota fue exiliado a la isla de Santa Elena, donde murió en 1821.' },
  { mes: 7, dia: 6, nombre: 'Nelson Mandela', tipo: 'Nacimiento', año: 1918,
    lugar: 'Mvezo, Sudáfrica',
    resumen: 'Líder contra el apartheid que pasó 27 años preso y luego se convirtió en el primer presidente negro de Sudáfrica.',
    dato: 'Ganó el Premio Nobel de la Paz en 1993, junto a Frederik de Klerk.' },
  { mes: 7, dia: 14, nombre: 'Toma de la Bastilla', tipo: 'Evento', año: 1789,
    lugar: 'París, Francia',
    resumen: 'El pueblo parisino asaltó la prisión-fortaleza de la Bastilla, símbolo del poder absoluto del rey, marcando el inicio de la Revolución Francesa.',
    dato: 'El 14 de julio es el Día Nacional de Francia.' },
  { mes: 8, dia: 15, nombre: 'Napoleón Bonaparte', tipo: 'Nacimiento', año: 1769,
    lugar: 'Ajaccio, Córcega',
    resumen: 'Ya está en tu lista. Nació un 15 de agosto en la isla de Córcega.',
    dato: 'Nació en Córcega apenas un año después de que la isla pasara a ser francesa.' },
  { mes: 8, dia: 28, nombre: 'Marcha sobre Washington', tipo: 'Evento', año: 1963,
    lugar: 'Washington D.C., Estados Unidos',
    resumen: 'Unas 250.000 personas se manifestaron por los derechos civiles; allí Martin Luther King Jr. dio su famoso discurso.',
    dato: 'Fue una de las mayores concentraciones políticas en la historia de EE. UU. hasta ese momento.' },
  { mes: 9, dia: 2, nombre: 'Fin de la Segunda Guerra Mundial', tipo: 'Evento', año: 1945,
    lugar: 'Bahía de Tokio, Japón',
    resumen: 'Japón firmó su rendición formal a bordo del acorazado USS Missouri, poniendo fin oficial a la Segunda Guerra Mundial.',
    dato: 'La guerra había durado casi 6 años y es el conflicto más letal de la historia.' },
  { mes: 9, dia: 15, nombre: 'Independencia de Centroamérica', tipo: 'Evento', año: 1821,
    lugar: 'Guatemala',
    resumen: 'Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica declararon su independencia de España.',
    dato: 'Se firmó sin un solo disparo, a diferencia de otras independencias americanas.' },
  { mes: 10, dia: 12, nombre: 'Llegada de Colón a América', tipo: 'Evento', año: 1492,
    lugar: 'Bahamas (isla Guanahaní)',
    resumen: 'La expedición de Cristóbal Colón, financiada por los Reyes Católicos, llegó a tierras americanas por primera vez.',
    dato: 'Colón murió en 1506 convencido de que había llegado a Asia, no a un continente nuevo.' },
  { mes: 10, dia: 24, nombre: 'Fundación de la ONU', tipo: 'Evento', año: 1945,
    lugar: 'San Francisco, Estados Unidos',
    resumen: 'Entró en vigor la Carta de las Naciones Unidas, creando la organización internacional tras el fin de la Segunda Guerra Mundial.',
    dato: 'Cada 24 de octubre se celebra el Día de las Naciones Unidas.' },
  { mes: 11, dia: 9, nombre: 'Caída del Muro de Berlín', tipo: 'Evento', año: 1989,
    lugar: 'Berlín, Alemania',
    resumen: 'Miles de personas derribaron el muro que dividía Berlín Este y Oeste desde 1961, símbolo del fin de la Guerra Fría en Europa.',
    dato: 'La reunificación oficial de Alemania se completó casi un año después, el 3 de octubre de 1990.' },
  { mes: 11, dia: 19, nombre: 'Discurso de Gettysburg', tipo: 'Evento', año: 1863,
    lugar: 'Gettysburg, Estados Unidos',
    resumen: 'Abraham Lincoln pronunció un breve pero histórico discurso durante la Guerra Civil, apenas unos meses después de la batalla más sangrienta del conflicto.',
    dato: 'Duró apenas dos minutos, pero es uno de los discursos más citados de la historia estadounidense.' },
  { mes: 12, dia: 1, nombre: 'Rosa Parks se niega a ceder su asiento', tipo: 'Evento', año: 1955,
    lugar: 'Montgomery, Estados Unidos',
    resumen: 'Ya está en tu lista. Un 1 de diciembre se negó a ceder su asiento, gesto que desencadenó el boicot a los autobuses de Montgomery.',
    dato: 'El boicot duró 381 días y terminó con la prohibición de la segregación en el transporte público.' },
  { mes: 12, dia: 10, nombre: 'Declaración Universal de los Derechos Humanos', tipo: 'Evento', año: 1948,
    lugar: 'París, Francia',
    resumen: 'La ONU adoptó este documento que establece los derechos fundamentales de todas las personas, redactado tras el horror de la Segunda Guerra Mundial.',
    dato: 'Eleanor Roosevelt presidió el comité que lo redactó.' },
  { mes: 12, dia: 17, nombre: 'Primer vuelo de los hermanos Wright', tipo: 'Evento', año: 1903,
    lugar: 'Kitty Hawk, Estados Unidos',
    resumen: 'Orville Wright voló 12 segundos y 36 metros: el primer vuelo controlado y sostenido de un avión con motor.',
    dato: 'Aquel primer vuelo duró menos de lo que se tarda en leer esta frase completa.' },
];

// Busca coincidencias exactas para el día de hoy
function buscarPorFecha(mes, dia) {
  return efemerides.filter((e) => e.mes === mes && e.dia === dia);
}

// Si no hay ninguna para hoy, elige una fija según el día del año (no cambia todo el rato)
function elegirRespaldo(diaDelAnio) {
  const indice = diaDelAnio % efemerides.length;
  return efemerides[indice];
}

export function getEfemerideDeHoy(fecha = new Date()) {
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();

  const coincidencias = buscarPorFecha(mes, dia);
  if (coincidencias.length > 0) {
    // Si hay varias, se elige una fija usando el año actual como semilla
    const indice = fecha.getFullYear() % coincidencias.length;
    return { entrada: coincidencias[indice], esDeHoy: true, todas: coincidencias };
  }

  const inicioAnio = new Date(fecha.getFullYear(), 0, 0);
  const diaDelAnio = Math.floor((fecha - inicioAnio) / 86400000);
  return { entrada: elegirRespaldo(diaDelAnio), esDeHoy: false, todas: [] };
}