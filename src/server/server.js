var express = require('express');
var app = express();

var recipes = require('./potato_recipes.json');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/potato', function (req, resp) {
  const search = req.query.search;
  let results = [];

  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    if (recipe.title.includes(search)) {
      results.push(recipe.href);
    }
  }
  resp.send(results);
});

app.post('/new', function (req, resp) {
  console.log('Got request');
  console.log(req.body);
  const title = req.body.title;
  const href = req.body.href;
  const ingredients = req.body.ingredients;
  const thumbnail = req.body.thumbnail;

  const recipe = { 'title': title,
                  'href': href,
                  'ingredients': ingredients,
                  'thumnail': thumbnail };

  recipes.push(recipe);
  resp.send('Thanks for the recipe');
});

app.listen(8090);
