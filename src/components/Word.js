import React from "react";
import { connect } from 'react-redux';

class Word extends React.Component {
    removeWord() {
        const { spot, dispatch } = this.props;
        dispatch({ type:'REMOVE_WORD', en: spot.en });
    }

    toggleIsMemorized() {
        const { spot, dispatch } = this.props;
        dispatch({ type:'TOGGLE_IS_MEMORIZED', en: spot.en });
    }
    render() {
        const { en, vn, isMemorized } = this.props.spot;
        const color = isMemorized ? 'green': 'red';
        return (
            <div style={{ backgroundColor: '#F5F5F5', width: 200, padding: 5, margin: 10 }}>
                <h3 style={{ color }}>{vn}</h3>
                <p>{en}</p>
                <button onClick={this.removeWord.bind(this)}>remove</button>
                <button onClick={this.toggleIsMemorized.bind(this)}>toggle</button>
            </div>
        )
    }
}

export default connect()(Word);
