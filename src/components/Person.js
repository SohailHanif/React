import React from 'react';
import { Alert } from 'react-bootstrap';

class Person extends React.Component {
  static defaultProps = {
    name: 'John Smith',
    age: 30
  };
  render() {
    return (
      <div>
       
        <Alert variant="primary">
        <p>My name is {this.props.name}</p>
        <p>My age is {this.props.age}</p>
        </Alert>
      </div>
    );
  }
}

export default Person