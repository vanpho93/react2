import React, { Component } from 'react';

export default class WordFilter extends Component {
    render() {
        return (
            <select style={{ width: 100 }}>
                <option>Show all</option>
                <option>Show memorized</option>
                <option>Show forgot</option>
            </select>
        );
    }
}
