import React, { Component, Fragment } from "react";
import TodoListItem from "./TodoListItem";
import axios from "axios";
/* import "./style.css"; */

class TodoList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    axios.get("https://todo-list-tomoko.herokuapp.com/").then(response => {
      this.setState({ list: response.data });
    });
  }

  render() {
    const formattedList = this.state.list.map(element => (
      <TodoListItem key={element._id} title={element.title} />
    ));

    // const formattedList = this.state.list.map((element, i) => (
    //   <TodoListItem key={i} title={element.title} />
    // ));

    // const formattedList = [];
    // for (let i = 0; i < this.state.list.length; i++) {
    //   formattedList.push(<TodoListItem key={i} title={element.title} />);
    // }

    return (
      <Fragment>
        <div>{formattedList}</div>
      </Fragment>
    );
  }
}

export default TodoList;
