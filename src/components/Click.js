import React from 'react';
import { Button } from 'react-bootstrap';

class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initalClicks || 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} variant="primary">Click Me</Button>
        <p>You have clicked the button {this.state.count} times</p>
      </div>
    );
  }
}
export default Click;
