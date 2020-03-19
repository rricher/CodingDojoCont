import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

export default (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        Axios.get("http://localhost:8000/api/product/" + props.id)
        .then(res=>setProduct({...res.data}))
        .catch(err=>console.log(err))
    }, [])

    return(
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to={"/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}