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
  handleChange(e) {
    this.setState({ name: e.target.value })
  }
// Still working on the create function. The input boxes are there just need to 
// just need to make it so these input boxes add a new object to the array when i click
// add recipe
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
        <div>
          <button onClick={() => this.toggleCreate() }>New Recipie</button>
          {this.state.creating ? (
            <div>
              <div>
                <span>Recipie Name</span>
                <input type="text" />
              </div> 
              <div>
                <span>Fourth ingredient</span>
                <input type="text" />
              </div>
              <div>
                <span>Second Indredient</span>
                <input type="text" />
              </div> 
              <div>
                <span>Third ingredient</span>
                <input type="text" />
              </div> 
              <div>
                <button>Add Recipe</button>
                <button onClick={() => this.toggleCreate()}>Cancel</button>
              </div>
            </div> 
            
            ) : (
              <div>not creating</div>
            )}
        </div>
        <List 
        recipeArr={this.state.recipeArr}
        />
      </div>
            
          
    );
  }
}

export default App;
