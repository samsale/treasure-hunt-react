import React, { Component } from 'react';
import Board from './board.js'
import Status from './status.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {board: 25,
                  treasurePostion: '',
  }
}

  render() {
    console.log("props" + this.props);


    return (
      <div className="app">
      
      <Board boardSize={this.state.board}/>


    </div>
    );
  }
}

export default App;
