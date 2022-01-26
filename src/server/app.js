const express = require('express')
const app = express()

const about = require('./about.json')
const recipes = require('./recipes.json')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('client'))

app.get('/style.css', function (res, resp) {
  resp.sendFile('client/style.css', { root: __dirname })
})

app.get('/about', function (res, resp) {
  resp.send(about.about)
})
app.get('/latest/summary', function (req, resp) {
  let recipe = ''
  recipe = recipes[0]
  resp.send(recipe.desc)
})
app.get('/latest/title', function (req, resp) {
  let recipe = ''
  recipe = recipes[0]
  resp.send(recipe.title)
})
app.get('/latest/pic', function (req, resp) {
  let recipe = ''
  recipe = recipes[0]
  resp.send(recipe.pic)
})
app.get('/featured_O/title', function (req, resp) {
  let recipe = ''
  recipe = recipes[1]
  resp.send(recipe.title)
})
app.get('/featured_O/date', function (req, resp) {
  let recipe = ''
  recipe = recipes[1]
  resp.send(recipe.date)
})
app.get('/featured_O/summary', function (req, resp) {
  let recipe = ''
  recipe = recipes[1]
  resp.send(recipe.desc)
})
app.get('/featured_O/ingr', function (req, resp) {
  let recipe = ''
  recipe = recipes[1]
  resp.send(recipe.ingr)
})
app.get('/featured_O/pic', function (req, resp) {
  let recipe = ''
  recipe = recipes[1]
  resp.send(recipe.pic)
})

app.get('/featured_EU/title', function (req, resp) {
  let recipe = ''
  recipe = recipes[2]
  resp.send(recipe.title)
})
app.get('/featured_EU/date', function (req, resp) {
  let recipe = ''
  recipe = recipes[2]
  resp.send(recipe.date)
})
app.get('/featured_EU/summary', function (req, resp) {
  let recipe = ''
  recipe = recipes[2]
  resp.send(recipe.desc)
})
app.get('/featured_EU/ingr', function (req, resp) {
  let recipe = ''
  recipe = recipes[2]
  resp.send(recipe.ingr)
})
app.get('/featured_EU/pic', function (req, resp) {
  let recipe = ''
  recipe = recipes[2]
  resp.send(recipe.pic)
})
app.get('/blog3/title', function (req, resp) {
  let recipe = ''
  recipe = recipes[3]
  resp.send(recipe.title)
})
app.get('/blog3/date', function (req, resp) {
  let recipe = ''
  recipe = recipes[3]
  resp.send(recipe.date)
})
app.get('/blog3/summary', function (req, resp) {
  let recipe = ''
  recipe = recipes[3]
  resp.send(recipe.desc)
})
app.get('/blog3/ingr', function (req, resp) {
  let recipe = ''
  recipe = recipes[3]
  resp.send(recipe.ingr)
})
app.get('/blog3/pic', function (req, resp) {
  let recipe = ''
  recipe = recipes[3]
  resp.send(recipe.pic)
})
app.get('/blog4/title', function (req, resp) {
  let recipe = ''
  recipe = recipes[4]
  resp.send(recipe.title)
})
app.get('/blog4/date', function (req, resp) {
  let recipe = ''
  recipe = recipes[4]
  resp.send(recipe.date)
})
app.get('/blog4/summary', function (req, resp) {
  let recipe = ''
  recipe = recipes[4]
  resp.send(recipe.desc)
})
app.get('/blog4/ingr', function (req, resp) {
  let recipe = ''
  recipe = recipes[4]
  resp.send(recipe.ingr)
})
app.get('/blog4/pic', function (req, resp) {
  let recipe = ''
  recipe = recipes[4]
  resp.send(recipe.pic)
})
app.get('/recipe/search', function (req, resp) {
  const q = req.query.searchTitle
  const results = []

  for (const recipe of recipes) {
    if (recipe.title.includes(q)) {
      results.push(recipe)
    }
  }

  resp.send(results)
})

app.get('/login', function (req, resp) {
  resp.sendFile('client/login.html', { root: __dirname })
})

app.get('/admin', function (req, resp) {
  resp.sendFile('client/admin.html', { root: __dirname })
})

app.post('/admin', function (res, resp) {
  resp.sendFile('client/admin.html', { root: __dirname })
})

app.post('/updated', function (req, resp) {
  const newRecipe = req.body

  recipes.push(newRecipe)
  console.log(newRecipe)
  resp.send('Recipes updated')
})

module.exports = app
