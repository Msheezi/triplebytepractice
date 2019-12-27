import React from 'react'
import {TodoList} from './todoItem'


const colors= {
    Winnie: "#8E6E95",
    Bob: "#39A59C",
    Thomas: "#344759",
    George: "#E8741E"
}

const initialState = {
    Winnie: ["Make decision on offers", "Call Mike back"],
    Bob: ["Pay Rent", "Call Mom", "Eat Lunch"],
    Thomas: ["Pickup Eggs", "Drop off drycleaning"],
    George: ["Make more lists", "Check things off list"]
}

class Todos extends React.Component{
    constructor(props){
        super(props)

        this.state = initialState

    }

    addTodo(name){
        let newTodo = prompt("Enter Your New Item")
        let newList = this.state[name]
        newList.push(newTodo)
        this.setState({[name]: newList})
    }


    render() {

        let todos = Object.keys(this.state).map(name=> {
            return (
                <div style={{marginLeft: "25px", textAlign: "center"}}>

                     <div style={{backgroundColor: `${colors[name]}`}}>{name}</div>
                     <TodoList 
                        todoList={this.state[name]}/>
                        <button style={{width: "100%"}}onClick={()=> this.addTodo(name)}>Add Item</button>
                </div>
            )
        })
        return (

        <div style={{display: "flex"}}>{todos}</div>
        )
        


    }
}





export default Todos