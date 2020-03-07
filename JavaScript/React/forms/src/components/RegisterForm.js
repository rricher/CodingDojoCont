import React, { useState } from 'react';

const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                {formState.firstName.length > 0 &&formState.firstName.length < 2 && <p>First name should be at least 2 characters</p> }
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                {formState.lastName.length > 0 &&formState.lastName.length < 2 && <p>Last name should be at least 2 characters</p> }
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {formState.email.length > 0 &&formState.email.length < 2 && <p>Email should be at least 2 characters</p> }
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                {formState.password.length > 0 &&formState.password.length < 8 && <p>Password should be at least 8 characters</p> }
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                {formState.confirmPassword.length > 0 && formState.confirmPassword != formState.password && <p>Passwords must match</p> }
                <br/>   
                <input type="submit" />
            </form>
            <div>
                <p>First Name: {formState.firstName}</p>
                <p>Last Name: {formState.lastName}</p>
                <p>Email: {formState.email}</p>
                <p>Password: {formState.password}</p>
                <p>Confirm Password: {formState.confirmPassword}</p>
            </div>
        </div>
    );
}

export default RegisterForm;