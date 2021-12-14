## TASK

```
 let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
let name, country, job;
const { name, country, job } = person;
console.log(name);
```

###### for watching task solution click the [link](https://github.com/Gayane25/Lesson10-Objects/blob/master/1Task.js)

- Get name, country and jod using destructuring

```
let person = { name: "Sarah", country: "Armenia", job: "Developer" };
console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"
```

###### for watching task solution click the [link](https://github.com/Gayane25/Lesson10-Objects/blob/master/getNameCountryJob.js)

- Concatenate the two arrays

```
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

###### for watching task solution click the [link](https://github.com/Gayane25/Lesson10-Objects/blob/master/ConcatArr.js)

- How to take arguments in sum function?

```
function sum() {
return args.reduce((sum, current) => {
return sum + current;
});
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

###### for watching task solution click the [link](https://github.com/Gayane25/Lesson10-Objects/blob/master/takeArguments.js)

- How to pass arguments in sum function?

```
function sum(x, y, z) {
return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

###### for watching task solution click the [link](https://github.com/Gayane25/Lesson10-Objects/blob/master/passArguments.js)

- Swapping Values using the Destructuring Assignment

```
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```

###### for watching task solution click the [link](https://github.com/Gayane25/Lesson10-Objects/blob/master/swapValues.js)

- Upvotes and downvotes

  - Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

    ```
     getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
    ```

###### for watching task solution click the [link](https://github.com/Gayane25/Lesson10-Objects/blob/master/getVoteCount.js)

- 50, 30, 20
  - The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
  - Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.
  ```
  fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
  fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
  fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
  ```

###### for watching task solution click the [link](https://github.com/Gayane25/Lesson10-Objects/blob/master/afterTaxIncome.js)
