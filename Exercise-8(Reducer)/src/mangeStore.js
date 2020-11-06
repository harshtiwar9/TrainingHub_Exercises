const { createStore } = require("redux");

const defaultStudent = {
    attendance : 0
}


function updateInvrentoryList(state = defaultStudent, action){  //Parameter : state 10, action 3

    let students = Object.assign({}, state);


    switch(action.type){
        case "addAttendance" : students.attendance++ ; break;
        case "subAttendance" : students.attendance-- ; break;
        default :  break;
    }
    // console.log(' Reducer  ',state);

    return students;
}

var store = createStore(updateInvrentoryList);  // Parameter : reducer function
/// state
// expose 4 different fucntion


// ---------------------------------------------------

const display = () => { 
    console.log(' Subscribe ',store.getState());
}

store.subscribe(display);



//----------------------------
store.dispatch({ type : 'addAttendance'}) // parameter - action
store.dispatch({ type : 'subAttendance'}) 
// store.dispatch({ type : 'somethingelse'}) 


// Action is a object , minimum type , data