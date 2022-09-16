import { persons } from './persons.js';
import _ from 'lodash'
//console.log(persons);
// let myArray = ['Jim', 'Bob', 'Steve'];
// const myArray2 = ['Dave'];
// const myArray3 = ['Dave', ...myArray];
// //console.log(myArray3);
// console.log(myArray3);



// {
//     id: '10',
//     firstName: 'Kurt',
//     lastName: 'Wood',
//     email: 'Kurt_Wood3176@naiker.biz',
//     amount: 666.22
// }

// Exercise 1
// Sort the persons list by last name
//     const persons1 = persons.sort((a, b) => {
//        if (a.lastName < b.lastName){
//         return -1;
//     }
//         if (a.lastName > b.lastName){
//             return 1;
//         }
//     return 0;
//     });
//   persons.sort((a, b) => a.lastName.localeCompare(b.lastName));
  
 const personsnew = _.sortBy(persons , person => person.lastName);
 console.log(personsnew);
// Exercise 2
// Sort the persons list by last name and a secondary sort by first name.
// const persons2 = persons.sort((a, b) => {
//     if (a.lastName < b.lastName){
//     return -1;
// }
//     if (a.lastName > b.lastName){
//         return 1;
//     }
//     if (a.firstName < b.firstName){
//         return -1;
//     }
//     if (a.firstName > b.firstName){
//         return 1;
//     }

// return 0;
// });
// console.log(persons2)

// Exercise 3
// Using push add a new person to the list.
//     const persons3 = 
//     persons.push(
// {   
//    id: '11',
//     firstName: 'Robert',
//     lastName: 'Andrews',
//     email: 'funnymonkie1993@gmail.com',
//     amount: '200.13'
// },
//    )
// console.log(persons);

// Exercise 4
// Using concat add a new person to the end list without changing the orginal list.

// const newNames = (    
//    {
//    id: '11',
//    firstName: 'Clint',
//    lastName: 'Andrews',
//    email: 'candrews@pollyspeople.net',
//    amount: 500.00,
    
// });
// const persons4 = persons.concat(newNames);
// console.log(persons4);

// Exercise 5
// Using array spread add a new person to the end list without changing the orginal list.

// const persons5 = [...persons, newNames];
// console.log(persons5);

// Exercise 6
// Using filter create a new list without any persons with less than 500 amount.

// const persons6 = persons.filter(person => person.amount < 500 && person.amount > 100);
// console.log(persons6);
    


// Exercise 7
// Using findIndex and array spread update the amount of person with id 6 to 345 creating a new list that keeps the same order of items in the list.

// const idx = persons.findIndex(person => person.id === '6');
// const persons7 = [...persons.slice(0, idx),
//     {  
//         ...persons[idx], 
//         amount : 345
//     }
//      , persons.slice(idx +1)]
// console.log(persons7)


// Exercise 8
// Using map create a new array where first and last name are combined into one string like last, first name.
// const persons8 = persons.map(person =>({
//     name: person.lastName +', ' + person.firstName
// }));
// console.log(persons8)

