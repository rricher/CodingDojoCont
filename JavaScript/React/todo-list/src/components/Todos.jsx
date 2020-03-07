import React, { useState } from 'react'

const Todos = () => {

    const [state, setState ] = useState({
        todoList: [],
    });

    const [formState, SetFormState] = useState({
        todo: ""
    });

    const onDelete = (e, i) => {
        console.log(i);
        let todoList = state.todoList.filter((val, index) => !(index == i));
        console.log(todoList);
        setState({
            todoList: todoList
        })
    }

    const onChangeHandler = (e) => {
        SetFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setState({
            todoList: [
                ...state.todoList,
                formState.todo
            ]
        })
        SetFormState({
            todo: ""
        })
        e.target.reset();
    }

    let styling = {
    display: "inline-block",
    };

    return (
        <div>
            <table style={styling}>
                <tbody>
                    {state.todoList.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item}</td>
                                <td><input type="checkbox" /></td>
                                <td><button onClick={(e) => onDelete(e, index)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <form onSubmit={e => onSubmitHandler(e)}>
                    <input type="text" onChange={onChangeHandler} id="todo" name="todo"/>
                    <br/>
                    <input style={{marginTop: "5px"}} type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Todos
