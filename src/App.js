import React, { Component } from 'react';
import Article from './Article/Article';
import ValidationComponent from './ValidationComponent/ValidationComponent';

import './App.css';

class App extends Component {
  state = {text: ""}

  inputTextHandler = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputTextHandler} value={this.state.text} />
        <Article number={this.state.text.length} />
        <ValidationComponent textLength={this.state.text.length} />
      </div>
    );
  }
}

export default App;
