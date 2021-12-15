'use strict';
/*Write object.keys, object.values and object.entries methods using for..in*/

let myObject = {
  name: 'Gayane',
  lastName: 'Babayan',
  age: 26,
};

function getKeys(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}
console.log(getKeys(myObject));

function getValues(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

console.log(getValues(myObject));

function getEntries(obj) {
  let arr = [];
  let j = 0;
  for (let key in obj) {
    arr.push(key, obj[key]);
  }
  return arr;
}

console.log(getEntries(myObject));
