import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "#FFF"
    };
  }

  changeRowColor = (event) => {
    // event.target.style.backgroundColor = this.state.color;
    console.log("clicked");
    event.target.style.backgroundColor = this.state.color;
  }

  genRow = (vals) => (
    vals.map(val => <Cell color={val} changeColor={this.changeRowColor.bind(this)} />)
  )


  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  changeColor(color){
    console.log(color);
    this.setState({
      color: color
    }, function(){
      console.log("Color set: ", this.state.color);
    });
  }


  render() {
    return (
      <div id="app">
        <ColorSelector newColor={this.changeColor.bind(this)} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
