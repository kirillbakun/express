var express = require('express');
var router = express.Router();
var article_model = require('../models/article.js');

router.get('/', function(req, res, next) {
    var params = {"title": "Article title"};
    article_model.getArticleByTitle(params, function(values) {
        renderIndex(res, values)
    });
});

function renderIndex(res, values) {
    res.locals = {
        "test": values.text
    };
    res.render('index');
}

module.exports = router;