"use strict";
function getStudentData(person) {
    const { name, age, isStudent } = person;
    return `${name} is ${age} years old and ${isStudent ? 'a student' : 'not a student'}.`;
}
const person = { name: "Alice", age: 25, isStudent: true };
console.log(getStudentData(person));
