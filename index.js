'use strict';

function add (x, y, base) {
  var z = [];
  var number = Math.max(x.length, y.length);
  var carry = 0;
  var i = 0;
  while (i < number || carry) {
    var xi = i < x.length ? x[i] : 0;
    var yi = i < y.length ? y[i] : 0;
    var zi = carry + xi + yi;
    z.push(zi % base);
    carry = Math.floor(zi / base);
    i++;
  }
  return z;
}

function times (number, x, base) {
  if (number < 0) {
    return null;
  }
  if (number === 0) {
    return [];
  }

  var result = [];
  var power = x;
  while (true) {
    if (number & 1) {
      result = add(result, power, base);
    }
    number = number >> 1;
    if (number === 0) {
      break;
    }
    power = add(power, power, base);
  }

  return result;
}

function parse (text, base) {
  return text.split('').reverse().map(digit).filter(numbers);

  function digit (digit) {
    return parseInt(digit, base);
  }
  function numbers (digit) {
    return typeof digit === 'number' && isNaN(digit) === false;
  }
}

function rebase (text, from, to) {
  var power = [1];
  var digits = parse(text, from);
  if (digits === null) {
    return null;
  }
  return digits.reduce(addition, []).reverse().map(based).join('');

  function addition (buffer, digit) {
    if (digit) {
      buffer = add(buffer, times(digit, power, to), to);
    }
    power = times(from, power, to);
    return buffer;
  }
  function based (digit) {
    return digit.toString(to);
  }
}

function dex (input, from, to) {
  var t = typeof input;
  if (t !== 'string' && t !== 'number' || input === '') {
    return null;
  }
  return rebase(String(input).toLowerCase(), from, to);
}

function hex (input) {
  return dex(input, 10, 16);
}

function dec (input) {
  return dex(input, 16, 10);
}

module.exports = dex;

dex.hex = hex;
dex.dec = dec;
