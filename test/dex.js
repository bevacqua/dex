'use strict';

var test = require('tape');
var dex = require('..');

var cases = {
  'dex.dec should deal with null': {
    fn: 'dec', inputs: [null], expectation: null
  },
  'dex.dec should deal with undefined': {
    fn: 'dec', inputs: [void 0], expectation: null
  },
  'dex.dec should deal with false': {
    fn: 'dec', inputs: [false], expectation: null
  },
  'dex.dec should deal with true': {
    fn: 'dec', inputs: [true], expectation: null
  },
  'dex.dec should deal with empty string': {
    fn: 'dec', inputs: [''], expectation: null
  },
  'dex.dec should deal with objects': {
    fn: 'dec', inputs: [{}], expectation: null
  },
  'dex.dec should deal with functions': {
    fn: 'dec', inputs: [function () {}], expectation: null
  },
  'dex.dec should parse short hexa into decimal': {
    fn: 'dec', inputs: ['1facdeff'], expectation: '531422975'
  },
  'dex.dec should parse long hexa into decimal': {
    fn: 'dec', inputs: ['1facdeff1facdeff1facdeff1facdeff1facdeff'], expectation: '180833867811270373882552195258209632827376197375'
  },
  'dex.hex should parse short decimal into hexa': {
    fn: 'hex', inputs: ['579224135'], expectation: '22864247'
  },
  'dex.hex should parse short decimal (as a number) into hexa': {
    fn: 'hex', inputs: [579224135], expectation: '22864247'
  },
  'dex.hex should parse long decimal into hexa': {
    fn: 'hex', inputs: ['180833867811270373882552195258209632827376197375'], expectation: '1facdeff1facdeff1facdeff1facdeff1facdeff'
  },
  'dex.hex should parse shortish decimal into hexa': {
    fn: 'hex', inputs: ['12345678909876543'], expectation: '2bdc545def293f'
  }
};

Object.keys(cases).forEach(function (tc) {
  test(tc, function (t) {
    var c = cases[tc];
    var result = dex[c.fn].apply(null, c.inputs);
    t.equal(result, c.expectation);
    t.end();
  });
});
