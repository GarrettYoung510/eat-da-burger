const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColsVals, condition, cb) {
        orm.selectAll("burgers", objColsVals, condition, function(res){
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.selectAll("burgers", condition, function(res) {
            cb(res);
        });
    },
}

module.exports = burger;