import React from "react";
import TodoItem from "./todoItem";

const colors = {
  Winnie: "#8E6E95",
  Bob: "#39A59C",
  Thomas: "#344759",
  George: "#E8741E"
};

const initialState = {
  Winnie: ["Make decision on offers", "Call Mike back"],
  Bob: ["Pay Rent", "Call Mom", "Eat Lunch"],
  Thomas: ["Pickup Eggs", "Drop off drycleaning"],
  George: ["Make more lists", "Check things off list"]
};

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  getTodos(name) {
    let values = prompt("enter Todo"); // get a due date, check to complete
    let newTodos = this.state[name];
    console.log(newTodos);
    newTodos.push(values);
    this.setState({ [name]: newTodos });
  }

  render() {
    let todos = Object.keys(this.state).map(name => {
      return (
        <div
          style={{
            marginRight: "25px",
            width: "25%",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "3px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            paddingBottom: "30px"
          }}
        >
          <div
            style={{
              backgroundColor: `${colors[name]}`,
              color: "white",
              textAlign: "center",
              borderBottom: "1px solid black"
            }}
          >
            {name}
          </div>
          <TodoItem myLists={this.state[name]} />
          <button
            style={{
              width: "100%",
              height: "25px",
              backgroundColor: "white",
              justifySelf: "flex-end",
              // color: "white"
              borderRadius: "3px",
              position: "absolute",
              bottom: "0px",
              marginTop:"0px"
            }}
            onClick={() => this.getTodos(name)}
          >
            Add Todo
          </button>
        </div>
      );
    });

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1000px",

          textAlign: "center"
        }}
      >
        {todos}
      </div>
    );
  }
}

export default Todos;
