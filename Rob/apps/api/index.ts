import { Person, persons } from "./persons";
import express from 'express';
let myPersons = persons


const app = express()
app.use(express.json())
app.get('/persons', function (req, res) {
    const lastname = req.query.lastname?.toString()
    if (lastname) {
        res.send(myPersons.filter(person => person.lastName.toLowerCase().includes(lastname.toLowerCase())))
        
    }
    else {
    res.send(myPersons)
}});
app.get('/persons/:id', function (req, res) {
    const idx = myPersons.findIndex(person => person.id === req.params.id);
    console.log(idx);


    if (idx === -1) {
        res.sendStatus(404);
    }
    else {
        res.send(myPersons[idx]);
    }

});
app.post('/persons', function (req, res, next) {
    const person = {
        ...req.body,
        id: (myPersons.length + 1).toString(),
    }
    myPersons = [...myPersons, person];
    res.send(person);
});



app.listen(3000);