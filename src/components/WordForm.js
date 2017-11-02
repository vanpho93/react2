import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
    }

    addWord() {
        const { txtEn, txtVn } = this.state;
        const word = { en: txtEn, vn: txtVn, isMemorized: false };
        this.props.dispatch({ type: 'ADD_WORD', word: word });
        this.props.dispatch({ type: 'TOGGLE_IS_SHOW_FORM' });
    }

    cancelForm() {
        this.props.dispatch({ type: 'TOGGLE_IS_SHOW_FORM' });
    }

    render() {
        const { txtEn, txtVn } = this.state;
        return (
            <div>
                <input 
                    onChange={event => this.setState({ txtEn: event.target.value })}
                    value={txtEn} 
                    placeholder="English" 
                />
                <br /><br />
                <input 
                    onChange={event => this.setState({ txtVn: event.target.value })}
                    value={txtVn} 
                    placeholder="Vietnamese" 
                />
                <br /><br />
                <button onClick={this.addWord}>Add new word</button>
                <button onClick={this.cancelForm}>Cancel</button>
            </div>
        );
    }
}

export default connect()(WordForm);
