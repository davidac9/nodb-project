import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import axios from 'axios'

class App extends Component {
  constructor () {
    super() 
    this.state = {
      recipeArr: [],
      creating: false
    }

  }

  toggleCreate() {
    this.setState({ creating: !this.state.creating })
  }
// This is where I left off
// Figure out how to make the createRecipe function create input boxes and buttons to allow
// the user to add a recipe
  createRecipe(body) {
    axios.post('/api/recipe', body).then(res => {
      this.setState({recipeArr: res.data})
    })
  }

  componentDidMount() {
    axios.get('./api/recipes').then(res => {
      this.setState({recipeArr: res.data})
    })
  }
  render() {

    return (
      <div className="App">
        <Header/>
        <List 
        recipeArr={this.state.recipeArr}
        />
      </div>
    );
  }
}

export default App;
