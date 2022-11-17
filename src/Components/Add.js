import React, { useState } from "react";

export const Add = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submit = (e) => {
        e.preventDefault();

        if (!title) {
            alert("Title cannot be blank")
        }
        else if (!description) {
            alert("Description cannot be blank")
        }
        else if (title && description) {
            props.addTodo(title, description)
            setTitle("")
            setDescription("")
        }
    }
    let addStyle = {
        minHeight: "90vh",
        margin: "40px auto"
    }
    return (
        <div className="container my-3 align-right" style={addStyle}>
            <h3>Add new Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Todo Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
