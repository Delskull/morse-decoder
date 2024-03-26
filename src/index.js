const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let num = expr;
    let result = [];
    let dots = [];
    let result2 = []
    const slice = 5
    let double = num.split('');
    for (let i = 0; i < double.length; i += 2) {
      if (double[i+1] !== undefined ) {
        result.push(double[i] + double[i+1]);
      }
      if ((double[i])  === '*' ) {
        let firstIndex = double.indexOf('*')
        let lastIndex = double.lastIndexOf('*')
        // double.splice(firstIndex, lastIndex - firstIndex + 1);
        result.push('**********');
      }

    }
    // console.log(result)
    for (let i = 0; i < result.length; i++) {
      if (result[i] === '**') {
        result.splice(i, 1);
      }

    }

    for (let i = 0; i < result.length; i += slice) {
      let morse = '';

      let subarray = result.slice(i, i + slice);
      for (let j = 0; j < subarray.length; j++) {
        if (subarray[j] === '11') {
          morse += '-';
        }if (subarray[j] === '10') {
          morse += '.';
        }
        if (subarray[j] === '**********') {
          morse += '';
        }
      }
      result2.push(morse);
    }

    console.log(result2)

    let decoded = '';

  for (let i = 0; i < result2.length; i++) {
    if (result2[i] !== '') {
      for (let key in MORSE_TABLE) {
        if (key === result2[i]) {
          decoded += MORSE_TABLE[key];
        }
      }
    }
    if (result2[i] === '') {
      decoded += ' ';
    }
  }
  return decoded
}

module.exports = {
    decode
}