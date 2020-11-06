import { createStore } from 'redux';

let initialObject = {
    attendance : 0
}

// reducers
function addAttendance (state , action){
    state = state || initialObject;
    let newattendane = state.attendance + 1;
    return Object.assign({}, state , { attendance : newattendane } );

}


var store = createStore(addAttendance, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;