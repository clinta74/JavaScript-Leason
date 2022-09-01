import { persons } from './persons.js';

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

// Exercise 1
// Create a new object called exercise1 that with all of the values of obj1 and obj2 using 
// Object.assign and console log the result.

// Exercise 2
// Create a new object called exercise2 that with all of the values of obj1, obj2, and obj3 
// using Object.assign and console log the result.

// Exercise 3
// Create a new object called exercise3 that with all of the values of obj1, obj2, and obj3 
// using Object.assign and console log the result.

// Exercise 4 - 6
// Repeat exercise 1 to 3 using object spread (...) console log the results.

// Exercise 7
// Create a function call sumAmount that takes a number and person object and returns the sum of
// number and the person amount property.

// Exercise 8
// Using the sumAmount function and the Array.reduce method write a function called sumPersonsReduce
// that takes the array of persons and returns the sum of all the amounts. Save the results to a variable
// and console log the variable.

// Exercise 9
// Not using the sumAmount function write a function called sumPersonsLoop using a for loop that uses
// a variable out of scope to accumulate the total ande returns it when the loop is complete.

// Exercise 10
// Using the sumPersonsReduce function write a function called medianMeanPersonsAmountoop that returns
// the median and the mean of all of the amounts.

// Exercise 11
// Create a new person object call exercise11. Set the first and last name to some value. Add a function to
// the object called fullName that returns the last, first name of that object. Call the method and log the
// result