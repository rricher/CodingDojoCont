import React, { useEffect, useState } from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err=>console.log(err))
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return(
        <div>
        <ProductForm/>
        <hr/>
        {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}