'use strict';
/*Create a one-liner function
Create a function that takes an object as an argument and returns a string with facts about the city. The city
facts will need to be extracted from the object's three properties:  name, population, continent

The string should have the following format: X has a population of Y and is situated in Z (where X is the city
name, Y is the population and Z is the continent the city is situated in).*/

function cityFacts(obj) {
  let { name: X, population: Y, continent: Z } = obj;
  return `${X} has a population of ${Y} and is situated in ${Z}`;
}
console.log(
  cityFacts({ name: 'Paris', population: '2,140,526', continent: 'Europe' })
);
console.log(
  cityFacts({ name: 'Tokyo', population: '13,929,286', continent: 'Asia' })
);
