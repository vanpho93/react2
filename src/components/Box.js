import React, { Component } from 'react';

class CounterController extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#A293BD', padding: 10 }}>
                <h4>Child Button</h4>
                <button onClick={this.props.addChild}>Increase</button>
                <button onClick={this.props.minusChild}>Decrease</button>
            </div>
        )
    }
}

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 10
        }
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
    }

    addOne() {
        this.setState(prevState => ({value: prevState.value + 1}))
    }

    minusOne() {
        this.setState(prevState => ({value: prevState.value - 1}))
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <h3>{value}</h3>
                <div style={{ backgroundColor: '#ADCEB3', padding: 10 }}>
                    <h4>Parent Button</h4>
                    <button onClick={this.addOne}>Increase</button>
                    <button onClick={this.minusOne}>Decrease</button>
                </div>
                <CounterController 
                   addChild={this.addOne}
                   minusChild={this.minusOne}
                />
            </div>
        );
    }
}
