import React from "react";
import {connect} from "react-redux";

class CounterController extends React.Component {

    addOne() {
        this.props.dispatch({type: "INCR"})
    }

    minusOne() {
        this.props.dispatch({type: "DESC"})
    }

    render() {
        return (
            <div style={{ backgroundColor: '#A293BD', padding: 10 }}>
                <h4>Child Button</h4>
                <button onClick={this.addOne.bind(this)}>Increase</button>
                <button onClick={this.minusOne.bind(this)}>Decrease</button>
            </div>
        )
    }
}

export default connect()(CounterController);
