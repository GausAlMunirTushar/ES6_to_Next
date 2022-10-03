// tree dots // Spread Operator;
/* let poorCountry = ["India", "Pakistan", "Bangladesh", "Nepal", "Bhutan", "Sri Lanka"];
let richCountry = [...poorCountry,"USA", "Canada", "Australia", "New Zealand", "Singapore", "Hong Kong"];
console.log(richCountry); */
let poorCountry = ["India", "Pakistan", "Bangladesh", "Nepal", "Bhutan", "Sri Lanka"];
let richCountry = [...poorCountry , "USA", "Canada", "Australia", "New Zealand", "Singapore", "Hong Kong"];
// console.log(richCountry);

// without spread operator
let oldStudent = ["Tushar", "Rahul", "Raj", "Rohan", "Ravi"];
let newStudent = ["Rahul", "Raj", "Rohan", "Ravi", "Rajesh"];
newStudent.push(oldStudent);
console.log(newStudent);