/**
 * Created by Alejandro on 09/07/2015.
 */
module.exports = function (app) {

    return {
        index: function (req, res) {
            res.send({status: 'runing v3.0'});
        }

    }
};