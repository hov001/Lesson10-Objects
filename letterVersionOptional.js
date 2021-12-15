'use strict';
/*Lowercase and Uppercase
Write a function that creates an object with each (key, value) pair being the (lower case, upper case)
versions of a letter, respectively.*/

function mapping(arr) {
  let obj = {};
  for (let key of arr) {
    obj[key] = key.toUpperCase();
  }
  return obj;
}
console.log(mapping(['p', 's']));
