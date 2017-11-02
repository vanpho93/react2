import React, { Component } from 'react';
import {connect} from "react-redux";
import CounterController from "./CounterController";


class Box extends Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
    }

    addOne() {
        this.props.dispatch({type: "INCR"})
    }

    minusOne() {
        this.props.dispatch({type: "DESC"})
    }

    render() {
        return (
            <div>
                <h3>{this.props.value}</h3>
                <div style={{ backgroundColor: '#ADCEB3', padding: 10 }}>
                    <h4>Parent Button</h4>
                    <button onClick={this.addOne}>Increase</button>
                    <button onClick={this.minusOne}>Decrease</button>
                </div>
                <CounterController />
            </div>
        );
    }
}

const mapState = (state) => ({value: state.value})

export default connect(mapState)(Box);
