import   { ACTION_TYPE } from './action_type'

export function incrementPoint (data) {
    return {
        type : 'addAttendance' ,
        data: data
    }
}

export function decrementPoint (data) {
    return {
        type : 'subAttendance', 
        data: data
    }
}

export function setStudentData (data) {
    return {
        type : 'initialise', 
        data: data
    }
}