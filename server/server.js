const express = require('express')
const app = express()
const PORT = 4001
const recipeCtrl = require('./recipeCtrl')

app.use(express.json())

app.get('/api/recipes', recipeCtrl.getRecipes)
app.post('/api/recipes', recipeCtrl.createRecipe)
app.delete('/api/recipes/:id', recipeCtrl.deleteRecipe)
app.put(`/api/recipes/:id`, recipeCtrl.editRecipe)

app.listen(PORT, () => console.log(`${PORT} baby weasels`))