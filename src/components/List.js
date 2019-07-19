import React, {Component} from 'react'
import Recipe from './Recipe'

export default class List extends Component {

    componentDidMount() {
        console.log(this.props.recipeArr)
    }

    render() {
        return(

            <div>
                <div className='recipe list'>
                    {this.props.recipeArr.map(el => (
                        <Recipe 
                        key={el.id}
                        id={el.id}
                        data={el}
                        deleteFn={this.props.deleteFn}
                        />
                    ))}
                </div>
            </div>
        )
    }
}