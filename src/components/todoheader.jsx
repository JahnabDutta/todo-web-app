import React, { Component, useState } from "react";
import Todobox from "./todobox";

var todoid = 0;
class Todo extends React.Component {
  state = {
    todos: [],
    tempTodo: {},
  };

  onInputChange = (event) => {
    this.state.tempTodo[event.target.name] = event.target.value;
  };

  handleDelete = (todoId) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos: newTodos });
  };

  handleAddTodo = () => {
    const todo = {
      id: todoid,
      title: this.state.tempTodo.title,
      date: this.state.tempTodo.date,
      description: this.state.tempTodo.description,
    };
    const newTodos = this.state.todos;
    newTodos.push(todo);
    this.setState({ todos: newTodos });
    todoid++;

    const newTempTodo = {};
    this.setState({ tempTodo: newTempTodo });
  };

  render() {
    return (
      <div>
        <div
          className="row m-4"
          style={{ paddingLeft: "25%", paddingRight: "25%" }}
        >
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              value={this.state.tempTodo.title}
              onChange={this.onInputChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="date"
              className="form-control"
              placeholder="date"
              name="date"
              value={this.state.tempTodo.date}
              onChange={this.onInputChange}
              required
            />
          </div>
          <div style={{ paddingTop: "20px" }}>
            <textarea
              className="form-control"
              rows="8"
              placeholder="Enter Todo"
              name="description"
              value={this.state.tempTodo.description}
              onChange={this.onInputChange}
              required
            ></textarea>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "rgb(23, 102, 175)", color: "white" }}
              onClick={this.handleAddTodo}
            >
              Add todo
            </button>
          </div>
        </div>

        {/* <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "rgb(23, 102, 175)", color: "white" }}
                onClick={this.handleAddTodo}
              >
                Add todo
              </button> */}
        <div>
          {this.state.todos.map((todo) => (
            <Todobox key={todo.id} todo={todo} onDelete={this.handleDelete}>
              <h4>Todo #{todo.id}</h4>
            </Todobox>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
