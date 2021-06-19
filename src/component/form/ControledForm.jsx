import React, { Component } from 'react';
import Form from './Form';

class ControledForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  changeSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  changeHandlerOn = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Form 
          values={this.state}
          onSubmit={this.changeSubmit}
          onchange={this.changeHandlerOn}
        />
      </div>
    )
  }
}

export default ControledForm;
