import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Status extends Component {

createTilePostions(){
  if(this.props.tile === null){
    return ""
  }else{
    return this.props.tile + 1
  }
}

resetBoard(){
  window.location.reload();
}

render(){

let tile = this.createTilePostions()

var resetCss = {
  paddingTop: "120px",
  
};


    return (
      <div className="stats">
        <h1>Treasure Hunt </h1><p></p>
        <br></br>
        <br></br>
        <h1>Guesses Remaining <Badge color="secondary">{this.props.guess}</Badge></h1>
      <br></br>
      <br></br>
        <h1>Last Tile Guessed <Badge color="secondary">{tile}</Badge></h1>

      <div style={resetCss}>
      <Button color="danger" onClick={this.resetBoard}>Reset Board</Button>{' '}
      </div>
      </div>

      )
    }
}
export default Status
