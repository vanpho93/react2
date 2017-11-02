import { createStore } from 'redux';

const defaultState = {
    words: [
        { en: 'one', vn: 'mot', isMemorized: true },
        { en: 'two', vn: 'hai', isMemorized: false  }, 
        { en: 'three', vn: 'ba', isMemorized: true  }
    ],
    isShowForm: false,
    filterStatus: 'SHOW_ALL' // 'SHOW_MEMRIZED' , 'SHOW_FORGOT'
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'TOGGLE_IS_SHOW_FORM') return { ...state, isShowForm: !state.isShowForm };
    if (action.type === 'ADD_WORD') return { ...state, words: state.words.concat(action.word) };
    if (action.type === 'REMOVE_WORD') return { ...state, words: state.words.filter(word => word.en !== action.en) }
    if (action.type === 'TOGGLE_IS_MEMORIZED') {
        return { 
            ...state, 
            words: state.words.map(word => {
                if (word.en !== action.en) return word;
                return { ...word, isMemorized: !word.isMemorized }
            }) 
        };
    }
    return state;
};

const store = createStore(reducer);
export default store;
