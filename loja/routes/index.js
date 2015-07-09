module.exports = function (app) {
    var home = app.loja.controllers.home;
    var product = app.loja.controllers.product;
    app.get('/', home.index);

    app.post('/cart', home.create_cart);

    app.post('/product', product.add);
};
