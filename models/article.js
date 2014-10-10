var mongoose = require('libraries/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String
    }
});

exports.Article = mongoose.model('Article', schema);