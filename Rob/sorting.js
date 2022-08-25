import { persons } from './persons.js';

console.log(persons);

// {
//     id: '10',
//     firstName: 'Kurt',
//     lastName: 'Wood',
//     email: 'Kurt_Wood3176@naiker.biz',
//     amount: 666.22
// }

// Exercise 1
// Sort the persons list by last name

  //persons.sort((a, b) => a.lastName.localeCompare(b.lastName));
  //console.log(persons);

// Exercise 2
// Sort the persons list by last name and a secondary sort by first name.

    //persons.sort((a, b) => a.lastName.localeCompare(b.lastName));
    //persons.sort((a,b) => a.firstName.localeCompare(b.firstName));
    //console.log(persons);

// Exercise 3
// Using push add a new person to the list.
    //const persons = 
    //persons.push(
//{   
   // id: '11',
    //firstName: 'Robert',
    //lastName: 'Andrews',
    //email: 'funnymonkie1993@gmail.com',
    //amount: '200.13'
//}
   // )
//console.log(persons);

// Exercise 4
// Using concat add a new person to the end list without changing the orginal list.

//const newNames = (    
   // {
   // id: '11',
   // firstName: 'Clint',
   // lastName: 'Andrews',
   // email: 'candrews@pollyspeople.net',
   //amount: '500.00',
    
//});
//persons.concat(persons,newNames);
//console.log(persons);

// Exercise 5
// Using array spread add a new person to the end list without changing the orginal list.


// Exercise 6
// Using filter create a new list without any persons with less than 500 amount.


// Exercise 7
// Using findIndex and array spread update the amount of person with id 6 to 345 creating a new list that keeps the same order of items in the list.