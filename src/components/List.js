import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { en: 'one', vn: 'mot' },
                { en: 'two', vn: 'hai' }, 
                { en: 'three', vn: 'ba' },
            ],
            txtEn: '',
            txtVn: ''
        }
        this.onAddWord = this.onAddWord.bind(this);
        this.removeWord = this.removeWord.bind(this);
    }

    onAddWord() {
        const { txtEn, txtVn } = this.state;
        this.setState(prevState => ({
            words: prevState.words.concat({ en: txtEn, vn: txtVn }),
            txtEn: '',
            txtVn: ''
        }));
    }

    removeWord(en) {
        this.setState(prevState => {
            const newWords = prevState.words.filter(word => word.en !== en);
            return { words: newWords };
        });
    }

    render() {
        const { words, txtVn, txtEn } = this.state;
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
                <button onClick={this.onAddWord}>Add new word</button>
            {
                words.map(e =>
                    <div key={e.en}>
                        <p>{e.en}</p>
                        <h3>{e.vn}</h3>
                        <button onClick={() => this.removeWord(e.en)}>remove</button>
                    </div>
                )
            }
            </div>
        );
    }
}

export default List;
