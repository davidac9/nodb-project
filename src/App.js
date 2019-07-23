import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Count from './components/Count'
import axios from 'axios'

class App extends Component {
  constructor () {
    super() 
    this.state = {
      recipeArr: [],
      creating: false,
      newName: "",
      newIngredient1: "",
      newIngredient2: "",
      newIngredient3: "",
      newImg: ""
    }
    this.deleteRecipe = this.deleteRecipe.bind(this)
    this.editRecipe = this.editRecipe.bind(this)

  }

  toggleCreate() {
    this.setState({ creating: !this.state.creating })
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value })
  }
  handleChangeIng1(e) {
    this.setState({ newIngredient1: e.target.value })
  }
  handleChangeIng2(e) {
    this.setState({ newIngredient2: e.target.value })
  }
  handleChangeIng3(e) {
    this.setState({ newIngredient3: e.target.value })
  }
  handleChangeImg(e) {
    this.setState({ newImg: e.target.value })
  }
  createRecipe() {
    const body = {
      name: this.state.name,
      ingredient1: this.state.newIngredient1,
      ingredient2: this.state.newIngredient2,
      ingredient3: this.state.newIngredient3,
      img: this.state.newImg
    }
    axios.post('/api/recipes', body).then(res => {
      this.setState({recipeArr: res.data})
    })
    this.toggleCreate()
  }
  
  deleteRecipe(id) {
    axios.delete(`/api/recipes/${id}`).then(res => {
      this.setState({recipeArr: res.data})
    }).catch( () => console.log('pies not found'))
  }

  editRecipe(id, body) {
    axios.put(`/api/recipes/${id}`, body).then(res => {
      this.setState({recipeArr: res.data})
    })
    .catch( () => console.log('pies not found'))
  }

  componentDidMount() {
    console.log(this.state.recipeArr.length)
    axios.get('./api/recipes').then(res => {
      this.setState({recipeArr: res.data})
        })
        .catch( () => console.log('pies not found'))
  }
  render() {
    let { creating } = this.state
    return (
      <div className="App">
        <Header/>
        <div className="New">

          <div >
            <button onClick={() => this.toggleCreate() }>New Recipie</button>
          </div>
          {creating ? (
            <div className="New">
              <div>
                <span>Recipie Name</span>
                <input type="text" onChange={e => this.handleChangeName(e)} />
              </div> 
              <div>
                <span>First ingredient</span>
                <input type="text" onChange={e => this.handleChangeIng1(e)} />
              </div>
              <div>
                <span>Second Indredient</span>
                <input type="text" onChange={e => this.handleChangeIng2(e)} />
              </div> 
              <div>
                <span>Third ingredient</span>
                <input type="text" onChange={e => this.handleChangeIng3(e)} />
              </div> 
              <div>
                <span>Image url</span>
                <input type="text" onChange={e => this.handleChangeImg(e)} />
              </div>
              <div>
                <button onClick={() => this.createRecipe(this.state.name)}>Add Recipe</button>
                <button onClick={() => this.toggleCreate()}>Cancel</button>
              </div>
            </div> 
            
            ) : (
              <div></div>
            )}
        </div>
        <List 
        recipeArr={this.state.recipeArr}
        deleteFn={this.deleteRecipe}
        editFn={this.editRecipe}
        />
        <footer>
          <Count/>
          <Header/>
        </footer>
      </div>
            
          
    );
  }
}

export default App;
