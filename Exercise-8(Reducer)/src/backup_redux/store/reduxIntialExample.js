const {createStore} = require('redux');


let initialObject = {
    attendance : 0
}

// reducers
function addAttendance (state , action){
    state = state || initialObject;
    return Object.assign({}, state , { attendance : 2 } );

}


var store = createStore(addAttendance);


store.subscribe( function (){
    console.log( store.getState());
})

store.dispatch({type : ""})