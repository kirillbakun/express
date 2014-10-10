var Article = require('models/article').Article;

var article = new Article({
    title: "Article title",
    text: "Article text"
});

article.save(function(err, user, affected) {
    if (err) throw err;

    Article.findOne({title: "Article title"}, function(err, test) {
        console.log(test);
    });
});