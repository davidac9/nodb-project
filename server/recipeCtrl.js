const recipeList = [
    {
        id: 1,
        name: 'The Superman Super Noodle',
        ingredient1: 'lettuce',
        ingredient2: 'spaghetti noodle',
        ingredient3: 'gallon of butter',
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFIsFhJ-VLO14gWkXsRSBCZcZo35pFO3yGMmISCaJRHSci_xD`
    },
    {
        id:2,
        name: `Foxy Cranberry Crumpet`,
        ingredient1: 'cranberry',
        ingredient2: 'fox hair',
        ingredient3: 'old shoe',
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQvJJ0eUOA2YB93GztNVAwuKwG3RH6v9xPJ6lGT3jkIlmgQlysQ`
    },
    {
        id: 3,
        name: 'The New England Stretchy Pie',
        ingredient1: 'spinach',
        ingredient2: 'rubber bands',
        ingredient3: 'clam juice',
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCrEYFgu0szH4Ld-oF6zqLjvhqqL4GNolsh9ZQp6KP3OIq68I`
    }
]
let id = 4

module.exports = {
    getRecipes(req, res) {
        // if(req) {
            // res.status(200).send(recipeList.name === req)
        // } else {
        res.status(200).send(recipeList)
        // }
    },
    createRecipe(req, res) {
        recipeList.push({...req.body, id})
        id++
        res.status(200).send(recipeList)
    },
    deleteRecipe(req, res) {
        const {id} = req.params
        const index = recipeList.findIndex(recipe => (
            recipe.id === +id
        ))
        recipeList.splice(index, 1)
        res.status(200).send(recipeList)
    },
    editRecipe(req, res) {
        const {id} = req.params
        const {name} =req.body
        const {ingredient1} = req.body
        const {ingredient2} = req.body
        const {ingredient3} = req.body
        const {img} = req.body
        const index = recipeList.findIndex(recipe => (
            recipe.id === +id
        ))
        recipeList[index].name = name
        recipeList[index].ingredient1 = ingredient1
        recipeList[index].ingredient2 = ingredient2
        recipeList[index].ingredient3 = ingredient3
        recipeList[index].img = img
        res.status(200).send(recipeList)
    }
}