
//import { persons } from './persons.js';

import { Person, persons } from "./persons"

const obj1 = {
    a: "obj 1 prop a",
    b: "obj 1 prop b",
}

const obj2 = {
    c: "obj 2 prop c",
    d: "obj 2 prop d",
}

const obj3 = {
    a: "obj 3 prop a",
    c: "obj 3 prop c",
}

// const obj4 = {
//     e: {... obj1}
// }


// obj1.a = "test"
// console.log(obj4);
// obj4.e.a = "test 2"
// console.log(obj1);
// console.log(obj4);


// Exercise 1
// Create a new object called exercise1 that with all of the values of obj1 and obj2 using 
// Object.assign and console log the result.

// const exercise1 =  Object.assign({}, obj1 , obj2);
// console.log(exercise1);
// console.log(obj1);
// console.log(obj2);


// Exercise 2
// Create a new object called exercise2 that with all of the values of obj1, and obj3 
// using Object.assign and console log the result.

// const exercise2 = Object.assign({} , obj3  , obj1);
// console.log(exercise2);
// console.log(obj1);
// console.log(obj3);

// Exercise 3
// Create a new object called exercise3 that with all of the values of obj1, obj2, and obj3 
// using Object.assign and console log the result.

// const exercise3 = Object.assign(obj1  , obj2 , obj3);
// console.log(exercise3);
// console.log(obj1);
// console.log(obj3);
// console.log(obj2);


// Exercise 4 - 6
// Repeat exercise 1 to 3 using object spread (...) console log the results.

// const exercise4 =  {... obj1 ,... obj2 ,e: "someString"};
// console.log(exercise4);
// console.log(obj1);
// console.log(obj2);

// const exercise5 =  {... obj1 ,... obj3};
// console.log(exercise5);
// console.log(obj1);
// console.log(obj3);

// const exercise6 =  {... obj1 , e:{... obj2} ,...obj3};
// obj2.c = "test";
// obj3.a = "test";
// console.log(exercise6);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// Exercise 7
// Create a function called sumAmount that takes a number and person object and returns the sum of
// number and the person amount property.

export function sumAmount(totalAmount : number , person : Person) {
    if(typeof person.amount === "number")
    return totalAmount + person.amount
    else return totalAmount
};

// const result = sumAmount(5 , persons[0]);
// console.log(result)


// Exercise 8 https://www.w3schools.com/js/js_array_iteration.asp
// Using the sumAmount function and the Array.reduce method write a function called sumPersonsReduce
// that takes the array of persons and returns the sum of all the amounts. Save the results to a variable
// and console log the variable.

export default function sumPersonsReduce(persons1 : Person[]) {
    let sum = persons1.reduce(sumAmount, 0)
    return sum
};
// const result = sumPersonsReduce(persons);
// console.log(result);

// Exercise 9
// Not using the sumAmount function write a function called sumPersonsLoop using a for loop that uses
// a variable out of scope to accumulate the total and returns it when the loop is complete.

export function sumPersonLoop(persons2 : Person[]) {
    let sum = 0;
    for (let i = 0; i < persons2.length; i++) {
        sum += persons2[i].amount;
    }
    return sum
};
// const total = sumPersonLoop(persons);
// console.log(total);

// Exercise 10
// Using the sumPersonsReduce function write a function called medianMeanPersonsAmount that returns
// the median and the mean of all of the amounts.

export function averagePersonAmount(persons3 : Person[]) {
    return sumPersonsReduce(persons3) / persons3.length;
};
// const average = averagePersonAmount(persons);
// console.log(average);

export function medianPersonsAmount(persons4 : Array<Person>) {
    const persons5 = persons4.sort((a, b) => {
        if (a.amount < b.amount) {
            return -1;
        }
        if (a.amount > b.amount) {
            return 1;
        }
        return 0;
    });
    console.log(persons5)
    let median = persons5.length / 2 - 1;
    if (persons5.length % 2 === 0) {
        return persons5[median].amount
    }
    else {
        return (persons5[Math.ceil(median)].amount + persons5[Math.floor(median)].amount) / 2;
    }

};
// persons.push(
//     {
//         id: '11',
//         firstName: 'Robert',
//         lastName: 'Andrews',
//         email: 'funnymonkie1993@gmail.com',
//         amount: 200.13
//     }
// )

// const median = medianPersonsAmount(persons);
// console.log(median);


// Exercise 11 https://www.w3schools.com/js/js_objects.asp
// Create a new person object call exercise11. Set the first and last name to some value. Add a function to
// the object called fullName that returns the last, first name of that object. Call the method and log the
// result

const exercise11 =
{
    id: '11',
    firstName: 'Robert',
    lastName: 'Andrews',
    email: 'funnymonkie1993@gmail.com',
    amount: 200.13,
    fullName: function () {
        return (this.lastName + ", " + this.firstName)
    }
}

// console.log(exercise11.fullName())


// class exercise12 {


// }
// const myobject = new exercise12()