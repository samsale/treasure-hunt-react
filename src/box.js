import React, { Component } from 'react';


class Box extends Component {
  constructor(props){
    super(props)
    this.state = {letter: "?",
                  configIndex: 0,
                  styles:{

                    width: '200px',
                    height: '200px',
                    // backgroundImage: `url(${config[this.state.configIndex].image})`,
                    backgroundSize: '200px 200px',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '175px',
                    userSelect: 'none',
                    display: 'flex',
                    fontSize: '75px',
                    color: 'black',
                    pointerEvents: 'auto',
                    userSelect: 'none',
                    }
        }
}

onClickFunction(e){
  this.updateBox(e)
    this.handleNumberChange(e)

}

updateBox(event){
  let styles = {...this.state.styles}
  let bombArray = this.props.bombArray
  if (this.props.idforHtmlElement === this.props.treasurePos) {
    this.setState({letter: String.fromCodePoint(0x1F4B0)})
    this.setState({currentGridPosition: this.props.idforHtmlElement})}
    else if(bombArray.includes(this.props.idforHtmlElement )){
      this.setState({letter: String.fromCodePoint(0x1F4A3)})
      this.setState({currentGridPosition: this.props.idforHtmlElement})}
  else{
    this.setState({letter: String.fromCodePoint(0x1F6AB)})
    this.setState({currentGridPosition: this.props.idforHtmlElement})
    styles.backgroundImage = 'key'
    this.setState({styles})
    }
    styles.pointerEvents = 'none'
    this.setState({styles})
  }

handleNumberChange(event,treasure,bomb){
  this.props.updateNumberState(this.props.idforHtmlElement)
}

  render(){
    return (
      <div style={this.state.styles} id={this.props.idforHtmlElement} onClick={this.onClickFunction.bind(this)} className={this.props.toTargetClass}>
      {this.state.letter}
      </div>
      )
    }
}
export default Box
