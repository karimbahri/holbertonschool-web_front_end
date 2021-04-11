'use strict';
const createClassRoom = function(numbersOfStudents) {
    const studentSeat = function(seat) {
        return function() {
            return seat;
        }
    }
    students = new Array(numbersOfStudents);
    for (let i = 0 ; i < numbersOfStudents ; i++) {
        students[i] = studentSeat(i + 1);
    }
    return (students);
}
const classRoom = createClassRoom(10);
