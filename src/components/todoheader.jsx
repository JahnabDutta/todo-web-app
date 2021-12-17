import React, { Component } from "react";
class Todo extends React.Component {
  state = {
      todos:[
      ]
  }



  render() {
    return (
      <div>
        <form>
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
              />
            </div>
            <div class="col">
              <input
                type="date"
                className="form-control"
                placeholder="date"
                name="date"
              />
            </div>
            <div style={{ paddingTop: "20px" }}>
              <textarea
                className="form-control"
                rows="8"
                name="message"
                placeholder="Enter Todo"
              ></textarea>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button
                type="submit"
                className="btn"
                style={
                  ({ backgroundColor: "rgb(23, 102, 175)", color: "white" })
                }
              >
                Add todo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Todo;
