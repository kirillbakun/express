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

var Article = mongoose.model('Article', schema);
var getArticleByTitle = function(params, results, callback) {
    var query = Article.findOne({"title": params.title});
    query.select('title text');

    query.exec(function(error, article_data) {
        callback(article_data);
    });
};

exports.Article = Article;
exports.getArticleByTitle = getArticleByTitle;
