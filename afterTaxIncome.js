'use strict';
/*The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
object that shows how much a person needs to spend on needs, wants, and savings.*/

function fiftyThirtyThenty(asi) {
  let needsVal = (asi / 100) * 50;
  let wantsVal = (asi / 100) * 30;
  let savingsVal = (asi / 100) * 20;

  let obj = {
    need: needsVal,
    wants: wantsVal,
    savings: savingsVal,
  };
  return obj;
}
console.log(fiftyThirtyThenty(50000));
