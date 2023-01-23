import React from 'react';
import Person from './Person.js';

class People extends React.Component {
  render() {
    return (
      <div>
        <Person />
        <Person name="Drake" />
        <Person name="Alice" age={23} />
        <Person name="Jason" age={17} />
        <Person name="Kevin" age={19} />
      </div>
    )
  }
}

export default People