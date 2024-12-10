// Tabla de conversión Morse
const morseTable = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
    'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '/': '-..-.', ' ': '/'
  };
  
  const textTable = Object.fromEntries(Object.entries(morseTable).map(([key, value]) => [value, key]));
  
  function translateToMorse() {
    const input = document.getElementById('inputText').value.toUpperCase();
    let output = '';
    const errors = [];
  
    for (let char of input) {
      if (morseTable[char]) {
        output += morseTable[char] + ' ';
      } else if (char === ' ') {
        output += '/ ';
      } else {
        errors.push(char);
      }
    }
  
    if (errors.length) {
      output += '\n\n[Advertencia: Los siguientes caracteres no fueron reconocidos: ${errors.join(', ')}]';
    }
  
    document.getElementById('output').innerText = output.trim();
  }
  
  function translateToText() {
    const input = document.getElementById('inputText').value.trim();
    let output = '';
    const errors = [];
    const words = input.split('/');
  
    for (let word of words) {
      const letters = word.trim().split(' ');
      for (let letter of letters) {
        if (textTable[letter]) {
          output += textTable[letter];
        } else if (letter) {
          errors.push(letter);
        }
      }
      output += ' ';
    }
  
    if (errors.length) {
      output += '\n\n[Advertencia: Los siguientes caracteres no fueron reconocidos: ${errors.join(', ')}]';
    }
  
    document.getElementById('output').innerText = output.trim();
    }