let words:string[] = [
    
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'TELEFONO',
    'MARRANO',
    'MOUSE',
    'TELEVISOR',
    'PERSONA',
    'LAPTOP',
    'TECLADO',
    'MONITOR',
    'MAQUINA',
    'ABUELO',
    'MANTARAYA',
    'TIBURON',
    'ELEFANTE',
    'AUTOMOVIL',
    'CARTERA',
    'PIRAMIDE',
    'AVION',
    'VENTILADOR',
    'PULSERA',
    'CARGADOR'

];


export function getRandomWord() {

  const randomIndex = Math.floor( Math.random() * words.length );

    return words [randomIndex];
}