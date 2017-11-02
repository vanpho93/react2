import React, { Component } from 'react';
import { connect } from 'react-redux';

import Word from "./Word";
import WordForm from './WordForm';
import WordFilter from './WordFilter';

class List extends Component {
    constructor(props) {
        super(props);
        this.toggleIsShowForm = this.toggleIsShowForm.bind(this);
    }
    toggleIsShowForm() {
        this.props.dispatch({ type: 'TOGGLE_IS_SHOW_FORM' });
    }
    render() {
        const { words, isShowForm } = this.props;
        return (
            <div>
                { 
                    isShowForm ? <WordForm /> : <button onClick={this.toggleIsShowForm}>Toggle Form</button>}
                <hr />
                <WordFilter />
                { words.map(spot => <Word key={spot.en} spot={spot} />) }
            </div>
        );
    }
}

const mapState = (state) => ({ isShowForm: state.isShowForm, words: state.words })

export default connect(mapState)(List);
