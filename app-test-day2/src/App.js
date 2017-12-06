import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      anmials: []
    }
    this.work = this.work.bind(this);
  }
   work(){
    this.setState ({
      animals: ['tiger ', 'zebra ', 'liger']
    })
    console.log('state', this.state.animals)
    
  }
   
  render() {
   
    console.log('state', this.state.animals)
    return (
      <div className="App">
        <button onClick={this.work}>click</button>
        <div>{this.state.animals}</div>
        
      </div>
    );
  }
}

export default App;
