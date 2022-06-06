// index.js

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObject = require("./eqObject");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const head   = require('./head');
const letterPositions = require("./letterPositions");
const map = require("./map");
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObject: eqObject,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  head:   head,
  letterPositions: letterPositions,
  map: map,
  tail:   tail,
  middle: middle,
  takeUntil: takeUntil,
  without: without
};