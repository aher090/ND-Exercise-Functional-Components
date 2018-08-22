import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameView from './GameView';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
  	numQuestions: numQuestions,
  	numCorrect: numCorrect,
    value1: value1,
	value2: value2,
	value3: value3,
	proposedAnswer: proposedAnswer
  }
  
  evaluateAnswer = (answer) => {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const corrAns = value1+value2+value3;
    return (
      (corrAns === proposedAnswer && answer === true) ||
      (corrAns !== proposedAnswer && answer === false)
    );
  }
  updateNumQuestions = () => {    
    this.setState((currentState) => ({
		numQuestions: currentState.numQuestions+1
    }))
  }
  updateNumCorrect = () => {    
    this.setState((currentState) => ({
		numCorrect: currentState.numCorrect+1
    }))
  }
  updateAllValues = (correctAnswer) => {
  	if(this.evaluateAnswer(correctAnswer)){
    	this.updateNumCorrect();
    }
    this.updateNumQuestions();
    const newValues = this.makeNewQuestion();
    this.setState({
        value1: newValues[0],
		value2: newValues[1],
		value3: newValues[2],
		proposedAnswer: newValues[3]
    })    
  }
  makeNewQuestion = () => {  	
    const value1 = Math.floor(Math.random() * 100);
	const value2 = Math.floor(Math.random() * 100);
	const value3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.updateAllValues(true)}>True</button>
          <button onClick={()=>this.updateAllValues(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
