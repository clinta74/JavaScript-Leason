import React, { useState } from 'react';
import sumPersonsReduce from './objects';
import logo from './logo.svg';
import './App.css';
import { Person, persons } from "./persons"
import axios from "axios"
import { updatePropertyAssignment } from 'typescript';
// import { run } from "./Planets"

interface PersonItemProps {
  person: Person;
  index: number;

}
interface StarPlanet {
  name: string;
  url: string;
}
interface StarResult<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
interface PlanetNamesProps{
  name: string;
}

const PlanetNames: React.FC<PlanetNamesProps> = ({ name }) => {
  return (
    <div className='spacing-person'>
      <div>Name: {name} </div>
    </div>
  )
}


const PersonItem: React.FC<PersonItemProps> = ({ person, index }) => {

  return (
    <div className='spacing-person'>
      <div>Index: {index}</div>
      <div>Number: {person.id}</div>
      <div>Name: {person.firstName} {person.lastName}</div>
      <div>Email: {person.email}</div>
      <div>Ammount: {person.amount}</div>

      {/* {
        `${person.firstName} ${person.lastName} ${person.amount}${person.email}`
      } */}
    </div>
  )
}
const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [planets, setPlanets] = useState<StarPlanet[]>([]);
  const [next, setNext] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);


  React.useEffect(() => {
    const url = `https://swapi.dev/api/planets/?page=${page}`;
    setLoading(true)
    axios.get<StarResult<StarPlanet>>(url)
      .then((results) => {
        setPlanets(results.data.results)
        setNext(results.data.next !== null)
        setLoading(false)
      })


  }, [page])

  const onClickPrevious = () => {
    setPage(page - 1)
  };
  const onClickNext = () => {
    setPage(page + 1);

  };

  return (
    <React.Fragment>
      {
        loading &&
        <div>
          Loading...
        </div> ||
        planets.map(planet => <PlanetNames name={planet.name} key = {planet.url} />)

      }

      <div>
        <button onClick={onClickPrevious} disabled={loading || page === 1}> Previous </button>

        <button onClick={onClickNext} disabled={loading || !next} > Next </button>


      </div>
    </React.Fragment>
  );
}

// async function getStarPlanets(page: number) {


//   let planets: StarPlanet[] = []
//   {
//     try {
//       const response = await()
//       response.data.results;
//       url = response.data.next;

//     }
//     catch (error) {
//       console.log(error)

//     }

//   }
//   return planets;
// }

export default App;



