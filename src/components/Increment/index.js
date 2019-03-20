import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    const counter = JSON.parse(localStorage.getItem("counter")) || 0;
    this.setState(() => ({ counter }));
  }

  handleClick = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleSave = () => {
    localStorage.setItem("counter", this.state.counter);
  };

  handleReset = () => {
    this.setState(
      () => ({
        counter: 0
      }),
      localStorage.clear()
    );
    // localStorage.removeItem("counter");
  };

  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Increment;
