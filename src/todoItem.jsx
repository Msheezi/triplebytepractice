import React from 'react'


export const TodoList = ({todoList}) => {
    let lists = todoList.map(todo => {
    return <div>{todo}</div>
    })



    return (
    <div>{lists}</div>

    )
}