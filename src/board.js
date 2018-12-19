import React, { Component } from 'react';
import Box from './box.js'
import Status from './status.js'



class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
                  gameComplete: false,
                  numberOfDiv: null,
                  guessesRemaining: 10,
                  bombArray: null,
                  treasureLocation: ''
  }
}

//onclick function
updateNumberState(number){
  let {guessesRemaining} = this.state
  this.setState({numberOfDiv: number})
  if (guessesRemaining !== 0){
  this.setState({guessesRemaining: guessesRemaining - 1})}
  this.compareDivAndTreasure(this.state.treasureLocation, number, this.state.bombArray)
}

compareDivAndTreasure(treasure, guess, bombArray){
  console.log(treasure, guess);
  let tileGuess = guess +1
  if(this.state.gameComplete === false){
  if(treasure === guess ){
    this.setState({gameComplete: true})
    setTimeout(function() { alert("Treasure found at tile " + tileGuess)}, 10)
    this.resetBoard()
  }else if(bombArray.includes(guess)){
    this.setState({gameComplete: true})
    setTimeout(function() { alert("Bomb hit at tile " + tileGuess)}, 10)
    this.resetBoard()
    }
  }
}

counterValidation(counter){
  if(counter === 0 && this.state.gameComplete === false){
    alert("Run out of tries!")
    this.resetBoard()
  }
}

resetBoard(){
  window.location.reload();
}

createBombandTreasureLocations(){
  let numberOfItems = 3 + 1
  let array = []
  while (numberOfItems  > 0){
    let randomNumber = Math.floor((Math.random() * this.props.boardSize) + 0)
    if (array.indexOf(randomNumber) === -1){
      array.push(randomNumber)
      numberOfItems --
  }
}
  let treasurePos = array.pop(0)
  let bombPos = array
  this.setState({treasureLocation: treasurePos, bombArray: bombPos})
}

componentDidMount() {
      this.createBombandTreasureLocations();
  }

createBoxes(){

  let boxArray = []
  let i = 0
  while(i < this.props.boardSize){
    let classTitle = `tile${i+1}`
    boxArray.push(<Box idforHtmlElement={i} key={i} toTargetClass={classTitle} treasurePos={this.state.treasureLocation}
                  bp={this.state.bombPostion}
                  updateNumberState={this.updateNumberState.bind(this)}
                  bombArray={this.state.bombArray}/>)
    i++;
  }
return boxArray
}

render(){


this.counterValidation(this.state.guessesRemaining)



    return (
      <div className='game'>
        <div className="stats">
          <Status guess={this.state.guessesRemaining} tile={this.state.numberOfDiv} gameStatus={this.state.gameComplete}/>
          </div>
        <div className='gameBoard'>
          {this.createBoxes()}

          </div>
      </div>

      )
    }

}
export default Board
