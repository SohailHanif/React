import React from "react";
import Person from '../components/Person';
import People from '../components/People';

function PeoplePage() {
  return <div>
    <h1>People Page</h1>
    <Person/>
    <Person name="Jane Smith" age={25}/> 
    <People/>
  </div>
}

export default PeoplePage;
