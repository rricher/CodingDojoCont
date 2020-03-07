// 1.
console.log("1.");

console.log(hello);
var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello);
// hello = 'world';
//  Predicted output: undefined;
// Actual output: undefined

//2.
console.log("2.");

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle;
// needle = 'haystack';
// test();
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// Predicted output: 'magnet'
// Actual output: 'magnet'

// 3.
console.log("3.");

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan;
// brendan = 'super cool';
// console.log(brendan);
// Predicted output: 'super cool'
// Actual output: 'super cool'

// 4.
console.log("4.");

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food;
// food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// Predicted output: 'chicken', 'half-chicken'
// Actual output: 'chicken', 'half-chicken'

// 5.
console.log("5.");

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean;
// mean();
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
// console.log(food);
// Predicted output: "chicken", "fish", undefined, undefined
// Actual output: mean is not a function

// 6.
console.log("6.");

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log('genre');
// genre = 'disco';
// rewind();
// function rewind() {
//     var genre;
//     genre = 'rock';
//     console.log(genre);
//     genre = 'r&b';
//     console.log(genre);
// }
// console.log(genre);
// Predicted output: undefined, 'rock', 'r&b", 'disco'
// Actual output: undefined, 'rock', 'r&b", 'disco'

// 7.
console.log("7.");

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// dojo = 'san jose'; // no var decleration?
// console.log(dojo); // error?
// learn();
// function learn() {
//     var dojo;
//     dojo = "seatle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo); // still not declared
// Predcted output: error
// Actual output: 'san jose', 'seattle', 'burbank', 'san jose'

// 8.
console.log("8.");

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// Predicted output: {'name': 'Chicago', 'students': 65, 'hiring': true}, error: const cant be reassigned
// Actual output: {'name': 'Chicago', 'students': 65, 'hiring': true}, error: const cant be reassigned