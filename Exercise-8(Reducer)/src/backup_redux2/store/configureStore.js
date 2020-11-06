import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import logger from 'redux-logger'


const defaultStudent = {
    attendance : 0

}


function updateInvrentoryList(state = defaultStudent, action){  //Parameter : state 10, action 3

    let students = Object.assign({}, state);


    switch(action.type){
        case "addAttendance" : students.attendance += action.data  ; break;
        case "subAttendance" : students.attendance-- ; break;
        default :  break;
    }
    console.log(' Reducer  ',state);

    return students;
}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(updateInvrentoryList, 
    composeEnhancer(applyMiddleware(thunk,logger)));
    


export default store;








































// ,
    //         /* preloadedState, */
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));