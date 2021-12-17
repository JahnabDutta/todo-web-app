import React, { Component } from "react";
class Todobox extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#ccffff",
            marginTop: "5%",
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "1%",
            padding: "1% 1%",
          }}
        >
          <div className="row">
            <div className="col">{this.props.todo.title}</div>
            <div className="col">{this.props.todo.date}</div>
          </div>
          <div style={{ backgroundColor: "#66ffff" }}>
            <p>{this.props.todo.description}</p>
          </div>
        </div>
        <button
          type="button"
          style={{
            marginTop: "0.5%",
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "1%",
          }}
          className="btn btn-danger"
          onClick={() => {this.props.onDelete(this.props.todo.id)}}
        >
          Delete Todo
        </button>
      </div>
    );
  }
}

export default Todobox;
