import React from 'react';
import timer from './clock.svg';
import './App.css';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conta: 0
    }; 

  this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
  this.reset = this.reset.bind(this)
  }

  increment() {
    this.setState(state =>({
      conta: state.conta + 1
    }))
  }

  decrement() {
    this.setState(state =>({
      conta: state.conta - 1
    }))
  }

  reset() {
    this.setState(state => ({
      conta: 0
    }))
  }
  render() {
    return(
      <div>
        <button className="increment" onClick={this.increment}>+1</button>
        <button className="decrement" onClick={this.decrement}>-1</button>
        <button className="reset" onClick={this.reset}>Zerar</button>
    <h1>Contador:{this.state.conta}</h1>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={timer} className="App-logo" alt="contador" />
        <Contador />
        <p className="texto-atribuicao">
          Icon made by Office from 
        </p>
        <a
          className="App-link"
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik
        </a>        
      </header>
    </div>
  );
}

export default App;
