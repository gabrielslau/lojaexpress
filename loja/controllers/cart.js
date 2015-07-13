/**
 * Created by Gabriel on 13/07/2015.
 */

module.exports = function(app) {
    Cart = app.loja.models.cart;

    return {
        create_cart: function (req, res) {

            Cart.create(req.body, function (err, cart) {
                if (!err) {
                    res.send({
                        status: 'success',
                        cart: cart
                    });

                } else {
                    res.status(400);
                    res.send({message: 'invalid data'})
                }
            });
        }
    }
}