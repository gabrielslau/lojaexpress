/**
 * Created by Alejandro on 09/07/2015.
 */
module.exports = function (app) {
    var mProduct = app.loja.models.product;
    return {
        add: function (req, res) {
            var body = req.body;
            mProduct.create(body, function (err, prod) {
                if (err){
                    res.status(400);
                    res.send({status: 'error', message: 'invalid data'});
                }
                else res.send({status: 'success', product: prod})
            });
        }
    }
};