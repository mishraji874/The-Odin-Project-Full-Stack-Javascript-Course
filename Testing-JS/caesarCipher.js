const shift = (ch, key) => {
  if (!(ch >= 'A' && ch <= 'Z') && !(ch >= 'a' && ch <= 'z')) {
    return ch;
  }

  const base = ch >= 'A' && ch <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  
  const shiftAmount = ((key % 26) + 26) % 26;

  const offset = (ch.charCodeAt(0) - base + shiftAmount) % 26

  return String.fromCharCode(base + offset);
};

const caesarCipher = (txt, key) => {
  const letters = txt.split('');

  return letters.map((letter) => shift(letter, key)).join('');
};

export default caesarCipher;