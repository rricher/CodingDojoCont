import React from 'react';

export default props => {
    return(
        <div>
            {props.products.map((product, index) => {
                return(<p key={index}>{product.title}, {product.price}, {product.desc}</p>)
            })}
        </div>
    )
}