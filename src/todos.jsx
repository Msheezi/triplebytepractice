import React from 'react'
import TodoItem from './todoItem'


const colors= {
    Winnie: "#8E6E95",
    Bob: "#39A59C",
    Thomas: "#344759",
    George: "#E8741E"
}

class Todos extends React.Component{
    constructor(props){
        super(props)

        this.state = { 

            
                 Winnie: ["test", "test2"],
                 Bob: ["test", "test2"],
                 Thomas: ["test", "test2"],
                 George: ["test", "test2"]
        
        }

this.getTodos = this.getTodos.bind(this)

    }

    getTodos(name) {
        let values = prompt("enter Todo")
        let newTodos = this.state[name]
        console.log(newTodos)
        newTodos.push(values)
        this.setState({[name]: newTodos}) 
       
    }
    
   

    render(){
        let todos = Object.keys(this.state).map(name => {
            return (
                <div style={{ margin: "25px"}} >
                    <div style={{ backgroundColor: `${colors[name]}` }}>{name}</div>
                        <TodoItem 
                            myLists={this.state[name]}/>
                            <button onClick={()=> this.getTodos(name)}>Add Todo</button>
                </div>
            )
        })
              
        return (

            <div style={{display: "flex", flexDirection:"row"}}>{todos}</div>
        )

    }

}

export default Todos