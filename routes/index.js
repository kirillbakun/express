var express = require('express');
var router = express.Router();
var article_model = require('../models/article.js');

router.get('/', function(req, res, next) {
    var params = {"title": "Article title"};
    article_model.getArticleByTitle(params, articles, function(values) {
        res.render('index', {
            test: values.text
        });
    });
});

module.exports = router;