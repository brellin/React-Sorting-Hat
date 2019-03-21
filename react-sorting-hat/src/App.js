import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

let questions = [
  {
    output: 'You walk along a river and see something. Do you do something?',
    id: 1,
    answered: false
  },
  {
    output: 'Second',
    id: 2,
    answered: false
  },
  {
    output: 'Third',
    id: 3,
    answered: false
  },
  {
    output: 'Fourth',
    id: 4,
    answered: false
  },
  {
    output: 'Fifth',
    id: 5,
    answered: false
  },
  {
    output: 'Sixth',
    id: 6,
    answered: false
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      react: false,
      hat: false,
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false,
      '6': false
    }
  }

  initialize = e => {
    this.setState({
      hat: true,
      '1': true
    });
  }

  render() {
    return (
      <div className={`${this.state.react === true ? 'container' : ''}`}>
        <div
          className="App"
          style={{ display: this.state.react === true ? 'none' : 'block' }}
          onClick={() => this.setState({ react: true })}
        >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Click to Show Sorter</h1>
          </header>
        </div>
        <Header
          clicked={this.state.react}
          initialize={this.initialize}
          hat={this.state.hat}
        />

        <div
          className='questions'
          style={{ display: this.state.hat === true ? 'flex' : 'none' }}
        >
          {questions.map((q, i) =>
            <Questions hat={this.state.hat} question={q} key={i} bool={this.state[i + 1]} />)}
        </div>
      </div>
    );
  }
}

export default App;
