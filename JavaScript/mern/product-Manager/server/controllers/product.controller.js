const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.getAllProducts = ( request, response ) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.createProduct = ( request, response ) => {
    const { title, price, desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.getOne = ( request, response ) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateProduct = ( request, response ) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = ( request, response ) => {
    Product.deleteOne({_id: request.params.id})
        .then(conf => response.json(conf))
        .catch(err => response.json(err))
}