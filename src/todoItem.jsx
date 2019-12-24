import React from 'react'

 const TodoItem = ({myLists}) =>{
    
    let itemList = myLists.map(item => {
        return (
            <div>{item}</div>
        )
    })

    
    return(
    <div>{itemList}</div>
    )

}

export default TodoItem