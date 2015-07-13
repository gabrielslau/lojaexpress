module.exports = function (app) {
    var home = app.loja.controllers.home;
    var product = app.loja.controllers.product;
    var cart = app.loja.controllers.cart;

    app.get('/', home.index);

    app.post('/cart', cart.create_cart);

    app.post('/product', product.add);
};
