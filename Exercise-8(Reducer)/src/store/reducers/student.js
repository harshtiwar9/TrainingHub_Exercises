

const defaultStudent = {
    attendance : 0,
    studentDetails: []
}



// const defaultStudent = {
//     attendance : 0,
//     studentDetails: [
//         { "studentName": "Harsh", "attendance": 0 },
//         { "studentName": "Brijesh", "attendance": 0 },
//         { "studentName": "Akshay", "attendance": 0 },
//         { "studentName": "Mukesh", "attendance": 0 },
//         { "studentName": "Rahul", "attendance": 0 }
//     ]
// }


export default function updateInvrentoryList(state = defaultStudent, action) {  //Parameter : state 10, action 3

    let newState = Object.assign({}, state  );
    let studentDetails = [ ... state.studentDetails];


    switch (action.type) {
        case "addAttendance":
            studentDetails.forEach(element => {
                if (element.studentName === action.data.studentName) element.attendance += action.data.pointsToIncrement;
            });
            break;
        case "subAttendance": studentDetails.forEach(element => {
            if (element.studentName === action.data.studentName) element.attendance -= action.data.pointsToDecrement;
        });
            break;
        case "initialise" : newState.studentDetails = [ ...action.data]
        break;
        default: break;
    }
    console.log(" In reducer" , studentDetails)
    return newState;
}