const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    //returns all Product with getAll Method
    app.get('/api/product', ProductController.getAll);

    //return one Product with getOne Method
    app.get('/api/product/:id', ProductController.getOne);

    //creates a new Product with create Method
    app.post('/api/product/create', ProductController.create);

    //updates a Product based on id with Update Method
    app.put("/api/product/update/:id", ProductController.update);

    //deletes a Product based on id with Delete Method
    app.delete("/api/product/delete/:id", ProductController.delete);
}