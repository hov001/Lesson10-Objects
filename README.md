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
