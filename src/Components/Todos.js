import React from 'react'
import { Todo } from './Todo'

export default function Todos(props) {
    let todoStyle = {
        minHeight: "90vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={todoStyle}>
            <h4 className='text-center my-3'>My Todos List</h4>
            {props.todos.length === 0 ? "Add New Todo..." : props.todos.map((todo) => {
                return (<>
                    <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
                    <hr />
                </>);
            })}
        </div>
    )
}