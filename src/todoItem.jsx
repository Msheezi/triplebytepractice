import React from 'react'

 const TodoItem = ({myLists}) => myLists.map(item => <div style={{textAlign:"center", }}>{item}</div>)
 


export default TodoItem