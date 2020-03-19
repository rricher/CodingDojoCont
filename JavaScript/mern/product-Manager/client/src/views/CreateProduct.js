import React, { useEffect, useState } from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    }, [])

    return(
        <div>
        <ProductForm/>
        <ProductList products={products}/>
        </div>
    )
}