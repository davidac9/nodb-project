import React, { Component } from 'react'

export default class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.data.name,
            ingredient1: this.props.data.ingredient1,
            ingredient2: this.props.data.ingredient2,
            ingredient3: this.props.data.ingredient3,
            img: this.props.data.img,
            editing: false
        }
    }

    toggleEdit() {
        this.setState({ editing: !this.state.editing})
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value })
    }
    handleChangeIngredient1(e) {
        this.setState({ ingredient1: e.target.value})
    }
    handleChangeIngredient2(e) {
        this.setState({ ingredient2: e.target.value})
    }
    handleChangeIngredient3(e) {
        this.setState({ ingredient3: e.target.value})
    }
    handleChangeImg(e) {
        this.setState({ img: e.target.value})
    }
    edit() {
        this.props.editFn(this.props.data.id, {
            name: this.state.name,
            ingredient1: this.state.ingredient1,
            ingredient2: this.state.ingredient2,
            ingredient3: this.state.ingredient3,
            img: this.state.img
        })
        this.toggleEdit()
    }

    render() {
        let { editing } = this.state
        return (
            <div className="recipe-holder">
                    <h3>{this.props.data.name}</h3>
                    {/* <img src={this.props.data.img} alt="" /> */}
                {editing ? (
                    <div>
                        <div>
                            <span>Recipie Name</span>
                            <input type="text" value={this.state.name} onChange={ e => this.handleChangeName(e)}/>
                        </div>
                        <div>
                            <span>First Ingredient</span>
                            <input type="text" value={this.state.ingredient1} onChange={ e => this.handleChangeIngredient1(e)}/>
                        </div>
                        <div>
                            <span>Second Ingredient</span>
                            <input type="text" value={this.state.ingredient2} onChange={ e => this.handleChangeIngredient2(e)}/>
                        </div>
                        <div>
                            <span>Third Ingredient</span>
                            <input type="text" value={this.state.ingredient3} onChange={ e => this.handleChangeIngredient3(e)}/>
                        </div>
                        <div>
                            <span>Image url</span>
                            <input type="text" value={this.state.img} onChange={ e => this.handleChangeImg(e)}/>
                        </div>
                        <div>
                            <button onClick={() => this.edit()}>Confirm</button>
                        </div>
                        <div>
                            <button onClick={() => this.toggleEdit()}> Cancel Update</button>
                            <button onClick={() => this.props.deleteFn(this.props.id)}>
                        Remove
                    </button>
                        </div>
                    </div>

                    ) : (

                    <div>
                        <div className="recipe">
                        <img src={this.props.data.img} alt="" />
                        <div>
                        <h4>Ingredients</h4>
                            <div className="ingredients">
                                <span>1. {this.props.data.ingredient1} </span>
                                <span>2. {this.props.data.ingredient2} </span>
                                <span>3. {this.props.data.ingredient3} </span>
                            </div>
                            <div className="buttons">
                                <div>
                                    <button onClick={() => this.toggleEdit()}>Update</button>
                                </div>
                                <div><button onClick={() => this.props.deleteFn(this.props.id)}>
                                Remove
                                </button></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                )}
                    
                    

            </div>
        )
    }
}