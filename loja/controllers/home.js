/**
 * Created by Alejandro on 09/07/2015.
 */
module.exports = function (app) {
    return {
        index: function (req, res) {
            res.send({status: 'runing'});
        },
        create_cart: function (req, res) {
            res.send({
                status: 'success',
                cart: {
                    _id: '1'
                }
            });
        }
    }
};