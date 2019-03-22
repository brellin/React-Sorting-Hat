import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

let questions = [
  {
    output: 'First',
    id: '11',
    answered: false,
    answers: {
      answerOne: 'Gryffindor',
      answerTwo: 'Hufflepuff',
      answerThree: 'Ravenclaw',
      answerFour: 'Slytherin'
    }
  },
  {
    output: 'Second',
    id: '12',
    answered: false,
    answers: {
      answerOne: 'Gryffindor',
      answerTwo: 'Hufflepuff',
      answerThree: 'Ravenclaw',
      answerFour: 'Slytherin'
    }
  },
  {
    output: 'Third',
    id: '13',
    answered: false,
    answers: {
      answerOne: 'Gryffindor',
      answerTwo: 'Hufflepuff',
      answerThree: 'Ravenclaw',
      answerFour: 'Slytherin'
    }
  },
  {
    output: 'Fourth',
    id: '14',
    answered: false,
    answers: {
      answerOne: 'Gryffindor',
      answerTwo: 'Hufflepuff',
      answerThree: 'Ravenclaw',
      answerFour: 'Slytherin'
    }
  },
  {
    output: 'Fifth',
    id: '15',
    answered: false,
    answers: {
      answerOne: 'Gryffindor',
      answerTwo: 'Hufflepuff',
      answerThree: 'Ravenclaw',
      answerFour: 'Slytherin'
    }
  },
  {
    output: 'Sixth',
    id: '16',
    answered: false,
    answers: {
      answerOne: 'Gryffindor',
      answerTwo: 'Hufflepuff',
      answerThree: 'Ravenclaw',
      answerFour: 'Slytherin'
    }
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      react: false,
      hat: false,
      '0': false,
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0
    }
  }

  initialize = () => {
    this.setState({
      hat: true,
      '0': true
    });
  }

  submitAnswer = (qId, aId) => {
    let qNum = qId.split('')[1].toString();
    this.setState({
      [qId]: aId,
      [qNum]: true
    });
  }

  render() {
    let houseNum = this.state['11'] + this.state['12'] + this.state['13'] + this.state['14'] + this.state['15'] + this.state['16'];

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
        <div className='toggle' style={{ display: this.state['16'] > 0 ? 'none' : 'flex' }}>
          {questions.map((q, i) =>
            <Questions hat={this.state.hat} question={q} key={i} bool={this.state[i]} submitAnswer={this.submitAnswer} />)}
        </div>

        <div
          style={{ display: this.state['16'] > 0 ? 'flex' : 'none' }}
          className='result'
        >
          <h1>You have been sorted into {houseNum}!</h1>
        </div>

        <footer style={{ display: this.state.react === true ? 'flex' : 'none' }}>
          Copyright [William Charles Umstead Junior]
        </footer>
      </div>
    );
  }
}

export default App;
