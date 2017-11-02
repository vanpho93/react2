import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reduxStore -> getState - changeState
// state
// defaultState
// action -> js object - type property -> ++ { type: 'MUA_HANG', value: 10 }
// reducer: function -> get new state from old state and action

/*

    const defaultState = { value: 100 };

    const reducer = (state = defaultState, action) => {
        if (action.type === 'INCR') return { value: state.value + 1 };
        if (action.type === 'DESC') return { value: state.value - 1 };
        return state;
    }

    const store = createStore(reducer);

*/

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// console.log(store.getState());
// store.dispatch({ type: 'INCR' })
// console.log(store.getState());

// 1. Provider
// 2. Connect
