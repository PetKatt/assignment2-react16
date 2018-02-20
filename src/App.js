import React, { Component } from 'react';
import Article from './Article/Article';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

import "./App.css";

class App extends Component {
  state = {text: ""}

  inputTextHandler = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  deleteHandler = (index) => {
    const deleter = this.state.text.split("");
    let deleter2 = deleter.splice(index, 1);
    const newText = deleter2.join("");
    this.setState({text: newText});
  }

  render() {
    const textInput = this.state.text.split("");
    const blocks = (
      <div>
        {textInput.map((l,i) => {
          return <CharComponent click={() => this.deleteHandler(i)} letter={l} key={i}> This is letter: </CharComponent>
        })}
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={this.inputTextHandler} value={this.state.text} />
        <Article number={this.state.text.length} />
        <ValidationComponent textLength={this.state.text.length} />
        {blocks}
      </div>
    );
  }
}

export default App;
