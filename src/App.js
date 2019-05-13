import React, {Component} from 'react';
import './App.css';
import Name from './Name';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Mykenzie',
      color: 'Purple',
      inputText: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({name: e.target.value});
  }

  render() {
    console.log(this.state.inputText);
    return (
      <div>
        <h1 className="name">{this.state.name}</h1>
        <h1>{this.state.color}</h1>
        <input onChange={this.handleInput} />
        {/* <button onClick={() => this.setState({name: this.state.inputText})}>Change Name</button> */}
        <Name />
        <Name />
        <Name />
        <Name />
        <Name />
      </div>
    )
  }
}

export default App;