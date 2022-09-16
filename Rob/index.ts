import sum, {sumAmount, sumPersonLoop, medianPersonsAmount, averagePersonAmount} from "./objects";
import {persons} from "./persons";
import sumBy from "lodash/sumBy";




// Exercise 1
// Import the sumPersonsReduce function as the default export. Export the other function as named exports. Create a function called run that 
// calls all of the exported functions and console logs the results from each.

//const sum = sumPersonsReduce;

function run(){
    const x = sumBy(persons, 'amount');
    const element = document.getElementById("root");
    if (element != null) element.innerHTML = x.toString();
};

run();

// Exercise 2 
// Change the imported sumPersonsReduce function to just be sum.


// Exercise 3
// Find a library to take the place of the sumPersonsReduce and import it to use replace the imported sumPersonReduce.

sumBy(persons)


// Exercise 4
// Convert the index.js, persons.js, object.js and sorting.js to typescript files (.ts) Add the typescipt compiler as
// a development dependancy. Using typescript compiler out put new JS files to a folder called dist and then with node
// run the index.js file.
