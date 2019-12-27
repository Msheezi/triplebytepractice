import React from "react";


const TodoItem = ({ myLists }) =>
  myLists.map(item => (
    <div style={{ borderBottom: "1px solid black" }}>{item}</div>
  ));

export default TodoItem;

