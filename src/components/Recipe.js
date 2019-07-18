import React, { Component } from 'react'

export default class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.data.name,
            editing: false
        }
    }
    componentDidMount() {
        // console.log('hello')
    }
    render() {
        return (
            <div>
                <h3>{this.props.data.name}</h3>
                <img src={this.props.data.img} alt="" />
                <h4>Ingredients</h4>
                <div className="ingredients">
                <span>1. {this.props.data.ingredient1} </span>
                <span>2. {this.props.data.ingredient2} </span>
                <span>3. {this.props.data.ingredient3} </span>
                </div>

            </div>
        )
    }
}