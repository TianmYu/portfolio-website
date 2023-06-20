import React, { Component } from "react";

class Backdrop extends Component {

  render(){
    return(
      <div className="backdrop" onClick={this.props.close}/>
    )
  }
}

export default Backdrop