import React, { Component } from "react";

class Counter extends Component {
  // 47:00
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <h1 className={this.getBadgeClasses()}>Count: {this.formatCount()}</h1>
        <button className="counter__button">ADD</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "zero" : count;
  }
}

export default Counter;
