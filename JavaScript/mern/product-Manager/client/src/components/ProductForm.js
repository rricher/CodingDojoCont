import React, { useState } from 'react';

import axios from 'axios';

export default props => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState(0.0);
    const [ desc, setDesc ] = useState("");

const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/new', {
        title,
        price,
        desc
    })
    .then(res=>console.log("response", res))
    .catch(err=>console.log("error", err))
}

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title </label>
                <input type="text" onChange={e=>setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price </label>
                <input type="text" onChange={e=>setPrice(parseFloat(e.target.value))} />
            </p>
            <p>
                <label>Description </label>
                <input type="text" onChange={e=>setDesc(e.target.value)} />
            </p>
            <input type="submit" value="submit" />
        </form>
    )
}