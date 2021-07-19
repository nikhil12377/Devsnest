import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  changeCounter() {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  }
  render() {
    let myStyle = {
      display: "inline-block",
    };
    return (
      <div className="container" style={myStyle}>
        <button
          onClick={() => {
            this.changeCounter();
          }}
        >
          {this.state.counter}
        </button>
      </div>
    );
  }
}
