import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Person, persons } from "./persons"
const PersonItem: React.FC<Person> = (person) => {
  return (
    <li>
      {
        `${person.firstName} ${person.lastName}`
      }
    </li>
  )
}
const App: React.FC = () => {
  return (
    <ul>
      {
        persons.map(person => {
          return (
            <PersonItem person={person} />
          )
        })
      }
    </ul>
  );
}

export default App;
