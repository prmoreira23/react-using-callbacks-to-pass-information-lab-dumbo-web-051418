import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  render() {
    return (
      <div className="cell" onClick={this.props.changeColor} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
