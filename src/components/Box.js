import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2
        }
        this.addOne = this.addOne.bind(this);
    }

    addOne() {
        this.setState((prevState) => ({value: prevState.value + 1}))
    }

    render() {
        // let style = {color: "green"};
        // if (this.state.value % 2 === 0){
        //     style = {color: "red"}
        // } 
        // let style = this.state.value % 2 === 0 ? {color: "red"} : { color: 'green' };
        const color = this.state.value % 2 === 0 ? 'red' : 'green';
        return (
            <div>
                <h3 style={{ color }}>{this.state.value}</h3>
                <button onClick={this.addOne}>Increase</button>
            </div>
        );
    }
}

const arr1 = [1, 4, 5, 3, 5];

console.log(arr1.map(num => num * num))

