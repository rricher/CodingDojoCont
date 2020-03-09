import React, { useContext, useState } from 'react'
import MyContext from '../context/MyContext';
const FormWrapper = () => {

    const context = useContext(MyContext);
    const [formState, setFormState] = useState({
        name: ''
    });

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        context.setVal({
            name: formState.name
        })
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Your Name: </label>
                    <input type="text" name="name" onChange={onChangeHandler}/>
                
            </form>
        </div>
    )
}

export default FormWrapper
