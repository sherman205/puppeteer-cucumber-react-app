import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      result: ''
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name && this.state.email) {
      this.setState({ result: 'Form submitted!' });
    }
    else {
      this.setState({ result: 'Please fill out the fields' });
    }
  }

  render() {
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label id="nameInput">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameInput" placeholder="Name" />
          </div>
          <div className="form-group">
            <label id="emailInput">Email</label>
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailInput" placeholder="email@domain.com" />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
        <div className="result">
          {this.state.result}
        </div>
      </div>
    )
  }
}

export default App;
