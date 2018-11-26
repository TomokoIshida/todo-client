import React, { Component, Fragment } from "react";
/* import "./style.css"; */

class TodoListItem extends Component {
  render() {
    return (
      <Fragment>
        <div>{this.props.title}</div>
      </Fragment>
    );
  }
}

export default TodoListItem;
