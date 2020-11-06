import { createStore } from 'redux';

import updateInvrentoryList from './reducers/student'

var store = createStore(updateInvrentoryList, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;








































// ,
    //         /* preloadedState, */
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));