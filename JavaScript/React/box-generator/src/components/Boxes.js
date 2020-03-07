import React, { useState } from 'react';

const Boxes = props => {
    const [state, setState] = useState({
        boxes: []
    });

    const [ formState, setFormState ] = useState({
        color: '',
    })

    const onChangeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        document.getElementById("textbox").value = ''
        setState({
            ...state,
            boxes: [
                ...state.boxes,
                {
                    background: formState.color,
                    width: '100px',
                    height: '100px',
                    display: 'inline-block'
                }
            ]
        });
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Color</label>
                <input id="textbox" type="text" name="color" onChange={onChangeHandler}/>
                <input type="submit" value="Add"/>
            </form>
            {state.boxes.map((item, i) =>
                <div key={i} style={item}></div>
            )}
        </div>
    );
}

export default Boxes;