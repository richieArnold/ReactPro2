import React, { Component } from "react";

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aswin",
    };
  }

  handleClick = () => {
    this.setState({
      name: "Ravichandran",
    });
  };
  render() {
    return (
      <div>
        <h1>I am changing my name</h1>
        <h2>{this.state.name}</h2>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}

export default Show;
