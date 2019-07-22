import React, { Component } from 'react'
// keep track of how many pies you've eaten!
export default class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        
    }
    addCount() {
        this.setState({ count: (this.state.count + 1 )})
    }

    addMany() {
        this.setState({ count: (this.state.count * this.state.count)})
    }
    render() {
        return (
            <div>
                <p >I have eaten {this.state.count} pies</p>
                <button onClick={() => this.addCount()}>Eat Pie</button>
                <button onClick={() => this.addMany()}>Eat Many</button>
            </div>
        )
    }
}